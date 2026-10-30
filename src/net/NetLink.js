import { makeRoomCode, peerIdFor, isValidCode, NET_VERSION, PING_INTERVAL, LINK_TIMEOUT } from './protocol.js';

/**
 * NetLink — sambungan 2 perangkat lewat WebRTC (pustaka PeerJS).
 *
 * Server PeerJS hanya dipakai untuk "saling menemukan" (sinyal). Setelah tersambung, data balapan
 * dikirim langsung antar-perangkat (peer-to-peer). Bila jaringan memblokir koneksi langsung,
 * PeerJS memakai server relay (TURN) bawaannya.
 *
 * Untuk pengujian/LAN bisa memakai server PeerJS sendiri lewat parameter URL:
 *   ?peer=192.168.1.10:9000&peerSecure=0&peerPath=/&ice=none&netTimeout=15
 *
 * Event: 'status' (teks), 'ready' (kode ruang), 'connected', 'message' (objek), 'closed' (alasan), 'error' (pesan)
 */
const ERRORS = {
  'peer-unavailable': 'Kode ruang tidak ditemukan. Periksa kodenya dan pastikan perangkat host masih membuka ruang.',
  network: 'Tidak bisa terhubung ke server online. Periksa koneksi internet, lalu coba lagi.',
  'server-error': 'Server online sedang bermasalah. Coba lagi beberapa saat lagi.',
  'socket-error': 'Tidak bisa terhubung ke server online. Periksa koneksi internet, lalu coba lagi.',
  'socket-closed': 'Sambungan ke server online terputus.',
  'browser-incompatible': 'Browser ini tidak mendukung mode online (WebRTC). Pakai Chrome/Edge terbaru.',
  'ssl-unavailable': 'Mode online butuh alamat https:// (mis. GitHub Pages).',
  webrtc: 'Koneksi langsung antar-perangkat gagal (jaringan memblokir WebRTC).',
};

export function linkOptionsFromUrl(search = globalThis.location?.search ?? '') {
  const q = new URLSearchParams(search);
  // Log PeerJS dimatikan: semua galat sudah ditampilkan sebagai pesan di layar online (?peerDebug=3 untuk menelusuri)
  const opts = { debug: Math.max(0, Math.min(3, Number(q.get('peerDebug')) || 0)) };
  const peer = q.get('peer');
  if (peer) {
    const [host, port] = peer.split(':');
    opts.host = host;
    if (port) opts.port = Number(port);
    opts.path = q.get('peerPath') || '/';
    opts.secure = q.get('peerSecure') !== '0';
  }
  if (q.get('ice') === 'none') opts.config = { iceServers: [] };
  const to = Number(q.get('netTimeout'));
  if (to > 0) opts.linkTimeout = to; // detik (pengujian di komputer sangat lambat)
  return opts;
}

export class NetLink {
  constructor(options = linkOptionsFromUrl()) {
    this.options = options;
    this.handlers = {};
    this.peer = null;
    this.conn = null;
    this.role = null; // 'host' | 'guest'
    this.code = null;
    this.connected = false;
    this.closed = false;
    this.rtt = null; // ms
    this.lastRecv = 0;
    this.sent = 0;
    this.received = 0;
    this._timer = null;
  }

  on(type, fn) {
    (this.handlers[type] ||= []).push(fn);
    return this;
  }

  #emit(type, arg) {
    for (const fn of this.handlers[type] ?? []) fn(arg);
  }

  async #lib() {
    const mod = await import('peerjs');
    return mod.Peer ?? mod.default?.Peer ?? mod.default;
  }

  #fail(type, detail = '') {
    const msg = ERRORS[type] ?? `Gagal tersambung (${type}). ${detail}`.trim();
    this.#emit('error', msg);
  }

  /** Buat ruang. Mengembalikan kode ruang (4 huruf). */
  async host() {
    this.role = 'host';
    const Peer = await this.#lib();
    for (let attempt = 0; attempt < 6 && !this.closed; attempt++) {
      const code = makeRoomCode();
      this.#emit('status', 'Membuat ruang…');
      const ok = await new Promise((resolve) => {
        const peer = new Peer(peerIdFor(code), this.options);
        this.peer = peer;
        const done = (v) => {
          peer.off('open', onOpen);
          peer.off('error', onErr);
          resolve(v);
        };
        const onOpen = () => done(true);
        const onErr = (err) => {
          if (err?.type === 'unavailable-id') {
            peer.destroy();
            done(false); // kode sudah dipakai → coba kode lain
          } else {
            this.#fail(err?.type ?? 'server-error', err?.message);
            done(null);
          }
        };
        peer.on('open', onOpen);
        peer.on('error', onErr);
      });
      if (ok === null) return null;
      if (!ok) continue;
      this.code = code;
      this.#watchPeer();
      this.peer.on('connection', (conn) => this.#incoming(conn));
      this.#emit('ready', code);
      return code;
    }
    if (!this.closed) this.#fail('server-error');
    return null;
  }

  /** Gabung ke ruang dengan kode. */
  async join(code) {
    this.role = 'guest';
    if (!isValidCode(code)) {
      this.#emit('error', 'Kode ruang harus 4 karakter (contoh: K7QM).');
      return false;
    }
    this.code = code;
    const Peer = await this.#lib();
    this.#emit('status', 'Menghubungi server…');
    const peer = new Peer(this.options);
    this.peer = peer;
    return new Promise((resolve) => {
      let settled = false;
      const finish = (v) => {
        if (settled) return;
        settled = true;
        clearTimeout(timeout);
        resolve(v);
      };
      const timeout = setTimeout(() => {
        if (!this.connected) {
          this.#emit('error', 'Waktu habis saat menyambung. Pastikan kedua perangkat terhubung ke internet, lalu coba lagi.');
          finish(false);
        }
      }, 20000);
      peer.on('error', (err) => {
        if (!this.connected) {
          this.#fail(err?.type ?? 'server-error', err?.message);
          finish(false);
        } else if (err?.type !== 'peer-unavailable') this.#emit('status', ERRORS[err?.type] ?? 'Gangguan jaringan');
      });
      peer.on('open', () => {
        this.#emit('status', 'Menyambung ke ruang ' + code + '…');
        const conn = peer.connect(peerIdFor(code), { serialization: 'json', reliable: true, metadata: { v: NET_VERSION } });
        this.#bind(conn, () => finish(true));
      });
      this.#watchPeer();
    });
  }

  /** Tamu masuk ke ruang host (hanya 1 tamu). */
  #incoming(conn) {
    if (this.conn && this.connected) {
      conn.on('open', () => {
        try {
          conn.send({ t: 'reject', reason: 'penuh' });
        } catch {
          /* abaikan */
        }
        setTimeout(() => conn.close(), 400);
      });
      return;
    }
    this.#bind(conn);
  }

  #bind(conn, onOpen) {
    this.conn = conn;
    conn.on('open', () => {
      this.connected = true;
      this.lastRecv = performance.now();
      this.#startPing();
      this.#emit('connected');
      onOpen?.();
    });
    conn.on('data', (data) => {
      this.lastRecv = performance.now();
      this.received++;
      if (!data || typeof data !== 'object') return;
      if (data.t === 'ping') return this.send({ t: 'pong', ts: data.ts });
      if (data.t === 'pong') {
        this.rtt = Math.round(performance.now() - data.ts);
        return;
      }
      this.#emit('message', data);
    });
    conn.on('close', () => this.#lost('Lawan keluar dari ruang.'));
    conn.on('error', (err) => {
      if (!this.connected) this.#fail('webrtc', err?.message);
    });
    conn.on('iceStateChanged', (state) => {
      if (state === 'failed') this.#lost('Koneksi ke lawan terputus.');
    });
  }

  #watchPeer() {
    // Server sinyal terputus saat menunggu di lobi → sambung ulang (koneksi antar-perangkat tidak terpengaruh)
    this.peer.on('disconnected', () => {
      if (!this.closed && !this.peer.destroyed) {
        try {
          this.peer.reconnect();
        } catch {
          /* abaikan */
        }
      }
    });
  }

  #startPing() {
    clearInterval(this._timer);
    this._timer = setInterval(() => {
      if (!this.connected) return;
      this.send({ t: 'ping', ts: performance.now() });
      const limit = this.options.linkTimeout ?? LINK_TIMEOUT;
      if (performance.now() - this.lastRecv > limit * 1000) this.#lost(`Koneksi ke lawan terputus (tidak ada data ${limit} detik).`);
    }, PING_INTERVAL * 1000);
  }

  #lost(reason) {
    if (!this.connected) return;
    this.connected = false;
    this.conn = null;
    clearInterval(this._timer);
    this.#emit('closed', reason);
    // Host tetap membuka ruang agar tamu bisa masuk lagi
  }

  /** Host: putuskan tamu saat ini (ruang tetap terbuka untuk tamu berikutnya). */
  dropPeer() {
    const conn = this.conn;
    this.connected = false;
    this.conn = null;
    clearInterval(this._timer);
    try {
      conn?.close();
    } catch {
      /* abaikan */
    }
  }

  send(msg) {
    if (!this.connected || !this.conn) return false;
    try {
      this.conn.send(msg);
      this.sent++;
      return true;
    } catch {
      return false;
    }
  }

  /** Tutup semuanya (keluar ruang). */
  close() {
    this.closed = true;
    clearInterval(this._timer);
    if (this.connected) this.send({ t: 'bye' });
    const peer = this.peer;
    const conn = this.conn;
    this.connected = false;
    this.conn = null;
    setTimeout(() => {
      try {
        conn?.close();
      } catch {
        /* abaikan */
      }
      try {
        peer?.destroy();
      } catch {
        /* abaikan */
      }
    }, 150);
  }
}
