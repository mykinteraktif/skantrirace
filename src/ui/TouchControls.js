/**
 * Tombol layar sentuh: belok kiri/kanan (kiri bawah), gas/rem/nitro/drift (kanan bawah), jeda (atas).
 * Mendukung multi-sentuh (mis. gas + belok bersamaan) lewat Pointer Events.
 * Tombol menulis ke Input.setVirtual(), jadi fisika tidak membedakan keyboard dan layar sentuh.
 */
const ICON = {
  left: '<svg viewBox="0 0 24 24"><path d="M15 4l-8 8 8 8" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  right: '<svg viewBox="0 0 24 24"><path d="M9 4l8 8-8 8" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  pause: '<svg viewBox="0 0 24 24"><path d="M8 5v14M16 5v14" stroke="currentColor" stroke-width="3.2" stroke-linecap="round"/></svg>',
};

export class TouchControls {
  constructor(root, input, { onPause }) {
    this.root = root;
    this.input = input;
    root.innerHTML = /* html */ `
      <div class="tc-steer">
        <button class="tc-btn tc-round" data-act="left" aria-label="Belok kiri">${ICON.left}</button>
        <button class="tc-btn tc-round" data-act="right" aria-label="Belok kanan">${ICON.right}</button>
      </div>
      <div class="tc-pedals">
        <button class="tc-btn tc-small tc-drift" data-act="handbrake" aria-label="Drift">DRIFT</button>
        <button class="tc-btn tc-small tc-nitro" data-act="nitro" aria-label="Nitro">NITRO</button>
        <button class="tc-btn tc-brake" data-act="brake" aria-label="Rem">REM</button>
        <button class="tc-btn tc-gas" data-act="accelerate" aria-label="Gas">GAS</button>
      </div>
      <button class="tc-btn tc-pause" data-act="pause" aria-label="Jeda">${ICON.pause}</button>
    `;
    this.pointers = new Map(); // pointerId → aksi

    const down = (e) => {
      const btn = e.target.closest('[data-act]');
      if (!btn) return;
      e.preventDefault();
      const act = btn.dataset.act;
      if (act === 'pause') {
        onPause?.();
        return;
      }
      try {
        btn.setPointerCapture(e.pointerId);
      } catch {
        /* abaikan */
      }
      this.pointers.set(e.pointerId, { act, btn });
      this.#refresh();
    };
    const up = (e) => {
      if (!this.pointers.has(e.pointerId)) return;
      this.pointers.delete(e.pointerId);
      this.#refresh();
    };
    root.addEventListener('pointerdown', down);
    root.addEventListener('pointerup', up);
    root.addEventListener('pointercancel', up);
    root.addEventListener('lostpointercapture', up);
    root.addEventListener('contextmenu', (e) => e.preventDefault());
    this.enabled = false;
  }

  #refresh() {
    const active = new Set([...this.pointers.values()].map((p) => p.act));
    for (const act of ['left', 'right', 'accelerate', 'brake', 'nitro', 'handbrake']) {
      this.input.setVirtual(act, active.has(act));
    }
    this.root.querySelectorAll('[data-act]').forEach((b) => b.classList.toggle('on', active.has(b.dataset.act)));
  }

  setEnabled(on) {
    this.enabled = on;
    this.root.hidden = !on;
    document.body.classList.toggle('touch-mode', on);
  }

  /** Lepas semua tombol (mis. saat jeda / ganti layar). */
  release() {
    this.pointers.clear();
    this.#refresh();
  }
}
