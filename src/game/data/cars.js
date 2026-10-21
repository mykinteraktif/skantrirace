/**
 * Spesifikasi 4 mobil (satuan SI: meter, detik).
 *
 * stats (1–10) untuk tampilan menu; perilaku nyata ditentukan oleh nilai `physics`:
 *   kecepatan  → maxSpeed          akselerasi → accel
 *   handling   → steerRate, highSpeedSteer (kemudi di kecepatan tinggi), grip
 *   nitro      → nitro.boostSpeed / boostAccel / drain (lama tangki habis)
 * mass memengaruhi tabrakan antar-mobil; wallLoss < 1 = tidak banyak kehilangan kecepatan saat menabrak pembatas.
 * aiCorner: pengali keberanian menikung untuk AI yang memakai mobil ini (agar handling terasa juga pada lawan).
 *
 * shape: parameter model prosedural (lihat CarModels.js). Profil bodi berupa irisan samping [z, y].
 */
export const CARS = {
  skantri: {
    id: 'skantri',
    name: 'SKANTRI',
    tagline: 'Akselerasi tinggi',
    color: 0xd9262f,
    accent: 0x111318,
    glow: '#22d3ee',
    number: '01',
    stats: { speed: 7, accel: 10, handling: 7, nitro: 7 },
    physics: {
      maxSpeed: 57, // m/s ≈ 205 km/j
      accel: 30,
      brake: 42,
      reverseMax: 14,
      coastDecel: 5,
      steerRate: 2.3,
      highSpeedSteer: 0.5,
      grip: 9,
      driftGrip: 1.6,
      halfWidth: 1.1,
      halfLength: 2.3,
      mass: 1,
      wallLoss: 1,
      aiCorner: 1,
      nitro: { boostAccel: 20, boostSpeed: 12, drain: 0.34, regen: 0.045, driftRegen: 0.22 },
    },
    shape: {
      model: 'wedge',
      width: 1.96,
      body: [[-2.2, 0.3], [2.12, 0.3], [2.28, 0.44], [2.05, 0.62], [0.95, 0.8], [-1.55, 0.9], [-2.22, 0.86], [-2.28, 0.52]],
      cabin: [[-1.35, 0.82], [0.85, 0.8], [0.12, 1.24], [-0.95, 1.27], [-1.5, 0.96]],
      cabinWidth: 1.4,
      wheelR: 0.38,
      axleF: 1.38,
      axleR: -1.42,
      track: 0.93,
      wing: { type: 'tall', z: -1.98, y: 1.32, width: 2.1 },
      nose: 2.17,
      tail: -2.32,
    },
  },

  vortex: {
    id: 'vortex',
    name: 'VORTEX',
    tagline: 'Kecepatan maksimum tinggi',
    color: 0x1d4ed8,
    accent: 0x0b1020,
    glow: '#38bdf8',
    number: '07',
    stats: { speed: 10, accel: 6, handling: 6, nitro: 8 },
    physics: {
      maxSpeed: 62, // ≈ 223 km/j
      accel: 24,
      brake: 40,
      reverseMax: 14,
      coastDecel: 4.5,
      steerRate: 2.15,
      highSpeedSteer: 0.45,
      grip: 8.5,
      driftGrip: 1.5,
      halfWidth: 1.1,
      halfLength: 2.5,
      mass: 0.95,
      wallLoss: 1.05,
      aiCorner: 0.95,
      nitro: { boostAccel: 18, boostSpeed: 14, drain: 0.36, regen: 0.045, driftRegen: 0.22 },
    },
    shape: {
      model: 'arrow',
      width: 2.0,
      body: [[-2.4, 0.28], [2.42, 0.26], [2.52, 0.36], [2.2, 0.5], [0.9, 0.7], [-1.6, 0.82], [-2.38, 0.8], [-2.46, 0.5]],
      cabin: [[-0.95, 0.74], [1.1, 0.68], [0.35, 1.06], [-0.55, 1.1], [-1.25, 0.86]],
      cabinWidth: 1.3,
      wheelR: 0.37,
      axleF: 1.55,
      axleR: -1.55,
      track: 0.95,
      wing: { type: 'duck', z: -2.3, y: 0.86, width: 1.9 },
      nose: 2.46,
      tail: -2.5,
    },
  },

  phantom: {
    id: 'phantom',
    name: 'PHANTOM',
    tagline: 'Handling unggul',
    color: 0x3b0764,
    accent: 0x0a0612,
    glow: '#e879f9',
    number: '13',
    stats: { speed: 6, accel: 7, handling: 10, nitro: 6 },
    physics: {
      maxSpeed: 56, // ≈ 202 km/j
      accel: 26,
      brake: 46,
      reverseMax: 14,
      coastDecel: 5,
      steerRate: 2.65,
      highSpeedSteer: 0.64,
      grip: 11.5,
      driftGrip: 2.2,
      halfWidth: 1.08,
      halfLength: 2.2,
      mass: 0.95,
      wallLoss: 1,
      aiCorner: 1.1,
      nitro: { boostAccel: 18, boostSpeed: 11, drain: 0.36, regen: 0.045, driftRegen: 0.26 },
    },
    shape: {
      model: 'phantom',
      width: 2.0,
      body: [[-2.15, 0.3], [2.1, 0.28], [2.24, 0.4], [1.9, 0.56], [0.8, 0.72], [-1.4, 0.78], [-2.15, 0.74], [-2.22, 0.5]],
      cabinWidth: 1.36,
      wheelR: 0.38,
      axleF: 1.36,
      axleR: -1.38,
      track: 0.94,
      wing: { type: 'none' },
      nose: 2.16,
      tail: -2.24,
    },
  },

  titan: {
    id: 'titan',
    name: 'TITAN',
    tagline: 'Seimbang & stabil',
    color: 0xe0a106,
    accent: 0x15171c,
    glow: '#fbbf24',
    number: '88',
    stats: { speed: 8, accel: 7, handling: 8, nitro: 9 },
    physics: {
      maxSpeed: 58.5, // ≈ 211 km/j
      accel: 25.5,
      brake: 43,
      reverseMax: 14,
      coastDecel: 5,
      steerRate: 2.35,
      highSpeedSteer: 0.55,
      grip: 10.5,
      driftGrip: 1.9,
      halfWidth: 1.15,
      halfLength: 2.35,
      mass: 1.4, // berat: tidak mudah terdorong mobil lain
      wallLoss: 0.7, // stabil: kehilangan kecepatan lebih kecil saat menyentuh pembatas
      aiCorner: 1.02,
      nitro: { boostAccel: 19, boostSpeed: 12, drain: 0.26, regen: 0.05, driftRegen: 0.2 },
    },
    shape: {
      model: 'titan',
      width: 2.1,
      body: [[-2.25, 0.32], [2.15, 0.32], [2.3, 0.5], [2.22, 0.72], [1.0, 0.86], [-2.2, 0.92], [-2.3, 0.6]],
      cabin: [[-1.45, 0.88], [0.8, 0.86], [0.25, 1.36], [-1.1, 1.4], [-1.62, 1.0]],
      cabinWidth: 1.62,
      wheelR: 0.41,
      axleF: 1.42,
      axleR: -1.45,
      track: 0.97,
      wing: { type: 'gt', z: -2.05, y: 1.42, width: 2.2 },
      nose: 2.27,
      tail: -2.3,
    },
  },
};

export const CAR_ORDER = ['skantri', 'vortex', 'phantom', 'titan'];
export const DEFAULT_CAR = 'skantri';
