import logoUrl from '../assets/logo-smks-pgri-singosari.png';
import { formatTime } from '../game/RaceManager.js';
import { TrackPath } from '../game/TrackPath.js';
import { CARS, CAR_ORDER } from '../game/data/cars.js';
import { TRACKS, TRACK_ORDER } from '../game/data/tracks.js';
import { DIFFICULTY, LAP_CHOICES, RIVALS } from '../game/data/racers.js';
import { ITEM_TYPES } from '../game/data/items.js';
import { QUALITY_CHOICES, TOUCH_CHOICES } from '../game/Settings.js';

/**
 * Menu.js — semua layar di luar balapan:
 * utama · pilih mobil · pilih lintasan · pengaturan · petunjuk · jeda · hasil balapan.
 */
export const CREDIT = {
  developer: 'Mohammad Yusron Kholish, S.Kom',
  school: 'SMKS PGRI SINGOSARI',
};
export const STAGE_LABEL = 'Tahap 3 · Versi lengkap';

const ICON = {
  flag: '<svg viewBox="0 0 24 24"><path d="M5 3v18M5 4h12l-2 4 2 4H5" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M8 4h3v4H8zM11 8h3v4h-3z" fill="currentColor"/></svg>',
  car: '<svg viewBox="0 0 24 24"><path d="M3 15l2-5 3-3h7l4 4 2 1v3h-2M3 15h2m13 0H9" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><circle cx="7" cy="16" r="2" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17" cy="16" r="2" fill="none" stroke="currentColor" stroke-width="2"/></svg>',
  route: '<svg viewBox="0 0 24 24"><circle cx="6" cy="18" r="2.5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="18" cy="6" r="2.5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M8.5 18H15a3 3 0 0 0 0-6H9a3 3 0 0 1 0-6h6.5" fill="none" stroke="currentColor" stroke-width="2"/></svg>',
  cone: '<svg viewBox="0 0 24 24"><path d="M10 3h4l5 16H5z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M8.2 11h7.6M6.9 15h10.2M3 20h18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  gear: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3.2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  book: '<svg viewBox="0 0 24 24"><path d="M3 5c3-1 6-1 9 1 3-2 6-2 9-1v14c-3-1-6-1-9 1-3-2-6-2-9-1z M12 6v14" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>',
  play: '<svg viewBox="0 0 24 24"><path d="M7 4l13 8-13 8z" fill="currentColor"/></svg>',
  retry: '<svg viewBox="0 0 24 24"><path d="M4 12a8 8 0 1 0 3-6.2M4 4v5h5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  home: '<svg viewBox="0 0 24 24"><path d="M3 11l9-7 9 7M6 9v11h12V9" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>',
  arrow: '<svg viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  back: '<svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  check: '<svg viewBox="0 0 24 24"><path d="M5 12l5 5 9-10" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  trophy: '<svg viewBox="0 0 24 24"><path d="M7 4h10v5a5 5 0 0 1-10 0zM7 6H4a3 3 0 0 0 3 4M17 6h3a3 3 0 0 1-3 4M12 14v4M8 21h8M9 18h6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
};

const DIFF_LABEL = { mudah: 'Mudah', normal: 'Normal', sulit: 'Sulit' };
const QUALITY_LABEL = { otomatis: 'Otomatis', rendah: 'Rendah', sedang: 'Sedang', tinggi: 'Tinggi' };
const TOUCH_LABEL = { otomatis: 'Otomatis', selalu: 'Selalu', mati: 'Mati' };

const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
const kmh = (ms) => Math.round(ms * 3.6);
const num = (v, d = 1) => v.toLocaleString('id-ID', { minimumFractionDigits: d, maximumFractionDigits: d });

function statBar(label, value, key = '') {
  return `<div class="stat"><span>${label}</span><i><b ${key ? `data-stat="${key}"` : ''} style="width:${value * 10}%"></b></i></div>`;
}

function segmented(name, choices, labels) {
  return `<div class="seg" role="radiogroup" data-seg="${name}">${choices
    .map((c) => `<button type="button" role="radio" data-val="${c}">${esc(labels[c] ?? c)}</button>`)
    .join('')}</div>`;
}

/** Info ringkas lintasan untuk kartu: panjang, jumlah tikungan, fitur. */
function trackInfo(def) {
  const p = new TrackPath(def);
  let corners = 0, inC = false, maxK = 0;
  for (let i = 0; i < p.count; i++) {
    const k = Math.abs(p.curvature[i]);
    maxK = Math.max(maxK, k);
    const c = k > 1 / 80;
    if (c && !inC) corners++;
    inC = c;
  }
  const feats = [];
  if (def.ramps?.length) feats.push(`${def.ramps.length} ramp`);
  if (def.bridge) feats.push('jembatan');
  if (def.portals?.length) feats.push(`${def.portals.length} portal`);
  let climb = 0;
  for (let i = 0; i < p.count; i++) climb = Math.max(climb, p.y[i]);
  if (climb > 1) feats.push(`tanjakan ${Math.round(climb)} m`);
  return { path: p, length: p.length, corners, minR: 1 / maxK, feats };
}

function drawTrackThumb(canvas, def, info) {
  const ctx = canvas.getContext('2d');
  const W = canvas.width, H = canvas.height;
  const bg = { tropis: ['#0e7490', '#155e75'], kota: ['#312e81', '#0f172a'], gunung: ['#166534', '#14532d'], gurun: ['#c2410c', '#7c2d12'] }[def.theme.kind];
  const g = ctx.createLinearGradient(0, 0, W, H);
  g.addColorStop(0, bg[0]);
  g.addColorStop(1, bg[1]);
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, W, H);
  const p = info.path;
  const b = p.bounds;
  const pad = 18;
  const sc = Math.min((W - pad * 2) / (b.maxX - b.minX), (H - pad * 2) / (b.maxZ - b.minZ));
  const ox = (W - (b.maxX - b.minX) * sc) / 2, oz = (H - (b.maxZ - b.minZ) * sc) / 2;
  ctx.beginPath();
  for (let i = 0; i <= p.count; i++) {
    const k = i % p.count;
    const x = ox + (p.x[k] - b.minX) * sc, y = oz + (p.z[k] - b.minZ) * sc;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.lineJoin = 'round';
  ctx.strokeStyle = 'rgba(2,6,23,0.6)';
  ctx.lineWidth = 10;
  ctx.stroke();
  ctx.strokeStyle = '#f8fafc';
  ctx.lineWidth = 5;
  ctx.stroke();
  const f = p.frameAt(0);
  ctx.fillStyle = '#facc15';
  ctx.beginPath();
  ctx.arc(ox + (f.x - b.minX) * sc, oz + (f.z - b.minZ) * sc, 6, 0, Math.PI * 2);
  ctx.fill();
}

export class Menu {
  /**
   * cb: { onRace, onPractice, onResume, onRestart, onMenu, onPreviewCar, onConfirmCar, onCancelCar, onSelectTrack, onSettings, onScreen }
   */
  constructor(root, settings, cb) {
    this.root = root;
    this.cb = cb;
    this.settings = settings;
    this.garageCar = settings.car;
    this.trackInfo = Object.fromEntries(TRACK_ORDER.map((id) => [id, trackInfo(TRACKS[id])]));

    const carCards = CAR_ORDER.map((id) => {
      const c = CARS[id];
      return `<button class="car-card" data-car="${id}" style="--car:#${c.color.toString(16).padStart(6, '0')}">
        <span class="thumb"><img data-thumb="${id}" alt="" width="320" height="180" /></span>
        <b>${c.name}</b><em>${esc(c.tagline)}</em></button>`;
    }).join('');

    const trackCards = TRACK_ORDER.map((id) => {
      const d = TRACKS[id];
      const info = this.trackInfo[id];
      return `<button class="track-card" data-track="${id}">
        <canvas width="320" height="180" data-track-thumb="${id}"></canvas>
        <b>${d.name}</b><em>${esc(d.tagline)}</em>
        <small>${num(info.length / 1000, 2)} km · ${info.corners} tikungan${info.feats.length ? ' · ' + info.feats.join(' · ') : ''}</small>
      </button>`;
    }).join('');

    root.innerHTML = /* html */ `
      <section class="screen screen-main" data-screen="main">
        <div class="main-left">
          <div class="brand">
            <img class="brand-logo" src="${logoUrl}" alt="Logo ${CREDIT.school}" width="249" height="238" />
            <div class="logo-top"><span class="logo-main">SKANTRI</span><span class="logo-accent">RACE</span></div>
          </div>
          <div class="logo-bars">
            <div class="logo-sub">CHAMPIONS RACING</div>
            <div class="logo-tag">BALAP · TANTANG · TINGKATKAN · JADI JUARA</div>
          </div>
          <nav class="menu-list">
            <button class="menu-btn primary" data-action="race">${ICON.flag}<span>MULAI BALAP</span>${ICON.arrow}</button>
            <button class="menu-btn" data-action="garage">${ICON.car}<span>PILIH MOBIL</span></button>
            <button class="menu-btn" data-action="tracks">${ICON.route}<span>PILIH LINTASAN</span></button>
            <button class="menu-btn" data-action="practice">${ICON.cone}<span>LATIHAN BEBAS</span></button>
            <button class="menu-btn" data-action="settings">${ICON.gear}<span>PENGATURAN</span></button>
            <button class="menu-btn" data-action="help">${ICON.book}<span>PETUNJUK</span></button>
          </nav>
          <div class="credit">
            <span>PENGEMBANG</span>
            <b>${CREDIT.developer}</b>
            <em>${CREDIT.school} · ${STAGE_LABEL}</em>
          </div>
        </div>

        <aside class="info-card" data-info></aside>

        <div class="slogan"><span class="slogan-main">MANTAP</span><span class="slogan-sub">Mandiri Aktif Terampil dan Berprestasi</span></div>
      </section>

      <section class="screen screen-garage" data-screen="garage" hidden>
        <header class="scr-head">
          <button class="menu-btn small ghost" data-action="garage-cancel">${ICON.back}<span>KEMBALI</span></button>
          <h2>PILIH MOBIL</h2>
        </header>
        <div class="garage-panel" data-garage-panel></div>
        <div class="car-strip">${carCards}</div>
        <button class="menu-btn primary use-btn" data-action="garage-use">${ICON.check}<span>GUNAKAN</span></button>
      </section>

      <section class="screen screen-tracks" data-screen="tracks" hidden>
        <header class="scr-head">
          <button class="menu-btn small ghost" data-action="back">${ICON.back}<span>KEMBALI</span></button>
          <h2>PILIH LINTASAN</h2>
        </header>
        <div class="track-grid">${trackCards}</div>
        <p class="scr-note">Lintasan yang dipilih langsung tampil di latar belakang. Tekan <kbd>Esc</kbd> atau KEMBALI bila sudah.</p>
      </section>

      <section class="screen screen-settings" data-screen="settings" hidden>
        <div class="modal settings">
          <h2>PENGATURAN</h2>
          <div class="set-grid">
            <label>Tingkat kesulitan</label>${segmented('difficulty', Object.keys(DIFFICULTY), DIFF_LABEL)}
            <label>Jumlah lap</label>${segmented('laps', LAP_CHOICES.map(String), Object.fromEntries(LAP_CHOICES.map((l) => [String(l), `${l} lap`])))}
            <label>Kualitas grafis</label>${segmented('quality', QUALITY_CHOICES, QUALITY_LABEL)}
            <label>Tombol sentuh</label>${segmented('touch', TOUCH_CHOICES, TOUCH_LABEL)}
            <label for="set-volume">Volume suara <output data-vol-out></output></label>
            <input id="set-volume" type="range" min="0" max="100" step="5" data-volume />
            <label for="set-fps">Tampilkan FPS</label>
            <label class="switch"><input id="set-fps" type="checkbox" data-fps /><span></span></label>
          </div>
          <p class="set-note" data-set-note></p>
          <button class="menu-btn primary small" data-action="back">${ICON.check}<span>SELESAI</span></button>
        </div>
      </section>

      <section class="screen screen-help" data-screen="help" hidden>
        <div class="modal help">
          <h2>PETUNJUK</h2>
          <div class="help-cols">
            <div class="help-grid">
              <div><kbd>W</kbd> / <kbd>↑</kbd></div><div>Gas</div>
              <div><kbd>S</kbd> / <kbd>↓</kbd></div><div>Rem · tahan saat berhenti untuk mundur</div>
              <div><kbd>A</kbd> <kbd>D</kbd> / <kbd>←</kbd> <kbd>→</kbd></div><div>Belok kiri / kanan</div>
              <div><kbd>Spasi</kbd></div><div>Rem tangan untuk drift (mengisi nitro)</div>
              <div><kbd>Shift</kbd></div><div>Nitro</div>
              <div><kbd>R</kbd></div><div>Kembalikan mobil ke tengah jalan</div>
              <div><kbd>M</kbd></div><div>Bisukan / bunyikan suara</div>
              <div><kbd>Esc</kbd> / <kbd>P</kbd></div><div>Jeda</div>
            </div>
            <div>
              <ul class="help-tips">
                <li><b>Balapan:</b> lawan ${RIVALS.length} pembalap komputer, mulai dari barisan paling belakang. Tunggu lampu hijau.</li>
                <li>Satu lap sah bila melewati 3 checkpoint lalu garis START/FINIS.</li>
                <li><b>Menang</b> = finis posisi 1. Setelah pemenang finis, sisa waktumu 60 detik.</li>
                <li><b>Nitro</b> terisi pelan sendiri dan lebih cepat saat drift.</li>
              </ul>
              <ul class="help-items">
                <li><i class="it it-speed"></i><b>${ITEM_TYPES.speed.name}</b> dorongan kecepatan + kecepatan maks naik ${ITEM_TYPES.speed.duration} dtk</li>
                <li><i class="it it-shield"></i><b>${ITEM_TYPES.shield.name}</b> ${ITEM_TYPES.shield.duration} dtk tidak melambat saat menabrak; lawan terpental</li>
                <li><i class="it it-turbo"></i><b>${ITEM_TYPES.turbo.name}</b> lewati cincinnya: akselerasi ×${num(ITEM_TYPES.turbo.accelMult)} selama ${ITEM_TYPES.turbo.duration} dtk</li>
                <li class="muted">Item muncul lagi beberapa detik setelah diambil. Item sejenis tidak bisa diambil lagi sampai cooldown-mu habis.</li>
              </ul>
            </div>
          </div>
          <div class="modal-foot">
            <button class="menu-btn primary small" data-action="back">${ICON.arrow}<span>KEMBALI</span></button>
            <p class="help-credit"><img src="${logoUrl}" alt="" width="249" height="238" /><span>Pengembang: <b>${CREDIT.developer}</b><br />${CREDIT.school}</span></p>
          </div>
        </div>
      </section>

      <section class="screen screen-pause" data-screen="pause" hidden>
        <div class="modal pause">
          <h2>JEDA</h2>
          <button class="menu-btn primary" data-action="resume">${ICON.play}<span>LANJUTKAN</span></button>
          <button class="menu-btn" data-action="restart">${ICON.retry}<span>ULANGI DARI START</span></button>
          <button class="menu-btn" data-action="menu">${ICON.home}<span>MENU UTAMA</span></button>
        </div>
      </section>

      <section class="screen screen-results" data-screen="results" hidden>
        <div class="modal results" data-result-tone>
          <div class="res-head">
            <div class="res-icon" data-res-icon>${ICON.trophy}</div>
            <div>
              <div class="res-kicker" data-res-kicker>HASIL BALAPAN</div>
              <h2 class="res-title" data-res-title>MENANG!</h2>
              <p class="res-sub" data-res-sub></p>
            </div>
          </div>
          <div class="res-table-wrap">
            <table class="res-table">
              <thead><tr><th>POS</th><th>PEMBALAP</th><th>MOBIL</th><th>WAKTU</th><th>LAP TERBAIK</th></tr></thead>
              <tbody data-res-body></tbody>
            </table>
          </div>
          <div class="res-actions">
            <button class="menu-btn primary" data-action="restart">${ICON.retry}<span>MAIN LAGI</span></button>
            <button class="menu-btn" data-action="menu">${ICON.home}<span>MENU UTAMA</span></button>
          </div>
        </div>
      </section>
    `;

    this.screens = Object.fromEntries([...root.querySelectorAll('[data-screen]')].map((s) => [s.dataset.screen, s]));
    this.res = {
      box: root.querySelector('[data-result-tone]'),
      icon: root.querySelector('[data-res-icon]'),
      kicker: root.querySelector('[data-res-kicker]'),
      title: root.querySelector('[data-res-title]'),
      sub: root.querySelector('[data-res-sub]'),
      body: root.querySelector('[data-res-body]'),
    };
    for (const id of TRACK_ORDER) drawTrackThumb(root.querySelector(`[data-track-thumb="${id}"]`), TRACKS[id], this.trackInfo[id]);

    root.addEventListener('click', (e) => {
      const card = e.target.closest('[data-car]');
      if (card) return this.#previewCar(card.dataset.car);
      const tcard = e.target.closest('[data-track]');
      if (tcard) return this.#selectTrack(tcard.dataset.track);
      const seg = e.target.closest('[data-seg] [data-val]');
      if (seg) return this.#setSetting(seg.parentElement.dataset.seg, seg.dataset.val);
      const btn = e.target.closest('[data-action]');
      if (!btn) return;
      btn.blur();
      this.#handle(btn.dataset.action);
    });
    root.querySelector('[data-volume]').addEventListener('input', (e) => this.#setSetting('volume', Number(e.target.value)));
    root.querySelector('[data-fps]').addEventListener('change', (e) => this.#setSetting('showFps', e.target.checked));
    window.addEventListener('keydown', (e) => this.#onKey(e));

    this.#renderInfo();
    this.#renderSettings();
    this.#renderTrackSelection();
  }

  // ------------------------------------------------------------ navigasi
  #handle(action) {
    const c = this.cb;
    switch (action) {
      case 'race':
        return c.onRace?.();
      case 'practice':
        return c.onPractice?.();
      case 'garage':
        this.garageCar = this.settings.car;
        this.#renderGarage();
        c.onScreen?.('garage');
        return this.show('garage');
      case 'garage-use':
        c.onConfirmCar?.(this.garageCar);
        this.#renderInfo();
        c.onScreen?.('main');
        return this.show('main');
      case 'garage-cancel':
        c.onCancelCar?.();
        c.onScreen?.('main');
        return this.show('main');
      case 'tracks':
        this.#renderTrackSelection();
        c.onScreen?.('tracks');
        return this.show('tracks');
      case 'settings':
        this.#renderSettings();
        return this.show('settings');
      case 'help':
        return this.show('help');
      case 'back':
        this.#renderInfo();
        c.onScreen?.('main');
        return this.show('main');
      case 'resume':
        return c.onResume?.();
      case 'restart':
        return c.onRestart?.();
      case 'menu':
        return c.onMenu?.();
    }
  }

  /** Esc dari sub-layar → kembali ke menu utama. Mengembalikan true bila ditangani. */
  back() {
    if (this.current === 'garage') {
      this.#handle('garage-cancel');
      return true;
    }
    if (['tracks', 'settings', 'help'].includes(this.current)) {
      this.#handle('back');
      return true;
    }
    return false;
  }

  #onKey(e) {
    if (this.root.hidden) return;
    if (this.current === 'garage' && (e.code === 'ArrowLeft' || e.code === 'ArrowRight')) {
      const i = CAR_ORDER.indexOf(this.garageCar);
      const n = CAR_ORDER.length;
      this.#previewCar(CAR_ORDER[(i + (e.code === 'ArrowRight' ? 1 : n - 1)) % n]);
      e.preventDefault();
    } else if (this.current === 'tracks' && (e.code === 'ArrowLeft' || e.code === 'ArrowRight')) {
      const i = TRACK_ORDER.indexOf(this.settings.track);
      const n = TRACK_ORDER.length;
      this.#selectTrack(TRACK_ORDER[(i + (e.code === 'ArrowRight' ? 1 : n - 1)) % n]);
      e.preventDefault();
    } else if ((e.code === 'Enter' || e.code === 'NumpadEnter') && (this.current === 'garage' || this.current === 'tracks')) {
      // Enter = konfirmasi, walau fokus sedang berada di kartu yang barusan diklik
      e.preventDefault();
      this.#handle(this.current === 'garage' ? 'garage-use' : 'back');
    }
  }

  show(name) {
    this.root.hidden = false;
    for (const [key, el] of Object.entries(this.screens)) el.hidden = key !== name;
    this.current = name;
    this.root.dataset.current = name;
    const primary = this.screens[name]?.querySelector('.primary');
    primary?.focus({ preventScroll: true });
  }

  hide() {
    this.root.hidden = true;
    this.current = null;
    if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
  }

  // ------------------------------------------------------------ info utama
  #renderInfo() {
    const car = CARS[this.settings.car];
    const t = TRACKS[this.settings.track];
    const info = this.trackInfo[this.settings.track];
    this.root.querySelector('[data-info]').innerHTML = `
      <div class="info-head"><span>MOBIL</span><b>${car.name}</b><em>${esc(car.tagline)}</em></div>
      ${statBar('KECEPATAN', car.stats.speed)}
      ${statBar('AKSELERASI', car.stats.accel)}
      ${statBar('HANDLING', car.stats.handling)}
      ${statBar('NITRO', car.stats.nitro)}
      <div class="info-head track"><span>LINTASAN</span><b>${t.name.toUpperCase()}</b><em>${num(info.length / 1000, 2)} km · ${this.settings.laps} lap · ${RIVALS.length} lawan · ${DIFF_LABEL[this.settings.difficulty]}</em></div>`;
  }

  // ------------------------------------------------------------ garasi
  setCarThumbs(urls) {
    for (const [id, url] of Object.entries(urls)) {
      const img = this.root.querySelector(`[data-thumb="${id}"]`);
      if (img) img.src = url;
    }
  }

  #previewCar(id) {
    this.garageCar = id;
    this.#renderGarage();
    this.cb.onPreviewCar?.(id);
  }

  #renderGarage() {
    const c = CARS[this.garageCar];
    const ph = c.physics;
    this.root.querySelectorAll('[data-car]').forEach((el) => {
      el.classList.toggle('sel', el.dataset.car === this.garageCar);
      el.classList.toggle('current', el.dataset.car === this.settings.car);
    });
    this.root.querySelector('[data-garage-panel]').innerHTML = `
      <div class="g-name" style="--car:#${c.color.toString(16).padStart(6, '0')}">${c.name}</div>
      <em class="g-tag">${esc(c.tagline)}</em>
      ${statBar('KECEPATAN', c.stats.speed)}
      ${statBar('AKSELERASI', c.stats.accel)}
      ${statBar('HANDLING', c.stats.handling)}
      ${statBar('NITRO', c.stats.nitro)}
      <dl class="g-specs">
        <div><dt>Kecepatan maks</dt><dd>${kmh(ph.maxSpeed)} km/j</dd></div>
        <div><dt>Dengan nitro</dt><dd>${kmh(ph.maxSpeed + ph.nitro.boostSpeed)} km/j</dd></div>
        <div><dt>Tangki nitro</dt><dd>${num(1 / ph.nitro.drain)} dtk</dd></div>
        <div><dt>Bobot</dt><dd>${ph.mass >= 1.2 ? 'Berat' : ph.mass < 1 ? 'Ringan' : 'Sedang'}</dd></div>
      </dl>
      <p class="g-hint"><kbd>←</kbd> <kbd>→</kbd> ganti mobil · <kbd>Enter</kbd> gunakan</p>`;
  }

  // ------------------------------------------------------------ lintasan
  #selectTrack(id) {
    if (this.settings.track !== id) {
      this.settings.track = id;
      this.cb.onSelectTrack?.(id);
    }
    this.#renderTrackSelection();
  }

  #renderTrackSelection() {
    this.root.querySelectorAll('[data-track]').forEach((el) => {
      const on = el.dataset.track === this.settings.track;
      el.classList.toggle('sel', on);
      el.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
  }

  // ------------------------------------------------------------ pengaturan
  #setSetting(key, val) {
    if (key === 'laps') val = Number(val);
    this.settings[key] = val;
    this.cb.onSettings?.(this.settings, key);
    this.#renderSettings();
    this.#renderInfo();
  }

  /** Dipanggil Game saat kualitas otomatis berubah (menampilkan level aktif). */
  setQualityNote(text) {
    this.qualityNote = text;
    this.#renderSettings();
  }

  #renderSettings() {
    const s = this.settings;
    this.root.querySelectorAll('[data-seg]').forEach((seg) => {
      const cur = String(s[seg.dataset.seg]);
      seg.querySelectorAll('[data-val]').forEach((b) => {
        const on = b.dataset.val === cur;
        b.classList.toggle('on', on);
        b.setAttribute('aria-checked', on ? 'true' : 'false');
      });
    });
    const vol = this.root.querySelector('[data-volume]');
    vol.value = s.volume;
    this.root.querySelector('[data-vol-out]').textContent = `${s.volume}%`;
    this.root.querySelector('[data-fps]').checked = s.showFps;
    this.root.querySelector('[data-set-note]').textContent =
      (this.qualityNote ? this.qualityNote + ' ' : '') + 'Pengaturan tersimpan otomatis di browser ini. Kesulitan & jumlah lap berlaku mulai balapan berikutnya.';
  }

  // ------------------------------------------------------------ hasil balapan
  /**
   * Kondisi: posisi 1 = MENANG · posisi 2–3 = PODIUM · 4 ke bawah / waktu habis = KALAH.
   */
  showResults(player, total) {
    const r = this.res;
    let tone, kicker, title, sub;
    if (player.dnf) {
      tone = 'lose';
      kicker = 'TIDAK FINIS';
      title = 'KALAH';
      sub = 'Waktu habis sebelum kamu menyelesaikan semua lap. Coba lagi!';
    } else if (player.position === 1) {
      tone = 'win';
      kicker = 'JUARA 1';
      title = 'MENANG!';
      sub = `Selamat! Kamu finis pertama dengan waktu ${formatTime(player.finishTime)}.`;
    } else if (player.position <= 3) {
      tone = 'podium';
      kicker = `JUARA ${player.position}`;
      title = 'PODIUM!';
      sub = `Finis di posisi ${player.position} dari ${total}. Sedikit lagi menuju juara 1!`;
    } else {
      tone = 'lose';
      kicker = `POSISI ${player.position} DARI ${total}`;
      title = 'KALAH';
      sub = 'Belum masuk podium. Coba pakai nitro di lurusan dan ambil item di jalur!';
    }
    r.box.dataset.resultTone = tone;
    r.icon.innerHTML = tone === 'lose' ? ICON.flag : ICON.trophy;
    r.kicker.textContent = kicker;
    r.title.textContent = title;
    r.sub.textContent = sub;
    this.result = { tone, position: player.position, dnf: player.dnf };
    this.show('results');
  }

  /** Perbarui tabel hasil (dipanggil berkala — lawan yang belum finis terus diperbarui). */
  updateResults(standings, totalLaps) {
    const html = standings
      .map((r) => {
        let time;
        if (r.dnf) time = '<span class="muted">TIDAK FINIS</span>';
        else if (r.finished) time = formatTime(r.finishTime);
        else time = `<span class="muted">Lap ${Math.min(r.lap, totalLaps)}/${totalLaps}…</span>`;
        return `<tr class="${r.isPlayer ? 'me' : ''}"><td class="pos">${r.position}</td><td><i style="background:${r.color}"></i>${esc(r.name)}${r.isPlayer ? ' <em>(KAMU)</em>' : ''}</td><td class="car">${esc(r.carName ?? '')}</td><td class="mono">${time}</td><td class="mono">${formatTime(r.bestLap)}</td></tr>`;
      })
      .join('');
    if (html !== this.lastResultsHtml) {
      this.lastResultsHtml = html;
      this.res.body.innerHTML = html;
    }
  }
}
