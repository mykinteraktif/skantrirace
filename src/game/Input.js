/**
 * Input — keyboard, tombol sentuh, dan gamepad.
 *
 * Mode 'solo' : semua tombol (W A S D + panah, Spasi, kedua Shift) mengendalikan satu mobil.
 * Mode 'duo'  : 2 pemain di satu keyboard (layar terbagi)
 *   PEMAIN 1 = W A S D · Spasi (drift) · Shift kiri (nitro) · R (reset)
 *   PEMAIN 2 = panah  · / atau . (drift) · Shift kanan atau Enter (nitro) · Backspace (reset)
 *
 * Gamepad (Gamepad API browser, tata letak standar Xbox/PlayStation):
 *   RT / A / D-pad atas = gas · LT / X / D-pad bawah = rem · stik kiri / D-pad = belok
 *   B / RB = nitro · LB / Y = drift · Start = jeda · Back/Select = reset
 *   Solo: semua gamepad → pemain. Duo: 2 gamepad → P1 & P2; 1 gamepad → PEMAIN 2 (bisa ditukar).
 *
 * Tombol sentuh menulis ke setVirtual() (hanya mode solo).
 */
export const KEYMAP = {
  solo: {
    accelerate: ['KeyW', 'ArrowUp'],
    brake: ['KeyS', 'ArrowDown'],
    left: ['KeyA', 'ArrowLeft'],
    right: ['KeyD', 'ArrowRight'],
    handbrake: ['Space'],
    nitro: ['ShiftLeft', 'ShiftRight'],
  },
  p1: {
    accelerate: ['KeyW'],
    brake: ['KeyS'],
    left: ['KeyA'],
    right: ['KeyD'],
    handbrake: ['Space'],
    nitro: ['ShiftLeft'],
  },
  p2: {
    accelerate: ['ArrowUp'],
    brake: ['ArrowDown'],
    left: ['ArrowLeft'],
    right: ['ArrowRight'],
    handbrake: ['Slash', 'Period'],
    nitro: ['ShiftRight', 'Enter', 'NumpadEnter'],
  },
};
// Catatan: Ctrl & Alt sengaja TIDAK dipakai — Ctrl+W (menutup tab) tidak bisa dicegah browser.
const ACTIONS = {
  pause: ['Escape', 'KeyP'],
  reset: ['KeyR'],
  reset2: ['Backspace'],
  mute: ['KeyM'],
};
const GAME_KEYS = new Set([...Object.values(KEYMAP).flatMap((m) => Object.values(m).flat()), ...Object.values(ACTIONS).flat()]);

const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
const isEditable = (t) => !!t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName ?? ''));
const isButton = (t) => !!t && t.tagName === 'BUTTON';

export const PAD_DEADZONE = 0.18;

/** Baca satu gamepad → input mobil + status tombol menu. Fungsi murni (mudah diuji). */
export function readPad(pad, out = {}) {
  const b = (i) => {
    const x = pad.buttons?.[i];
    if (x === undefined || x === null) return 0;
    if (typeof x === 'object') return Number(x.value) || (x.pressed ? 1 : 0);
    return Number(x) || 0;
  };
  const trig = (v) => (v > 0.06 ? v : 0); // buang derau pelatuk analog
  const ax = Number(pad.axes?.[0]) || 0;
  let steer = Math.abs(ax) > PAD_DEADZONE ? (Math.sign(ax) * (Math.abs(ax) - PAD_DEADZONE)) / (1 - PAD_DEADZONE) : 0;
  if (b(14) > 0.5) steer = -1;
  if (b(15) > 0.5) steer = 1;
  out.steer = clamp(steer, -1, 1);
  out.throttle = Math.max(trig(b(7)), b(0) > 0.5 ? 1 : 0, b(12) > 0.5 ? 1 : 0);
  out.brake = Math.max(trig(b(6)), b(2) > 0.5 ? 1 : 0, b(13) > 0.5 ? 1 : 0);
  out.nitro = b(1) > 0.5 || b(5) > 0.5;
  out.handbrake = b(4) > 0.5 || b(3) > 0.5;
  // Tombol navigasi menu (dideteksi saat baru ditekan)
  out.start = b(9) > 0.5;
  out.back = b(8) > 0.5;
  out.a = b(0) > 0.5;
  out.b = b(1) > 0.5;
  out.left = b(14) > 0.5 || ax < -0.6;
  out.right = b(15) > 0.5 || ax > 0.6;
  return out;
}

/**
 * Pemilik tiap gamepad (urut sesuai daftar gamepad yang tersambung): 0 = PEMAIN 1, 1 = PEMAIN 2, -1 = tidak dipakai.
 * Duo dengan 1 gamepad → PEMAIN 2 (PEMAIN 1 memakai W A S D); swap menukar pemiliknya.
 */
export function assignPads(count, mode = 'solo', swap = false) {
  const out = [];
  for (let k = 0; k < count; k++) {
    if (mode !== 'duo') out.push(0);
    else if (count === 1) out.push(swap ? 0 : 1);
    else if (k < 2) out.push(k === 0 ? (swap ? 1 : 0) : swap ? 0 : 1);
    else out.push(-1);
  }
  return out;
}

const NAV_BUTTONS = ['start', 'back', 'a', 'b', 'left', 'right'];
const emptyPad = () => ({ throttle: 0, brake: 0, steer: 0, handbrake: false, nitro: false });

export class Input {
  constructor(target = globalThis) {
    this.target = target;
    this.down = new Set();
    this.virtual = new Set(); // tombol sentuh
    this.handlers = { pause: [], reset: [], mute: [], pad: [] };
    this.enabled = true;
    this.playerEnabled = [true, true];
    this.mode = 'solo'; // 'solo' | 'duo'
    this.padSwap = false;
    this.padCount = 0;
    this.padOwners = [];
    this.padInput = [emptyPad(), emptyPad()];
    this.padPrev = new Map(); // gamepad.index → status tombol frame sebelumnya
    this._tmp = {};

    this._onKeyDown = (e) => {
      if (!GAME_KEYS.has(e.code)) return;
      if (isEditable(e.target)) return; // sedang mengetik nama / menggeser slider
      // Jangan ganggu tombol di overlay menu (Enter/Spasi pada <button>) — kecuali tombol yang masih ditahan
      // dari balapan (mis. Enter = nitro PEMAIN 2): pengulangan otomatis tidak boleh "mengeklik" MAIN LAGI.
      if (isButton(e.target) && (e.code === 'Space' || e.code === 'Enter' || e.code === 'NumpadEnter')) {
        if (e.repeat || this.down.has(e.code)) e.preventDefault();
        return;
      }
      e.preventDefault();
      if (e.repeat) return;
      this.down.add(e.code);
      for (const [action, codes] of Object.entries(ACTIONS)) {
        if (!codes.includes(e.code)) continue;
        if (action === 'reset' || action === 'reset2') this.#emit('reset', action === 'reset' ? 0 : 1);
        else this.#emit(action);
      }
    };
    this._onKeyUp = (e) => {
      this.down.delete(e.code);
    };
    this._onBlur = () => this.down.clear();

    target.addEventListener('keydown', this._onKeyDown);
    target.addEventListener('keyup', this._onKeyUp);
    globalThis.addEventListener?.('blur', this._onBlur);
  }

  on(action, fn) {
    this.handlers[action]?.push(fn);
  }

  #emit(action, arg) {
    this.handlers[action]?.forEach((fn) => fn(arg));
  }

  /** 'solo' atau 'duo' — menentukan peta tombol. */
  setMode(mode) {
    this.mode = mode === 'duo' ? 'duo' : 'solo';
  }

  setPlayerEnabled(player, on) {
    this.playerEnabled[player] = !!on;
  }

  #map(player) {
    if (this.mode !== 'duo') return KEYMAP.solo;
    return player === 1 ? KEYMAP.p2 : KEYMAP.p1;
  }

  #pressed(map, name, player) {
    if (player === 0 && this.virtual.has(name)) return true;
    return map[name].some((c) => this.down.has(c));
  }

  setVirtual(name, isDown) {
    if (isDown) this.virtual.add(name);
    else this.virtual.delete(name);
  }

  /** Baca semua gamepad (panggil sekali per frame). Memicu event 'pad' untuk tombol yang baru ditekan. */
  poll() {
    let pads = [];
    try {
      pads = globalThis.navigator?.getGamepads?.() ?? [];
    } catch {
      pads = [];
    }
    const list = [];
    for (const p of pads) if (p && p.connected !== false) list.push(p);
    const owners = assignPads(list.length, this.mode, this.padSwap);
    this.padCount = list.length;
    this.padOwners = owners;
    const merged = [emptyPad(), emptyPad()];
    const seen = new Set();
    list.forEach((pad, k) => {
      const st = readPad(pad, this._tmp);
      const owner = owners[k];
      const key = pad.index ?? k;
      seen.add(key);
      const prev = this.padPrev.get(key) ?? {};
      const now = {};
      for (const btn of NAV_BUTTONS) {
        now[btn] = st[btn];
        if (st[btn] && !prev[btn] && owner >= 0) this.#emit('pad', { player: owner, button: btn });
      }
      this.padPrev.set(key, now);
      if (owner < 0) return;
      const m = merged[owner];
      m.throttle = Math.max(m.throttle, st.throttle);
      m.brake = Math.max(m.brake, st.brake);
      if (Math.abs(st.steer) > Math.abs(m.steer)) m.steer = st.steer;
      m.nitro = m.nitro || st.nitro;
      m.handbrake = m.handbrake || st.handbrake;
    });
    for (const key of [...this.padPrev.keys()]) if (!seen.has(key)) this.padPrev.delete(key);
    this.padInput = merged;
  }

  /** Snapshot kontrol untuk satu frame. player: 0 = PEMAIN 1 (atau pemain tunggal), 1 = PEMAIN 2. */
  read(out = {}, player = 0) {
    if (!this.enabled || !this.playerEnabled[player]) {
      out.throttle = out.brake = out.steer = 0;
      out.handbrake = out.nitro = false;
      return out;
    }
    const map = this.#map(player);
    const pad = this.padInput[player] ?? emptyPad();
    const kbSteer = (this.#pressed(map, 'right', player) ? 1 : 0) - (this.#pressed(map, 'left', player) ? 1 : 0);
    out.throttle = Math.max(this.#pressed(map, 'accelerate', player) ? 1 : 0, pad.throttle);
    out.brake = Math.max(this.#pressed(map, 'brake', player) ? 1 : 0, pad.brake);
    out.steer = kbSteer !== 0 ? kbSteer : pad.steer;
    out.handbrake = this.#pressed(map, 'handbrake', player) || pad.handbrake;
    out.nitro = this.#pressed(map, 'nitro', player) || pad.nitro;
    return out;
  }

  clear() {
    this.down.clear();
    this.virtual.clear();
  }

  dispose() {
    this.target.removeEventListener('keydown', this._onKeyDown);
    this.target.removeEventListener('keyup', this._onKeyUp);
    globalThis.removeEventListener?.('blur', this._onBlur);
  }
}
