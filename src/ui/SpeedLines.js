/**
 * Garis kecepatan (speed lines) — efek "motion blur semu" saat nitro / Speed Orb / Turbo aktif.
 * Digambar di kanvas 2D transparan di atas adegan 3D (murah, tidak membebani GPU).
 * Mode 2 pemain: tiap pemain punya kanvas sendiri seukuran bagian layarnya (setRect).
 */
export class SpeedLines {
  constructor(container) {
    this.canvas = document.createElement('canvas');
    this.canvas.className = 'speed-lines';
    this.canvas.setAttribute('aria-hidden', 'true');
    container.appendChild(this.canvas);
    this.ctx = this.canvas.getContext('2d');
    this.intensity = 0;
    this.rect = null; // null = layar penuh
    this.lines = Array.from({ length: 70 }, () => this.#newLine(Math.random()));
    this.resize();
  }

  #newLine(progress = 0) {
    return { a: Math.random() * Math.PI * 2, r: 0.25 + progress * 0.8, speed: 1.2 + Math.random() * 1.8, len: 0.08 + Math.random() * 0.14, w: 1 + Math.random() * 2.2 };
  }

  /** Batasi ke satu bagian layar {x, y, w, h} (piksel CSS dari kiri-atas); null = layar penuh. */
  setRect(rect) {
    this.rect = rect ? { ...rect } : null;
    const st = this.canvas.style;
    if (rect) {
      st.left = `${rect.x}px`;
      st.top = `${rect.y}px`;
      st.width = `${rect.w}px`;
      st.height = `${rect.h}px`;
    } else {
      st.left = st.top = st.width = st.height = '';
    }
    this.resize();
  }

  setVisible(on) {
    this.canvas.hidden = !on;
    if (!on) {
      this.intensity = 0;
      this.canvas.style.opacity = '0';
    }
  }

  resize() {
    const s = 0.5; // setengah resolusi cukup untuk garis buram
    const w = this.rect ? this.rect.w : window.innerWidth;
    const h = this.rect ? this.rect.h : window.innerHeight;
    this.canvas.width = Math.max(1, Math.floor(w * s));
    this.canvas.height = Math.max(1, Math.floor(h * s));
  }

  /** target 0..1, color css */
  update(dt, target, color = '255,255,255') {
    this.intensity += (target - this.intensity) * Math.min(1, dt * 6);
    const { ctx, canvas } = this;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (this.intensity < 0.02) {
      this.canvas.style.opacity = '0';
      return;
    }
    this.canvas.style.opacity = '1';
    const cx = canvas.width / 2;
    const cy = canvas.height * 0.46;
    const R = Math.hypot(cx, cy);
    ctx.lineCap = 'round';
    for (const l of this.lines) {
      l.r += l.speed * dt * (0.8 + this.intensity);
      if (l.r > 1.2) Object.assign(l, this.#newLine(0));
      const r0 = l.r * R;
      const r1 = (l.r + l.len) * R;
      const alpha = Math.min(1, (l.r - 0.25) * 2) * 0.55 * this.intensity;
      if (alpha <= 0) continue;
      ctx.strokeStyle = `rgba(${color},${alpha.toFixed(3)})`;
      ctx.lineWidth = l.w;
      ctx.beginPath();
      ctx.moveTo(cx + Math.cos(l.a) * r0, cy + Math.sin(l.a) * r0);
      ctx.lineTo(cx + Math.cos(l.a) * r1, cy + Math.sin(l.a) * r1);
      ctx.stroke();
    }
    // Vinyet tepi
    const g = ctx.createRadialGradient(cx, cy, R * 0.45, cx, cy, R);
    g.addColorStop(0, 'rgba(0,0,0,0)');
    g.addColorStop(1, `rgba(8,20,40,${(0.35 * this.intensity).toFixed(3)})`);
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
}
