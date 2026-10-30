import { DEFAULT_CAR, CARS } from './data/cars.js';
import { DEFAULT_TRACK, TRACKS } from './data/tracks.js';
import { DEFAULT_DIFFICULTY, DIFFICULTY, RACE_LAPS, LAP_CHOICES } from './data/racers.js';

/**
 * Pengaturan pemain — disimpan di browser (localStorage) agar tetap ada saat game dibuka lagi.
 * Bila penyimpanan browser diblokir (mode privat, dsb.), game tetap berjalan dengan nilai bawaan.
 */
const KEY = 'skantri-race-settings-v1';

export const QUALITY = {
  rendah: { label: 'Rendah', pixelRatio: 0.75, shadows: false, shadowSize: 1024, decor: 0.5 },
  sedang: { label: 'Sedang', pixelRatio: 1, shadows: true, shadowSize: 1024, decor: 0.8 },
  tinggi: { label: 'Tinggi', pixelRatio: 1.5, shadows: true, shadowSize: 2048, decor: 1 },
};
export const QUALITY_CHOICES = ['otomatis', 'rendah', 'sedang', 'tinggi'];
export const TOUCH_CHOICES = ['otomatis', 'selalu', 'mati'];

// Mode 2 pemain (layar terbagi)
export const DUO_RIVAL_CHOICES = [0, 2, 4];
export const DUO_LAYOUTS = ['atas-bawah', 'kiri-kanan'];
export const DUO_DEFAULT_NAMES = ['PEMAIN 1', 'PEMAIN 2'];
export const NAME_MAX = 12;

/** Nama pemain: huruf kapital, angka, spasi, titik, tanda hubung; maks. 12 karakter. */
export function sanitizeName(name, fallback = '') {
  const clean = String(name ?? '')
    .toUpperCase()
    .replace(/[^A-Z0-9 .\-]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, NAME_MAX)
    .trim();
  return clean || fallback;
}

export const DEFAULT_SETTINGS = {
  car: DEFAULT_CAR,
  track: DEFAULT_TRACK,
  difficulty: DEFAULT_DIFFICULTY,
  laps: RACE_LAPS,
  quality: 'otomatis',
  volume: 70,
  touch: 'otomatis',
  showFps: false,
  duoCars: [DEFAULT_CAR, 'vortex'],
  duoNames: [...DUO_DEFAULT_NAMES],
  duoRivals: 4,
  duoLayout: 'atas-bawah',
  duoPadSwap: false,
  // Mode online (2 perangkat)
  netName: 'PEMAIN',
  netRivals: 2,
};

export function loadSettings() {
  let saved = {};
  try {
    saved = JSON.parse(localStorage.getItem(KEY) || '{}') || {};
  } catch {
    saved = {};
  }
  const s = { ...DEFAULT_SETTINGS, ...saved };
  // Validasi agar data lama/rusak tidak membuat game gagal dimuat
  if (!CARS[s.car]) s.car = DEFAULT_CAR;
  if (!TRACKS[s.track]) s.track = DEFAULT_TRACK;
  if (!DIFFICULTY[s.difficulty]) s.difficulty = DEFAULT_DIFFICULTY;
  if (!LAP_CHOICES.includes(s.laps)) s.laps = RACE_LAPS;
  if (!QUALITY_CHOICES.includes(s.quality)) s.quality = 'otomatis';
  if (!TOUCH_CHOICES.includes(s.touch)) s.touch = 'otomatis';
  s.volume = Math.max(0, Math.min(100, Number(s.volume) || 0));
  s.showFps = !!s.showFps;
  const cars = Array.isArray(s.duoCars) ? s.duoCars : [];
  s.duoCars = DEFAULT_SETTINGS.duoCars.map((d, i) => (CARS[cars[i]] ? cars[i] : d));
  const names = Array.isArray(s.duoNames) ? s.duoNames : [];
  s.duoNames = DUO_DEFAULT_NAMES.map((d, i) => sanitizeName(names[i], d));
  if (!DUO_RIVAL_CHOICES.includes(s.duoRivals)) s.duoRivals = DEFAULT_SETTINGS.duoRivals;
  if (!DUO_LAYOUTS.includes(s.duoLayout)) s.duoLayout = DEFAULT_SETTINGS.duoLayout;
  s.duoPadSwap = !!s.duoPadSwap;
  s.netName = sanitizeName(s.netName, DEFAULT_SETTINGS.netName);
  if (!DUO_RIVAL_CHOICES.includes(s.netRivals)) s.netRivals = DEFAULT_SETTINGS.netRivals;
  return s;
}

export function saveSettings(s) {
  try {
    localStorage.setItem(KEY, JSON.stringify(s));
    return true;
  } catch {
    return false;
  }
}

/** Perangkat layar sentuh? (dipakai untuk mode tombol sentuh "otomatis") */
export function isTouchDevice() {
  try {
    return window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  } catch {
    return false;
  }
}
