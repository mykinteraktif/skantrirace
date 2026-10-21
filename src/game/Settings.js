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

export const DEFAULT_SETTINGS = {
  car: DEFAULT_CAR,
  track: DEFAULT_TRACK,
  difficulty: DEFAULT_DIFFICULTY,
  laps: RACE_LAPS,
  quality: 'otomatis',
  volume: 70,
  touch: 'otomatis',
  showFps: false,
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
