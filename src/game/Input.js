/**
 * Input keyboard.
 * Tahap 3 menambahkan tombol sentuh yang menulis ke state yang sama (lihat setVirtual).
 */
const BINDINGS = {
  accelerate: ['KeyW', 'ArrowUp'],
  brake: ['KeyS', 'ArrowDown'],
  left: ['KeyA', 'ArrowLeft'],
  right: ['KeyD', 'ArrowRight'],
  handbrake: ['Space'],
  nitro: ['ShiftLeft', 'ShiftRight'],
};
const ACTIONS = {
  pause: ['Escape', 'KeyP'],
  reset: ['KeyR'],
  mute: ['KeyM'],
};
const GAME_KEYS = new Set([...Object.values(BINDINGS).flat(), ...Object.values(ACTIONS).flat()]);

export class Input {
  constructor(target = window) {
    this.target = target;
    this.down = new Set();
    this.virtual = new Set(); // tombol sentuh (Tahap 3)
    this.handlers = { pause: [], reset: [], mute: [] };
    this.enabled = true;

    this._onKeyDown = (e) => {
      if (!GAME_KEYS.has(e.code)) return;
      // Jangan ganggu tombol di overlay menu (Enter/Spasi pada <button>)
      if (e.target instanceof HTMLButtonElement && (e.code === 'Space' || e.code === 'Enter')) return;
      e.preventDefault();
      if (e.repeat) return;
      this.down.add(e.code);
      for (const [action, codes] of Object.entries(ACTIONS)) {
        if (codes.includes(e.code)) this.handlers[action].forEach((fn) => fn());
      }
    };
    this._onKeyUp = (e) => {
      this.down.delete(e.code);
    };
    this._onBlur = () => this.down.clear();

    target.addEventListener('keydown', this._onKeyDown);
    target.addEventListener('keyup', this._onKeyUp);
    window.addEventListener('blur', this._onBlur);
  }

  on(action, fn) {
    this.handlers[action]?.push(fn);
  }

  #pressed(name) {
    if (this.virtual.has(name)) return true;
    return BINDINGS[name].some((c) => this.down.has(c));
  }

  setVirtual(name, isDown) {
    if (isDown) this.virtual.add(name);
    else this.virtual.delete(name);
  }

  /** Snapshot kontrol untuk satu frame. */
  read(out = {}) {
    if (!this.enabled) {
      out.throttle = out.brake = out.steer = 0;
      out.handbrake = out.nitro = false;
      return out;
    }
    out.throttle = this.#pressed('accelerate') ? 1 : 0;
    out.brake = this.#pressed('brake') ? 1 : 0;
    out.steer = (this.#pressed('right') ? 1 : 0) - (this.#pressed('left') ? 1 : 0);
    out.handbrake = this.#pressed('handbrake');
    out.nitro = this.#pressed('nitro');
    return out;
  }

  clear() {
    this.down.clear();
    this.virtual.clear();
  }

  dispose() {
    this.target.removeEventListener('keydown', this._onKeyDown);
    this.target.removeEventListener('keyup', this._onKeyUp);
    window.removeEventListener('blur', this._onBlur);
  }
}
