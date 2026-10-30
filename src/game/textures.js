import * as THREE from 'three';

/**
 * Tekstur prosedural berbasis <canvas> — semuanya dibuat sendiri (bebas hak cipta).
 * Setiap fungsi mengembalikan THREE.CanvasTexture yang siap pakai.
 */

function makeCanvas(w, h) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  return [c, c.getContext('2d')];
}

function toTexture(canvas, { srgb = true, repeat = true, anisotropy = 8 } = {}) {
  const tex = new THREE.CanvasTexture(canvas);
  if (repeat) tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  if (srgb) tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = anisotropy;
  return tex;
}

// Generator acak deterministik agar tampilan konsisten tiap dimuat
export function seededRandom(seed = 1) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

function speckle(ctx, w, h, count, colors, rand, size = 2) {
  for (let i = 0; i < count; i++) {
    ctx.fillStyle = colors[Math.floor(rand() * colors.length)];
    const r = size * (0.5 + rand());
    ctx.fillRect(rand() * w, rand() * h, r, r);
  }
}

/** Aspal: u = lebar jalan (0 kiri, 1 kanan), v = sepanjang jalan. */
export function roadTexture() {
  const W = 512, H = 512;
  const [c, ctx] = makeCanvas(W, H);
  const rand = seededRandom(7);
  ctx.fillStyle = '#3a3e46';
  ctx.fillRect(0, 0, W, H);
  speckle(ctx, W, H, 9000, ['#32363d', '#454a53', '#2c3036', '#4c515a'], rand, 2);
  // Bekas ban samar di jalur balap
  ctx.globalAlpha = 0.12;
  ctx.fillStyle = '#1c1f24';
  for (const u of [0.3, 0.38, 0.62, 0.7]) ctx.fillRect(u * W - 10, 0, 20, H);
  ctx.globalAlpha = 1;
  // Garis tepi putih
  ctx.fillStyle = '#f2f2f2';
  ctx.fillRect(W * 0.018, 0, W * 0.016, H);
  ctx.fillRect(W * (1 - 0.034), 0, W * 0.016, H);
  // Garis putus-putus di 1/3 dan 2/3 lebar jalan
  ctx.fillStyle = 'rgba(240,240,240,0.85)';
  for (const u of [1 / 3, 2 / 3]) ctx.fillRect(u * W - 3, 0, 6, H * 0.45);
  return toTexture(c);
}

/** Curb merah-putih (kerb). */
export function curbTexture() {
  const W = 64, H = 128;
  const [c, ctx] = makeCanvas(W, H);
  ctx.fillStyle = '#f4f4f4';
  ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = '#e02634';
  ctx.fillRect(0, 0, W, H / 2);
  ctx.fillStyle = 'rgba(0,0,0,0.15)';
  ctx.fillRect(0, H / 2 - 2, W, 4);
  ctx.fillRect(0, H - 2, W, 2);
  return toTexture(c);
}

/** Pembatas jalan: blok berselang-seling dengan sabuk atas & bawah. */
export function barrierTexture(colorA = '#e8303a', colorB = '#f4f4f4') {
  const W = 256, H = 64;
  const [c, ctx] = makeCanvas(W, H);
  ctx.fillStyle = colorA;
  ctx.fillRect(0, 0, W / 2, H);
  ctx.fillStyle = colorB;
  ctx.fillRect(W / 2, 0, W / 2, H);
  ctx.fillStyle = 'rgba(0,0,0,0.22)';
  ctx.fillRect(0, H - 10, W, 10);
  ctx.fillStyle = 'rgba(255,255,255,0.35)';
  ctx.fillRect(0, 0, W, 4);
  ctx.fillStyle = 'rgba(0,0,0,0.25)';
  ctx.fillRect(W / 2 - 1, 0, 2, H);
  ctx.fillRect(W - 2, 0, 2, H);
  return toTexture(c);
}

/** Kotak-kotak hitam putih untuk garis start/finis. */
export function checkerTexture(cols = 16, rows = 2) {
  const S = 32;
  const [c, ctx] = makeCanvas(cols * S, rows * S);
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      ctx.fillStyle = (x + y) % 2 === 0 ? '#f5f5f5' : '#111317';
      ctx.fillRect(x * S, y * S, S, S);
    }
  }
  const t = toTexture(c, { repeat: false });
  t.magFilter = THREE.NearestFilter;
  return t;
}

/** Spanduk gerbang start bergaya neon. */
export function bannerTexture(text = 'START', sub = '') {
  const W = 1024, H = 256;
  const [c, ctx] = makeCanvas(W, H);
  const g = ctx.createLinearGradient(0, 0, 0, H);
  g.addColorStop(0, '#0b1e3d');
  g.addColorStop(1, '#06101f');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, W, H);
  // Kotak-kotak di kiri & kanan
  const S = 28;
  for (const x0 of [24, W - 24 - S * 5]) {
    for (let y = 0; y < 6; y++) {
      for (let x = 0; x < 5; x++) {
        ctx.fillStyle = (x + y) % 2 ? '#f2f2f2' : '#10141b';
        ctx.fillRect(x0 + x * S, 44 + y * S, S, S);
      }
    }
  }
  // Bingkai neon
  ctx.strokeStyle = '#22d3ee';
  ctx.lineWidth = 8;
  ctx.shadowColor = '#22d3ee';
  ctx.shadowBlur = 24;
  ctx.strokeRect(10, 10, W - 20, H - 20);
  // Teks
  const maxWidth = W - 2 * 190; // ruang di antara blok kotak-kotak
  let size = 132;
  do {
    ctx.font = `italic 400 ${size}px "Russo One", "Segoe UI", sans-serif`;
    size -= 4;
  } while (ctx.measureText(text).width > maxWidth && size > 40);
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = '#7dd3fc';
  ctx.shadowBlur = 30;
  ctx.fillText(text, W / 2, H / 2 + (sub ? -16 : 6));
  if (sub) {
    ctx.shadowBlur = 0;
    ctx.font = '700 38px "Rajdhani", "Segoe UI", sans-serif';
    ctx.fillStyle = '#facc15';
    ctx.fillText(sub, W / 2, H - 46);
  }
  return toTexture(c, { repeat: false });
}

/** Rambu chevron kuning-hitam. flip = true → panah ke kiri. */
export function chevronTexture(flip = false) {
  const W = 256, H = 128;
  const [c, ctx] = makeCanvas(W, H);
  ctx.fillStyle = '#ffc61a';
  ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = '#16181d';
  ctx.fillRect(0, 0, W, 8);
  ctx.fillRect(0, H - 8, W, 8);
  const dir = flip ? -1 : 1;
  for (let i = 0; i < 3; i++) {
    const cx = W / 2 + (i - 1) * 72;
    ctx.beginPath();
    ctx.moveTo(cx - 22 * dir, 22);
    ctx.lineTo(cx + 18 * dir, H / 2);
    ctx.lineTo(cx - 22 * dir, H - 22);
    ctx.lineTo(cx - 2 * dir, H - 22);
    ctx.lineTo(cx + 38 * dir, H / 2);
    ctx.lineTo(cx - 2 * dir, 22);
    ctx.closePath();
    ctx.fill();
  }
  return toTexture(c, { repeat: false });
}

/** Permukaan ramp: garis diagonal kuning-hitam + panah naik. */
export function rampTexture() {
  const W = 256, H = 256;
  const [c, ctx] = makeCanvas(W, H);
  ctx.fillStyle = '#ffc61a';
  ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = '#16181d';
  for (let i = -W; i < W * 2; i += 64) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i + 32, 0);
    ctx.lineTo(i + 32 - H, H);
    ctx.lineTo(i - H, H);
    ctx.closePath();
    ctx.fill();
  }
  ctx.fillStyle = 'rgba(255,255,255,0.9)';
  ctx.beginPath();
  ctx.moveTo(W / 2, 40);
  ctx.lineTo(W / 2 + 60, 120);
  ctx.lineTo(W / 2 + 22, 120);
  ctx.lineTo(W / 2 + 22, 216);
  ctx.lineTo(W / 2 - 22, 216);
  ctx.lineTo(W / 2 - 22, 120);
  ctx.lineTo(W / 2 - 60, 120);
  ctx.closePath();
  ctx.fill();
  return toTexture(c, { repeat: false });
}

/** Pasir pantai. */
export function sandTexture(base = '#e6d29c') {
  const W = 256;
  const [c, ctx] = makeCanvas(W, W);
  const rand = seededRandom(11);
  ctx.fillStyle = base;
  ctx.fillRect(0, 0, W, W);
  speckle(ctx, W, W, 5000, ['#d9c288', '#efdcaa', '#cdb67c', '#f5e6bd'], rand, 1.6);
  return toTexture(c);
}

/** Rumput. */
export function grassTexture(base = '#6fae4f') {
  const W = 256;
  const [c, ctx] = makeCanvas(W, W);
  const rand = seededRandom(23);
  ctx.fillStyle = base;
  ctx.fillRect(0, 0, W, W);
  speckle(ctx, W, W, 7000, ['#5f9e42', '#7dbb5b', '#55913b', '#8ac765'], rand, 2);
  return toTexture(c);
}

/** Pelek roda (5 jari-jari) — membuat putaran roda terlihat jelas. */
export function rimTexture(accent = '#d1d5db') {
  const W = 128;
  const [c, ctx] = makeCanvas(W, W);
  const cx = W / 2;
  ctx.fillStyle = '#16181c';
  ctx.fillRect(0, 0, W, W);
  ctx.fillStyle = '#2a2d33';
  ctx.beginPath();
  ctx.arc(cx, cx, W * 0.4, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = accent;
  ctx.lineCap = 'round';
  ctx.lineWidth = 11;
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * Math.PI * 2;
    ctx.beginPath();
    ctx.moveTo(cx + Math.cos(a) * 8, cx + Math.sin(a) * 8);
    ctx.lineTo(cx + Math.cos(a) * W * 0.37, cx + Math.sin(a) * W * 0.37);
    ctx.stroke();
  }
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.arc(cx, cx, W * 0.38, 0, Math.PI * 2);
  ctx.stroke();
  ctx.fillStyle = '#e02634';
  ctx.beginPath();
  ctx.arc(cx, cx, 9, 0, Math.PI * 2);
  ctx.fill();
  return toTexture(c, { repeat: false });
}

/** Garis merah-putih horizontal (mercusuar). */
export function stripeTexture(a = '#e02634', b = '#f8f8f8', bands = 6) {
  const [c, ctx] = makeCanvas(16, 256);
  for (let i = 0; i < bands; i++) {
    ctx.fillStyle = i % 2 ? b : a;
    ctx.fillRect(0, (i / bands) * 256, 16, 256 / bands);
  }
  return toTexture(c);
}

/** Cahaya bulat lembut (underglow, partikel). */
export function glowTexture(color = '#22d3ee') {
  const W = 128;
  const [c, ctx] = makeCanvas(W, W);
  const g = ctx.createRadialGradient(W / 2, W / 2, 0, W / 2, W / 2, W / 2);
  g.addColorStop(0, color);
  g.addColorStop(0.45, color + '88');
  g.addColorStop(1, color + '00');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, W, W);
  return toTexture(c, { repeat: false });
}

/** Nomor balap pada pintu mobil (latar transparan). */
export function numberTexture(num = '01') {
  const W = 256, H = 148;
  const [c, ctx] = makeCanvas(W, H);
  ctx.font = 'italic 400 118px "Russo One", "Segoe UI", sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.lineWidth = 12;
  ctx.strokeStyle = '#0b0d12';
  ctx.strokeText(num, W / 2, H / 2 + 6);
  ctx.fillStyle = '#f8fafc';
  ctx.fillText(num, W / 2, H / 2 + 6);
  return toTexture(c, { repeat: false });
}

/** Papan nama di atas mobil lawan: [nomor] NAMA dengan strip warna tim. */
export function nameTagTexture(name, number, color = '#22d3ee') {
  const W = 512, H = 128;
  const [c, ctx] = makeCanvas(W, H);
  // Nama panjang (mis. nama siswa) → huruf diperkecil agar tetap muat di papan
  let size = 64;
  ctx.font = `italic 400 ${size}px "Russo One", "Segoe UI", sans-serif`;
  let textW = ctx.measureText(name).width;
  const room = W - 8 - 150;
  if (textW > room) {
    size = Math.max(30, Math.floor((size * room) / textW));
    ctx.font = `italic 400 ${size}px "Russo One", "Segoe UI", sans-serif`;
    textW = ctx.measureText(name).width;
  }
  const boxW = Math.min(W - 8, textW + 150);
  const x0 = (W - boxW) / 2;
  ctx.fillStyle = 'rgba(6, 16, 31, 0.82)';
  ctx.beginPath();
  ctx.moveTo(x0 + 18, 12);
  ctx.lineTo(x0 + boxW, 12);
  ctx.lineTo(x0 + boxW - 18, H - 12);
  ctx.lineTo(x0, H - 12);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = color;
  ctx.fillRect(x0 + 14, 12, 92, H - 24);
  ctx.fillStyle = '#ffffff';
  ctx.textBaseline = 'middle';
  ctx.textAlign = 'center';
  ctx.font = 'italic 400 54px "Russo One", "Segoe UI", sans-serif';
  ctx.fillText(number, x0 + 60, H / 2 + 3);
  ctx.textAlign = 'left';
  ctx.font = `italic 400 ${size}px "Russo One", "Segoe UI", sans-serif`;
  ctx.fillText(name, x0 + 120, H / 2 + 4, room);
  const t = toTexture(c, { repeat: false });
  return t;
}

/** Jendela-jendela rumah (dipakai sebagai map dinding). */
export function wallTexture() {
  const W = 128;
  const [c, ctx] = makeCanvas(W, W);
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, W, W);
  ctx.fillStyle = '#5b7083';
  for (const x of [22, 78]) ctx.fillRect(x, 38, 28, 30);
  ctx.fillStyle = '#7a5537';
  ctx.fillRect(52, 80, 24, 48);
  return toTexture(c);
}

// ------------------------------------------------------------------ Tahap 3: tema lintasan

/** Trotoar beton berpola ubin (Kota Modern). */
export function sidewalkTexture() {
  const W = 256;
  const [c, ctx] = makeCanvas(W, W);
  const rand = seededRandom(31);
  ctx.fillStyle = '#9aa1ab';
  ctx.fillRect(0, 0, W, W);
  speckle(ctx, W, W, 3000, ['#8f96a0', '#a7aeb8', '#959ca6'], rand, 1.5);
  ctx.strokeStyle = 'rgba(40,44,52,0.45)';
  ctx.lineWidth = 3;
  for (let i = 0; i <= 4; i++) {
    ctx.beginPath();
    ctx.moveTo(0, (i * W) / 4);
    ctx.lineTo(W, (i * W) / 4);
    ctx.moveTo((i * W) / 4, 0);
    ctx.lineTo((i * W) / 4, W);
    ctx.stroke();
  }
  return toTexture(c);
}

/** Aspal kota dengan marka parkir/blok samar. */
export function cityGroundTexture() {
  const W = 512;
  const [c, ctx] = makeCanvas(W, W);
  const rand = seededRandom(37);
  ctx.fillStyle = '#3b3f47';
  ctx.fillRect(0, 0, W, W);
  speckle(ctx, W, W, 8000, ['#353941', '#42464f', '#30343b'], rand, 2);
  ctx.fillStyle = 'rgba(230,230,230,0.25)';
  for (let i = 0; i < 8; i++) ctx.fillRect(40 + i * 56, 40, 4, 90);
  ctx.fillStyle = 'rgba(250,204,21,0.35)';
  ctx.fillRect(0, 300, W, 5);
  return toTexture(c);
}

/** Fasad gedung: jendela menyala/mati (dipakai sebagai map + emissiveMap). */
export function windowTexture(seed = 5) {
  const W = 256, H = 512;
  const [c, ctx] = makeCanvas(W, H);
  const [e, ectx] = makeCanvas(W, H);
  const rand = seededRandom(seed);
  ctx.fillStyle = '#d6dde6';
  ctx.fillRect(0, 0, W, H);
  ectx.fillStyle = '#000';
  ectx.fillRect(0, 0, W, H);
  const cols = 8, rows = 24;
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const px = 6 + x * (W / cols), py = 6 + y * (H / rows);
      const w = W / cols - 12, h = H / rows - 9;
      const lit = rand() < 0.42;
      ctx.fillStyle = lit ? '#fde68a' : rand() < 0.5 ? '#334155' : '#475569';
      ctx.fillRect(px, py, w, h);
      if (lit) {
        ectx.fillStyle = rand() < 0.8 ? '#ffd27a' : '#9be7ff';
        ectx.fillRect(px, py, w, h);
      }
    }
  }
  const map = toTexture(c);
  const emissive = toTexture(e);
  return { map, emissive };
}

/** Papan reklame neon dengan teks orisinal. */
export function billboardTexture(text, sub, colorA = '#22d3ee', colorB = '#f472b6') {
  const W = 512, H = 256;
  const [c, ctx] = makeCanvas(W, H);
  ctx.fillStyle = '#0b1020';
  ctx.fillRect(0, 0, W, H);
  ctx.strokeStyle = colorA;
  ctx.lineWidth = 10;
  ctx.shadowColor = colorA;
  ctx.shadowBlur = 24;
  ctx.strokeRect(14, 14, W - 28, H - 28);
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  let size = 96;
  do {
    ctx.font = `italic 400 ${size}px "Russo One", "Segoe UI", sans-serif`;
    size -= 4;
  } while (ctx.measureText(text).width > W - 70 && size > 30);
  ctx.fillStyle = '#ffffff';
  ctx.shadowColor = colorB;
  ctx.shadowBlur = 30;
  ctx.fillText(text, W / 2, H / 2 - (sub ? 22 : 0));
  if (sub) {
    ctx.shadowBlur = 0;
    ctx.font = '700 34px "Rajdhani", "Segoe UI", sans-serif';
    ctx.fillStyle = colorB;
    ctx.fillText(sub, W / 2, H - 58);
  }
  return toTexture(c, { repeat: false });
}

/** Pagar pengaman baja (guardrail) untuk pegunungan. */
export function guardrailTexture() {
  const W = 256, H = 64;
  const [c, ctx] = makeCanvas(W, H);
  ctx.fillStyle = '#6b7280';
  ctx.fillRect(0, 0, W, H);
  const g = ctx.createLinearGradient(0, 8, 0, 40);
  g.addColorStop(0, '#e5e7eb');
  g.addColorStop(0.5, '#9ca3af');
  g.addColorStop(1, '#e5e7eb');
  ctx.fillStyle = g;
  ctx.fillRect(0, 8, W, 32);
  ctx.fillStyle = '#374151';
  ctx.fillRect(0, 44, W, 20);
  ctx.fillStyle = '#facc15';
  for (let x = 0; x < W; x += 128) ctx.fillRect(x + 56, 18, 16, 12); // reflektor
  return toTexture(c);
}

/** Pembatas beton kota dengan garis reflektif. */
export function concreteBarrierTexture(stripe = '#22d3ee') {
  const W = 256, H = 64;
  const [c, ctx] = makeCanvas(W, H);
  const rand = seededRandom(41);
  ctx.fillStyle = '#4b5563';
  ctx.fillRect(0, 0, W, H);
  speckle(ctx, W, H, 1500, ['#434b57', '#566070'], rand, 1.4);
  ctx.fillStyle = stripe;
  ctx.fillRect(0, 10, W, 7);
  ctx.fillStyle = 'rgba(0,0,0,0.35)';
  ctx.fillRect(W - 3, 0, 3, H);
  return toTexture(c);
}

/** Lapisan batuan gurun (mesa). */
export function strataTexture() {
  const W = 64, H = 256;
  const [c, ctx] = makeCanvas(W, H);
  const rand = seededRandom(43);
  const cols = ['#b45f2c', '#c97b3f', '#a14d22', '#d9955a', '#8f4320'];
  let y = 0;
  while (y < H) {
    const h = 8 + rand() * 26;
    ctx.fillStyle = cols[Math.floor(rand() * cols.length)];
    ctx.fillRect(0, y, W, h);
    y += h;
  }
  speckle(ctx, W, H, 600, ['rgba(0,0,0,0.12)', 'rgba(255,255,255,0.08)'], rand, 2);
  return toTexture(c);
}

/** Air sungai bergaris (digeser tiap frame agar tampak mengalir). */
export function waterTexture(base = '#2f80b4') {
  const W = 128, H = 256;
  const [c, ctx] = makeCanvas(W, H);
  const rand = seededRandom(47);
  ctx.fillStyle = base;
  ctx.fillRect(0, 0, W, H);
  ctx.strokeStyle = 'rgba(255,255,255,0.35)';
  ctx.lineWidth = 2;
  for (let i = 0; i < 40; i++) {
    const x = rand() * W, y = rand() * H, l = 10 + rand() * 30;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y + l);
    ctx.stroke();
  }
  return toTexture(c);
}
