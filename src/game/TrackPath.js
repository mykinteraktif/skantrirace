import { CatmullRomCurve3, Vector3 } from 'three';

/**
 * TrackPath — geometri "matematis" lintasan (tanpa mesh, tanpa DOM).
 *
 * Lintasan dibentuk dari kurva tertutup Catmull-Rom yang di-sampling dengan
 * jarak seragam. Data sampel dipakai untuk:
 *  - membangun mesh jalan/pembatas (Track.js)
 *  - proyeksi posisi mobil ke garis tengah: jarak tempuh (s) & offset lateral
 *  - collision dengan pembatas (cukup cek |lateral| > batas)
 *  - tinggi permukaan (ramp) dan kemiringannya
 *
 * Konvensi arah:
 *  tangent t = arah balap (searah s bertambah)
 *  side    = (-t.z, t.x) → sisi KANAN pengemudi. lateral > 0 berarti di kanan.
 */
export class TrackPath {
  constructor(def) {
    this.def = def;
    this.halfWidth = def.width / 2;
    this.curbWidth = def.curbWidth ?? 1.2;
    this.wallOffset = this.halfWidth + this.curbWidth + (def.wallGap ?? 0.8);

    const pts = def.points.map(([x, z, y = 0]) => new Vector3(x, y, z));
    this.curve = new CatmullRomCurve3(pts, true, 'centripetal');

    const approxLength = this.curve.getLength();
    const spacing = def.sampleSpacing ?? 2.5;
    const n = Math.max(200, Math.round(approxLength / spacing));
    this.count = n;

    const spaced = this.curve.getSpacedPoints(n); // n+1 titik, terakhir == pertama
    this.x = new Float32Array(n);
    this.y = new Float32Array(n);
    this.z = new Float32Array(n);
    this.tx = new Float32Array(n);
    this.tz = new Float32Array(n);
    this.sx = new Float32Array(n);
    this.sz = new Float32Array(n);
    this.s = new Float32Array(n);
    this.segLen = new Float32Array(n);
    this.curvature = new Float32Array(n);

    for (let i = 0; i < n; i++) {
      this.x[i] = spaced[i].x;
      this.y[i] = spaced[i].y;
      this.z[i] = spaced[i].z;
    }

    let total = 0;
    for (let i = 0; i < n; i++) {
      const j = (i + 1) % n;
      const dx = this.x[j] - this.x[i];
      const dz = this.z[j] - this.z[i];
      const len = Math.hypot(dx, dz);
      this.segLen[i] = len;
      this.s[i] = total;
      total += len;
    }
    this.length = total;

    // Tangent dengan beda tengah agar halus
    for (let i = 0; i < n; i++) {
      const a = (i - 1 + n) % n;
      const b = (i + 1) % n;
      let dx = this.x[b] - this.x[a];
      let dz = this.z[b] - this.z[a];
      const len = Math.hypot(dx, dz) || 1;
      dx /= len;
      dz /= len;
      this.tx[i] = dx;
      this.tz[i] = dz;
      this.sx[i] = -dz;
      this.sz[i] = dx;
    }

    // Kelengkungan bertanda (rad/m): > 0 = belok kanan, < 0 = belok kiri
    for (let i = 0; i < n; i++) {
      const a = (i - 1 + n) % n;
      const b = (i + 1) % n;
      const h0 = Math.atan2(this.tx[a], this.tz[a]);
      const h1 = Math.atan2(this.tx[b], this.tz[b]);
      let dh = h1 - h0;
      while (dh > Math.PI) dh -= Math.PI * 2;
      while (dh < -Math.PI) dh += Math.PI * 2;
      const ds = this.segLen[a] + this.segLen[i];
      // heading berkurang saat belok kanan (lihat Physics.js) → balik tanda
      this.curvature[i] = -dh / ds;
    }

    // Ramp: posisi didefinisikan sebagai fraksi panjang lintasan
    this.ramps = (def.ramps ?? []).map((r) => ({
      s0: r.at * this.length,
      length: r.length,
      height: r.height,
      lateral: r.lateral ?? 0,
      halfWidth: r.halfWidth ?? 3,
    }));

    this.bounds = this.#computeBounds();
  }

  #computeBounds() {
    let minX = Infinity, maxX = -Infinity, minZ = Infinity, maxZ = -Infinity;
    for (let i = 0; i < this.count; i++) {
      minX = Math.min(minX, this.x[i]);
      maxX = Math.max(maxX, this.x[i]);
      minZ = Math.min(minZ, this.z[i]);
      maxZ = Math.max(maxZ, this.z[i]);
    }
    return { minX, maxX, minZ, maxZ, cx: (minX + maxX) / 2, cz: (minZ + maxZ) / 2 };
  }

  wrap(i) {
    const n = this.count;
    return ((i % n) + n) % n;
  }

  wrapS(s) {
    const L = this.length;
    return ((s % L) + L) % L;
  }

  /** Indeks sampel untuk jarak tempuh s. */
  indexAt(s) {
    const n = this.count;
    const sw = this.wrapS(s);
    let i = Math.floor((sw / this.length) * n);
    i = Math.min(n - 1, Math.max(0, i));
    while (i > 0 && this.s[i] > sw) i--;
    while (i < n - 1 && this.s[i + 1] <= sw) i++;
    return i;
  }

  /** Titik + frame lokal pada jarak s (interpolasi linear antar sampel). */
  frameAt(s, out = {}) {
    const sw = this.wrapS(s);
    const i = this.indexAt(sw);
    const j = (i + 1) % this.count;
    const t = Math.min(1, Math.max(0, (sw - this.s[i]) / (this.segLen[i] || 1)));
    out.index = i;
    out.s = sw;
    out.x = this.x[i] + (this.x[j] - this.x[i]) * t;
    out.y = this.y[i] + (this.y[j] - this.y[i]) * t;
    out.z = this.z[i] + (this.z[j] - this.z[i]) * t;
    let tx = this.tx[i] + (this.tx[j] - this.tx[i]) * t;
    let tz = this.tz[i] + (this.tz[j] - this.tz[i]) * t;
    const len = Math.hypot(tx, tz) || 1;
    tx /= len;
    tz /= len;
    out.tx = tx;
    out.tz = tz;
    out.sx = -tz;
    out.sz = tx;
    out.heading = Math.atan2(tx, tz);
    return out;
  }

  /**
   * Proyeksikan titik (x, z) ke garis tengah lintasan.
   * hint = indeks sampel terakhir (pencarian lokal O(1)); -1 = cari seluruh lintasan.
   */
  project(x, z, hint = -1, out = {}) {
    const n = this.count;
    let best = -1;
    let bestD = Infinity;
    const W = 30;

    if (hint >= 0) {
      for (let k = -W; k <= W; k++) {
        const i = (hint + k + n) % n;
        const dx = x - this.x[i];
        const dz = z - this.z[i];
        const d = dx * dx + dz * dz;
        if (d < bestD) {
          bestD = d;
          best = i;
        }
      }
      // Hasil di tepi jendela atau terlalu jauh → lakukan pencarian penuh
      const edge = best === (hint + W) % n || best === (hint - W + n) % n;
      const far = bestD > (this.wallOffset + 8) ** 2;
      if (edge || far) return this.project(x, z, -1, out);
    } else {
      for (let i = 0; i < n; i++) {
        const dx = x - this.x[i];
        const dz = z - this.z[i];
        const d = dx * dx + dz * dz;
        if (d < bestD) {
          bestD = d;
          best = i;
        }
      }
    }

    // Haluskan: proyeksikan ke dua segmen di sekitar sampel terdekat
    let segA = best;
    let segT = 0;
    let segD = Infinity;
    for (let k = -1; k <= 0; k++) {
      const a = (best + k + n) % n;
      const b = (a + 1) % n;
      const ax = this.x[a], az = this.z[a];
      const dx = this.x[b] - ax;
      const dz = this.z[b] - az;
      const len2 = dx * dx + dz * dz || 1;
      let t = ((x - ax) * dx + (z - az) * dz) / len2;
      t = Math.min(1, Math.max(0, t));
      const cx = ax + dx * t;
      const cz = az + dz * t;
      const d = (x - cx) ** 2 + (z - cz) ** 2;
      if (d < segD) {
        segD = d;
        segA = a;
        segT = t;
      }
    }

    const a = segA;
    const b = (a + 1) % n;
    const t = segT;
    const cx = this.x[a] + (this.x[b] - this.x[a]) * t;
    const cz = this.z[a] + (this.z[b] - this.z[a]) * t;
    let tx = this.tx[a] + (this.tx[b] - this.tx[a]) * t;
    let tz = this.tz[a] + (this.tz[b] - this.tz[a]) * t;
    const len = Math.hypot(tx, tz) || 1;
    tx /= len;
    tz /= len;

    out.index = t < 0.5 ? a : b;
    out.s = this.s[a] + this.segLen[a] * t;
    out.x = cx;
    out.z = cz;
    out.y = this.y[a] + (this.y[b] - this.y[a]) * t;
    out.tx = tx;
    out.tz = tz;
    out.sx = -tz;
    out.sz = tx;
    out.lateral = (x - cx) * out.sx + (z - cz) * out.sz;
    out.distance = Math.sqrt(segD);
    out.dy = (this.y[b] - this.y[a]) / (this.segLen[a] || 1); // kemiringan jalan
    return out;
  }

  /**
   * Tinggi permukaan dan kemiringan (dh/ds) pada hasil proyeksi.
   * Dipakai fisika untuk ramp/lompatan.
   */
  surfaceAt(proj, out = {}) {
    let h = proj.y;
    let slope = proj.dy ?? 0;
    for (const r of this.ramps) {
      let ds = proj.s - r.s0;
      if (ds < -this.length / 2) ds += this.length;
      if (ds >= 0 && ds <= r.length && Math.abs(proj.lateral - r.lateral) <= r.halfWidth) {
        h += (r.height * ds) / r.length;
        slope += r.height / r.length;
      }
    }
    out.height = h;
    out.slope = slope;
    return out;
  }

  /** Kelengkungan maksimum (abs) dalam rentang jarak ke depan — dipakai AI & rambu. */
  maxCurvatureAhead(s, distance, step = 5) {
    let m = 0;
    for (let d = 0; d <= distance; d += step) {
      const i = this.indexAt(s + d);
      m = Math.max(m, Math.abs(this.curvature[i]));
    }
    return m;
  }

  /** Jari-jari tikungan minimum (m) — untuk validasi desain lintasan. */
  minRadius() {
    let maxK = 0;
    for (let i = 0; i < this.count; i++) maxK = Math.max(maxK, Math.abs(this.curvature[i]));
    return maxK > 0 ? 1 / maxK : Infinity;
  }
}
