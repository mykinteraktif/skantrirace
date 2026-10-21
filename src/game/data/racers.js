/**
 * Lima pembalap lawan (AI). Nama diambil dari gunung di sekitar Singosari–Malang.
 *
 * skill      : faktor kecepatan puncak (0..1) terhadap kecepatan maksimum mobil
 * corner     : percepatan menyamping yang berani diambil di tikungan (m/s²) — makin besar makin nekat
 * line       : seberapa jauh mengambil sisi dalam tikungan (0 = selalu di tengah, 1 = penuh)
 * lane       : jalur favorit di lintasan lurus (-1 kiri … 1 kanan)
 * reaction   : jeda reaksi saat lampu hijau (detik)
 * aggression : kemauan menyalip & memakai nitro (0..1)
 * car        : jenis mobil yang dipakai (lihat data/cars.js)
 */
export const RIVALS = [
  { id: 'arjuno', name: 'ARJUNO', car: 'vortex', number: '02', color: 0x2563eb, skill: 0.95, corner: 15.0, line: 0.7, lane: 0.3, reaction: 0.18, aggression: 0.8 },
  { id: 'semeru', name: 'SEMERU', car: 'titan', number: '03', color: 0xf5b301, skill: 0.93, corner: 14.6, line: 0.6, lane: -0.4, reaction: 0.25, aggression: 0.6 },
  { id: 'bromo', name: 'BROMO', car: 'phantom', number: '04', color: 0x16a34a, skill: 0.91, corner: 14.2, line: 0.55, lane: 0.5, reaction: 0.3, aggression: 0.5 },
  { id: 'kawi', name: 'KAWI', car: 'skantri', number: '05', color: 0xf97316, skill: 0.9, corner: 13.6, line: 0.45, lane: -0.2, reaction: 0.22, aggression: 0.4 },
  { id: 'panderman', name: 'PANDERMAN', car: 'titan', number: '06', color: 0x9333ea, skill: 0.88, corner: 13.0, line: 0.4, lane: 0.0, reaction: 0.35, aggression: 0.3 },
];

/**
 * Tingkat kesulitan (dipilih di menu PENGATURAN).
 * speed  : pengali skill
 * corner : pengali keberanian menikung
 * catchUp: kekuatan "rubber band" agar persaingan tetap ketat
 */
// Hasil penyetelan lewat simulasi (tests/simulateRace.mjs), waktu lap melayang di Trek Mondoroko:
//   mudah ±43–47 dtk · normal ±40–43 dtk · sulit ±37–40 dtk · batas fisik mobil ±30 dtk
export const DIFFICULTY = {
  mudah: { speed: 0.86, corner: 0.66, catchUp: 0.6 },
  normal: { speed: 0.93, corner: 0.8, catchUp: 1.0 },
  sulit: { speed: 1.0, corner: 1.0, catchUp: 1.2 },
};

export const DEFAULT_DIFFICULTY = 'normal';

export const RACE_LAPS = 3; // bawaan; bisa diubah di PENGATURAN
export const LAP_CHOICES = [1, 2, 3, 5];
