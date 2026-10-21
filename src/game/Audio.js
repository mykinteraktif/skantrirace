/**
 * Audio.js — efek suara sintetis dengan Web Audio API (tanpa file audio = bebas hak cipta).
 *
 * Browser hanya mengizinkan suara setelah ada interaksi pengguna, sehingga
 * AudioContext dibuat saat tombol MULAI ditekan (unlock()).
 * Tombol M = bisukan / bunyikan.
 */
export class GameAudio {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.engine = null;
    this.nitroNode = null;
    this.muted = false;
    this.volume = 0.7; // 0..1 dari PENGATURAN
    try {
      this.muted = localStorage.getItem('skantri-muted') === '1';
    } catch {
      /* penyimpanan browser tidak tersedia — abaikan */
    }
  }

  get ready() {
    return !!this.ctx;
  }

  /** Panggil dari event klik/tombol. */
  unlock() {
    if (this.ctx) {
      if (this.ctx.state === 'suspended') this.ctx.resume().catch(() => {});
      return;
    }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    try {
      this.ctx = new AC();
    } catch {
      return;
    }
    this.master = this.ctx.createGain();
    this.master.gain.value = this.#level();
    this.master.connect(this.ctx.destination);
    this.#buildEngine();
    this.#buildNitro();
  }

  #level() {
    return this.muted ? 0 : 0.8 * this.volume;
  }

  /** v: 0..100 */
  setVolume(v) {
    this.volume = Math.max(0, Math.min(1, v / 100));
    if (this.master) this.master.gain.setTargetAtTime(this.#level(), this.ctx.currentTime, 0.05);
  }

  #noiseBuffer(seconds = 1) {
    const c = this.ctx;
    const buf = c.createBuffer(1, Math.floor(c.sampleRate * seconds), c.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    return buf;
  }

  /** Desis nitro: noise berulang + filter band-pass. */
  #buildNitro() {
    const c = this.ctx;
    const src = c.createBufferSource();
    src.buffer = this.#noiseBuffer(1.5);
    src.loop = true;
    const f = c.createBiquadFilter();
    f.type = 'bandpass';
    f.frequency.value = 900;
    f.Q.value = 0.8;
    const g = c.createGain();
    g.gain.value = 0;
    src.connect(f).connect(g).connect(this.master);
    src.start();
    this.nitroNode = { gain: g, filter: f };
  }

  updateNitro(active, speedRatio = 0.5) {
    const n = this.nitroNode;
    if (!n) return;
    const t = this.ctx.currentTime;
    n.gain.gain.setTargetAtTime(active ? 0.16 : 0, t, active ? 0.04 : 0.15);
    n.filter.frequency.setTargetAtTime(700 + speedRatio * 1400, t, 0.1);
  }

  pickup(type) {
    if (type === 'speed') {
      this.#tone(520, 0.25, { type: 'sawtooth', vol: 0.12, slide: 2.4 });
      this.#tone(1040, 0.2, { type: 'triangle', vol: 0.16, delay: 0.08 });
    } else if (type === 'shield') {
      [660, 880, 1320].forEach((f, i) => this.#tone(f, 0.28, { type: 'sine', vol: 0.16, delay: i * 0.07 }));
    } else {
      this.#tone(300, 0.35, { type: 'sawtooth', vol: 0.12, slide: 3 });
    }
  }

  portal() {
    this.#tone(1500, 0.3, { type: 'sine', vol: 0.08, slide: 0.5 });
  }

  toggleMute() {
    this.muted = !this.muted;
    try {
      localStorage.setItem('skantri-muted', this.muted ? '1' : '0');
    } catch {
      /* abaikan */
    }
    if (this.master) this.master.gain.setTargetAtTime(this.#level(), this.ctx.currentTime, 0.05);
    return this.muted;
  }

  // ------------------------------------------------------------ mesin
  #buildEngine() {
    const c = this.ctx;
    const gain = c.createGain();
    gain.gain.value = 0;
    const filter = c.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 600;
    filter.Q.value = 2;
    const o1 = c.createOscillator();
    o1.type = 'sawtooth';
    const o2 = c.createOscillator();
    o2.type = 'square';
    const o2g = c.createGain();
    o2g.gain.value = 0.35;
    o1.connect(filter);
    o2.connect(o2g).connect(filter);
    filter.connect(gain).connect(this.master);
    o1.start();
    o2.start();
    this.engine = { gain, filter, o1, o2, on: false };
  }

  /** speedRatio 0..1, throttle 0..1. Dipanggil tiap frame selama balapan. */
  updateEngine(speedRatio, throttle, active) {
    const e = this.engine;
    if (!e) return;
    const t = this.ctx.currentTime;
    // Simulasi gigi: putaran naik dalam tiap "gigi", lalu turun saat pindah gigi
    const gears = 5;
    const g = Math.min(gears - 1, Math.floor(speedRatio * gears));
    const inGear = speedRatio * gears - g;
    const rpm = 0.25 + inGear * 0.6 + g * 0.05;
    const f = 42 + rpm * 120;
    e.o1.frequency.setTargetAtTime(f, t, 0.05);
    e.o2.frequency.setTargetAtTime(f * 0.5, t, 0.05);
    e.filter.frequency.setTargetAtTime(400 + throttle * 900 + rpm * 600, t, 0.08);
    e.gain.gain.setTargetAtTime(active ? 0.06 + throttle * 0.07 : 0, t, 0.12);
  }

  stopEngine() {
    if (this.engine) this.engine.gain.gain.setTargetAtTime(0, this.ctx.currentTime, 0.1);
    this.updateNitro(false);
  }

  // ------------------------------------------------------------ efek singkat
  #tone(freq, dur, { type = 'square', vol = 0.25, delay = 0, slide = 0 } = {}) {
    if (!this.ctx) return;
    const c = this.ctx;
    const t = c.currentTime + delay;
    const o = c.createOscillator();
    const g = c.createGain();
    o.type = type;
    o.frequency.setValueAtTime(freq, t);
    if (slide) o.frequency.exponentialRampToValueAtTime(freq * slide, t + dur);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g).connect(this.master);
    o.start(t);
    o.stop(t + dur + 0.02);
  }

  countBeep() {
    this.#tone(440, 0.22, { vol: 0.22 });
  }

  goBeep() {
    this.#tone(880, 0.55, { vol: 0.26 });
  }

  checkpoint() {
    this.#tone(1320, 0.12, { type: 'triangle', vol: 0.18 });
  }

  lap(best = false) {
    this.#tone(660, 0.14, { type: 'triangle', vol: 0.2 });
    this.#tone(990, 0.22, { type: 'triangle', vol: 0.2, delay: 0.12 });
    if (best) this.#tone(1320, 0.3, { type: 'triangle', vol: 0.2, delay: 0.26 });
  }

  finish(win) {
    const notes = win ? [523, 659, 784, 1047, 784, 1047] : [523, 494, 440, 392];
    notes.forEach((n, i) => this.#tone(n, 0.24, { type: 'triangle', vol: 0.22, delay: i * 0.14 }));
  }

  /** Bunyi benturan; strength dalam m/s. */
  hit(strength) {
    if (!this.ctx) return;
    const c = this.ctx;
    const t = c.currentTime;
    const dur = 0.18;
    const buf = c.createBuffer(1, Math.floor(c.sampleRate * dur), c.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / data.length) ** 2;
    const src = c.createBufferSource();
    src.buffer = buf;
    const f = c.createBiquadFilter();
    f.type = 'lowpass';
    f.frequency.value = 500 + Math.min(strength, 30) * 30;
    const g = c.createGain();
    g.gain.value = Math.min(0.5, 0.08 + strength * 0.015);
    src.connect(f).connect(g).connect(this.master);
    src.start(t);
  }

  dispose() {
    if (this.ctx) this.ctx.close().catch(() => {});
    this.ctx = null;
  }
}
