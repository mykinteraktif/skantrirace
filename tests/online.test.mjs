import { chromium } from 'playwright';
import { PeerServer } from 'peer';
import { mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

/**
 * Uji MODE ONLINE (2 perangkat) — OPSIONAL.
 * Host = laptop (keyboard), tamu = HP teremulasi (tombol sentuh). Keduanya browser Chromium headless.
 * Server sinyal memakai PeerServer lokal (protokolnya sama dengan server PeerJS publik), jadi uji ini
 * tidak butuh internet.
 *
 * Persiapan (sekali):  npm i -D playwright peer  lalu  npx playwright install chromium
 * Jalankan:            npm run build && npm run preview   (terminal 1)
 *                      node tests/online.test.mjs          (terminal 2)
 */
const OUT = fileURLToPath(new URL('./screenshots', import.meta.url));
mkdirSync(OUT, { recursive: true });
const BASE = process.env.GAME_URL || 'http://localhost:4173/';
const PEER_PORT = Number(process.env.PEER_PORT || 9000);
// netTimeout longgar: renderer software di server uji bisa < 2 FPS
const Q = `debug=1&peer=127.0.0.1:${PEER_PORT}&peerSecure=0&ice=none&netTimeout=120`;
const results = [];
const check = (name, ok, info = '') => {
  results.push({ name, ok, info });
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${info ? '  — ' + info : ''}`);
};
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const peerServer = PeerServer({ port: PEER_PORT, host: '127.0.0.1', path: '/' });
await sleep(500);

const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
// Pengaturan awal ditulis sekali per tab (muat ulang halaman tidak menimpanya lagi)
const initSettings = (s) => {
  if (!sessionStorage.getItem('init-done')) {
    localStorage.setItem('skantri-race-settings-v1', JSON.stringify(s));
    sessionStorage.setItem('init-done', '1');
  }
};
const hctx = await browser.newContext({ viewport: { width: 960, height: 540 } });
await hctx.addInitScript(initSettings, { quality: 'rendah', laps: 1, netName: 'BUDI', car: 'skantri', netRivals: 2, track: 'trek-mondoroko' });
const gctx = await browser.newContext({ viewport: { width: 780, height: 360 }, hasTouch: true, isMobile: true });
await gctx.addInitScript(initSettings, { quality: 'rendah', netName: 'SITI', car: 'phantom', touch: 'otomatis' });
const host = await hctx.newPage();
const guest = await gctx.newPage();
const errors = [];
const watch = (name, p) => {
  p.on('pageerror', (e) => errors.push(`${name}: ${e.message}`));
  p.on('console', (m) => m.type() === 'error' && errors.push(`${name} console: ${m.text()}`));
};
watch('host', host);
watch('tamu', guest);

// Screenshot = bukti visual, bukan cek: server uji yang lambat kadang telat menyerahkan frame
const shot = (p, path) => p.screenshot({ path, timeout: 120000 }).catch(() => console.log(`  (screenshot ${path.split('/').pop()} dilewati: halaman terlalu lambat)`));
const snap = (p) => p.evaluate(() => window.__skantri.snapshot());
async function waitFor(p, fn, timeout = 90000, every = 250) {
  const t0 = Date.now();
  let last;
  while (Date.now() - t0 < timeout) {
    last = await snap(p);
    if (fn(last)) return { ok: true, s: last };
    await sleep(every);
  }
  return { ok: false, s: last };
}
const boot = async (p, extra = '') => {
  await p.goto(`${BASE}?${Q}${extra}`);
  await p.waitForFunction(() => window.__skantri, null, { timeout: 240000 });
  await sleep(1500);
};
/** Matikan/nyalakan gambar 3D sementara (CPU server uji hanya 2 core: memuat halaman baru jauh lebih cepat). */
const rendering = (p, on) =>
  p.evaluate((en) => {
    const r = window.__skantri.renderer;
    if (!r.__orig) r.__orig = r.render;
    r.render = en ? r.__orig : () => {};
  }, on);
const touch = (p, act, type) =>
  p.evaluate(
    ([a, t]) => {
      const el = document.querySelector(`[data-act="${a}"]`);
      const r = el.getBoundingClientRect();
      el.dispatchEvent(new PointerEvent(t, { bubbles: true, pointerId: a.length + 20, pointerType: 'touch', clientX: r.x + r.width / 2, clientY: r.y + r.height / 2 }));
    },
    [act, type],
  );
/** Autopilot pada mobil milik perangkat itu sendiri (dipasang ulang bila mobilnya dibuat ulang). */
const autopilot = (p, on, aLat = 30) =>
  p.evaluate(
    ([enable, a]) => {
      const g = window.__skantri;
      const v = g.vehicle;
      if (!v.__auto) {
        v.__auto = true;
        const orig = v.step.bind(v);
        v.step = (input, track, dt) => {
          if (g.__autoOn) {
            const st = v.state;
            const path = track.path;
            const f = path.frameAt(st.s + 12 + Math.abs(st.forwardSpeed) * 0.35);
            let err = Math.atan2(f.x - st.x, f.z - st.z) - st.heading;
            while (err > Math.PI) err -= 2 * Math.PI;
            while (err < -Math.PI) err += 2 * Math.PI;
            const k = path.maxCurvatureAhead(st.s, 60);
            const vMax = Math.min(v.phys.maxSpeed, Math.sqrt(g.__aLat / Math.max(k, 1e-4)));
            input.throttle = st.forwardSpeed < vMax ? 1 : 0;
            input.brake = st.forwardSpeed > vMax + 3 ? 1 : 0;
            input.steer = Math.max(-1, Math.min(1, -err * 2.5));
            input.handbrake = false;
            input.nitro = false;
          }
          orig(input, track, dt);
        };
      }
      g.__autoOn = enable;
      g.__aLat = a;
    },
    [on, aLat],
  );

// ===================================================== A. Menu & lobi online
await boot(host);
await host.click('[data-action="multi"]');
await sleep(600);
check('Menu MULTIPLAYER → pilihan SATU LAYAR & DUA PERANGKAT', (await host.isVisible('[data-screen="multi"]')) && (await host.$$eval('[data-screen="multi"] .multi-card', (c) => c.length)) === 2);
await host.click('[data-screen="multi"] [data-action="online"]');
let r = await waitFor(host, (s) => s.menuView === 'online' && s.menuScreen === 'online', 20000);
check('DUA PERANGKAT → layar online (belum di ruang)', r.ok && r.s.net.state === 'start' && (await host.isVisible('[data-action="net-host"]')));
await host.fill('[data-net-code-input]', 'AB');
await host.click('[data-action="net-join"]');
await sleep(800);
check('Kode kurang dari 4 karakter ditolak dengan pesan jelas', (await host.textContent('[data-net-error]')).includes('4 karakter'), await host.textContent('[data-net-error]'));
await host.fill('[data-net-code-input]', 'ZZZZ');
await host.click('[data-action="net-join"]');
r = await waitFor(host, (s) => s.net.state === 'start' && /tidak ditemukan/i.test(s.net.error), 90000);
check('Kode ruang yang tidak ada → "Kode ruang tidak ditemukan"', r.ok, r.s.net.error);
await host.click('[data-action="net-host"]');
r = await waitFor(host, (s) => s.net.state === 'room' && /^[A-Z2-9]{4}$/.test(s.net.code ?? ''), 90000);
const code = r.s.net.code;
check('BUAT RUANG → kode 4 karakter muncul', r.ok, code);
const qr = await host.$eval('[data-net-qr]', (el) => el.innerHTML.includes('<svg'));
const joinUrl = await host.textContent('[data-net-url]');
check('QR & tautan undangan (?gabung=KODE) tersedia', qr && joinUrl.includes(`gabung=${code}`), joinUrl);
check('MULAI belum aktif sebelum lawan masuk', await host.$eval('[data-action="net-start"]', (b) => b.disabled));
check('Mobil host di lobi bercat P1', (await snap(host)).car === 'skantri');
await shot(host, `${OUT}/net-01-host-menunggu.png`);

await rendering(host, false);
await boot(guest, `&gabung=${code}`);
await rendering(host, true);
r = await waitFor(guest, (s) => s.net.state === 'room' && s.net.connected && s.net.opp?.name === 'BUDI', 120000);
check('Tamu (HP) membuka tautan ?gabung= → otomatis masuk ruang & melihat nama host', r.ok, JSON.stringify(r.s.net.opp));
check('Tamu menerima pilihan host (lintasan, lap, AI)', r.s.net.hostLobby?.track === 'trek-mondoroko' && r.s.net.hostLobby?.laps === 1 && r.s.net.hostLobby?.rivals === 2, JSON.stringify(r.s.net.hostLobby));
r = await waitFor(host, (s) => s.net.opp?.name === 'SITI' && s.net.opp?.car === 'phantom', 60000);
check('Host melihat nama & mobil tamu; MULAI aktif', r.ok && !(await host.$eval('[data-action="net-start"]', (b) => b.disabled)), JSON.stringify(r.s.net.opp));
await guest.click('[data-net-car="titan"]');
r = await waitFor(host, (s) => s.net.opp?.car === 'titan', 60000);
check('Tamu ganti mobil → host langsung melihat perubahannya', r.ok);
await host.click('[data-screen="online"] [data-net-track-step="1"]');
r = await waitFor(guest, (s) => s.net.hostLobby?.track === 'kota-modern', 60000);
check('Host ganti lintasan → tamu ikut melihat', r.ok, r.s.net.hostLobby?.track);
await host.click('[data-screen="online"] [data-net-track-step="-1"]');
await waitFor(guest, (s) => s.net.hostLobby?.track === 'trek-mondoroko', 60000);
await sleep(1500);
await shot(host, `${OUT}/net-02-host-lobi.png`);
await shot(guest, `${OUT}/net-03-tamu-lobi.png`);

// Perangkat ketiga → ruang penuh
await rendering(host, false);
await rendering(guest, false);
const xctx = await browser.newContext({ viewport: { width: 480, height: 270 } });
await xctx.addInitScript(initSettings, { quality: 'rendah', netName: 'TIGA' });
const third = await xctx.newPage();
watch('ketiga', third);
await boot(third, `&gabung=${code}`);
r = await waitFor(third, (s) => /penuh/i.test(s.net.error), 120000);
check('Perangkat ketiga ditolak: "Ruang sudah penuh"', r.ok, r.s.net.error);
await xctx.close();
await rendering(host, true);
await rendering(guest, true);
check('Host tetap tersambung dengan tamu pertama', (await snap(host)).net.opp?.name === 'SITI');

// ===================================================== B. Balapan online
await host.click('[data-action="net-start"]');
r = await waitFor(guest, (s) => s.mode === 'playing' && s.netRace?.role === 'guest', 120000);
let g = r.s;
let h = await snap(host);
check('MULAI → balapan dimulai di kedua perangkat (2 manusia + 2 AI)', r.ok && h.netRace?.role === 'host' && g.racers.length === 4 && h.racers.length === 4, `host ${h.racers.length} · tamu ${g.racers.length}`);
check('Mobil sendiri: host SKANTRI (P1), tamu TITAN (P2); mobil lawan tampil', h.car === 'skantri' && g.car === 'titan' && h.p2?.car === 'titan' && g.p2?.car === 'skantri' && h.p2.visible && g.p2.visible);
check('Papan nama lawan di atas mobilnya', h.p2.tag && g.p2.tag);
await touch(guest, 'accelerate', 'pointerdown');
r = await waitFor(guest, (s) => s.phase === 'countdown' && s.countdown < 1.5, 120000, 100);
check('Saat hitung mundur mobil tamu diam walau GAS ditekan', r.ok && Math.abs(r.s.speedKmh) < 0.1);
r = await waitFor(guest, (s) => s.phase === 'racing' && s.speedKmh > 40, 180000);
check('Setelah GO: tombol GAS (sentuh) di HP menggerakkan mobil tamu', r.ok, `${r.s.speedKmh?.toFixed(0)} km/j`);
r = await waitFor(host, (s) => (s.remotes.find((x) => x.id === 'p2')?.speedKmh ?? 0) > 30, 120000);
check('Host melihat mobil tamu melaju', r.ok, JSON.stringify(r.s.remotes.find((x) => x.id === 'p2')));
await touch(guest, 'accelerate', 'pointerup');
await host.keyboard.down('KeyW');
r = await waitFor(guest, (s) => (s.remotes.find((x) => x.id === 'p1')?.speedKmh ?? 0) > 30, 120000);
check('Tamu melihat mobil host melaju (W di laptop host)', r.ok);
r = await waitFor(guest, (s) => s.remotes.filter((x) => x.id !== 'p1').every((x) => x.speedKmh > 30), 60000);
check('Tamu melihat lawan AI (disimulasikan host) melaju', r.ok, r.s.remotes.map((x) => `${x.id}:${x.speedKmh.toFixed(0)}`).join(' '));
await host.keyboard.up('KeyW');
await shot(guest, `${OUT}/net-04-tamu-balap.png`);
await shot(host, `${OUT}/net-05-host-balap.png`);

// Bekukan kedua simulasi → klasemen di kedua perangkat harus sama
await host.evaluate(() => (window.__skantri.timeScale = 0));
await guest.evaluate(() => (window.__skantri.timeScale = 0));
await sleep(4000);
h = await snap(host);
r = await waitFor(guest, (s) => s.racers.map((x) => x.id).join() === h.racers.map((x) => x.id).join(), 30000);
check('Klasemen tamu = klasemen host', r.ok, `host ${h.racers.map((x) => x.id).join(',')} · tamu ${r.s.racers.map((x) => x.id).join(',')}`);
const gStand = await guest.$$eval('[data-pane="1"] [data-standings] li', (lis) => lis.map((l) => l.textContent));
check('HUD tamu: dirinya ditandai (KAMU), host ditandai (P1)', gStand.some((t) => t.includes('SITI (KAMU)')) && gStand.some((t) => t.includes('BUDI (P1)')), gStand.join(' | '));
await host.evaluate(() => (window.__skantri.timeScale = 1));
await guest.evaluate(() => (window.__skantri.timeScale = 1));

// Item diambil tamu → ikut hilang di host
const itemId = await guest.evaluate(() => {
  const g = window.__skantri;
  const it = g.items.items.find((i) => i.active && i.type === 'shield') ?? g.items.items.find((i) => i.active);
  g.vehicle.place(g.track, it.s - 22, it.lateral);
  const st = g.vehicle.state;
  st.vx = Math.sin(st.heading) * 22;
  st.vz = Math.cos(st.heading) * 22;
  st.cool[it.type] = 0;
  return it.id;
});
r = await waitFor(guest, (s) => !s.items[itemId].active && Object.values(s.fx).some((v) => v > 0), 120000, 150);
check('Tamu mengambil item → efeknya aktif di HP', r.ok, JSON.stringify(r.s.fx));
r = await waitFor(host, (s) => !s.items[itemId].active, 60000);
check('Item yang diambil tamu ikut hilang di layar host', r.ok);

// Menu online (Esc) tidak menjeda balapan
const tm0 = (await snap(host)).raceTime;
await host.keyboard.press('Escape');
await sleep(1500);
r = await waitFor(host, (s) => s.raceTime > tm0 + 0.5, 60000);
check('Esc saat online → menu kecil, balapan tetap berjalan (tidak dijeda)', r.ok && r.s.mode === 'playing' && (await host.isVisible('[data-screen="netpause"]')));
await host.click('[data-action="net-resume"]');
await sleep(500);
check('LANJUTKAN menutup menu online', !(await host.isVisible('[data-screen="netpause"]')));

// Selesaikan balapan dengan autopilot di kedua perangkat
await autopilot(host, true, 34);
await autopilot(guest, true, 24);
await host.evaluate(() => (window.__skantri.timeScale = 2));
await guest.evaluate(() => (window.__skantri.timeScale = 2));
r = await waitFor(host, (s) => s.mode === 'results', 900000, 500);
const r2 = await waitFor(guest, (s) => s.mode === 'results', 300000, 500);
h = r.s;
g = r2.s;
const hTitle = await host.textContent('[data-res-title]');
const gTitle = await guest.textContent('[data-res-title]');
check('Layar hasil muncul di kedua perangkat', r.ok && r2.ok);
check('Kedua perangkat sepakat siapa pemenangnya', hTitle === gTitle && /MENANG|SERI/.test(hTitle) && h.result?.winner === g.result?.winner, `host "${hTitle}" · tamu "${gTitle}"`);
const winnerName = h.result?.winner === 1 ? 'BUDI' : 'SITI';
check('Pemenang = posisi akhir lebih baik', hTitle === `${winnerName} MENANG!`, `posisi ${JSON.stringify(h.result?.positions)}`);
check('Tombol hasil: host MAIN LAGI + LOBI ONLINE; tamu menunggu host', (await host.isVisible('[data-screen="results"] [data-action="restart"]')) && (await host.isVisible('[data-action="net-tolobby"]')) && !(await guest.isVisible('[data-screen="results"] [data-action="restart"]')) && (await guest.isVisible('[data-res-net-note]')));
const rows = (p) => p.$$eval('[data-res-body] tr', (trs) => trs.map((t) => ({ text: t.textContent, me: t.classList.contains('me') })));
const hRows = await rows(host);
const gRows = await rows(guest);
check(
  'Tabel hasil: tiap perangkat menandai dirinya (KAMU) dan lawannya (P1/P2)',
  hRows.some((x) => x.text.includes('BUDI (KAMU)') && x.me) && hRows.some((x) => x.text.includes('SITI (P2)') && !x.me) && gRows.some((x) => x.text.includes('SITI (KAMU)') && x.me) && gRows.some((x) => x.text.includes('BUDI (P1)') && !x.me),
  `host ${hRows.map((x) => x.text.slice(0, 16)).join(' | ')}`,
);
const fitPhone = await guest.evaluate(() => {
  const b = document.querySelector('[data-screen="results"] [data-action="menu"]').getBoundingClientRect();
  return b.bottom <= innerHeight && b.top >= 0;
});
check('Layar hasil di HP (780×360): tombol KELUAR RUANG terlihat tanpa digulir', fitPhone);
await sleep(1500);
await shot(host, `${OUT}/net-06-host-hasil.png`);
await shot(guest, `${OUT}/net-07-tamu-hasil.png`);

// MAIN LAGI (host) → kedua perangkat mulai lagi
await autopilot(host, false);
await autopilot(guest, false);
await host.evaluate(() => (window.__skantri.timeScale = 1));
await guest.evaluate(() => (window.__skantri.timeScale = 1));
await host.click('[data-screen="results"] [data-action="restart"]');
r = await waitFor(guest, (s) => s.mode === 'playing' && s.phase === 'countdown' && !s.finished, 120000);
check('MAIN LAGI di host → tamu ikut balapan baru dari grid', r.ok && (await snap(host)).phase === 'countdown');

// Selesai lagi → LOBI ONLINE
await autopilot(host, true, 34);
await autopilot(guest, true, 24);
await host.evaluate(() => (window.__skantri.timeScale = 2));
await guest.evaluate(() => (window.__skantri.timeScale = 2));
r = await waitFor(host, (s) => s.mode === 'results', 900000, 500);
await waitFor(guest, (s) => s.mode === 'results', 300000, 500);
await host.evaluate(() => (window.__skantri.timeScale = 1));
await guest.evaluate(() => (window.__skantri.timeScale = 1));
await autopilot(host, false);
await autopilot(guest, false);
await host.click('[data-action="net-tolobby"]');
r = await waitFor(guest, (s) => s.mode === 'menu' && s.menuScreen === 'online' && s.net.state === 'room', 120000);
check('LOBI ONLINE di host → kedua perangkat kembali ke lobi, tetap tersambung', r.ok && (await snap(host)).net.connected);

// Balapan ke-3: tamu keluar di tengah balapan
await host.click('[data-action="net-start"]');
r = await waitFor(guest, (s) => s.mode === 'playing' && s.phase === 'racing', 180000);
await touch(guest, 'pause', 'pointerdown');
await sleep(800);
check('Tombol jeda di HP membuka menu online', await guest.isVisible('[data-screen="netpause"]'));
await guest.click('[data-screen="netpause"] [data-action="menu"]');
r = await waitFor(host, (s) => s.netRace?.guestGone, 90000);
h = r.s;
check('Tamu keluar saat balapan → host lanjut melawan AI, tamu dianggap tidak finis', r.ok && h.mode === 'playing' && h.racers.find((x) => x.id === 'p2')?.dnf, JSON.stringify(h.racers.find((x) => x.id === 'p2')));
check('Ruang host tetap terbuka untuk tamu berikutnya', h.net.state === 'room' && h.net.code === code && !h.net.opp);
check('Tamu kembali ke menu utama & keluar dari ruang', (await snap(guest)).mode === 'menu' && (await snap(guest)).net.state === 'start');

// Tamu masuk lagi dengan mengetik kode (tanpa tautan)
await guest.click('[data-action="multi"]');
await sleep(600);
await guest.click('[data-screen="multi"] [data-action="online"]');
await sleep(800);
await guest.fill('[data-net-code-input]', code.toLowerCase());
await guest.click('[data-action="net-join"]');
r = await waitFor(host, (s) => s.net.opp?.name === 'SITI', 120000);
check('Tamu bisa masuk lagi dengan mengetik kode (huruf kecil pun diterima)', r.ok);
// Host keluar ke menu → tamu diberi tahu
await host.keyboard.press('Escape');
await sleep(600);
await host.click('[data-screen="netpause"] [data-action="menu"]');
r = await waitFor(guest, (s) => s.net.state === 'start' && /host|terputus|keluar/i.test(s.net.error), 90000);
check('Host keluar → tamu diberi tahu & keluar dari ruang', r.ok, r.s.net.error);
await shot(guest, `${OUT}/net-08-tamu-host-keluar.png`);
check('Host kembali ke menu utama', (await snap(host)).mode === 'menu' && (await snap(host)).net.state === 'start');

check('Tidak ada error di konsol (host, tamu, perangkat ketiga)', errors.length === 0, errors.slice(0, 6).join(' | '));
await browser.close();
peerServer.close?.();
const failed = results.filter((x) => !x.ok).length;
console.log(`\n${results.length - failed}/${results.length} lolos`);
process.exit(failed ? 1 : 0);
