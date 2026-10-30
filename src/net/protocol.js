import { wrapAngle } from '../game/Physics.js';

/**
 * protocol.js — aturan main mode ONLINE (2 perangkat), tanpa grafis & tanpa jaringan (bisa diuji di Node).
 *
 * Model jaringan:
 *  - HOST (perangkat yang membuat ruang) menjalankan aturan balapan: hitung mundur, lap, posisi, finis,
 *    lawan AI, dan item. Host mengirim "snapshot" ±20× per detik.
 *  - TAMU menjalankan fisika mobilnya SENDIRI (kendali terasa tanpa jeda), lalu mengirim posisi mobilnya
 *    ±20× per detik. Mobil lain di layar tamu digerakkan dari snapshot host.
 *  - Mobil milik perangkat lain = "mobil jarak jauh": posisinya diperkirakan dari kecepatan (dead reckoning)
 *    lalu dihaluskan agar tidak patah-patah.
 */
export const NET_VERSION = 1;
export const PEER_PREFIX = 'skantri-race-v1-';
// Tanpa huruf/angka yang mudah tertukar: I, O, 0, 1
export const CODE_ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
export const CODE_LENGTH = 4;
export const SEND_INTERVAL = 1 / 20; // detik
export const PING_INTERVAL = 2; // detik
export const LINK_TIMEOUT = 15; // detik tanpa pesan → dianggap terputus

export function makeRoomCode(rand = Math.random) {
  let c = '';
  for (let i = 0; i < CODE_LENGTH; i++) c += CODE_ALPHABET[Math.floor(rand() * CODE_ALPHABET.length) % CODE_ALPHABET.length];
  return c;
}

/** Rapikan ketikan kode: huruf kapital, buang spasi/karakter lain. */
export function normalizeCode(text) {
  return String(text ?? '')
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, '')
    .slice(0, CODE_LENGTH);
}

export function isValidCode(code) {
  return typeof code === 'string' && code.length === CODE_LENGTH && [...code].every((ch) => CODE_ALPHABET.includes(ch));
}

export const peerIdFor = (code) => PEER_PREFIX + code;

// ------------------------------------------------------------------ state mobil
const r2 = (v) => Math.round(v * 100) / 100;
const r3 = (v) => Math.round(v * 1000) / 1000;
const r1 = (v) => Math.round(v * 10) / 10;

/** State mobil → array ringkas (±80 byte JSON). */
export function packCar(st) {
  const flags = (st.onGround ? 1 : 0) | (st.boosting ? 2 : 0) | (st.drifting ? 4 : 0);
  return [r2(st.x), r2(st.y), r2(st.z), r3(st.heading), r2(st.vx), r2(st.vy), r2(st.vz), r2(st.steer), flags, r1(st.fx.speed), r1(st.fx.shield), r1(st.fx.turbo), r2(st.nitro)];
}

export function unpackCar(a, out = {}) {
  out.x = a[0];
  out.y = a[1];
  out.z = a[2];
  out.heading = a[3];
  out.vx = a[4];
  out.vy = a[5];
  out.vz = a[6];
  out.steer = a[7];
  out.onGround = !!(a[8] & 1);
  out.boosting = !!(a[8] & 2);
  out.drifting = !!(a[8] & 4);
  out.fx = { speed: a[9], shield: a[10], turbo: a[11] };
  out.nitro = a[12];
  return out;
}

// ------------------------------------------------------------------ pembalap (posisi, lap, waktu)
const t2 = (v) => (v === null || v === undefined ? null : Math.round(v * 1000) / 1000);

export function packRacer(r) {
  return [r.id, r.lap, r.position, r.nextCheckpoint, r.finished ? 1 : 0, r.dnf ? 1 : 0, t2(r.finishTime), t2(r.bestLap), t2(r.lastLap), t2(r.lapStart), r2(r.progress)];
}

export function unpackRacerInto(r, a) {
  r.lap = a[1];
  r.position = a[2];
  r.nextCheckpoint = a[3];
  r.finished = !!a[4];
  r.dnf = !!a[5];
  r.finishTime = a[6];
  r.bestLap = a[7];
  r.lastLap = a[8];
  r.lapStart = a[9] ?? 0;
  r.progress = a[10] ?? r.progress;
  return r;
}

/** Status item (aktif/tidak) → string '1011…'. */
export const packItems = (items) => items.map((i) => (i.active ? '1' : '0')).join('');

/** Event balapan → objek polos (racer diganti id-nya). */
export function packEvent(e) {
  const out = { ...e };
  if (e.racer) out.racer = e.racer.id;
  return out;
}

// ------------------------------------------------------------------ mobil jarak jauh
const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
const _proj = {};

/**
 * RemoteCar — memperkirakan & menghaluskan mobil milik perangkat lain.
 * push(): simpan state terbaru (waktu = jam permainan lokal, detik).
 * apply(): tulis state yang dihaluskan ke state Vehicle (dipanggil tiap frame).
 */
export class RemoteCar {
  constructor() {
    this.last = null;
    this.recv = 0;
    this.yawRate = 0;
    this.applied = false;
    this.count = 0;
  }

  get has() {
    return !!this.last;
  }

  push(packed, now) {
    const s = unpackCar(packed);
    if (this.last) {
      const dt = now - this.recv;
      if (dt > 1e-3) this.yawRate = clamp(wrapAngle(s.heading - this.last.heading) / dt, -3, 3);
    }
    this.last = s;
    this.recv = now;
    this.count++;
  }

  /** Posisi perkiraan saat `now` (dibatasi 0,25 dtk ke depan agar tidak "melayang" saat paket telat). */
  predict(now, out = {}) {
    const L = this.last;
    const age = clamp(now - this.recv, 0, 0.25);
    out.x = L.x + L.vx * age;
    out.z = L.z + L.vz * age;
    out.y = L.onGround ? L.y : L.y + L.vy * age;
    out.heading = wrapAngle(L.heading + this.yawRate * age);
    return out;
  }

  apply(state, now, dt, path) {
    if (!this.last) return false;
    const L = this.last;
    const p = this.predict(now, this._tmp || (this._tmp = {}));
    const err = Math.hypot(p.x - state.x, p.z - state.z);
    if (!this.applied || err > 8) {
      state.x = p.x;
      state.y = p.y;
      state.z = p.z;
      state.heading = p.heading;
      this.applied = true;
    } else {
      // Maju sesuai kecepatan dulu (tidak tertinggal di belakang mobil aslinya), lalu koreksi sisa selisihnya pelan-pelan
      const h = Math.max(dt, 0);
      state.x += L.vx * h;
      state.z += L.vz * h;
      state.heading = wrapAngle(state.heading + this.yawRate * h);
      const k = 1 - Math.exp(-10 * h);
      state.x += (p.x - state.x) * k;
      state.y += (p.y - state.y) * k;
      state.z += (p.z - state.z) * k;
      state.heading = wrapAngle(state.heading + wrapAngle(p.heading - state.heading) * k);
    }
    state.vx = L.vx;
    state.vy = L.vy;
    state.vz = L.vz;
    state.steer = L.steer;
    state.onGround = L.onGround;
    state.boosting = L.boosting;
    state.drifting = L.drifting;
    state.fx.speed = L.fx.speed;
    state.fx.shield = L.fx.shield;
    state.fx.turbo = L.fx.turbo;
    state.nitro = L.nitro;
    const h = state.heading;
    state.forwardSpeed = state.vx * Math.sin(h) + state.vz * Math.cos(h);
    state.lateralSpeed = state.vx * Math.cos(h) - state.vz * Math.sin(h);
    state.odometer += state.forwardSpeed * Math.max(dt, 0);
    if (path) {
      const pr = path.project(state.x, state.z, state.trackIndex, _proj);
      state.trackIndex = pr.index;
      state.s = pr.s;
      state.lateral = pr.lateral;
      state.tangentX = pr.tx;
      state.tangentZ = pr.tz;
    }
    return true;
  }
}
