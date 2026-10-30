import { formatTime } from '../game/RaceManager.js';
import { ITEM_TYPES } from '../game/data/items.js';

const SPEEDO_MAX = 240; // km/jam pada skala jarum
// Busur 270° (dari kiri-bawah searah jarum jam ke kanan-bawah)
const ARC = 'M 43.43 156.57 A 80 80 0 1 1 156.57 156.57';

function ticksSvg() {
  let out = '';
  for (let v = 0; v <= SPEEDO_MAX; v += 20) {
    const a = ((135 + (v / SPEEDO_MAX) * 270) * Math.PI) / 180;
    const major = v % 40 === 0;
    const r1 = major ? 62 : 66;
    const r2 = 71;
    const x1 = 100 + Math.cos(a) * r1, y1 = 100 + Math.sin(a) * r1;
    const x2 = 100 + Math.cos(a) * r2, y2 = 100 + Math.sin(a) * r2;
    out += `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" class="${major ? 'tick major' : 'tick'}"/>`;
  }
  return out;
}

// Petunjuk tombol: 0 = pemain tunggal, 1 = PEMAIN 1, 2 = PEMAIN 2 (mode layar terbagi)
const HINTS = {
  0: `<span><kbd>W</kbd><kbd>↑</kbd> Gas</span>
    <span><kbd>S</kbd><kbd>↓</kbd> Rem / Mundur</span>
    <span><kbd>A</kbd><kbd>D</kbd> Belok</span>
    <span><kbd>Spasi</kbd> Drift</span>
    <span><kbd>Shift</kbd> Nitro</span>
    <span><kbd>R</kbd> Reset</span>
    <span><kbd>M</kbd> Suara</span>
    <span><kbd>Esc</kbd> Jeda</span>`,
  1: `<span><kbd>W</kbd> Gas</span>
    <span><kbd>S</kbd> Rem</span>
    <span><kbd>A</kbd><kbd>D</kbd> Belok</span>
    <span><kbd>Spasi</kbd> Drift</span>
    <span><kbd>Shift</kbd> kiri Nitro</span>
    <span><kbd>R</kbd> Reset</span>
    <span><kbd>Esc</kbd> Jeda</span>`,
  2: `<span><kbd>↑</kbd> Gas</span>
    <span><kbd>↓</kbd> Rem</span>
    <span><kbd>←</kbd><kbd>→</kbd> Belok</span>
    <span><kbd>/</kbd> Drift</span>
    <span><kbd>Shift</kbd> kanan Nitro</span>
    <span><kbd>⌫</kbd> Reset</span>`,
};
const NITRO_KEY = { 0: 'Shift', 1: 'Shift kiri', 2: 'Shift kanan' };

const template = (player) => /* html */ `
  <div class="hud-panel hud-tl">
    <div class="hud-who" data-who hidden><i data-who-color></i><span data-who-name></span><em class="hud-net" data-who-net hidden></em></div>
    <div class="hud-row race-only">
      <div>
        <div class="hud-label">POSISI</div>
        <div class="hud-pos"><b data-pos>1</b><span data-pos-total>/6</span></div>
      </div>
      <div>
        <div class="hud-label">LAP</div>
        <div class="hud-mid" data-lap-race>1/3</div>
      </div>
    </div>
    <div class="practice-only">
      <div class="hud-label">MODE</div>
      <div class="hud-mode">LATIHAN BEBAS</div>
      <div class="hud-row">
        <div>
          <div class="hud-label">LAP</div>
          <div class="hud-big" data-lap>1</div>
        </div>
        <div>
          <div class="hud-label">CHECKPOINT</div>
          <div class="hud-mid" data-cp>0/3</div>
        </div>
      </div>
    </div>
  </div>

  <ol class="hud-standings race-only" data-standings aria-label="Klasemen"></ol>

  <div class="hud-panel hud-tr">
    <div class="hud-label race-only">WAKTU BALAP</div>
    <div class="hud-label practice-only">WAKTU LAP</div>
    <div class="hud-big mono" data-time>00:00.00</div>
    <div class="hud-sub race-only"><span>LAP INI</span><b class="mono" data-laptime>--:--.--</b></div>
    <div class="hud-sub"><span>TERBAIK</span><b class="mono" data-best>--:--.--</b></div>
    <div class="hud-sub practice-only"><span>TERAKHIR</span><b class="mono" data-last>--:--.--</b></div>
  </div>

  <div class="hud-timeout" data-timeout>SISA WAKTU <b class="mono" data-timeout-val>60</b> DETIK</div>

  <div class="hud-countdown" data-countdown aria-live="assertive">
    <div class="lights"><i></i><i></i><i></i></div>
    <div class="count-num" data-count-num>3</div>
  </div>

  <div class="hud-msg" data-msg aria-live="polite"><div class="hud-msg-main"></div><div class="hud-msg-sub"></div></div>
  <div class="hud-warn" data-warn>⚠ ARAH SALAH — PUTAR BALIK</div>

  <div class="hud-panel hud-bl"><canvas data-minimap width="180" height="180"></canvas></div>

  <div class="hud-br">
    <svg viewBox="0 0 200 200" class="speedo">
      <defs>
        <linearGradient id="spd-${player}" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stop-color="#22d3ee"/>
          <stop offset="0.7" stop-color="#3b82f6"/>
          <stop offset="1" stop-color="#ef4444"/>
        </linearGradient>
      </defs>
      <circle cx="100" cy="100" r="94" class="speedo-bg"/>
      <path d="${ARC}" class="speedo-track" pathLength="100"/>
      <path d="${ARC}" class="speedo-value" pathLength="100" data-arc stroke-dasharray="0 100" stroke="url(#spd-${player})"/>
      ${ticksSvg()}
    </svg>
    <div class="speedo-num mono" data-speed>0</div>
    <div class="speedo-unit">km/jam</div>
    <div class="speedo-gear" data-gear>N</div>
  </div>

  <div class="hud-nitro" data-nitro>
    <div class="nitro-label"><span>NITRO</span><kbd>${NITRO_KEY[player] ?? 'Shift'}</kbd></div>
    <div class="nitro-bar"><i data-nitro-fill></i></div>
  </div>

  <div class="hud-effects">
    ${Object.entries(ITEM_TYPES)
      .map(([k, t]) => `<div class="fx fx-${k}" data-fx="${k}"><b>${t.name}</b><span class="mono" data-fx-t></span><i><s data-fx-bar></s></i></div>`)
      .join('')}
  </div>

  <div class="hud-chips">
    <span class="chip chip-drift" data-drift>DRIFT</span>
    <span class="chip chip-air" data-air>MELAYANG!</span>
  </div>

  <div class="hud-hint" data-hint>${HINTS[player] ?? HINTS[0]}</div>

  <div class="hud-flash" data-flash></div>
  <div class="hud-fps mono" data-fps hidden></div>
`;

export class HUD {
  /** opts.player: 0 = pemain tunggal (bawaan), 1 / 2 = panel PEMAIN 1 / PEMAIN 2 di layar terbagi */
  constructor(root, opts = {}) {
    this.root = root;
    this.player = opts.player ?? 0;
    root.innerHTML = template(this.player);
    root.dataset.player = String(this.player);
    const q = (sel) => root.querySelector(sel);
    this.el = {
      who: q('[data-who]'),
      whoName: q('[data-who-name]'),
      whoColor: q('[data-who-color]'),
      whoNet: q('[data-who-net]'),
      pos: q('[data-pos]'),
      posTotal: q('[data-pos-total]'),
      lapRace: q('[data-lap-race]'),
      standings: q('[data-standings]'),
      lap: q('[data-lap]'),
      cp: q('[data-cp]'),
      time: q('[data-time]'),
      laptime: q('[data-laptime]'),
      best: q('[data-best]'),
      last: q('[data-last]'),
      timeout: q('[data-timeout]'),
      timeoutVal: q('[data-timeout-val]'),
      countdown: q('[data-countdown]'),
      countNum: q('[data-count-num]'),
      msg: q('[data-msg]'),
      msgMain: q('.hud-msg-main'),
      msgSub: q('.hud-msg-sub'),
      warn: q('[data-warn]'),
      minimap: q('[data-minimap]'),
      arc: q('[data-arc]'),
      speed: q('[data-speed]'),
      gear: q('[data-gear]'),
      drift: q('[data-drift]'),
      air: q('[data-air]'),
      hint: q('[data-hint]'),
      flash: q('[data-flash]'),
      fps: q('[data-fps]'),
      nitro: q('[data-nitro]'),
      nitroFill: q('[data-nitro-fill]'),
      fx: Object.fromEntries([...root.querySelectorAll('[data-fx]')].map((el) => [el.dataset.fx, { el, t: el.querySelector('[data-fx-t]'), bar: el.querySelector('[data-fx-bar]') }])),
    };
    this.cache = {};
    this.msgTimer = 0;
    this.hintTimer = 0;
    this.flashLevel = 0;
    this.map = null;
    this.standingRows = [];
  }

  show(visible) {
    this.root.hidden = !visible;
  }

  /** Ganti petunjuk tombol & label nitro: 0 = pemain tunggal, 1 = PEMAIN 1, 2 = PEMAIN 2. */
  setControls(player) {
    if (this.player === player) return;
    this.player = player;
    this.root.dataset.player = String(player);
    this.el.hint.innerHTML = HINTS[player] ?? HINTS[0];
    this.root.querySelector('.nitro-label kbd').textContent = NITRO_KEY[player] ?? 'Shift';
  }

  /** Info jaringan di samping nama (mode online), mis. "ONLINE · 42 ms". text = null → sembunyikan. */
  setNetInfo(text, bad = false) {
    const el = this.el.whoNet;
    el.hidden = !text;
    if (!text) return;
    this.#set('net', text, el);
    this.#toggle('netBad', !!bad, el);
  }

  /** Label pemain di panel kiri-atas (mode 2 pemain). name = null → sembunyikan. */
  setIdentity(name, color) {
    this.el.who.hidden = !name;
    if (!name) this.el.whoNet.hidden = true;
    if (!name) return;
    this.el.whoName.textContent = name;
    this.el.whoColor.style.background = color;
    this.root.style.setProperty('--pc', color);
  }

  /** 'race' atau 'practice' — menentukan panel mana yang tampil. */
  setMode(mode, racerCount = 1) {
    this.root.dataset.mode = mode;
    this.cache = {};
    this.el.posTotal.textContent = `/${racerCount}`;
    this.el.timeout.classList.remove('on');
    this.el.countdown.className = 'hud-countdown';
    this.el.msg.classList.remove('on');
    this.msgTimer = 0;
  }

  #set(key, value, el, prop = 'textContent') {
    if (this.cache[key] === value) return;
    this.cache[key] = value;
    el[prop] = value;
  }

  #toggle(key, on, el) {
    if (this.cache[key] === on) return;
    this.cache[key] = on;
    el.classList.toggle('on', on);
  }

  showHint(seconds = 9) {
    this.hintTimer = seconds;
    this.el.hint.classList.add('on');
  }

  message(main, sub = '', seconds = 2.2, tone = '') {
    this.el.msgMain.textContent = main;
    this.el.msgSub.textContent = sub;
    this.el.msg.className = `hud-msg on ${tone}`;
    this.msgTimer = seconds;
  }

  flash(strength) {
    this.el.flash.classList.remove('portal');
    this.flashLevel = Math.min(0.8, Math.max(this.flashLevel, strength));
  }

  /** Kilatan cyan saat melintasi portal Gurun 4D. */
  portalFlash() {
    this.el.flash.classList.add('portal');
    this.flashLevel = 0.55;
  }

  // ---------------------------------------------------------------- countdown
  /** value: 3, 2, 1, 'GO', atau null (sembunyikan) */
  countdown(value) {
    const el = this.el.countdown;
    if (value === null) {
      el.className = 'hud-countdown';
      return;
    }
    const lit = value === 'GO' ? 3 : 4 - value; // 3 → 1 lampu, 2 → 2, 1 → 3, GO → hijau
    el.className = `hud-countdown on lit-${lit}${value === 'GO' ? ' go' : ''}`;
    this.el.countNum.textContent = value === 'GO' ? 'GO!' : String(value);
    // Ulang animasi "pop"
    this.el.countNum.classList.remove('pop');
    void this.el.countNum.offsetWidth;
    this.el.countNum.classList.add('pop');
  }

  // ---------------------------------------------------------------- klasemen
  /**
   * racers: [{ name, color, isPlayer, playerIndex }] urut grid; dibuat sekali per balapan.
   * me: racer pemilik panel ini (mode 2 pemain); bawaan = pembalap manusia.
   */
  setRacers(racers, me = null) {
    const ol = this.el.standings;
    ol.innerHTML = '';
    this.standingRows = racers.map((r) => {
      const mine = me ? r === me : r.isPlayer;
      const li = document.createElement('li');
      li.className = mine ? 'me' : r.isPlayer ? 'human' : '';
      li.innerHTML = `<span class="st-pos"></span><i style="background:${r.color}"></i><span class="st-name"></span><span class="st-flag" title="Sudah finis"></span>`;
      li.querySelector('.st-name').textContent = mine ? `${r.name} (KAMU)` : r.isPlayer ? `${r.name} (P${r.playerIndex ?? 2})` : r.name;
      ol.appendChild(li);
      return { li, racer: r, pos: 0 };
    });
  }

  #updateStandings(standings) {
    if (!this.standingRows.length) return;
    const key = standings.map((r) => `${r.id}${r.finished ? 'f' : ''}`).join(',');
    if (this.cache.standings === key) return;
    this.cache.standings = key;
    const byId = new Map(this.standingRows.map((row) => [row.racer.id, row]));
    const ol = this.el.standings;
    standings.forEach((r, i) => {
      const row = byId.get(r.id);
      if (!row) return;
      row.li.querySelector('.st-pos').textContent = String(i + 1);
      row.li.classList.toggle('done', r.finished && !r.dnf);
      ol.appendChild(row.li); // urutkan ulang
    });
  }

  // ---------------------------------------------------------------- minimap
  setTrack(path) {
    const canvas = this.el.minimap;
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const size = 180;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = size + 'px';
    canvas.style.height = size + 'px';
    const b = path.bounds;
    const span = Math.max(b.maxX - b.minX, b.maxZ - b.minZ);
    const pad = 16;
    const scale = (size - pad * 2) / span;
    // Peta: x ke kanan, z ke bawah
    const tx = (x) => pad + (x - b.minX) * scale + ((span - (b.maxX - b.minX)) * scale) / 2;
    const tz = (z) => pad + (z - b.minZ) * scale + ((span - (b.maxZ - b.minZ)) * scale) / 2;
    const line = new Path2D();
    for (let i = 0; i <= path.count; i++) {
      const k = i % path.count;
      if (i === 0) line.moveTo(tx(path.x[k]), tz(path.z[k]));
      else line.lineTo(tx(path.x[k]), tz(path.z[k]));
    }
    line.closePath();
    const f = path.frameAt(0);
    this.map = { ctx: canvas.getContext('2d'), dpr, size, line, tx, tz, start: f };
  }

  /** markers: [{x, z, heading, color, me, human}] — penanda pemain digambar terakhir (paling atas) */
  drawMinimap(markers) {
    const m = this.map;
    if (!m) return;
    const ctx = m.ctx;
    ctx.setTransform(m.dpr, 0, 0, m.dpr, 0, 0);
    ctx.clearRect(0, 0, m.size, m.size);
    ctx.lineJoin = 'round';
    ctx.strokeStyle = 'rgba(2,8,23,0.9)';
    ctx.lineWidth = 9;
    ctx.stroke(m.line);
    ctx.strokeStyle = '#e2e8f0';
    ctx.lineWidth = 4.5;
    ctx.stroke(m.line);
    // Garis start
    const sx = m.tx(m.start.x), sz = m.tz(m.start.z);
    ctx.save();
    ctx.translate(sx, sz);
    ctx.rotate(Math.atan2(m.start.sz, m.start.sx));
    ctx.fillStyle = '#facc15';
    ctx.fillRect(-7, -1.5, 14, 3);
    ctx.restore();
    for (const mk of markers) {
      const x = m.tx(mk.x), z = m.tz(mk.z);
      ctx.save();
      ctx.translate(x, z);
      ctx.rotate(-mk.heading); // heading 0 = +Z (ke bawah di peta)
      ctx.fillStyle = mk.color;
      ctx.strokeStyle = mk.me || mk.human ? '#ffffff' : '#020617';
      ctx.lineWidth = mk.me ? 2 : 1.5;
      ctx.beginPath();
      const s = mk.me ? 7.5 : mk.human ? 6.5 : 5;
      ctx.moveTo(0, s);
      ctx.lineTo(s * 0.75, -s * 0.7);
      ctx.lineTo(-s * 0.75, -s * 0.7);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.restore();
    }
  }

  // ---------------------------------------------------------------- per frame
  update(dt, d) {
    const kmh = Math.round(Math.abs(d.speedKmh));
    this.#set('speed', String(kmh), this.el.speed);
    const pct = Math.min(100, (Math.abs(d.speedKmh) / SPEEDO_MAX) * 100).toFixed(1);
    if (this.cache.arcAttr !== pct) {
      this.cache.arcAttr = pct;
      this.el.arc.setAttribute('stroke-dasharray', `${pct} 100`);
    }
    const gear = d.speedKmh < -1 ? 'R' : Math.abs(d.speedKmh) < 1 ? 'N' : 'D';
    this.#set('gear', gear, this.el.gear);

    if (d.mode === 'race') {
      this.#set('pos', String(d.position), this.el.pos);
      this.#set('lapRace', `${Math.min(d.lap, d.totalLaps)}/${d.totalLaps}`, this.el.lapRace);
      this.#set('time', formatTime(d.raceTime), this.el.time);
      this.#set('laptime', formatTime(d.lapTime), this.el.laptime);
      this.#updateStandings(d.standings);
      const showTimeout = d.timeLeft !== null && !d.finished;
      this.#toggle('timeout', showTimeout, this.el.timeout);
      if (showTimeout) this.#set('timeoutVal', String(Math.ceil(d.timeLeft)), this.el.timeoutVal);
    } else {
      this.#set('lap', String(d.lap), this.el.lap);
      this.#set('cp', `${d.checkpoint}/${d.checkpointTotal}`, this.el.cp);
      this.#set('time', formatTime(d.lapTime), this.el.time);
      this.#set('last', formatTime(d.lastLap), this.el.last);
    }
    this.#set('best', formatTime(d.bestLap), this.el.best);

    // Nitro
    const n = Math.round((d.nitro ?? 0) * 100);
    if (this.cache.nitro !== n) {
      this.cache.nitro = n;
      this.el.nitroFill.style.width = `${n}%`;
    }
    this.#toggle('boost', !!d.boosting, this.el.nitro);
    this.#toggle('nitroLow', n < 15, this.el.nitroFill);
    // Efek item aktif
    if (d.fx) {
      for (const [k, ui] of Object.entries(this.el.fx)) {
        const left = d.fx[k] ?? 0;
        this.#toggle('fx-' + k, left > 0, ui.el);
        if (left > 0) {
          const pct = Math.round((left / ITEM_TYPES[k].duration) * 100);
          if (this.cache['fxp-' + k] !== pct) {
            this.cache['fxp-' + k] = pct;
            ui.bar.style.width = `${pct}%`;
            ui.t.textContent = `${left.toFixed(1).replace('.', ',')} dtk`;
          }
        }
      }
    }

    // Layar terbagi: petunjuk tombol berbagi tempat dengan baris efek item → sembunyikan saat ada efek
    if (this.player !== 0 && this.hintTimer > 0 && d.fx && (d.fx.speed > 0 || d.fx.shield > 0 || d.fx.turbo > 0)) this.hintTimer = 0.001;

    this.#toggle('drift', d.drifting, this.el.drift);
    this.#toggle('air', d.airborne, this.el.air);
    this.#toggle('warn', d.wrongWay, this.el.warn);

    if (this.msgTimer > 0) {
      this.msgTimer -= dt;
      if (this.msgTimer <= 0) this.el.msg.classList.remove('on');
    }
    if (this.hintTimer > 0) {
      this.hintTimer -= dt;
      if (this.hintTimer <= 0) this.el.hint.classList.remove('on');
    }
    if (this.flashLevel > 0.001) {
      this.flashLevel = Math.max(0, this.flashLevel - dt * 2.5);
      this.el.flash.style.opacity = this.flashLevel.toFixed(3);
    }
  }

  setFps(fps, quality = '') {
    this.el.fps.hidden = false;
    this.el.fps.textContent = `${fps} FPS${quality ? ' · ' + quality : ''}`;
  }

  hideFps() {
    this.el.fps.hidden = true;
  }
}
