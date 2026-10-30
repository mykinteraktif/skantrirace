import { NetLink, linkOptionsFromUrl } from './NetLink.js';
import { NET_VERSION, normalizeCode, isValidCode, SEND_INTERVAL } from './protocol.js';
import { sanitizeName, DUO_RIVAL_CHOICES } from '../game/Settings.js';
import { CARS, DEFAULT_CAR } from '../game/data/cars.js';
import { TRACKS } from '../game/data/tracks.js';
import { LAP_CHOICES } from '../game/data/racers.js';

/**
 * OnlineSession — alur mode ONLINE (2 perangkat) di luar fisika:
 *   buat ruang / gabung ruang → lobi (nama, mobil, lintasan, lap, lawan AI) → balapan → hasil → main lagi / lobi.
 *
 * State tampilan (untuk Menu): 'start' (belum di ruang) · 'connecting' · 'room' (di dalam ruang).
 * Host menunggu tamu di 'room'; tombol MULAI aktif setelah tamu masuk.
 */
export class OnlineSession {
  constructor(game) {
    this.game = game;
    this.link = null;
    this.role = null; // 'host' | 'guest'
    this.state = 'start';
    this.code = null;
    this.opp = null; // { name, car }
    this.hostLobby = null; // salinan pilihan host (di perangkat tamu)
    this.status = '';
    this.error = '';
    this.sendAcc = 0;
    this.lastSnap = 0;
    this.urlOptions = linkOptionsFromUrl();
  }

  get settings() {
    return this.game.settings;
  }

  /** Sedang berada di ruang / sedang menyambung? */
  get active() {
    return !!this.link && !this.link.closed;
  }

  get connected() {
    return !!this.link?.connected;
  }

  get laggy() {
    return this.connected && performance.now() - this.link.lastRecv > 1500;
  }

  me() {
    return { name: this.settings.netName, car: this.settings.car };
  }

  /** Pilihan balapan milik host. */
  lobby() {
    return { track: this.settings.track, laps: this.settings.laps, rivals: this.settings.netRivals };
  }

  pingLabel() {
    if (!this.connected) return 'LAWAN TERPUTUS';
    if (this.laggy) return 'SINYAL LEMAH';
    return this.link.rtt === null ? 'ONLINE' : `ONLINE · ${this.link.rtt} ms`;
  }

  /** Alamat untuk tamu (QR / dibagikan): halaman yang sama + ?gabung=KODE (parameter uji ikut terbawa). */
  joinUrl() {
    if (!this.code) return '';
    const loc = globalThis.location;
    const keep = new URLSearchParams();
    const cur = new URLSearchParams(loc?.search ?? '');
    for (const k of ['peer', 'peerSecure', 'peerPath', 'ice', 'netTimeout', 'peerDebug', 'debug']) if (cur.has(k)) keep.set(k, cur.get(k));
    keep.set('gabung', this.code);
    return `${loc?.origin ?? ''}${loc?.pathname ?? '/'}?${keep.toString()}`;
  }

  view() {
    return {
      state: this.state,
      role: this.role,
      code: this.code,
      joinUrl: this.joinUrl(),
      connected: this.connected,
      me: this.me(),
      opp: this.opp,
      lobby: this.role === 'guest' ? this.hostLobby : this.lobby(),
      rtt: this.link?.rtt ?? null,
      status: this.status,
      error: this.error,
    };
  }

  render() {
    this.game.menu?.setOnlineView(this.view());
  }

  // ------------------------------------------------------------------ buat / gabung / keluar
  #newLink() {
    const link = new NetLink(this.urlOptions);
    link.on('status', (t) => {
      if (this.link !== link) return;
      this.status = t;
      this.render();
    });
    link.on('error', (msg) => {
      if (this.link !== link) return;
      this.error = msg;
      this.status = '';
      if (!link.connected && this.state === 'connecting') this.#reset(false);
      this.render();
    });
    link.on('connected', () => {
      if (this.link !== link) return;
      this.status = '';
      if (this.role === 'guest') link.send({ t: 'hello', v: NET_VERSION, ...this.me() });
      this.render();
    });
    link.on('message', (m) => {
      if (this.link === link) this.#onMessage(m);
    });
    link.on('closed', (reason) => {
      if (this.link === link) this.#onPeerGone(reason);
    });
    return link;
  }

  /** Bersihkan sesi. keepError: biarkan pesan error tetap tampil. */
  #reset(clearError = true) {
    const link = this.link;
    this.link = null;
    if (link && !link.closed) link.close();
    this.role = null;
    this.state = 'start';
    this.code = null;
    this.opp = null;
    this.hostLobby = null;
    this.status = '';
    if (clearError) this.error = '';
  }

  async host() {
    if (this.active) return;
    this.#reset();
    this.role = 'host';
    this.state = 'connecting';
    this.link = this.#newLink();
    this.game.netRefreshCar();
    this.render();
    const link = this.link;
    const code = await link.host();
    if (this.link !== link) return;
    if (!code) {
      this.#reset(false);
      this.game.netRefreshCar();
    } else {
      this.code = code;
      this.state = 'room';
      this.status = '';
    }
    this.render();
  }

  async join(rawCode) {
    if (this.active) return;
    const code = normalizeCode(rawCode);
    this.#reset();
    if (!isValidCode(code)) {
      this.error = 'Kode ruang harus 4 karakter (huruf/angka), contoh: K7QM.';
      this.render();
      return;
    }
    this.role = 'guest';
    this.code = code;
    this.state = 'connecting';
    this.link = this.#newLink();
    this.render();
    const link = this.link;
    const ok = await link.join(code);
    if (this.link !== link) return;
    if (!ok) {
      this.#reset(false);
    }
    this.render();
  }

  /** Keluar dari ruang (tombol KELUAR RUANG / MENU UTAMA). */
  leave() {
    const wasRacing = !!this.game.netRace;
    this.#reset();
    this.game.netRefreshCar?.();
    this.render();
    return wasRacing;
  }

  // ------------------------------------------------------------------ lobi
  sendProfile() {
    if (this.connected) this.link.send({ t: 'prof', ...this.me() });
    this.render();
  }

  sendLobby() {
    if (this.role === 'host' && this.connected) this.link.send({ t: 'lobby', ...this.lobby() });
    this.render();
  }

  /** Host: mulai (atau mulai ulang) balapan untuk kedua perangkat. */
  startRace() {
    if (this.role !== 'host' || !this.connected || !this.opp) return false;
    const cfg = {
      t: 'start',
      v: NET_VERSION,
      ...this.lobby(),
      diff: this.settings.difficulty,
      host: this.me(),
      guest: { ...this.opp },
    };
    this.link.send(cfg);
    this.game.netStartHost(cfg);
    return true;
  }

  /** Host: kembali ke lobi (tamu ikut kembali). */
  backToLobby() {
    if (this.role === 'host' && this.connected) this.link.send({ t: 'tolobby' });
    this.game.netToLobby();
    this.render();
  }

  // ------------------------------------------------------------------ balapan
  /** Dipanggil tiap frame selama balapan online. */
  tick(dt) {
    if (!this.connected) return;
    this.sendAcc += dt;
    if (this.sendAcc < SEND_INTERVAL) return;
    this.sendAcc = Math.min(this.sendAcc - SEND_INTERVAL, SEND_INTERVAL);
    if (this.role === 'host') this.link.send(this.game.netBuildSnapshot());
    else this.link.send({ t: 'car', s: this.game.netOwnCar() });
  }

  /** Dipanggil tiap frame (juga di menu): perbarui ping di lobi sesekali. */
  frame(dt) {
    if (!this.active || this.state !== 'room') return;
    this._uiAcc = (this._uiAcc ?? 0) + dt;
    if (this._uiAcc > 1) {
      this._uiAcc = 0;
      if (this.game.mode === 'menu') this.game.menu?.setOnlinePing?.(this.link.rtt, this.connected);
    }
  }

  sendEvent(e) {
    if (this.connected) this.link.send({ t: 'ev', e });
  }

  sendPick(id) {
    if (this.connected) this.link.send({ t: 'pick', id });
  }

  // ------------------------------------------------------------------ pesan masuk
  #cleanProfile(m) {
    return { name: sanitizeName(m?.name, 'LAWAN'), car: CARS[m?.car] ? m.car : DEFAULT_CAR };
  }

  #onMessage(m) {
    switch (m.t) {
      // ---- host menerima
      case 'hello':
        if (this.role !== 'host') return;
        if (m.v !== NET_VERSION) {
          this.link.send({ t: 'reject', reason: 'versi' });
          return;
        }
        this.opp = this.#cleanProfile(m);
        this.error = '';
        this.link.send({ t: 'welcome', v: NET_VERSION, ...this.me(), lobby: this.lobby() });
        this.render();
        return;
      case 'car':
        if (this.role === 'host') this.game.netRemoteCar(m.s);
        return;
      case 'pick':
        if (this.role === 'host' && Number.isInteger(m.id)) this.game.netPick(m.id);
        return;
      // ---- tamu menerima
      case 'welcome':
        if (this.role !== 'guest') return;
        this.opp = this.#cleanProfile(m);
        this.hostLobby = this.#cleanLobby(m.lobby);
        this.state = 'room';
        this.error = '';
        this.status = '';
        this.game.netRefreshCar();
        this.render();
        return;
      case 'reject':
        this.error =
          m.reason === 'penuh'
            ? 'Ruang sudah penuh (sudah ada 2 pemain).'
            : 'Versi game di kedua perangkat berbeda. Muat ulang halaman (Ctrl+F5) di keduanya.';
        this.#reset(false);
        this.game.netRefreshCar();
        this.render();
        return;
      case 'lobby':
        if (this.role !== 'guest') return;
        this.hostLobby = this.#cleanLobby(m);
        this.render();
        return;
      case 'start':
        if (this.role !== 'guest') return;
        this.hostLobby = this.#cleanLobby(m);
        if (m.host) this.opp = this.#cleanProfile(m.host);
        this.game.netStartGuest({
          ...this.hostLobby,
          diff: m.diff,
          host: this.#cleanProfile(m.host),
          guest: this.#cleanProfile(m.guest),
        });
        return;
      case 'snap':
        if (this.role === 'guest') this.game.netSnapshot(m);
        return;
      case 'ev':
        if (this.role === 'guest') this.game.netEvent(m.e);
        return;
      case 'tolobby':
        if (this.role === 'guest') {
          this.game.netToLobby();
          this.render();
        }
        return;
      // ---- keduanya
      case 'prof':
        this.opp = this.#cleanProfile(m);
        this.render();
        return;
      case 'bye':
        this.#onPeerGone(this.role === 'host' ? 'Lawan keluar dari ruang.' : 'Host menutup ruang.');
        return;
    }
  }

  #cleanLobby(l) {
    return {
      track: TRACKS[l?.track] ? l.track : this.settings.track,
      laps: LAP_CHOICES.includes(l?.laps) ? l.laps : 3,
      rivals: DUO_RIVAL_CHOICES.includes(l?.rivals) ? l.rivals : 2,
    };
  }

  /** Lawan keluar / koneksi putus. */
  #onPeerGone(reason) {
    if (this.role === 'host') {
      // Ruang tetap terbuka: tamu lain (atau tamu yang sama) bisa masuk lagi dengan kode yang sama
      const hadOpp = !!this.opp;
      this.opp = null;
      this.link?.dropPeer();
      if (this.game.netRace) this.game.netOpponentLeft(reason);
      if (hadOpp) this.error = reason;
      this.render();
    } else {
      const racing = !!this.game.netRace;
      this.#reset(false);
      this.error = reason || 'Koneksi ke host terputus.';
      if (racing || this.game.mode !== 'menu') this.game.netHostLost(reason);
      else this.game.netRefreshCar();
      this.render();
    }
  }

  debugInfo() {
    return {
      state: this.state,
      role: this.role,
      code: this.code,
      connected: this.connected,
      rtt: this.link?.rtt ?? null,
      sent: this.link?.sent ?? 0,
      received: this.link?.received ?? 0,
      opp: this.opp ? { ...this.opp } : null,
      hostLobby: this.hostLobby ? { ...this.hostLobby } : null,
      error: this.error,
    };
  }
}
