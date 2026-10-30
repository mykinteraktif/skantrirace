import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

/**
 * Uji browser SKANTRI RACE (Chromium headless + SwiftShader / WebGL software). OPSIONAL.
 * Bagian: A latihan bebas · B balapan · C menu lengkap/mobil/lintasan/nitro/item/sentuh · D mode 2 pemain.
 *
 * Persiapan (sekali):  npm i -D playwright  lalu  npx playwright install chromium
 * Jalankan:            npm run build && npm run preview   (terminal 1)
 *                      npm run test:browser               (terminal 2)
 * Screenshot disimpan di tests/screenshots/.
 *
 * Karena renderer software sangat lambat (±2–5 FPS), semua uji berbasis KONDISI
 * dan waktu simulasi (raceTime), bukan jam dinding.
 */
const OUT = fileURLToPath(new URL('./screenshots', import.meta.url));
mkdirSync(OUT, { recursive: true });
const GAME_URL = process.env.GAME_URL || 'http://localhost:4173/?debug=1';
const results = [];
const check = (name, ok, info = '') => {
  results.push({ name, ok, info });
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${info ? '  — ' + info : ''}`);
};
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const browser = await chromium.launch({
  args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'],
});
const context = await browser.newContext({ viewport: { width: 960, height: 540 } });
// Kualitas rendah agar renderer software (tanpa GPU) tidak terlalu lambat
await context.addInitScript(() => {
  if (!sessionStorage.getItem('init-done')) {
    localStorage.setItem('skantri-race-settings-v1', JSON.stringify({ quality: 'rendah' }));
    sessionStorage.setItem('init-done', '1');
  }
});
const page = await context.newPage();
const errors = [];
const warnings = [];
page.on('console', (m) => {
  if (m.type() === 'error') errors.push(m.text());
  if (m.type() === 'warning') warnings.push(m.text());
});
page.on('pageerror', (e) => errors.push('PAGEERROR ' + e.message));

const snap = () => page.evaluate(() => window.__skantri.snapshot());
async function waitFor(fn, timeout = 60000, every = 200) {
  const t0 = Date.now();
  let last;
  while (Date.now() - t0 < timeout) {
    last = await snap();
    if (fn(last)) return { ok: true, s: last };
    await sleep(every);
  }
  return { ok: false, s: last };
}
/** Tunggu sampai waktu simulasi bertambah `sec` detik. */
async function simWait(sec, timeout = 90000) {
  const start = (await snap()).raceTime;
  return waitFor((s) => s.raceTime - start >= sec, timeout, 100);
}

await page.goto(GAME_URL);
await page.waitForFunction(() => window.__skantri, null, { timeout: 60000 });
await sleep(3000);

let s = await snap();
check('Game dimuat dalam mode menu', s.mode === 'menu', `mode=${s.mode}`);
const canvasSize = await page.evaluate(() => {
  const c = document.querySelector('#stage canvas');
  return { cw: c.clientWidth, ch: c.clientHeight, w: innerWidth, h: innerHeight };
});
check('Kanvas memenuhi jendela', canvasSize.cw === canvasSize.w && canvasSize.ch === canvasSize.h, JSON.stringify(canvasSize));
await page.screenshot({ path: `${OUT}/01-menu.png` });

// Instrumentasi per langkah fisika (hanya pencatatan + autopilot opsional)
await page.evaluate(() => {
  const g = window.__skantri;
  const path = g.track.path;
  g.__log = { maxLat: 0, maxEdge: 0, maxY: 0, air: false, impacts: 0, maxImpact: 0 };
  g.__auto = false;
  g.__aLat = 16; // keberanian autopilot menikung (40 ≈ batas fisik mobil)
  const orig = g.vehicle.step.bind(g.vehicle);
  g.vehicle.step = (input, track, dt) => {
    const st = g.vehicle.state;
    if (g.__auto) {
      const ramp = path.ramps[0];
      let dr = ramp.s0 - st.s;
      if (dr < 0) dr += path.length;
      const target = dr < 200 ? ramp.lateral : 0;
      const look = 12 + Math.abs(st.forwardSpeed) * 0.35;
      const f = path.frameAt(st.s + look);
      const desired = Math.atan2(f.x + f.sx * target - st.x, f.z + f.sz * target - st.z);
      let err = desired - st.heading;
      while (err > Math.PI) err -= 2 * Math.PI;
      while (err < -Math.PI) err += 2 * Math.PI;
      const k = path.maxCurvatureAhead(st.s, 60);
      const vMax = Math.min(g.vehicle.phys.maxSpeed, Math.sqrt(g.__aLat / Math.max(k, 1e-4)));
      input.throttle = st.forwardSpeed < vMax ? 1 : 0;
      input.brake = st.forwardSpeed > vMax + 3 ? 1 : 0;
      input.steer = Math.max(-1, Math.min(1, -err * 2.5));
      input.handbrake = false;
    }
    orig(input, track, dt);
    const L = g.__log;
    L.maxLat = Math.max(L.maxLat, Math.abs(st.lateral));
    L.maxEdge = Math.max(L.maxEdge, Math.abs(st.lateral) + st.extent);
    L.maxY = Math.max(L.maxY, st.y);
    if (!st.onGround) L.air = true;
    if (st.impact > 0) {
      L.impacts++;
      L.maxImpact = Math.max(L.maxImpact, st.impact);
    }
  };
});

// Petunjuk
await page.click('[data-action="help"]');
await sleep(3000);
check('Panel PETUNJUK tampil', await page.isVisible('[data-screen="help"]'));
await page.screenshot({ path: `${OUT}/02-help.png` });
await page.keyboard.press('Escape');
await sleep(500);
check('Esc menutup petunjuk', await page.isVisible('[data-screen="main"]'));

// ===================================================== A. LATIHAN BEBAS
await page.click('[data-action="practice"]');
let r = await waitFor((x) => x.mode === 'playing' && x.raceMode === 'practice', 10000);
check('LATIHAN BEBAS → mode bermain (1 mobil, tanpa countdown)', r.ok && r.s.racers.length === 1 && r.s.phase === 'racing');
check('HUD tampil', await page.isVisible('#hud'));
await page.evaluate(() => (window.__skantri.timeScale = 3));

// 1. Akselerasi
await page.keyboard.down('KeyW');
const t0 = (await snap()).raceTime;
r = await waitFor((x) => x.speedKmh > 100, 90000);
check('W menambah kecepatan hingga >100 km/jam', r.ok, `${r.s.speedKmh.toFixed(0)} km/jam dalam ${(r.s.raceTime - t0).toFixed(2)} dtk simulasi`);
await sleep(600);
const hudSpeed = Number(await page.textContent('[data-speed]'));
const nowKmh = Math.abs((await snap()).speedKmh);
check('Angka speedometer HUD mengikuti kecepatan', Math.abs(hudSpeed - nowKmh) < 30, `HUD=${hudSpeed}, fisika=${nowKmh.toFixed(0)}`);
await page.screenshot({ path: `${OUT}/03-driving.png` });

// 2. Tabrak pembatas kanan
await page.evaluate(() => Object.assign(window.__skantri.__log, { maxLat: 0, maxEdge: 0, impacts: 0, maxImpact: 0 }));
const vBefore = (await snap()).speedKmh;
await page.keyboard.down('KeyD');
r = await waitFor((x) => Math.abs(x.lateral) + x.extent >= x.wallOffset - 0.05, 60000, 100);
let minSpeed = r.s.speedKmh;
for (let i = 0; i < 6; i++) {
  await sleep(150);
  minSpeed = Math.min(minSpeed, (await snap()).speedKmh);
}
await page.screenshot({ path: `${OUT}/04-wall.png` });
await page.keyboard.up('KeyD');
let log = await page.evaluate(() => window.__skantri.__log);
s = await snap();
const limit = s.wallOffset - s.halfWidth;
check('D membelokkan ke kanan sampai menyentuh pembatas', r.ok && log.impacts > 0, `${log.impacts} langkah kontak, tumbukan maks ${log.maxImpact.toFixed(1)} m/s`);
check('Bodi mobil TIDAK menembus pembatas (dicek tiap langkah fisika)', log.maxEdge <= s.wallOffset + 1e-3, `tepi bodi terjauh ${log.maxEdge.toFixed(3)} ≤ dinding ${s.wallOffset.toFixed(2)} m`);
check('Mobil melambat saat menabrak', minSpeed < vBefore - 10, `${vBefore.toFixed(0)} → ${minSpeed.toFixed(0)} km/jam`);

// 3. Belok kiri (di lurusan start agar tidak terganggu tikungan/pembatas)
await page.keyboard.press('KeyR');
await page.evaluate(() => {
  const g = window.__skantri;
  g.vehicle.place(g.track, 5, 0);
  const st = g.vehicle.state;
  st.vx = Math.sin(st.heading) * 25;
  st.vz = Math.cos(st.heading) * 25;
});
await simWait(0.2);
await page.keyboard.down('ArrowLeft');
const h0 = (await snap()).heading;
await simWait(0.5);
const h1 = (await snap()).heading;
await page.keyboard.up('ArrowLeft');
let dh = h1 - h0;
while (dh > Math.PI) dh -= 2 * Math.PI;
while (dh < -Math.PI) dh += 2 * Math.PI;
check('Panah kiri membelokkan mobil ke kiri', dh > 0.15, `Δheading = +${dh.toFixed(2)} rad`);
await page.keyboard.up('KeyW');

// 4. Rem lalu mundur
await page.keyboard.down('KeyS');
r = await waitFor((x) => x.speedKmh < 1, 60000);
check('S mengerem sampai berhenti', r.ok, `${r.s.speedKmh.toFixed(1)} km/jam`);
r = await waitFor((x) => x.speedKmh < -5, 60000);
check('S ditahan saat berhenti → mundur', r.ok, `${r.s.speedKmh.toFixed(1)} km/jam`);
await page.keyboard.up('KeyS');

// 5. Jeda
await page.keyboard.press('Escape');
r = await waitFor((x) => x.mode === 'paused', 10000);
check('Esc → JEDA', r.ok && (await page.isVisible('[data-screen="pause"]')));
await sleep(3000);
await page.screenshot({ path: `${OUT}/05-pause.png` });
const pz = (await snap()).z;
await sleep(1500);
check('Saat jeda simulasi berhenti', (await snap()).z === pz);
await page.keyboard.press('Escape');
r = await waitFor((x) => x.mode === 'playing', 10000);
check('Esc lagi → LANJUTKAN', r.ok);

// 6. Reset
await page.keyboard.down('KeyW');
await page.keyboard.down('KeyA');
await simWait(1.5);
await page.keyboard.up('KeyA');
await page.keyboard.up('KeyW');
await page.keyboard.press('KeyR');
r = await waitFor((x) => Math.abs(x.lateral) < 0.3 && Math.abs(x.speedKmh) < 1, 10000);
check('R → mobil kembali ke tengah jalan & berhenti', r.ok, `lateral=${r.s.lateral.toFixed(2)}`);

// 7. Spasi tidak mengaktifkan tombol menu
await page.keyboard.down('KeyW');
await page.keyboard.down('Space');
await simWait(0.6);
await page.keyboard.up('Space');
await page.keyboard.up('KeyW');
check('Spasi (rem tangan) tidak memicu menu', (await snap()).mode === 'playing');

// 8. Satu lap penuh dengan autopilot (input analog per langkah fisika), dipercepat
await page.evaluate(() => {
  const g = window.__skantri;
  g.vehicle.place(g.track, -12.5, -3.6); // kembali ke grid
  g.race.start();
  Object.assign(g.__log, { maxY: 0, air: false, maxLat: 0, maxEdge: 0, impacts: 0 });
  g.__auto = true;
  g.timeScale = 8;
});
r = await waitFor((x) => x.checkpoint >= 1 || x.lap >= 2, 240000, 300);
check('Checkpoint 1 tercatat', r.ok, `cp=${r.s.checkpoint}`);
r = await waitFor((x) => x.lap >= 2, 300000, 300);
await page.evaluate(() => (window.__skantri.timeScale = 1));
await sleep(500);
await page.screenshot({ path: `${OUT}/07-lap.png` });
log = await page.evaluate(() => window.__skantri.__log);
check('1 lap tervalidasi (3 checkpoint + garis START)', r.ok, `lap=${r.s.lap}, waktu=${r.s.bestLap?.toFixed(2)} dtk`);
check('HUD "TERBAIK" terisi', (await page.textContent('[data-best]')) !== '--:--.--', await page.textContent('[data-best]'));
check('Mobil melompat di ramp', log.air && log.maxY > 1.6, `tinggi maksimum ${log.maxY.toFixed(2)} m`);
check('Selama lap bodi tidak menembus pembatas', log.maxEdge <= s.wallOffset + 1e-3, `tepi terjauh ${log.maxEdge.toFixed(2)} m`);

// 9. Screenshot lompatan (gerak lambat menjelang ramp)
await page.evaluate(() => {
  const g = window.__skantri;
  const ramp = g.track.path.ramps[0];
  g.vehicle.place(g.track, ramp.s0 - 60, 0);
  g.vehicle.state.vx = Math.sin(g.vehicle.state.heading) * 45;
  g.vehicle.state.vz = Math.cos(g.vehicle.state.heading) * 45;
  g.chase.snapTo(g.vehicle);
  g.timeScale = 1;
});
const rampS = await page.evaluate(() => window.__skantri.track.path.ramps[0].s0);
await waitFor((x) => x.s > rampS - 20, 120000, 50);
await page.evaluate(() => (window.__skantri.timeScale = 0.08));
r = await waitFor((x) => !x.onGround && x.y > 1.9, 120000, 50);
if (r.ok) {
  await page.evaluate(() => (window.__skantri.timeScale = 0));
  await sleep(1500);
  await page.screenshot({ path: `${OUT}/06-jump.png` });
}
check('Screenshot momen melayang', r.ok, `y=${r.s.y.toFixed(2)} m`);
await page.evaluate(() => {
  const g = window.__skantri;
  g.timeScale = 1;
  g.__auto = false;
});

// 10. Resize
await page.setViewportSize({ width: 800, height: 600 });
const t1 = Date.now();
let c2;
while (Date.now() - t1 < 15000) {
  c2 = await page.evaluate(() => {
    const c = document.querySelector('#stage canvas');
    return { cw: c.clientWidth, ch: c.clientHeight, aspect: window.__skantri.camera.aspect };
  });
  if (c2.cw === 800 && c2.ch === 600) break;
  await sleep(300);
}
check('Kanvas & kamera mengikuti ukuran jendela', c2.cw === 800 && c2.ch === 600 && Math.abs(c2.aspect - 800 / 600) < 0.01, JSON.stringify(c2));

// 11. Ke menu lewat jeda, lalu mulai lagi (cek tidak ada kebocoran objek)
const before = await snap();
await page.keyboard.press('Escape');
await waitFor((x) => x.mode === 'paused', 10000);
await page.click('[data-action="menu"]');
r = await waitFor((x) => x.mode === 'menu', 10000);
check('MENU UTAMA dari layar jeda', r.ok);
await page.click('[data-action="practice"]');
r = await waitFor((x) => x.mode === 'playing' && x.lap === 1 && x.checkpoint === 0, 10000);
check('Mulai ulang: lap & checkpoint kembali ke awal', r.ok);
await sleep(1500);
const after = await snap();
check('Tidak ada geometri/tekstur bocor saat mulai ulang', after.geometries <= before.geometries && after.textures <= before.textures, `geo ${before.geometries}→${after.geometries}, tex ${before.textures}→${after.textures}`);

console.log('STATS latihan', JSON.stringify({ fps_swiftshader: after.fps, drawCalls: after.drawCalls, triangles: after.triangles, geometries: after.geometries, textures: after.textures }));

// ===================================================== B. MODE BALAPAN (Tahap 2)
await page.setViewportSize({ width: 1100, height: 620 });
await page.keyboard.press('Escape');
await waitFor((x) => x.mode === 'paused', 10000);
await page.click('[data-action="menu"]');
await waitFor((x) => x.mode === 'menu', 10000);
await page.evaluate(() => {
  const g = window.__skantri;
  g.__auto = false;
  g.timeScale = 1;
  g.__rivalEdge = 0;
  for (const rv of g.rivals) {
    const orig = rv.vehicle.step.bind(rv.vehicle);
    rv.vehicle.step = (i, t, dt) => {
      orig(i, t, dt);
      const st = rv.vehicle.state;
      g.__rivalEdge = Math.max(g.__rivalEdge, Math.abs(st.lateral) + st.extent);
    };
  }
});
await sleep(800);
await page.keyboard.press('Enter'); // tombol utama yang terfokus = MULAI BALAP
r = await waitFor((x) => x.mode === 'playing' && x.raceMode === 'race' && x.phase === 'countdown', 10000);
check('Enter pada MULAI BALAP → countdown dimulai', r.ok, `phase=${r.s.phase}`);
check('6 mobil di grid, pemain mulai di posisi 6', r.s.racers.length === 6 && r.s.position === 6, `mobil=${r.s.racers.length}, posisi=${r.s.position}`);
check('Klasemen HUD menampilkan 6 pembalap', (await page.$$eval('[data-standings] li', (els) => els.length)) === 6);
const grid0 = r.s;
await page.keyboard.down('KeyW');
r = await waitFor((x) => x.phase === 'countdown' && x.countdown < 1.6, 30000, 50);
const lightsCls = await page.evaluate(() => document.querySelector('[data-countdown]').className);
check('Lampu start menyala sesuai hitungan', /on lit-[23]/.test(lightsCls), lightsCls);
await page.screenshot({ path: `${OUT}/08-countdown.png` });
const mid = await snap();
check(
  'Gas ditahan saat countdown → semua mobil tetap diam',
  Math.hypot(mid.x - grid0.x, mid.z - grid0.z) < 0.01 && mid.racers.every((x) => Math.abs(x.speed) < 0.01),
);
// Server tanpa GPU bisa < 1 FPS → beri waktu nyata yang longgar (yang diuji urutan fasenya, bukan kecepatan render)
r = await waitFor((x) => x.phase === 'racing', 120000, 50);
check('Setelah hitungan 1 → fase balapan', r.ok);
const goTxt = await page.textContent('[data-count-num]');
check('Countdown menampilkan GO!', goTxt === 'GO!', goTxt);
r = await waitFor((x) => x.raceTime > 2.5, 60000);
check('Setelah GO mobil pemain melaju', r.s.speedKmh > 30, `${r.s.speedKmh.toFixed(0)} km/jam`);
check(
  'Lima lawan AI ikut melaju',
  r.s.racers.filter((x) => x.id !== 'player').every((x) => x.speed > 5),
  r.s.racers.map((x) => `${x.id}:${(x.speed * 3.6).toFixed(0)}`).join(' '),
);
await page.keyboard.up('KeyW');
// Bekukan waktu agar HUD & peringkat dibandingkan pada keadaan yang sama
await page.evaluate(() => (window.__skantri.timeScale = 0));
await sleep(2500);
const hudPos = Number(await page.textContent('[data-pos]'));
s = await snap();
await page.evaluate(() => (window.__skantri.timeScale = 1));
check('Angka POSISI di HUD sesuai peringkat', hudPos === s.position, `HUD=${hudPos}, peringkat=${s.position}`);
check('HUD lap menampilkan 1/3', (await page.textContent('[data-lap-race]')) === '1/3');

await page.keyboard.press('Escape');
await waitFor((x) => x.mode === 'paused', 10000);
const tPause = (await snap()).raceTime;
await sleep(1500);
check('Jeda saat balapan: waktu & lawan ikut berhenti', (await snap()).raceTime === tPause);
await page.keyboard.press('Escape');
await waitFor((x) => x.mode === 'playing', 10000);

check('Audio aktif setelah tombol mulai diklik', await page.evaluate(() => !!window.__skantri.audio.ctx));
const m0 = await page.evaluate(() => window.__skantri.audio.muted);
await page.keyboard.press('KeyM');
const m1 = await page.evaluate(() => window.__skantri.audio.muted);
await page.keyboard.press('KeyM');
check('Tombol M membisukan / membunyikan suara', m0 !== m1);

// Pemain dikemudikan autopilot cepat (≈ batas fisik mobil) → harus bisa menyalip dan menang
await page.evaluate(() => {
  const g = window.__skantri;
  g.__aLat = 40;
  g.__auto = true;
  g.timeScale = 8;
});
r = await waitFor((x) => x.lap >= 2, 300000, 300);
check('Pemain masuk lap 2/3', r.ok, `posisi ${r.s.position}`);
await page.evaluate(() => (window.__skantri.timeScale = 0));
await sleep(2500);
await page.screenshot({ path: `${OUT}/09-race.png` });
await page.evaluate(() => (window.__skantri.timeScale = 8));
r = await waitFor((x) => x.mode === 'results', 400000, 300);
check('Layar HASIL muncul setelah pemain finis', r.ok && (await page.isVisible('[data-screen="results"]')));
let res = await snap();
const title = await page.textContent('[data-res-title]');
const expected = res.position === 1 ? 'MENANG!' : res.position <= 3 ? 'PODIUM!' : 'KALAH';
check('Judul hasil sesuai posisi akhir (kondisi menang)', title === expected, `posisi ${res.position} → "${title}"`);
check('Autopilot cepat menang dari posisi paling belakang', res.position === 1, `posisi ${res.position}`);
r = await waitFor((x) => x.racers.every((y) => y.finished), 400000, 300);
await sleep(800);
const rowsTxt = await page.$$eval('[data-res-body] tr', (trs) => trs.map((t) => t.textContent));
check('Tabel hasil: 6 baris, semua lawan akhirnya finis (diperbarui langsung)', rowsTxt.length === 6 && rowsTxt.every((t) => !t.includes('Lap ')), rowsTxt.join(' | '));
check('Baris pemain ditandai (KAMU)', rowsTxt.some((t) => t.includes('(KAMU)')));
res = await snap();
const order = res.racers.filter((x) => !x.dnf).map((x) => x.finishTime);
check('Urutan hasil = urutan waktu finis', order.every((t, i) => i === 0 || t >= order[i - 1]));
await page.evaluate(() => (window.__skantri.timeScale = 1));
await sleep(1500);
await page.screenshot({ path: `${OUT}/10-results-win.png` });
check('Tidak ada lawan AI yang menembus pembatas', (await page.evaluate(() => window.__skantri.__rivalEdge)) <= res.wallOffset + 1e-3, `tepi terjauh ${(await page.evaluate(() => window.__skantri.__rivalEdge)).toFixed(2)} m`);

// MAIN LAGI → balapan baru dari awal
await page.click('[data-screen="results"] [data-action="restart"]');
r = await waitFor((x) => x.mode === 'playing' && x.phase === 'countdown', 10000);
check('MAIN LAGI → countdown baru, kembali ke grid', r.ok && r.s.position === 6 && r.s.lap === 1 && r.s.racers.every((x) => !x.finished));

// Kondisi kalah: pemain tidak bergerak → waktu habis setelah pemenang finis (DNF)
await page.evaluate(() => {
  const g = window.__skantri;
  g.__auto = false;
  g.timeScale = 12;
});
r = await waitFor((x) => x.mode === 'results', 400000, 300);
res = await snap();
const kicker = await page.textContent('[data-res-kicker]');
const title2 = await page.textContent('[data-res-title]');
check('Kondisi kalah: tidak finis dalam batas waktu → KALAH / TIDAK FINIS', r.ok && title2 === 'KALAH' && kicker === 'TIDAK FINIS' && res.position === 6, `${kicker} · ${title2} · posisi ${res.position}`);
await page.evaluate(() => (window.__skantri.timeScale = 1));
await sleep(1200);
await page.screenshot({ path: `${OUT}/11-results-lose.png` });
await page.click('[data-screen="results"] [data-action="menu"]');
r = await waitFor((x) => x.mode === 'menu', 10000);
check('MENU UTAMA dari layar hasil', r.ok);
const fin = await snap();
console.log('STATS balapan', JSON.stringify({ drawCalls: fin.drawCalls, triangles: fin.triangles, geometries: fin.geometries, textures: fin.textures }));

// ===================================================== C. TAHAP 3: menu lengkap, mobil, lintasan, nitro, item, sentuh
await page.setViewportSize({ width: 1100, height: 620 });
await sleep(800);
s = await snap();
check('Menu utama punya 7 pilihan (Balap, Multiplayer, Mobil, Lintasan, Latihan, Pengaturan, Petunjuk)', (await page.$$eval('.screen-main .menu-btn', (b) => b.length)) === 7);

// --- Pengaturan: ubah & tersimpan setelah halaman dimuat ulang
await page.click('[data-action="settings"]');
await sleep(800);
await page.click('[data-screen="settings"] [data-seg="difficulty"] [data-val="sulit"]');
await page.click('[data-screen="settings"] [data-seg="laps"] [data-val="1"]');
await page.click('[data-screen="settings"] [data-seg="quality"] [data-val="rendah"]');
await page.fill('[data-volume]', '40');
await page.dispatchEvent('[data-volume]', 'input');
await sleep(1500);
s = await snap();
check('Pengaturan diterapkan: kesulitan, lap, kualitas (bayangan mati, resolusi 0,75)', s.settings.difficulty === 'sulit' && s.settings.laps === 1 && s.quality === 'rendah' && !s.shadows && Math.abs(s.pixelRatio - 0.75) < 0.01, JSON.stringify({ d: s.settings.difficulty, l: s.settings.laps, q: s.quality, sh: s.shadows, pr: s.pixelRatio }));
check('Volume suara ikut berubah', (await page.evaluate(() => window.__skantri.audio.volume)) === 0.4);
await page.click('[data-screen="settings"] [data-action="back"]');
await page.reload();
await page.waitForFunction(() => window.__skantri, null, { timeout: 60000 });
await sleep(3000);
s = await snap();
check('Pengaturan tetap tersimpan setelah halaman dimuat ulang', s.settings.difficulty === 'sulit' && s.settings.laps === 1 && s.settings.volume === 40, JSON.stringify(s.settings));
const infoTxt = await page.textContent('[data-info]');
check('Kartu info menu menampilkan pilihan terbaru', infoTxt.includes('1 lap') && infoTxt.includes('Sulit'), infoTxt.replace(/\s+/g, ' ').slice(0, 120));

// --- Pilih mobil
await page.click('[data-action="garage"]');
await page.waitForFunction(() => document.querySelectorAll('.car-card [data-thumb][src^="data:image"]').length === 4, null, { timeout: 120000 });
check('Garasi: gambar mini 3D untuk 4 mobil dibuat', true);
const seen = [];
for (const id of ['skantri', 'vortex', 'phantom', 'titan']) {
  await page.click(`[data-car="${id}"]`);
  await sleep(700);
  const g = await snap();
  seen.push(`${id}:${g.car}`);
}
check('Klik kartu mobil → model 3D berganti (4 mobil)', seen.every((x) => x.split(':')[0] === x.split(':')[1]), seen.join(' '));
await page.screenshot({ path: `${OUT}/12-garage.png` });
await page.keyboard.press('ArrowLeft');
await sleep(700);
check('Panah kiri di garasi berpindah mobil', (await snap()).car === 'phantom');
await page.click('[data-action="garage-cancel"]');
await sleep(700);
s = await snap();
check('KEMBALI di garasi membatalkan pilihan (tetap SKANTRI)', s.car === 'skantri' && s.settings.car === 'skantri', s.car);
await page.click('[data-action="garage"]');
await sleep(800);
await page.click('[data-car="titan"]');
await sleep(800);
await page.keyboard.press('Enter');
await sleep(800);
s = await snap();
check('GUNAKAN (Enter) menyimpan mobil TITAN', s.car === 'titan' && s.settings.car === 'titan' && s.menuScreen === 'main', `${s.car}/${s.settings.car}/${s.menuScreen}`);

// --- Pilih lintasan: ganti-ganti lintasan tanpa kebocoran memori
await page.click('[data-action="tracks"]');
await sleep(800);
const geo0 = (await snap()).geometries;
const tex0 = (await snap()).textures;
const trackOrder = ['kota-modern', 'pegunungan', 'gurun-4d', 'trek-mondoroko'];
const loaded = [];
for (const id of trackOrder) {
  await page.click(`[data-track="${id}"]`);
  await sleep(2500);
  loaded.push((await snap()).track);
}
check('Klik kartu lintasan → lintasan 3D berganti (4 lintasan)', loaded.join(',') === trackOrder.join(','), loaded.join(','));
await sleep(2000);
const geo1 = (await snap()).geometries;
const tex1 = (await snap()).textures;
check('Tidak ada kebocoran geometri/tekstur setelah 4× ganti lintasan', geo1 <= geo0 + 2 && tex1 <= tex0 + 2, `geo ${geo0}→${geo1}, tex ${tex0}→${tex1}`);
await page.click(`[data-track="gurun-4d"]`);
await sleep(2500);
await page.keyboard.press('Escape');
await sleep(600);
check('Esc kembali dari Pilih Lintasan; lintasan tersimpan', (await snap()).menuScreen === 'main' && (await snap()).settings.track === 'gurun-4d');

// --- Balapan 1 lap di Gurun 4D dengan TITAN: nitro, item, ramp
await page.click('[data-action="race"]');
await page.evaluate(() => (window.__skantri.timeScale = 6));
r = await waitFor((x) => x.phase === 'racing', 300000, 200);
check('Balapan di Gurun 4D dengan TITAN, 1 lap', r.ok && r.s.track === 'gurun-4d' && r.s.car === 'titan' && r.s.totalLaps === 1, `${r.s.track}/${r.s.car}/${r.s.totalLaps} lap`);
await page.evaluate(() => (window.__skantri.timeScale = 2));
await page.keyboard.down('KeyW');
await simWait(3, 300000);
const n0 = (await snap()).nitro;
await page.keyboard.down('ShiftLeft');
r = await waitFor((x) => x.boosting && x.nitro < n0 - 0.15, 300000, 100);
await page.evaluate(() => (window.__skantri.timeScale = 0));
await sleep(1500);
const nitroW = await page.evaluate(() => parseFloat(document.querySelector('[data-nitro-fill]').style.width));
const linesOp = await page.evaluate(() => getComputedStyle(document.querySelector('.speed-lines')).opacity);
await page.screenshot({ path: `${OUT}/13-nitro.png` });
check('Shift → nitro aktif, tangki berkurang, meter HUD turun', r.ok && nitroW < 90, `nitro ${r.s.nitro.toFixed(2)}, meter ${nitroW}%`);
check('Garis kecepatan muncul saat nitro', Number(linesOp) > 0.5, `opacity ${linesOp}`);
await page.evaluate(() => (window.__skantri.timeScale = 2));
let vmax = 0;
for (let i = 0; i < 6; i++) {
  vmax = Math.max(vmax, (await snap()).speedKmh);
  await sleep(250);
}
await page.keyboard.up('ShiftLeft');
check('Nitro melampaui kecepatan maks normal TITAN (211 km/j)', vmax > 211, `${vmax.toFixed(0)} km/j`);

// Item: taruh mobil tepat sebelum Shield
const itemRes = await page.evaluate(() => {
  const g = window.__skantri;
  const it = g.items.items.find((i) => i.type === 'shield' && i.active);
  g.vehicle.place(g.track, it.s - 25, it.lateral);
  const st = g.vehicle.state;
  st.vx = Math.sin(st.heading) * 25;
  st.vz = Math.cos(st.heading) * 25;
  st.cool.shield = 0;
  return it.id;
});
r = await waitFor((x) => x.fx.shield > 0, 300000, 100);
await page.evaluate(() => (window.__skantri.timeScale = 0));
await sleep(1500);
const chip = await page.isVisible('[data-fx="shield"].on');
await page.screenshot({ path: `${OUT}/14-shield.png` });
s = await snap();
check('Melewati SHIELD → efek aktif, indikator HUD muncul, item hilang', r.ok && chip && !s.items[itemRes].active, `fx=${r.s.fx.shield?.toFixed(1)} chip=${chip}`);
await page.evaluate(() => (window.__skantri.timeScale = 4));
r = await waitFor((x) => x.items[itemRes].active, 300000, 200);
check('Item muncul kembali setelah waktu respawn', r.ok);

// Selesaikan balapan dengan autopilot (dengan mobil baru, pasang ulang autopilot)
await page.evaluate(() => {
  const g = window.__skantri;
  const path = g.track.path;
  const orig = g.vehicle.step.bind(g.vehicle);
  g.vehicle.step = (input, track, dt) => {
    const st = g.vehicle.state;
    const look = 12 + Math.abs(st.forwardSpeed) * 0.35;
    const f = path.frameAt(st.s + look);
    let err = Math.atan2(f.x - st.x, f.z - st.z) - st.heading;
    while (err > Math.PI) err -= 2 * Math.PI;
    while (err < -Math.PI) err += 2 * Math.PI;
    const k = path.maxCurvatureAhead(st.s, 60);
    const vMax = Math.min(g.vehicle.phys.maxSpeed, Math.sqrt(30 / Math.max(k, 1e-4)));
    input.throttle = st.forwardSpeed < vMax ? 1 : 0;
    input.brake = st.forwardSpeed > vMax + 3 ? 1 : 0;
    input.steer = Math.max(-1, Math.min(1, -err * 2.5));
    input.handbrake = false;
    input.nitro = false;
    orig(input, track, dt);
  };
  g.timeScale = 8;
});
await page.keyboard.up('KeyW');
r = await waitFor((x) => x.mode === 'results', 600000, 300);
await page.evaluate(() => (window.__skantri.timeScale = 1));
await sleep(1500);
const carCol = await page.$$eval('[data-res-body] td.car', (tds) => tds.map((t) => t.textContent));
check('Layar hasil menampilkan kolom MOBIL', r.ok && carCol.length === 6 && carCol.includes('TITAN'), carCol.join(','));
await page.screenshot({ path: `${OUT}/15-results-gurun.png` });
await page.click('[data-screen="results"] [data-action="menu"]');
await waitFor((x) => x.mode === 'menu', 10000);

// --- Tombol layar sentuh (perangkat sentuh diemulasikan)
const tctx = await browser.newContext({ viewport: { width: 900, height: 420 }, hasTouch: true, isMobile: true });
await tctx.addInitScript(() => localStorage.setItem('skantri-race-settings-v1', JSON.stringify({ quality: 'rendah', touch: 'otomatis', laps: 1 })));
const tp = await tctx.newPage();
tp.on('pageerror', (e) => errors.push('PAGEERROR(touch) ' + e.message));
await tp.goto(GAME_URL);
// Dua halaman WebGL software sekaligus di server tanpa GPU → beri waktu muat lebih panjang
await tp.waitForFunction(() => window.__skantri, null, { timeout: 180000 });
await sleep(2500);
await tp.evaluate(() => window.__skantri.startPractice());
await sleep(1500);
const tsnap = () => tp.evaluate(() => window.__skantri.snapshot());
let ts = await tsnap();
check('Perangkat sentuh terdeteksi → tombol sentuh tampil saat bermain', ts.touch && (await tp.isVisible('[data-act="accelerate"]')));
const press = (act, type) => tp.evaluate(([a, t]) => {
  const el = document.querySelector(`[data-act="${a}"]`);
  const r = el.getBoundingClientRect();
  el.dispatchEvent(new PointerEvent(t, { bubbles: true, pointerId: a.length + 10, pointerType: 'touch', clientX: r.x + r.width / 2, clientY: r.y + r.height / 2 }));
}, [act, type]);
await tp.evaluate(() => (window.__skantri.timeScale = 3));
await press('accelerate', 'pointerdown');
await tp.waitForFunction(() => window.__skantri.vehicle.speedKmh > 60, null, { timeout: 300000 });
ts = await tsnap();
check('Tombol GAS sentuh mempercepat mobil', ts.speedKmh > 60, `${ts.speedKmh.toFixed(0)} km/j`);
const h0t = ts.heading;
await press('left', 'pointerdown');
await tp.waitForFunction((h) => Math.abs(window.__skantri.vehicle.state.heading - h) > 0.25, h0t, { timeout: 300000 });
await press('left', 'pointerup');
check('Tombol BELOK sentuh membelokkan mobil (sambil tetap gas = multi-sentuh)', true);
await tp.screenshot({ path: `${OUT}/16-touch.png` });
await press('accelerate', 'pointerup');
await press('brake', 'pointerdown');
await tp.waitForFunction(() => window.__skantri.vehicle.speedKmh < 5, null, { timeout: 300000 });
await press('brake', 'pointerup');
check('Tombol REM sentuh menghentikan mobil', true);
await tp.evaluate(() => (window.__skantri.timeScale = 1));
await tp.click('[data-act="pause"]');
await sleep(800);
check('Tombol JEDA sentuh membuka layar jeda', (await tsnap()).mode === 'paused');
await tctx.close();


// ===================================================== D. MODE 2 PEMAIN (layar terbagi)
/** Panel HUD tiap pemain: elemen utama tidak saling menimpa & tidak keluar dari bagian layarnya. */
const hudLayoutIssues = () =>
  page.evaluate(() => {
    const issues = [];
    document.querySelectorAll('.hud[data-pane]').forEach((pane) => {
      if (pane.hidden) return;
      const pr = pane.getBoundingClientRect();
      const boxes = [];
      for (const sel of ['.hud-tl', '.hud-tr', '.hud-bl', '.hud-br', '.hud-nitro', '.hud-standings']) {
        const el = pane.querySelector(sel);
        if (!el || getComputedStyle(el).display === 'none') continue;
        const r = el.getBoundingClientRect();
        if (r.width < 1 || r.height < 1) continue;
        if (r.left < pr.left - 1 || r.right > pr.right + 1 || r.top < pr.top - 1 || r.bottom > pr.bottom + 1) issues.push(`P${pane.dataset.pane} ${sel} keluar`);
        boxes.push([sel, r]);
      }
      for (let i = 0; i < boxes.length; i++)
        for (let j = i + 1; j < boxes.length; j++) {
          const a = boxes[i][1], b = boxes[j][1];
          if (a.left < b.right - 1 && b.left < a.right - 1 && a.top < b.bottom - 1 && b.top < a.bottom - 1) issues.push(`P${pane.dataset.pane} ${boxes[i][0]}×${boxes[j][0]}`);
        }
    });
    return issues;
  });

/** Memori GPU diukur dengan menggambar SELURUH adegan sekali (tanpa frustum culling) → tidak bergantung arah kamera. */
const memAll = () =>
  page.evaluate(() => {
    const g = window.__skantri;
    const changed = [];
    g.scene.traverse((o) => {
      if (o.frustumCulled) {
        o.frustumCulled = false;
        changed.push(o);
      }
    });
    g.renderer.render(g.scene, g.camera);
    changed.forEach((o) => (o.frustumCulled = true));
    return { geometries: g.renderer.info.memory.geometries, textures: g.renderer.info.memory.textures };
  });

/** Menu utama → MULTIPLAYER → SATU LAYAR (lobi 2 pemain). */
const openDuoLobby = async () => {
  await page.click('[data-action="multi"]');
  await page.waitForSelector('[data-screen="multi"]:not([hidden])');
  await page.click('[data-screen="multi"] [data-action="duo"]');
};

// Menu utama: 7 tombol tetap muat di berbagai ukuran layar
for (const [w, h] of [[960, 540], [800, 600], [1366, 768]]) {
  await page.setViewportSize({ width: w, height: h });
  await sleep(900);
  const fit = await page.evaluate(() => {
    const btn = [...document.querySelectorAll('.screen-main .menu-btn')].map((e) => e.getBoundingClientRect());
    const extra = ['.screen-main .credit', '.screen-main .brand'].map((q) => document.querySelector(q).getBoundingClientRect());
    const inside = [...btn, ...extra].every((r) => r.top >= 0 && r.bottom <= innerHeight + 0.5 && r.left >= 0 && r.right <= innerWidth + 0.5);
    const noOverlap = btn.every((r, i) => i === 0 || r.top >= btn[i - 1].bottom - 0.5) && extra[0].top >= btn[btn.length - 1].bottom - 0.5;
    return { inside, noOverlap, bottom: Math.round(extra[0].bottom) };
  });
  check(`Menu utama 7 tombol muat di layar ${w}×${h}`, fit.inside && fit.noOverlap, JSON.stringify(fit));
}
await page.setViewportSize({ width: 960, height: 540 });
await sleep(800);

// --- Lobi
await openDuoLobby();
r = await waitFor((x) => x.menuView === 'duo' && x.p2?.visible, 30000);
await page.waitForFunction(() => document.querySelectorAll('[data-screen="duo"] .duo-thumb img[src^="data:image"]').length === 8, null, { timeout: 120000 });
check('2 PEMAIN → lobi tampil, mobil kedua pemain tampil berdampingan', r.ok && (await page.isVisible('[data-screen="duo"]')) && r.s.p2.visible, `p2=${JSON.stringify(r.s.p2)}`);
let lob = await snap();
const CAR_SEQ = ['skantri', 'vortex', 'phantom', 'titan'];
const c0 = lob.settings.duoCars.slice();
const exp0 = CAR_SEQ[(CAR_SEQ.indexOf(c0[0]) + 1) % 4];
const exp1 = CAR_SEQ[(CAR_SEQ.indexOf(c0[1]) + 3) % 4];
await page.keyboard.press('KeyD');
await page.keyboard.press('ArrowLeft');
await sleep(900);
lob = await snap();
check('D mengganti mobil PEMAIN 1, ← mengganti mobil PEMAIN 2 (model 3D ikut berganti)', lob.settings.duoCars[0] === exp0 && lob.settings.duoCars[1] === exp1 && lob.car === exp0 && lob.p2.car === exp1, `${c0} → ${lob.settings.duoCars} (3D: ${lob.car}/${lob.p2.car})`);
// Nama mengandung huruf D & A — tidak boleh mengganti mobil saat diketik
await page.click('[data-duo-name="0"]');
await page.keyboard.press('Control+A');
await page.keyboard.type('dani');
await page.keyboard.press('Enter');
await page.click('[data-duo-name="1"]');
await page.keyboard.press('Control+A');
await page.keyboard.type('budi_77!');
await page.keyboard.press('Tab');
await sleep(700);
lob = await snap();
check('Nama pemain diketik & tersimpan (huruf kapital, karakter aneh dibuang)', lob.settings.duoNames[0] === 'DANI' && lob.settings.duoNames[1] === 'BUDI77', lob.settings.duoNames.join(','));
check('Mengetik nama tidak mengganti mobil & Enter di kolom nama tidak memulai balapan', lob.settings.duoCars[0] === exp0 && lob.settings.duoCars[1] === exp1 && lob.mode === 'menu');
const trk0 = lob.settings.track;
await page.click('[data-duo-track-step="1"]');
await sleep(2500);
lob = await snap();
const trkLabel = await page.textContent('[data-duo-track]');
check('Tombol › lintasan di lobi mengganti lintasan 3D', lob.settings.track !== trk0 && lob.track === lob.settings.track && lob.p2.visible, `${trk0} → ${lob.track} (“${trkLabel}”)`);
await page.click('[data-screen="duo"] [data-seg="duoRivals"] [data-val="2"]');
await page.click('[data-screen="duo"] [data-seg="duoLayout"] [data-val="atas-bawah"]');
await page.click('[data-screen="duo"] [data-seg="laps"] [data-val="1"]');
await page.keyboard.press('Escape');
r = await waitFor((x) => x.menuScreen === 'main' && x.menuView === 'main', 10000);
check('Esc dari lobi → menu utama; mobil kembali ke pilihan mode 1 pemain', r.ok && r.s.car === r.s.settings.car && !r.s.p2.visible, `${r.s.car}/${r.s.settings.car}`);
await openDuoLobby();
r = await waitFor((x) => x.menuView === 'duo' && x.car === exp0, 20000);
await sleep(1200);
check('Pilihan lobi tetap tersimpan saat dibuka lagi', r.ok && (await page.inputValue('[data-duo-name="0"]')) === 'DANI' && r.s.settings.duoRivals === 2);
await page.screenshot({ path: `${OUT}/17-duo-lobby.png` });

// --- Balapan atas–bawah: 2 AI + 2 pemain
await page.keyboard.press('Enter');
// tunggu frame pertama balapan benar-benar tergambar (2 tampilan)
r = await waitFor((x) => x.mode === 'playing' && x.duo && x.phase === 'countdown' && x.renders === 2, 30000);
let d = r.s;
check('Enter di lobi → balapan 2 pemain: 2 AI + P1 & P2 di baris belakang', r.ok && d.racers.length === 4 && d.players.length === 2 && d.players[0].position === 3 && d.players[1].position === 4 && d.players[0].car === exp0 && d.players[1].car === exp1, d.players?.map((p) => `${p.name}:${p.car}:P${p.position}`).join(' '));
check('Layar terbagi atas–bawah: 2 tampilan 960×270, 2× render per frame', d.split && d.renders === 2 && JSON.stringify(d.views) === JSON.stringify([{ x: 0, y: 0, w: 960, h: 270 }, { x: 0, y: 270, w: 960, h: 270 }]), JSON.stringify(d.views) + ` render=${d.renders}`);
check('Tiap kamera mengikuti mobilnya sendiri (rasio 960:270)', d.players.every((p) => Math.hypot(p.cam.x - p.x, p.cam.z - p.z) < 15 && Math.abs(p.cam.aspect - 960 / 270) < 0.01), d.players.map((p) => Math.hypot(p.cam.x - p.x, p.cam.z - p.z).toFixed(1)).join(','));
let panes = await page.evaluate(() =>
  [...document.querySelectorAll('.hud[data-pane]')].map((el) => ({ hidden: el.hidden, y: Math.round(el.getBoundingClientRect().y), h: Math.round(el.getBoundingClientRect().height), who: el.querySelector('[data-who-name]').textContent, whoOn: !el.querySelector('[data-who]').hidden, nitroKey: el.querySelector('.nitro-label kbd').textContent })),
);
check('Dua panel HUD (atas & bawah) dengan nama & tombol nitro masing-masing', panes.length === 2 && panes.every((p) => !p.hidden && p.whoOn && p.h === 270) && panes[1].y === 270 && panes[0].who === 'DANI' && panes[1].who === 'BUDI77' && panes[0].nitroKey === 'Shift kiri' && panes[1].nitroKey === 'Shift kanan', JSON.stringify(panes));
check('Papan nama di atas mobil kedua pemain; tombol sentuh disembunyikan', d.p1tag && d.p2.tag && !d.touch);
await page.keyboard.down('KeyW');
await page.keyboard.down('ArrowUp');
r = await waitFor((x) => x.phase === 'countdown' && x.countdown < 1.5, 30000, 50);
check('Saat hitung mundur kedua mobil diam walau gas ditekan', r.s.players.every((p) => Math.abs(p.speedKmh) < 0.01));
await page.keyboard.up('KeyW');
r = await waitFor((x) => x.phase === 'racing' && x.raceTime > 2, 60000);
check('Panah ↑ hanya menggerakkan PEMAIN 2', r.s.players[1].speedKmh > 30 && Math.abs(r.s.players[0].speedKmh) < 1, r.s.players.map((p) => p.speedKmh.toFixed(0)).join(' / '));
await page.keyboard.down('KeyW');
r = await waitFor((x) => x.players[0].speedKmh > 30, 60000);
check('W menggerakkan PEMAIN 1', r.ok, r.s.players.map((p) => p.speedKmh.toFixed(0)).join(' / '));
await page.keyboard.down('ShiftRight');
r = await waitFor((x) => x.players[1].boosting, 60000, 100);
check('Shift kanan = nitro PEMAIN 2 saja', r.ok && !r.s.players[0].boosting);
await page.keyboard.up('ShiftRight');
await page.keyboard.down('ShiftLeft');
r = await waitFor((x) => x.players[0].boosting && !x.players[1].boosting, 60000, 100);
check('Shift kiri = nitro PEMAIN 1 saja', r.ok);
await page.evaluate(() => (window.__skantri.timeScale = 0));
await sleep(2500);
d = await snap();
const hudSpeeds = await page.$$eval('[data-speed]', (els) => els.map((e) => Number(e.textContent)));
check('Speedometer tiap panel menampilkan kecepatan mobilnya sendiri', Math.abs(hudSpeeds[0] - Math.abs(d.players[0].speedKmh)) < 3 && Math.abs(hudSpeeds[1] - Math.abs(d.players[1].speedKmh)) < 3, `HUD ${hudSpeeds.join('/')} · fisika ${d.players.map((p) => p.speedKmh.toFixed(0)).join('/')}`);
await page.screenshot({ path: `${OUT}/18-duo-atas-bawah.png` });
let issues = await hudLayoutIssues();
check('HUD tiap panel tidak saling menimpa & tidak keluar dari bagiannya (atas–bawah 960×540)', issues.length === 0, issues.join(', '));
await page.evaluate(() => (window.__skantri.timeScale = 1));
await page.keyboard.up('ShiftLeft');
await page.keyboard.down('ArrowRight');
await page.keyboard.down('Slash');
r = await waitFor((x) => x.players[1].drifting, 60000, 100);
await page.keyboard.up('Slash');
await page.keyboard.up('ArrowRight');
check('/ = drift PEMAIN 2', r.ok);
await page.keyboard.up('ArrowUp');
await page.keyboard.press('Backspace');
r = await waitFor((x) => Math.abs(x.players[1].lateral) < 0.3 && Math.abs(x.players[1].speedKmh) < 1, 10000);
check('Backspace = reset PEMAIN 2 saja (PEMAIN 1 tetap melaju)', r.ok && r.s.players[0].speedKmh > 5, r.s.players.map((p) => `${p.speedKmh.toFixed(0)}km/j lat ${p.lateral.toFixed(2)}`).join(' / '));
await page.keyboard.up('KeyW');

// --- Gamepad tiruan (navigator.getGamepads diganti)
/** Tunggu n frame game benar-benar berjalan (gamepad dibaca sekali per frame). */
const frames = (n = 2) =>
  page.evaluate((k) => new Promise((res) => {
    let left = k;
    const tick = () => (--left <= 0 ? res() : requestAnimationFrame(tick));
    requestAnimationFrame(tick);
  }), n);
await page.evaluate(() => {
  const mk = (index) => ({ index, id: `Gamepad uji ${index + 1}`, connected: true, mapping: 'standard', axes: [0, 0, 0, 0], buttons: Array.from({ length: 17 }, () => ({ pressed: false, value: 0 })) });
  window.__pads = [mk(0)];
  window.__mkPad = mk;
  navigator.getGamepads = () => window.__pads;
});
await frames(3);
d = await snap();
check('1 gamepad terdeteksi → otomatis dipakai PEMAIN 2', d.pads === 1 && d.padOwners[0] === 1, `pads=${d.pads} owner=${d.padOwners}`);
const v2a = d.players[1].speedKmh;
await page.evaluate(() => {
  window.__pads[0].buttons[7] = { pressed: true, value: 1 };
  window.__pads[0].axes[0] = -1;
});
await simWait(1.5);
d = await snap();
check('RT gamepad → PEMAIN 2 melaju, stik kiri membelokkan; PEMAIN 1 tidak terpengaruh', d.players[1].controls.throttle === 1 && d.players[1].controls.steer === -1 && d.players[0].controls.throttle === 0 && d.players[1].speedKmh > v2a + 10, `P2 ${JSON.stringify(d.players[1].controls)} ${v2a.toFixed(0)}→${d.players[1].speedKmh.toFixed(0)} km/j`);
await page.evaluate(() => {
  window.__pads[0].buttons[7] = { pressed: false, value: 0 };
  window.__pads[0].axes[0] = 0;
});
await frames(3);
await page.evaluate(() => (window.__pads[0].buttons[9] = { pressed: true, value: 1 }));
r = await waitFor((x) => x.mode === 'paused', 30000);
await page.evaluate(() => (window.__pads[0].buttons[9] = { pressed: false, value: 0 }));
await frames(3);
await page.evaluate(() => (window.__pads[0].buttons[9] = { pressed: true, value: 1 }));
let r2 = await waitFor((x) => x.mode === 'playing', 30000);
await page.evaluate(() => (window.__pads[0].buttons[9] = { pressed: false, value: 0 }));
await frames(3);
check('Tombol Start gamepad → jeda lalu lanjut', r.ok && r2.ok, `jeda=${r.ok} lanjut=${r2.ok}`);
if (r.ok && !r2.ok) {
  // pastikan bagian berikutnya tidak ikut gagal karena game masih dijeda
  await page.keyboard.press('Escape');
  await waitFor((x) => x.mode === 'playing', 10000);
}
await page.evaluate(() => window.__pads.push(window.__mkPad(1)));
await frames(3);
d = await snap();
check('2 gamepad → gamepad 1 = PEMAIN 1, gamepad 2 = PEMAIN 2', d.pads === 2 && d.padOwners.join() === '0,1', d.padOwners.join());
await page.evaluate(() => (window.__pads = []));
await frames(2);

// --- Jeda membekukan kedua mobil
await page.keyboard.press('Escape');
r = await waitFor((x) => x.mode === 'paused', 10000);
const frozen = JSON.stringify(r.s.players.map((p) => [p.x, p.z]));
await sleep(1500);
check('Esc → jeda: kedua mobil & waktu berhenti', JSON.stringify((await snap()).players.map((p) => [p.x, p.z])) === frozen && (await page.isVisible('[data-screen="pause"]')));
await page.keyboard.press('Escape');
await waitFor((x) => x.mode === 'playing', 10000);

// --- Kedua pemain dikemudikan autopilot sampai finis
await page.evaluate(() => {
  const g = window.__skantri;
  const wrap = (v, aLat) => {
    if (v.__duoWrap) return;
    v.__duoWrap = true;
    const orig = v.step.bind(v);
    v.step = (input, track, dt) => {
      if (g.__duoAuto) {
        const st = v.state;
        const path = track.path;
        const look = 12 + Math.abs(st.forwardSpeed) * 0.35;
        const f = path.frameAt(st.s + look);
        let err = Math.atan2(f.x - st.x, f.z - st.z) - st.heading;
        while (err > Math.PI) err -= 2 * Math.PI;
        while (err < -Math.PI) err += 2 * Math.PI;
        const k = path.maxCurvatureAhead(st.s, 60);
        const vMax = Math.min(v.phys.maxSpeed, Math.sqrt(aLat / Math.max(k, 1e-4)));
        input.throttle = st.forwardSpeed < vMax ? 1 : 0;
        input.brake = st.forwardSpeed > vMax + 3 ? 1 : 0;
        input.steer = Math.max(-1, Math.min(1, -err * 2.5));
        input.handbrake = false;
        input.nitro = false;
      }
      orig(input, track, dt);
    };
  };
  wrap(g.vehicle, 36);
  wrap(g.vehicle2, 24);
  g.__duoAuto = true;
  g.timeScale = 8;
});
r = await waitFor((x) => x.players.some((p) => p.done) && !x.players.every((p) => p.done), 600000, 300);
check('Pemain yang finis lebih dulu menunggu (autopilot); layar hasil belum muncul', r.ok && r.s.mode === 'playing', r.s.players.map((p) => `${p.name}:${p.done ? 'finis' : 'balap'}`).join(' '));
r = await waitFor((x) => x.mode === 'results', 600000, 300);
await page.evaluate(() => (window.__skantri.timeScale = 1));
await sleep(1500);
d = await snap();
const resTitle = await page.textContent('[data-res-title]');
const pp = d.players.map((p) => (p.dnf ? 99 : p.position));
const expectedWinner = pp[0] < pp[1] ? 1 : 2;
check('Layar hasil duel: pemenang = posisi akhir lebih baik', r.ok && d.result?.duo && d.result.winner === expectedWinner && resTitle === `${d.players[expectedWinner - 1].name} MENANG!`, `posisi ${pp.join('/')} → "${resTitle}"`);
const rowsD = await page.$$eval('[data-res-body] tr', (trs) => trs.map((t) => t.textContent));
check('Tabel hasil: 4 baris, DANI (P1) & BUDI77 (P2) ditandai', rowsD.length === 4 && rowsD.some((t) => t.includes('DANI') && t.includes('(P1)')) && rowsD.some((t) => t.includes('BUDI77') && t.includes('(P2)')), rowsD.join(' | '));
check('Layar terbagi tetap berjalan di belakang layar hasil', d.split && d.renders === 2);
await page.screenshot({ path: `${OUT}/19-duo-hasil.png` });
await page.click('[data-screen="results"] [data-action="restart"]');
r = await waitFor((x) => x.mode === 'playing' && x.phase === 'countdown' && x.duo, 10000);
check('MAIN LAGI → balapan 2 pemain baru dari grid', r.ok && r.s.split && r.s.players.every((p) => p.lap === 1 && !p.finished && !p.done));
// Tidak ada yang bergerak → AI finis → batas waktu habis → keduanya tidak finis
await page.evaluate(() => {
  const g = window.__skantri;
  g.__duoAuto = false;
  g.timeScale = 12;
});
r = await waitFor((x) => x.mode === 'results', 600000, 300);
await page.evaluate(() => (window.__skantri.timeScale = 1));
await sleep(1200);
d = await snap();
check('Keduanya tidak finis dalam batas waktu → hasil SERI', r.ok && d.result?.winner === 0 && (await page.textContent('[data-res-title]')) === 'SERI' && d.players.every((p) => p.dnf), `${d.result?.winner} · ${await page.textContent('[data-res-title]')}`);
await page.click('[data-screen="results"] [data-action="menu"]');
await waitFor((x) => x.mode === 'menu', 10000);
await sleep(1500);
const mem1 = await memAll();

// --- Tata layar kiri–kanan, tanpa AI (duel)
await openDuoLobby();
await waitFor((x) => x.menuView === 'duo', 20000);
await page.click('[data-screen="duo"] [data-seg="duoLayout"] [data-val="kiri-kanan"]');
await page.click('[data-screen="duo"] [data-seg="duoRivals"] [data-val="0"]');
await page.click('[data-action="duo-start"]');
r = await waitFor((x) => x.mode === 'playing' && x.duo && x.phase === 'countdown', 20000);
d = r.s;
check('Tata layar kiri–kanan: tampilan 480×540 berdampingan; tanpa AI = duel 2 mobil', JSON.stringify(d.views) === JSON.stringify([{ x: 0, y: 0, w: 480, h: 540 }, { x: 480, y: 0, w: 480, h: 540 }]) && d.racers.length === 2 && d.players.every((p) => Math.abs(p.cam.aspect - 480 / 540) < 0.01), JSON.stringify(d.views));
await page.keyboard.down('KeyW');
await page.keyboard.down('ArrowUp');
r = await waitFor((x) => x.phase === 'racing' && x.raceTime > 2.5, 60000);
await page.keyboard.up('KeyW');
await page.keyboard.up('ArrowUp');
await page.evaluate(() => (window.__skantri.timeScale = 0));
await sleep(2500);
await page.screenshot({ path: `${OUT}/20-duo-kiri-kanan.png` });
issues = await hudLayoutIssues();
check('HUD tidak saling menimpa (kiri–kanan 960×540)', issues.length === 0, issues.join(', '));
await page.setViewportSize({ width: 1280, height: 720 });
r = await waitFor((x) => JSON.stringify(x.views) === JSON.stringify([{ x: 0, y: 0, w: 640, h: 720 }, { x: 640, y: 0, w: 640, h: 720 }]), 15000);
await sleep(1500);
issues = await hudLayoutIssues();
check('Jendela diubah ukurannya → kedua tampilan & HUD ikut menyesuaikan (1280×720)', r.ok && issues.length === 0 && r.s.players.every((p) => Math.abs(p.cam.aspect - 640 / 720) < 0.01), issues.join(', '));
await page.screenshot({ path: `${OUT}/21-duo-kiri-kanan-1280.png` });
await page.evaluate(() => (window.__skantri.timeScale = 1));
await page.keyboard.press('Escape');
await waitFor((x) => x.mode === 'paused', 10000);
await page.click('[data-action="menu"]');
await waitFor((x) => x.mode === 'menu', 10000);

// --- Kembali ke mode 1 pemain
await page.click('[data-action="practice"]');
r = await waitFor((x) => x.mode === 'playing' && x.raceMode === 'practice', 10000);
await sleep(800);
const soloKey = await page.textContent('.hud[data-pane="1"] .nitro-label kbd');
check('Kembali ke 1 pemain: layar penuh, 1 HUD, mobil P2 & papan nama hilang', !r.s.split && r.s.renders === 1 && !r.s.p2.visible && !r.s.p1tag && (await page.isHidden('.hud[data-pane="2"]')) && r.s.car === r.s.settings.car && soloKey === 'Shift' && Math.abs((await page.evaluate(() => window.__skantri.camera.aspect)) - 1280 / 720) < 0.01, `split=${r.s.split} renders=${r.s.renders} kbd=${soloKey}`);
await page.keyboard.press('Escape');
await waitFor((x) => x.mode === 'paused', 10000);
await page.click('[data-action="menu"]');
await waitFor((x) => x.mode === 'menu', 10000);
await sleep(1500);
const mem2 = await memAll();
check('Tidak ada geometri/tekstur bocor setelah bolak-balik mode 2 pemain', mem2.geometries <= mem1.geometries + 2 && mem2.textures <= mem1.textures + 2, `geo ${mem1.geometries}→${mem2.geometries}, tex ${mem1.textures}→${mem2.textures}`);
console.log('STATS 2 pemain', JSON.stringify({ geometries: mem2.geometries, textures: mem2.textures }));

const fin3 = await snap();
console.log('STATS tahap3', JSON.stringify({ drawCalls: fin3.drawCalls, triangles: fin3.triangles, geometries: fin3.geometries, textures: fin3.textures }));
check('Tidak ada error di konsol', errors.length === 0, errors.slice(0, 5).join(' | '));
if (warnings.length) console.log('WARNINGS:\n  ' + [...new Set(warnings)].slice(0, 8).join('\n  '));

await browser.close();
const failed = results.filter((x) => !x.ok).length;
console.log(`\n${results.length - failed}/${results.length} lolos`);
process.exit(failed ? 1 : 0);
