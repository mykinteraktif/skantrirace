/**
 * Definisi 4 lintasan SKANTRI RACE.
 *
 * points : titik kontrol [x, z, y?] (meter) untuk kurva tertutup, urut searah balap.
 *          Titik pertama = garis START/FINIS (selalu di tengah lurusan).
 * ramps  : at = posisi sebagai fraksi panjang lintasan (0..1).
 * items  : Speed Orb / Shield (type 'speed' | 'shield') dan Turbo Ring ('turbo').
 * bridge : rentang (fraksi) jalan di atas jembatan — tanpa tanggul, dengan tiang & sungai di bawahnya.
 * portals: gerbang futuristik (visual).
 *
 * Semua titik kontrol sudah divalidasi: tidak ada bagian lintasan yang saling bersinggungan,
 * dan radius tikungan tersempit dicatat di bawah (lihat tests/logic.test.mjs).
 */
export const TRACKS = {
  // R min ±29 m · ±1,58 km · 1 ramp
  'trek-mondoroko': {
    id: 'trek-mondoroko',
    name: 'Trek Mondoroko',
    tagline: 'Pantai tropis, tikungan lebar',
    width: 16,
    points: [
      [-40, -200], [80, -200], [170, -185], [225, -130], [235, -50],
      [205, 20], [140, 55], [105, 115], [125, 180], [95, 240],
      [10, 262], [-80, 240], [-130, 175], [-125, 95], [-170, 35],
      [-230, -15], [-248, -105], [-205, -178], [-130, -200],
    ],
    ramps: [{ at: 0.518, length: 12, height: 1.6, lateral: 0, halfWidth: 3.5 }],
    items: [
      { at: 0.045, lateral: 3.2, type: 'turbo' },
      { at: 0.16, lateral: -3.6, type: 'speed' },
      { at: 0.16, lateral: 3.6, type: 'shield' },
      { at: 0.4, lateral: -3.6, type: 'shield' },
      { at: 0.4, lateral: 3.6, type: 'speed' },
      { at: 0.68, lateral: -3, type: 'turbo' },
      { at: 0.8, lateral: -3.6, type: 'speed' },
      { at: 0.8, lateral: 3.6, type: 'shield' },
    ],
    theme: {
      kind: 'tropis',
      sky: { turbidity: 2.2, rayleigh: 1.1, elevation: 38, azimuth: 135, clouds: 0.35 },
      exposure: 0.85,
      sun: { color: 0xfff1dc, intensity: 2.6 },
      hemi: { sky: 0xcfe8ff, ground: 0xe3cf9a, intensity: 0.9 },
      fogColor: 0xbfe2f2,
      fogNear: 180,
      fogFar: 950,
      ground: 0xe6d29c,
      shoulder: 0x6fae4f,
      sea: 0x1592b8,
      barrierA: '#e8303a',
      barrierB: '#f4f4f4',
    },
  },

  // R min ±21 m (chicane) · ±1,63 km · tikungan siku khas jalan kota
  'kota-modern': {
    id: 'kota-modern',
    name: 'Kota Modern',
    tagline: 'Gedung tinggi & lampu neon',
    width: 15,
    points: [
      [-60, -150], [90, -150], [200, -150], [245, -135], [262, -95], [262, 20], [248, 65],
      [205, 85], [120, 88], [80, 105], [66, 150], [66, 215], [48, 255], [5, 268], [-120, 268],
      [-170, 255], [-192, 215], [-192, 120], [-185, 75], [-160, 45], [-160, 20], [-190, -15],
      [-200, -60], [-200, -100], [-188, -138], [-150, -150],
    ],
    ramps: [],
    items: [
      { at: 0.06, lateral: -3, type: 'turbo' },
      { at: 0.25, lateral: -3.4, type: 'speed' },
      { at: 0.25, lateral: 3.4, type: 'shield' },
      { at: 0.475, lateral: 3.4, type: 'speed' },
      { at: 0.475, lateral: -3.4, type: 'shield' },
      { at: 0.6, lateral: 3, type: 'turbo' },
      { at: 0.72, lateral: -3.4, type: 'speed' },
      { at: 0.72, lateral: 3.4, type: 'shield' },
    ],
    theme: {
      kind: 'kota',
      sky: { turbidity: 6, rayleigh: 2.4, elevation: 5, azimuth: 250, clouds: 0.45 },
      exposure: 0.62,
      sun: { color: 0xffb36b, intensity: 1.6 },
      hemi: { sky: 0x8aa4d6, ground: 0x2b2f3a, intensity: 0.85 },
      fogColor: 0x8e88a8,
      fogNear: 160,
      fogFar: 820,
      ground: 0x3b3f47,
      shoulder: 0x9aa1ab,
      barrierA: '#1e293b',
      barrierB: '#22d3ee',
      neon: ['#22d3ee', '#f472b6', '#a3e635', '#facc15'],
    },
  },

  // R min ±21 m (hairpin) · ±1,31 km · tanjakan s.d. 7 m · jembatan di atas sungai
  pegunungan: {
    id: 'pegunungan',
    name: 'Pegunungan',
    tagline: 'Tebing, jembatan & tikungan tajam',
    width: 14,
    points: [
      [0, 0, 0], [120, 0, 0], [200, -8, 1.5], [250, -45, 4], [262, -95, 6], [248, -135, 7],
      [212, -142, 7], [188, -118, 6.5], [170, -80, 5], [130, -58, 3.5], [85, -80, 2], [55, -135, 2],
      [15, -170, 5], [-55, -172, 6.5], [-110, -150, 6], [-150, -100, 4.5], [-215, -85, 3],
      [-250, -40, 2], [-235, 15, 1], [-180, 30, 0.5], [-120, 10, 0],
    ],
    ramps: [],
    bridge: { from: 0.53, to: 0.578 },
    items: [
      { at: 0.06, lateral: 3, type: 'turbo' },
      { at: 0.16, lateral: -3.2, type: 'shield' },
      { at: 0.16, lateral: 3.2, type: 'speed' },
      { at: 0.45, lateral: -3.2, type: 'speed' },
      { at: 0.45, lateral: 3.2, type: 'shield' },
      { at: 0.7, lateral: -3.2, type: 'speed' },
      { at: 0.7, lateral: 3.2, type: 'shield' },
      { at: 0.93, lateral: -3, type: 'turbo' },
    ],
    theme: {
      kind: 'gunung',
      sky: { turbidity: 1.6, rayleigh: 0.9, elevation: 32, azimuth: 60, clouds: 0.5 },
      exposure: 0.8,
      sun: { color: 0xfff6e8, intensity: 2.4 },
      hemi: { sky: 0xd7ecff, ground: 0x51683c, intensity: 1.0 },
      fogColor: 0xc4d6e4,
      fogNear: 150,
      fogFar: 900,
      ground: 0x5f8a43,
      shoulder: 0x5b8a3f,
      river: 0x2f80b4,
      barrierA: '#cbd5e1',
      barrierB: '#f8fafc',
    },
  },

  // R min ±33 m · ±1,68 km · 3 ramp · portal futuristik
  'gurun-4d': {
    id: 'gurun-4d',
    name: 'Gurun 4D',
    tagline: 'Ramp, batuan & portal futuristik',
    width: 17,
    points: [
      [0, 0], [180, 0], [320, 20], [400, 90], [400, 190], [330, 250], [230, 240],
      [170, 300], [60, 330], [-80, 320], [-200, 260], [-260, 160], [-230, 60], [-140, 10],
    ],
    ramps: [
      { at: 0.11, length: 12, height: 1.7, lateral: -3.6, halfWidth: 3.6 },
      { at: 0.595, length: 14, height: 2.1, lateral: 0, halfWidth: 4 },
      { at: 0.65, length: 12, height: 1.6, lateral: 3.6, halfWidth: 3.6 },
    ],
    portals: [0.05, 0.36, 0.72, 0.9],
    items: [
      { at: 0.075, lateral: 3.6, type: 'turbo' },
      { at: 0.22, lateral: -3.8, type: 'speed' },
      { at: 0.22, lateral: 3.8, type: 'shield' },
      { at: 0.45, lateral: -3.8, type: 'shield' },
      { at: 0.45, lateral: 3.8, type: 'speed' },
      { at: 0.62, lateral: -4, type: 'turbo' },
      { at: 0.82, lateral: -3.8, type: 'speed' },
      { at: 0.82, lateral: 3.8, type: 'shield' },
    ],
    theme: {
      kind: 'gurun',
      sky: { turbidity: 4, rayleigh: 1.4, elevation: 46, azimuth: 200, clouds: 0.12 },
      exposure: 0.78,
      sun: { color: 0xffe2b8, intensity: 2.8 },
      hemi: { sky: 0xf2dfc2, ground: 0xc98f52, intensity: 0.95 },
      fogColor: 0xe9cfa5,
      fogNear: 200,
      fogFar: 1000,
      ground: 0xdcae72,
      shoulder: 0xd39f62,
      barrierA: '#f97316',
      barrierB: '#fef3c7',
    },
  },
};

export const TRACK_ORDER = ['trek-mondoroko', 'kota-modern', 'pegunungan', 'gurun-4d'];
export const DEFAULT_TRACK = 'trek-mondoroko';
