import logoUrl from '../assets/logo-smks-pgri-singosari.png';
import { formatTime } from '../game/RaceManager.js';
import { TrackPath } from '../game/TrackPath.js';
import { CARS, CAR_ORDER } from '../game/data/cars.js';
import { TRACKS, TRACK_ORDER } from '../game/data/tracks.js';
import { DIFFICULTY, LAP_CHOICES, RIVALS } from '../game/data/racers.js';
import { ITEM_TYPES } from '../game/data/items.js';
import { QUALITY_CHOICES, TOUCH_CHOICES, DUO_RIVAL_CHOICES, DUO_LAYOUTS, DUO_DEFAULT_NAMES, NAME_MAX, sanitizeName } from '../game/Settings.js';
import qrcode from 'qrcode-generator';
import { normalizeCode, CODE_LENGTH } from '../net/protocol.js';

/**
 * Menu.js — semua layar di luar balapan:
 * utama · 2 pemain (lobi) · pilih mobil · pilih lintasan · pengaturan · petunjuk · jeda · hasil balapan.
 */
export const CREDIT = {
  developer: 'Mohammad Yusron Kholish, S.Kom',
  school: 'SMKS PGRI SINGOSARI',
};
export const STAGE_LABEL = 'Versi 1.2 · Multiplayer';
/** Warna identitas pemain (HUD, peta mini, papan nama). */
export const PLAYER_COLORS = ['#ef4444', '#22d3ee'];

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
  duo: '<svg viewBox="0 0 24 24"><circle cx="8" cy="8" r="3" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17" cy="9" r="2.4" fill="none" stroke="currentColor" stroke-width="2"/><path d="M2.5 20c0-3.3 2.4-5.6 5.5-5.6s5.5 2.3 5.5 5.6M14.6 14.6c.7-.3 1.5-.5 2.4-.5 2.6 0 4.5 2 4.5 4.9" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  pad: '<svg viewBox="0 0 24 24"><path d="M7 7h10a5 5 0 0 1 4.8 6.4l-1.2 4a2.6 2.6 0 0 1-4.4 1L14.4 16H9.6l-1.8 2.4a2.6 2.6 0 0 1-4.4-1l-1.2-4A5 5 0 0 1 7 7z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M8 10v4M6 12h4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="16" cy="11" r="1.1" fill="currentColor"/><circle cx="18" cy="13" r="1.1" fill="currentColor"/></svg>',
  online: '<svg viewBox="0 0 24 24"><rect x="2" y="5" width="12" height="9" rx="1.5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M1 17h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><rect x="16.5" y="7" width="6" height="11" rx="1.5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M19.5 15.5h.01" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>',
  wifi: '<svg viewBox="0 0 24 24"><path d="M2.5 9a14 14 0 0 1 19 0M5.5 12.5a9.5 9.5 0 0 1 13 0M8.6 16a5 5 0 0 1 6.8 0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="19.3" r="1.4" fill="currentColor"/></svg>',
  splitTB: '<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M3 12h18" stroke="currentColor" stroke-width="2"/></svg>',
  splitLR: '<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 4v16" stroke="currentColor" stroke-width="2"/></svg>',
};

const DIFF_LABEL = { mudah: 'Mudah', normal: 'Normal', sulit: 'Sulit' };
const QUALITY_LABEL = { otomatis: 'Otomatis', rendah: 'Rendah', sedang: 'Sedang', tinggi: 'Tinggi' };
const TOUCH_LABEL = { otomatis: 'Otomatis', selalu: 'Selalu', mati: 'Mati' };
const RIVAL_LABEL = { 0: 'Tanpa', 2: '2', 4: '4' };
const LAYOUT_LABEL = { 'atas-bawah': 'Atas–Bawah', 'kiri-kanan': 'Kiri–Kanan' };
const LAYOUT_ICON = { 'atas-bawah': ICON.splitTB, 'kiri-kanan': ICON.splitLR };
const carHex = (id) => '#' + CARS[id].color.toString(16).padStart(6, '0');

// Tombol tiap pemain di lobi 2 pemain
const DUO_KEYS = [
  {
    pick: '<kbd>A</kbd><kbd>D</kbd>',
    drive: '<kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> setir · <kbd>Spasi</kbd> drift · <kbd>Shift</kbd> kiri nitro · <kbd>R</kbd> reset',
  },
  {
    pick: '<kbd>←</kbd><kbd>→</kbd>',
    drive: '<kbd>↑</kbd><kbd>←</kbd><kbd>↓</kbd><kbd>→</kbd> setir · <kbd>/</kbd> drift · <kbd>Shift</kbd> kanan nitro · <kbd>⌫</kbd> reset',
  },
];

const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
const kmh = (ms) => Math.round(ms * 3.6);
const num = (v, d = 1) => v.toLocaleString('id-ID', { minimumFractionDigits: d, maximumFractionDigits: d });

function statBar(label, value, key = '') {
  return `<div class="stat"><span>${label}</span><i><b ${key ? `data-stat="${key}"` : ''} style="width:${value * 10}%"></b></i></div>`;
}

function segmented(name, choices, labels, { html = false, label = '' } = {}) {
  return `<div class="seg" role="radiogroup" data-seg="${name}"${label ? ` aria-label="${esc(label)}"` : ''}>${choices
    .map((c) => `<button type="button" role="radio" data-val="${c}">${html ? labels[c] ?? c : esc(labels[c] ?? c)}</button>`)
    .join('')}</div>`;
}

const ICON_TEXT = { ok: '●' };

/** QR code (SVG) untuk tautan gabung — dipindai kamera HP. */
function makeQrSvg(text) {
  try {
    const qr = qrcode(0, 'M');
    qr.addData(text);
    qr.make();
    return qr.createSvgTag({ cellSize: 4, margin: 2, scalable: true, alt: 'QR kode gabung ruang' });
  } catch {
    return '';
  }
}

/** Kartu pilihan pemain di lobi 2 pemain. */
function duoCard(p) {
  const n = p + 1;
  const thumbs = CAR_ORDER.map(
    (id) => `<button type="button" class="duo-thumb" data-duo-car="${p}:${id}" title="${CARS[id].name}" aria-label="Pilih ${CARS[id].name}" style="--car:${carHex(id)}">
      <img data-thumb="${id}" alt="" width="320" height="180" /><span>${CARS[id].name}</span></button>`,
  ).join('');
  return `
    <article class="duo-card p${n}" data-duo-card="${p}" style="--pc:${PLAYER_COLORS[p]}">
      <div class="duo-head">
        <span class="duo-badge">P${n}</span>
        <label class="duo-name-wrap"><span>NAMA PEMAIN ${n}</span>
          <input class="duo-name" data-duo-name="${p}" maxlength="${NAME_MAX}" spellcheck="false" autocomplete="off" aria-label="Nama pemain ${n}" placeholder="${DUO_DEFAULT_NAMES[p]}" />
        </label>
      </div>
      <div class="duo-carline">
        <button type="button" class="duo-arrow" data-duo-step="${p}:-1" aria-label="Mobil sebelumnya">${ICON.back}</button>
        <div class="duo-carname" data-duo-carname="${p}"></div>
        <button type="button" class="duo-arrow" data-duo-step="${p}:1" aria-label="Mobil berikutnya">${ICON.arrow}</button>
      </div>
      <em class="duo-tagline" data-duo-tagline="${p}"></em>
      <div class="duo-stats" data-duo-stats="${p}"></div>
      <div class="duo-thumbs">${thumbs}</div>
      <p class="duo-keys"><span>${DUO_KEYS[p].pick} ganti mobil</span><span>${DUO_KEYS[p].drive}</span></p>
    </article>`;
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
   * cb: { onRace, onPractice, onResume, onRestart, onMenu, onPreviewCar, onConfirmCar, onCancelCar, onSelectTrack, onSettings, onScreen,
   *       onDuoStart, onDuoCar }
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
            <button class="menu-btn duo-btn" data-action="multi">${ICON.duo}<span>MULTIPLAYER</span><em class="btn-tag">2 PEMAIN</em></button>
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

      <section class="screen screen-multi" data-screen="multi" hidden>
        <div class="modal multi">
          <h2>MULTIPLAYER</h2>
          <p class="multi-sub">Pilih cara bermain berdua:</p>
          <div class="multi-grid">
            <button class="multi-card primary" data-action="duo">
              ${ICON.splitTB}
              <b>SATU LAYAR</b>
              <span>2 pemain di <strong>1 komputer</strong> — layar dibagi dua. Keyboard &amp; joystick. Tanpa internet.</span>
            </button>
            <button class="multi-card" data-action="online">
              ${ICON.online}
              <b>DUA PERANGKAT</b>
              <span>Laptop A + laptop B / <strong>HP</strong> — masing-masing di layarnya sendiri. Gabung dengan <strong>kode ruang</strong> (butuh internet).</span>
            </button>
          </div>
          <button class="menu-btn small ghost" data-action="back">${ICON.back}<span>KEMBALI</span></button>
        </div>
      </section>

      <section class="screen screen-online" data-screen="online" data-state="start" hidden>
        <header class="scr-head">
          <button class="menu-btn small ghost" data-action="back">${ICON.back}<span>KEMBALI</span></button>
          <h2>ONLINE</h2>
          <span class="duo-kicker">2 PERANGKAT · KODE RUANG</span>
        </header>
        <article class="duo-card net-me" data-net-me style="--pc:#facc15">
          <div class="duo-head">
            <span class="duo-badge is-long" data-net-me-badge>KAMU</span>
            <label class="duo-name-wrap"><span>NAMAMU</span>
              <input class="duo-name" data-net-name maxlength="${NAME_MAX}" spellcheck="false" autocomplete="off" aria-label="Namamu" placeholder="PEMAIN" />
            </label>
          </div>
          <div class="duo-carline">
            <button type="button" class="duo-arrow" data-net-step="-1" aria-label="Mobil sebelumnya">${ICON.back}</button>
            <div class="duo-carname" data-net-carname></div>
            <button type="button" class="duo-arrow" data-net-step="1" aria-label="Mobil berikutnya">${ICON.arrow}</button>
          </div>
          <em class="duo-tagline" data-net-tagline></em>
          <div class="duo-stats" data-net-stats></div>
          <div class="duo-thumbs">${CAR_ORDER.map(
            (id) => `<button type="button" class="duo-thumb" data-net-car="${id}" title="${CARS[id].name}" aria-label="Pilih ${CARS[id].name}" style="--car:${carHex(id)}"><img data-thumb="${id}" alt="" width="320" height="180" /><span>${CARS[id].name}</span></button>`,
          ).join('')}</div>
          <p class="duo-keys"><span><kbd>←</kbd><kbd>→</kbd> ganti mobil</span><span>Kontrol balapan sama seperti mode 1 pemain: keyboard, joystick, atau tombol sentuh di HP.</span></p>
        </article>

        <div class="net-center">
          <div class="net-pane net-start">
            <button class="menu-btn primary" data-action="net-host">${ICON.wifi}<span>BUAT RUANG</span>${ICON.arrow}</button>
            <p class="net-or">atau gabung ke ruang teman:</p>
            <div class="net-join">
              <input class="net-code-input" data-net-code-input maxlength="${CODE_LENGTH}" spellcheck="false" autocomplete="off" autocapitalize="characters" inputmode="text" aria-label="Kode ruang" placeholder="KODE" />
              <button class="menu-btn" data-action="net-join">${ICON.arrow}<span>GABUNG</span></button>
            </div>
            <p class="net-hint">Satu perangkat menekan <b>BUAT RUANG</b>, perangkat lain memasukkan kodenya (atau memindai QR dengan kamera HP).</p>
          </div>
          <div class="net-pane net-connecting">
            <div class="net-spinner" aria-hidden="true"></div>
            <p class="net-status" data-net-status></p>
            <button class="menu-btn small ghost" data-action="net-leave">${ICON.back}<span>BATAL</span></button>
          </div>
          <div class="net-pane net-room">
            <div class="net-codebox">
              <div><span>KODE RUANG</span><b data-net-code></b></div>
              <div class="net-qr" data-net-qr title="Pindai dengan kamera HP untuk bergabung"></div>
            </div>
            <small class="net-url" data-net-url></small>
            <div class="net-opts host-only">
              <div class="duo-opt wide">
                <span class="duo-lbl">LINTASAN</span>
                <div class="duo-stepper">
                  <button type="button" class="duo-arrow" data-net-track-step="-1" aria-label="Lintasan sebelumnya">${ICON.back}</button>
                  <b data-net-track></b>
                  <button type="button" class="duo-arrow" data-net-track-step="1" aria-label="Lintasan berikutnya">${ICON.arrow}</button>
                </div>
              </div>
              <div class="duo-opt"><span class="duo-lbl">LAP</span>${segmented('laps', LAP_CHOICES.map(String), {}, { label: 'Jumlah lap' })}</div>
              <div class="duo-opt"><span class="duo-lbl">LAWAN AI</span>${segmented('netRivals', DUO_RIVAL_CHOICES.map(String), RIVAL_LABEL, { label: 'Jumlah lawan AI' })}</div>
            </div>
            <p class="net-info guest-only" data-net-info></p>
            <button class="menu-btn primary host-only" data-action="net-start">${ICON.flag}<span>MULAI</span>${ICON.arrow}</button>
            <p class="net-wait" data-net-wait></p>
            <button class="menu-btn small ghost" data-action="net-leave">${ICON.back}<span>KELUAR RUANG</span></button>
          </div>
          <p class="net-error" data-net-error role="alert"></p>
        </div>

        <article class="duo-card net-opp" data-net-opp style="--pc:#64748b">
          <div class="duo-head"><span class="duo-badge" data-net-opp-badge>LAWAN</span><div class="duo-name-wrap"><span>LAWAN</span><b class="net-opp-name" data-net-opp-name>—</b></div></div>
          <div class="net-opp-body" data-net-opp-body></div>
          <p class="net-ping" data-net-ping></p>
        </article>
      </section>

      <section class="screen screen-duo" data-screen="duo" hidden>
        <header class="scr-head">
          <button class="menu-btn small ghost" data-action="back">${ICON.back}<span>KEMBALI</span></button>
          <h2>2 PEMAIN</h2>
          <span class="duo-kicker">LAYAR TERBAGI · SATU KOMPUTER</span>
        </header>
        ${duoCard(0)}
        ${duoCard(1)}
        <div class="duo-center">
          <div class="duo-opt wide">
            <span class="duo-lbl">LINTASAN</span>
            <div class="duo-stepper">
              <button type="button" class="duo-arrow" data-duo-track-step="-1" aria-label="Lintasan sebelumnya">${ICON.back}</button>
              <b data-duo-track></b>
              <button type="button" class="duo-arrow" data-duo-track-step="1" aria-label="Lintasan berikutnya">${ICON.arrow}</button>
            </div>
          </div>
          <div class="duo-opt"><span class="duo-lbl">LAP</span>${segmented('laps', LAP_CHOICES.map(String), {}, { label: 'Jumlah lap' })}</div>
          <div class="duo-opt"><span class="duo-lbl">LAWAN AI</span>${segmented('duoRivals', DUO_RIVAL_CHOICES.map(String), RIVAL_LABEL, { label: 'Jumlah lawan AI' })}</div>
          <div class="duo-opt wide"><span class="duo-lbl">TATA LAYAR</span>${segmented(
            'duoLayout',
            DUO_LAYOUTS,
            Object.fromEntries(DUO_LAYOUTS.map((k) => [k, `${LAYOUT_ICON[k]}<span>${LAYOUT_LABEL[k]}</span>`])),
            { html: true, label: 'Tata layar' },
          )}</div>
          <button class="menu-btn primary duo-go" data-action="duo-start">${ICON.flag}<span>MULAI</span>${ICON.arrow}</button>
          <p class="duo-pad" data-duo-pad></p>
        </div>
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
          <div class="help-duo">
            <h3>${ICON.duo}<span>MODE 2 PEMAIN · LAYAR TERBAGI</span></h3>
            <div class="help-duo-grid">
              <div><b class="p1">PEMAIN 1</b>${DUO_KEYS[0].drive}</div>
              <div><b class="p2">PEMAIN 2</b>${DUO_KEYS[1].drive}</div>
              <div class="muted">${ICON.pad}<span>Gamepad: RT/A gas · LT/X rem · stik kiri belok · B/RB nitro · LB/Y drift · Start jeda. Satu gamepad otomatis dipakai PEMAIN 2 (bisa ditukar di lobi).</span></div>
            </div>
            <h3 class="help-online">${ICON.online}<span>MODE ONLINE · 2 PERANGKAT</span></h3>
            <ul class="help-tips">
              <li>Perangkat A: <b>MULTIPLAYER → DUA PERANGKAT → BUAT RUANG</b>. Muncul kode 4 huruf &amp; QR.</li>
              <li>Perangkat B (laptop/HP): masukkan kodenya lalu <b>GABUNG</b>, atau pindai QR dengan kamera HP.</li>
              <li>Host memilih lintasan, lap, dan lawan AI, lalu menekan <b>MULAI</b>. Kedua perangkat butuh internet; jangan pindah tab saat balapan.</li>
            </ul>
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

      <section class="screen screen-pause" data-screen="netpause" hidden>
        <div class="modal pause">
          <h2>MENU</h2>
          <p class="net-pause-note">Balapan online tidak bisa dijeda — mobilmu tetap di lintasan.</p>
          <button class="menu-btn primary" data-action="net-resume">${ICON.play}<span>LANJUTKAN</span></button>
          <button class="menu-btn" data-action="menu">${ICON.home}<span>KELUAR KE MENU UTAMA</span></button>
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
          <p class="res-net-note" data-res-net-note hidden></p>
          <div class="res-actions">
            <button class="menu-btn primary" data-action="restart">${ICON.retry}<span>MAIN LAGI</span></button>
            <button class="menu-btn" data-action="net-tolobby" hidden>${ICON.wifi}<span>LOBI ONLINE</span></button>
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
      netNote: root.querySelector('[data-res-net-note]'),
      restart: root.querySelector('[data-screen="results"] [data-action="restart"]'),
      lobby: root.querySelector('[data-screen="results"] [data-action="net-tolobby"]'),
      menu: root.querySelector('[data-screen="results"] [data-action="menu"]'),
    };
    for (const id of TRACK_ORDER) drawTrackThumb(root.querySelector(`[data-track-thumb="${id}"]`), TRACKS[id], this.trackInfo[id]);

    root.addEventListener('click', (e) => {
      const dcar = e.target.closest('[data-duo-car]');
      if (dcar) {
        const [p, id] = dcar.dataset.duoCar.split(':');
        return this.#setDuoCar(Number(p), id);
      }
      const dstep = e.target.closest('[data-duo-step]');
      if (dstep) {
        const [p, d] = dstep.dataset.duoStep.split(':');
        return this.#stepDuoCar(Number(p), Number(d));
      }
      const tstep = e.target.closest('[data-duo-track-step]');
      if (tstep) return this.#stepTrack(Number(tstep.dataset.duoTrackStep));
      const ncar = e.target.closest('[data-net-car]');
      if (ncar) return this.#setNetCar(ncar.dataset.netCar);
      const nstep = e.target.closest('[data-net-step]');
      if (nstep) return this.#stepNetCar(Number(nstep.dataset.netStep));
      const ntrack = e.target.closest('[data-net-track-step]');
      if (ntrack) {
        this.#stepTrack(Number(ntrack.dataset.netTrackStep));
        this.cb.onNetLobby?.();
        return this.#renderOnline();
      }
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
    // Nama pemain: huruf kapital otomatis, karakter aneh dibuang saat mengetik; disimpan saat selesai
    root.querySelectorAll('[data-duo-name]').forEach((inp) => {
      inp.addEventListener('input', () => {
        const pos = inp.selectionStart ?? inp.value.length;
        const v = inp.value.toUpperCase().replace(/[^A-Z0-9 .\-]/g, '').slice(0, NAME_MAX);
        if (v !== inp.value) {
          inp.value = v;
          const c = Math.min(pos, v.length);
          inp.setSelectionRange(c, c);
        }
      });
      inp.addEventListener('change', () => this.#commitNames());
    });
    // Mode online: nama sendiri & kode ruang
    const netName = root.querySelector('[data-net-name]');
    netName.addEventListener('input', () => {
      const pos = netName.selectionStart ?? netName.value.length;
      const v = netName.value.toUpperCase().replace(/[^A-Z0-9 .\-]/g, '').slice(0, NAME_MAX);
      if (v !== netName.value) {
        netName.value = v;
        netName.setSelectionRange(Math.min(pos, v.length), Math.min(pos, v.length));
      }
    });
    netName.addEventListener('change', () => this.#commitNetName());
    const codeIn = root.querySelector('[data-net-code-input]');
    codeIn.addEventListener('input', () => {
      const v = normalizeCode(codeIn.value);
      if (v !== codeIn.value) codeIn.value = v;
    });
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
      case 'multi':
        return this.show('multi');
      case 'online':
        c.onScreen?.('online');
        this.show('online');
        return this.#renderOnline();
      case 'net-host':
        this.#commitNetName();
        return c.onNetHost?.();
      case 'net-join':
        this.#commitNetName();
        return c.onNetJoin?.(this.root.querySelector('[data-net-code-input]').value);
      case 'net-leave':
        return c.onNetLeave?.();
      case 'net-start':
        this.#commitNetName();
        return c.onNetStart?.();
      case 'net-resume':
        return c.onNetResume?.();
      case 'net-tolobby':
        return c.onNetToLobby?.();
      case 'duo':
        this.#renderSettings();
        this.#renderDuo();
        c.onScreen?.('duo');
        return this.show('duo');
      case 'duo-start':
        this.#commitNames();
        return c.onDuoStart?.();
      case 'duo-pad-swap':
        this.settings.duoPadSwap = !this.settings.duoPadSwap;
        this.padKey = null;
        return c.onSettings?.(this.settings, 'duoPadSwap');
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
        if (this.current === 'online') c.onNetLeave?.(); // keluar dari ruang online
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
    if (['tracks', 'settings', 'help', 'duo', 'multi', 'online'].includes(this.current)) {
      this.#handle('back');
      return true;
    }
    return false;
  }

  /**
   * Navigasi menu dengan gamepad. e: { player, button } — button: left/right/start/a/b/back.
   * Mengembalikan true bila ditangani.
   */
  padNav(e) {
    if (this.root.hidden) return false;
    if (this.current === 'duo') {
      if (e.button === 'left' || e.button === 'right') {
        this.#stepDuoCar(e.player, e.button === 'left' ? -1 : 1);
        return true;
      }
      if (e.button === 'start' || e.button === 'a') {
        this.#handle('duo-start');
        return true;
      }
      if (e.button === 'b' || e.button === 'back') return this.back();
    }
    if (this.current === 'results' && (e.button === 'start' || e.button === 'a')) {
      this.#handle('restart');
      return true;
    }
    return false;
  }

  #onKey(e) {
    if (this.root.hidden) return;
    if (this.current === 'online') {
      if (e.target?.tagName === 'INPUT') {
        if (e.code === 'Enter' || e.code === 'NumpadEnter') {
          e.preventDefault();
          if (e.target.matches('[data-net-code-input]')) this.#handle('net-join');
          else e.target.blur();
        } else if (e.code === 'Escape') {
          e.preventDefault();
          e.target.blur();
        }
        return;
      }
      const step = { KeyA: -1, ArrowLeft: -1, KeyD: 1, ArrowRight: 1 }[e.code];
      if (step) {
        e.preventDefault();
        this.#stepNetCar(step);
      } else if ((e.code === 'Enter' || e.code === 'NumpadEnter') && this.netView?.role === 'host' && this.netView?.opp) {
        e.preventDefault();
        this.#handle('net-start');
      }
      return;
    }
    if (this.current === 'duo') {
      if (e.target?.tagName === 'INPUT') {
        // Sedang mengetik nama: Enter/Esc = selesai mengetik (tidak memulai balapan)
        if (e.code === 'Enter' || e.code === 'NumpadEnter' || e.code === 'Escape') {
          e.preventDefault();
          e.target.blur();
        }
        return;
      }
      const step = { KeyA: [0, -1], KeyD: [0, 1], ArrowLeft: [1, -1], ArrowRight: [1, 1] }[e.code];
      if (step) {
        e.preventDefault();
        this.#stepDuoCar(step[0], step[1]);
      } else if (e.code === 'Enter' || e.code === 'NumpadEnter') {
        e.preventDefault();
        this.#handle('duo-start');
      }
      return;
    }
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


  // ------------------------------------------------------------ mode online (2 perangkat)
  /** Buka layar online langsung (mis. dari tautan ?gabung=KODE) dan isi kodenya. */
  openOnline(code = '') {
    this.cb.onScreen?.('online');
    this.show('online');
    if (code) this.root.querySelector('[data-net-code-input]').value = normalizeCode(code);
    this.#renderOnline();
  }

  #stepNetCar(d) {
    const n = CAR_ORDER.length;
    const i = CAR_ORDER.indexOf(this.settings.car);
    this.#setNetCar(CAR_ORDER[(i + d + n) % n]);
  }

  #setNetCar(id) {
    if (!CARS[id]) return;
    this.settings.car = id;
    this.cb.onNetProfile?.();
    this.#renderInfo();
    this.#renderOnline();
  }

  #commitNetName() {
    const inp = this.root.querySelector('[data-net-name]');
    const name = sanitizeName(inp.value, 'PEMAIN');
    inp.value = name;
    if (this.settings.netName !== name) {
      this.settings.netName = name;
      this.cb.onNetProfile?.();
    }
  }

  /** Dipanggil OnlineSession setiap status berubah. */
  setOnlineView(vm) {
    this.netView = vm;
    if (this.current === 'online') this.#renderOnline();
  }

  setOnlinePing(rtt, connected) {
    const el = this.root.querySelector('[data-net-ping]');
    if (!this.netView?.opp) return (el.textContent = '');
    el.textContent = connected ? `${ICON_TEXT.ok} Tersambung${rtt !== null && rtt !== undefined ? ` · ${rtt} ms` : ''}` : 'Koneksi terputus';
    el.classList.toggle('bad', !connected || (rtt ?? 0) > 250);
  }

  #carBlock(id) {
    const c = CARS[id];
    return `<div class="duo-carname" style="--car:${carHex(id)}">${c.name}</div><em class="duo-tagline">${esc(c.tagline)}</em>
      <div class="duo-stats">${statBar('KECEPATAN', c.stats.speed)}${statBar('AKSELERASI', c.stats.accel)}${statBar('HANDLING', c.stats.handling)}${statBar('NITRO', c.stats.nitro)}</div>`;
  }

  #renderOnline() {
    const vm = this.netView ?? { state: 'start', role: null, me: { name: this.settings.netName, car: this.settings.car } };
    const scr = this.screens.online;
    scr.dataset.state = vm.state;
    scr.dataset.role = vm.role ?? 'none';
    const q = (sel) => scr.querySelector(sel);
    // Kartu "kamu": warna mengikuti peran (host = P1 merah, tamu = P2 cyan)
    const myColor = vm.role === 'guest' ? PLAYER_COLORS[1] : vm.role === 'host' ? PLAYER_COLORS[0] : '#facc15';
    const meCard = q('[data-net-me]');
    meCard.style.setProperty('--pc', myColor);
    const meBadge = q('[data-net-me-badge]');
    meBadge.textContent = vm.role === 'host' ? 'P1' : vm.role === 'guest' ? 'P2' : 'KAMU';
    meBadge.classList.toggle('is-long', meBadge.textContent.length > 2);
    const nameIn = q('[data-net-name]');
    if (document.activeElement !== nameIn) nameIn.value = this.settings.netName;
    const car = CARS[this.settings.car];
    meCard.style.setProperty('--car', carHex(this.settings.car));
    q('[data-net-carname]').textContent = car.name;
    q('[data-net-tagline]').textContent = car.tagline;
    q('[data-net-stats]').innerHTML = statBar('KECEPATAN', car.stats.speed) + statBar('AKSELERASI', car.stats.accel) + statBar('HANDLING', car.stats.handling) + statBar('NITRO', car.stats.nitro);
    scr.querySelectorAll('[data-net-car]').forEach((b) => {
      const on = b.dataset.netCar === this.settings.car;
      b.classList.toggle('sel', on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
    // Lawan
    const oppCard = q('[data-net-opp]');
    const oppColor = vm.role === 'guest' ? PLAYER_COLORS[0] : PLAYER_COLORS[1];
    oppCard.style.setProperty('--pc', vm.opp ? oppColor : '#64748b');
    q('[data-net-opp-badge]').textContent = vm.opp ? (vm.role === 'guest' ? 'P1' : 'P2') : '?';
    q('[data-net-opp-name]').textContent = vm.opp ? vm.opp.name : '—';
    q('[data-net-opp-body]').innerHTML = vm.opp
      ? this.#carBlock(vm.opp.car)
      : `<p class="net-waiting">${vm.state === 'room' && vm.role === 'host' ? 'Menunggu lawan bergabung…<br /><small>Bagikan kode atau QR di tengah.</small>' : 'Belum ada lawan.'}</p>`;
    if (!vm.opp) q('[data-net-ping]').textContent = '';
    // Status, kode, QR
    q('[data-net-status]').textContent = vm.status || (vm.role === 'guest' ? 'Menyambung…' : 'Membuat ruang…');
    q('[data-net-code]').textContent = vm.code ?? '';
    q('[data-net-url]').textContent = vm.role === 'host' && vm.joinUrl ? vm.joinUrl : '';
    const qrBox = q('[data-net-qr]');
    const qrKey = vm.role === 'host' ? vm.joinUrl : '';
    if (qrBox.dataset.key !== qrKey) {
      qrBox.dataset.key = qrKey;
      qrBox.innerHTML = qrKey ? makeQrSvg(qrKey) : '';
    }
    // Pilihan balapan
    const lobby = vm.lobby;
    if (vm.role === 'host') q('[data-net-track]').textContent = TRACKS[this.settings.track].name;
    q('[data-net-info]').innerHTML = lobby
      ? `<span>LINTASAN</span><b>${esc(TRACKS[lobby.track]?.name ?? '')}</b><span>${lobby.laps} lap · ${lobby.rivals ? `${lobby.rivals} lawan AI` : 'tanpa AI'}</span>`
      : '';
    const startBtn = q('[data-action="net-start"]');
    startBtn.disabled = !(vm.opp && vm.connected);
    q('[data-net-wait]').textContent =
      vm.state !== 'room' ? '' : vm.role === 'host' ? (vm.opp ? 'Lawan siap. Tekan MULAI!' : 'Menunggu lawan bergabung…') : 'Menunggu host menekan MULAI…';
    const err = q('[data-net-error]');
    err.textContent = vm.error || '';
    err.hidden = !vm.error;
  }

  // ------------------------------------------------------------ garasi
  setCarThumbs(urls) {
    for (const [id, url] of Object.entries(urls)) {
      this.root.querySelectorAll(`[data-thumb="${id}"]`).forEach((img) => (img.src = url));
    }
  }

  // ------------------------------------------------------------ lobi 2 pemain
  #stepDuoCar(p, d) {
    const n = CAR_ORDER.length;
    const i = CAR_ORDER.indexOf(this.settings.duoCars[p]);
    this.#setDuoCar(p, CAR_ORDER[(i + d + n) % n]);
  }

  #setDuoCar(p, id) {
    if (!CARS[id] || (p !== 0 && p !== 1)) return;
    this.settings.duoCars[p] = id;
    this.cb.onDuoCar?.(p, id);
    this.#renderDuo();
  }

  #stepTrack(d) {
    const n = TRACK_ORDER.length;
    const i = TRACK_ORDER.indexOf(this.settings.track);
    this.#selectTrack(TRACK_ORDER[(i + d + n) % n]);
    this.#renderDuo();
  }

  /** Simpan nama dari kolom isian (dipanggil saat selesai mengetik & sebelum balapan dimulai). */
  #commitNames() {
    let changed = false;
    this.root.querySelectorAll('[data-duo-name]').forEach((inp) => {
      const p = Number(inp.dataset.duoName);
      const name = sanitizeName(inp.value, DUO_DEFAULT_NAMES[p]);
      inp.value = name;
      if (this.settings.duoNames[p] !== name) {
        this.settings.duoNames[p] = name;
        changed = true;
      }
    });
    if (changed) this.cb.onSettings?.(this.settings, 'duoNames');
  }

  #renderDuo() {
    const s = this.settings;
    for (const p of [0, 1]) {
      const id = s.duoCars[p];
      const c = CARS[id];
      const card = this.root.querySelector(`[data-duo-card="${p}"]`);
      card.style.setProperty('--car', carHex(id));
      card.querySelector('[data-duo-carname]').textContent = c.name;
      card.querySelector('[data-duo-tagline]').textContent = c.tagline;
      card.querySelector('[data-duo-stats]').innerHTML =
        statBar('KECEPATAN', c.stats.speed) + statBar('AKSELERASI', c.stats.accel) + statBar('HANDLING', c.stats.handling) + statBar('NITRO', c.stats.nitro);
      card.querySelectorAll('[data-duo-car]').forEach((b) => {
        const on = b.dataset.duoCar === `${p}:${id}`;
        b.classList.toggle('sel', on);
        b.setAttribute('aria-pressed', on ? 'true' : 'false');
      });
      const inp = card.querySelector('[data-duo-name]');
      if (document.activeElement !== inp) inp.value = s.duoNames[p];
    }
    this.root.querySelector('[data-duo-track]').textContent = TRACKS[s.track].name;
    this.#renderPad();
  }

  /** Status gamepad di lobi (dipanggil Game tiap frame; hanya digambar ulang bila berubah). */
  setPadStatus(count, owners) {
    const key = `${count}|${owners.join(',')}|${this.settings.duoPadSwap}`;
    if (key === this.padKey) return;
    this.padKey = key;
    this.padInfo = { count, owners: [...owners] };
    this.#renderPad();
  }

  #renderPad() {
    const el = this.root.querySelector('[data-duo-pad]');
    const { count = 0, owners = [] } = this.padInfo ?? {};
    if (!count) {
      el.innerHTML = `${ICON.pad}<span>Gamepad: tidak terdeteksi — sambungkan lalu tekan salah satu tombolnya.</span>`;
      return;
    }
    const who = owners
      .map((o, i) => (o < 0 ? '' : `Gamepad ${i + 1} → <b style="color:${PLAYER_COLORS[o]}">${esc(this.settings.duoNames[o])}</b>`))
      .filter(Boolean)
      .join(' · ');
    el.innerHTML = `${ICON.pad}<span>${who}</span><button type="button" class="duo-swap" data-action="duo-pad-swap">TUKAR</button>`;
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
    if (key === 'laps' || key === 'duoRivals' || key === 'netRivals') val = Number(val);
    this.settings[key] = val;
    this.cb.onSettings?.(this.settings, key);
    this.#renderSettings();
    this.#renderInfo();
    if (this.current === 'online' && (key === 'laps' || key === 'netRivals')) {
      this.cb.onNetLobby?.();
      this.#renderOnline();
    }
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
    delete r.box.dataset.duo;
    this.#resultButtons(null);
    r.box.dataset.resultTone = tone;
    r.icon.innerHTML = tone === 'lose' ? ICON.flag : ICON.trophy;
    r.kicker.textContent = kicker;
    r.title.textContent = title;
    r.sub.textContent = sub;
    this.result = { tone, position: player.position, dnf: player.dnf };
    this.show('results');
  }

  /**
   * Hasil mode 2 pemain: pemenang duel = posisi akhir yang lebih baik (tidak finis = kalah).
   * pilots: [{ name, racer }, { name, racer }]
   */
  showDuoResults(pilots, total, opts = {}) {
    const r = this.res;
    this.#resultButtons(opts.online ?? null);
    const [a, b] = pilots;
    const rank = (p) => (p.racer.dnf ? Infinity : p.racer.position);
    const winner = rank(a) < rank(b) ? 1 : rank(b) < rank(a) ? 2 : 0;
    const place = (p) => (p.racer.dnf ? 'tidak finis' : `posisi ${p.racer.position}`);
    let tone, kicker, title, sub;
    if (!winner) {
      tone = 'lose';
      kicker = 'TIDAK FINIS';
      title = 'SERI';
      sub = 'Kedua pemain kehabisan waktu sebelum finis. Coba lagi!';
    } else {
      const w = pilots[winner - 1];
      const l = pilots[2 - winner];
      tone = 'win';
      kicker = w.racer.position === 1 ? 'JUARA 1 · MENANG DUEL' : 'MENANG DUEL';
      title = `${w.name} MENANG!`;
      if (opts.me) {
        // Mode online: sudut pandang perangkat ini
        const mine = w.racer === opts.me;
        kicker = mine ? 'KAMU MENANG DUEL' : 'LAWAN MENANG DUEL';
        if (!mine) tone = 'lose';
      }
      sub = `${w.name} ${place(w)} · ${l.name} ${place(l)} (dari ${total} pembalap).`;
    }
    r.box.dataset.duo = '1';
    r.box.dataset.resultTone = tone;
    r.box.style.setProperty('--win', winner ? PLAYER_COLORS[winner - 1] : 'var(--red)');
    r.icon.innerHTML = tone === 'lose' ? ICON.flag : ICON.trophy;
    r.kicker.textContent = kicker;
    r.title.textContent = title;
    r.sub.textContent = sub;
    this.result = { tone, duo: true, online: opts.online ?? null, winner, positions: [a.racer.position, b.racer.position], dnf: [a.racer.dnf, b.racer.dnf] };
    this.show('results');
  }

  /** Tombol layar hasil: online = MAIN LAGI hanya untuk host, + LOBI ONLINE. role: null | 'host' | 'guest' */
  #resultButtons(role) {
    const r = this.res;
    r.restart.hidden = role === 'guest';
    r.lobby.hidden = role !== 'host';
    r.netNote.hidden = role !== 'guest';
    r.netNote.textContent = role === 'guest' ? 'Menunggu host memilih MAIN LAGI atau LOBI ONLINE…' : '';
    r.menu.querySelector('span').textContent = role ? 'KELUAR RUANG' : 'MENU UTAMA';
  }

  /** Perbarui tabel hasil (dipanggil berkala — lawan yang belum finis terus diperbarui). duo: tandai P1/P2; me: racer perangkat ini (online). */
  updateResults(standings, totalLaps, duo = false, me = null) {
    const html = standings
      .map((r) => {
        let time;
        if (r.dnf) time = '<span class="muted">TIDAK FINIS</span>';
        else if (r.finished) time = formatTime(r.finishTime);
        else time = `<span class="muted">Lap ${Math.min(r.lap, totalLaps)}/${totalLaps}…</span>`;
        const tag = r.isPlayer ? ` <em>(${me && r === me ? 'KAMU' : duo ? `P${r.playerIndex}` : 'KAMU'})</em>` : '';
        const mine = me ? r === me : r.isPlayer; // online: hanya baris milik perangkat ini yang disorot
        return `<tr class="${mine ? 'me' : ''}"><td class="pos">${r.position}</td><td><i style="background:${r.color}"></i>${esc(r.name)}${tag}</td><td class="car">${esc(r.carName ?? '')}</td><td class="mono">${time}</td><td class="mono">${formatTime(r.bestLap)}</td></tr>`;
      })
      .join('');
    if (html !== this.lastResultsHtml) {
      this.lastResultsHtml = html;
      this.res.body.innerHTML = html;
    }
  }
}
