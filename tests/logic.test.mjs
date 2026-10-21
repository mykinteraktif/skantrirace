/**
 * Uji logika inti (tanpa browser): lintasan, fisika, collision, ramp, lap.
 * Jalankan: npm test
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { TrackPath } from '../src/game/TrackPath.js';
import { createVehicleState, placeOnTrack, stepVehicle, WORLD, wrapAngle } from '../src/game/Physics.js';
import { TRACKS, DEFAULT_TRACK } from '../src/game/data/tracks.js';
import { RaceManager, formatTime, gridSlot, COUNTDOWN_SECONDS } from '../src/game/RaceManager.js';
import { simulateRace, skilledDriver } from './simulateRace.mjs';
import { resolveCarCollisions } from '../src/game/Physics.js';
import { AIRacer } from '../src/game/AIRacer.js';
import { RIVALS, DIFFICULTY } from '../src/game/data/racers.js';
import { CARS, DEFAULT_CAR } from '../src/game/data/cars.js';

const track = new TrackPath(TRACKS[DEFAULT_TRACK]);
const phys = CARS[DEFAULT_CAR].physics;
const DT = WORLD.fixedStep;
const idle = { throttle: 0, brake: 0, steer: 0, handbrake: false };

function run(state, input, seconds, onStep) {
  const steps = Math.round(seconds / DT);
  for (let i = 0; i < steps; i++) {
    const inp = typeof input === 'function' ? input(state) : input;
    stepVehicle(state, inp, phys, track, DT);
    onStep?.(state);
  }
}

/** Pengemudi otomatis sederhana: ikuti garis tengah + batasi kecepatan di tikungan. */
function autopilot(state, targetLateral = 0) {
  const look = 12 + Math.abs(state.forwardSpeed) * 0.35;
  const f = track.frameAt(state.s + look);
  const tx = f.x + f.sx * targetLateral - state.x;
  const tz = f.z + f.sz * targetLateral - state.z;
  const desired = Math.atan2(tx, tz);
  const err = wrapAngle(desired - state.heading);
  const k = track.maxCurvatureAhead(state.s, 60);
  const vMax = Math.min(phys.maxSpeed, Math.sqrt(16 / Math.max(k, 1e-4)));
  const v = state.forwardSpeed;
  return {
    throttle: v < vMax ? 1 : 0,
    brake: v > vMax + 3 ? 1 : 0,
    steer: Math.max(-1, Math.min(1, -err * 2.5)),
    handbrake: false,
  };
}

test('lintasan: panjang, tikungan, dan tidak saling tumpang tindih', () => {
  assert.ok(track.length > 1200, `panjang ${track.length}`);
  assert.ok(track.minRadius() > 25, `R min ${track.minRadius()}`);
  for (let i = 0; i < track.count; i += 3) {
    for (let j = i + 3; j < track.count; j += 3) {
      let ds = Math.abs(track.s[i] - track.s[j]);
      ds = Math.min(ds, track.length - ds);
      if (ds < 80) continue;
      const d = Math.hypot(track.x[i] - track.x[j], track.z[i] - track.z[j]);
      assert.ok(d > track.wallOffset * 2 + 6, `bagian lintasan terlalu dekat (${d.toFixed(1)} m)`);
    }
  }
});

test('lintasan: proyeksi memberi offset lateral yang benar', () => {
  for (const s of [0, 200, 555, 1000, 1400]) {
    const f = track.frameAt(s);
    const p0 = track.project(f.x, f.z, -1);
    assert.ok(Math.abs(p0.lateral) < 0.05, `lateral di tengah ${p0.lateral}`);
    let dS = Math.abs(p0.s - f.s);
    dS = Math.min(dS, track.length - dS); // s berputar di garis start
    assert.ok(dS < 0.5, `s ${p0.s} vs ${f.s}`);
    const p1 = track.project(f.x + f.sx * 5, f.z + f.sz * 5, p0.index);
    assert.ok(Math.abs(p1.lateral - 5) < 0.15, `lateral kanan ${p1.lateral}`);
  }
});

test('fisika: akselerasi, kecepatan maksimum, rem, dan mundur', () => {
  const st = createVehicleState();
  placeOnTrack(st, track, 10);
  run(st, { ...idle, throttle: 1, steer: 0 }, 3);
  assert.ok(st.forwardSpeed > 35, `0–3 dtk: ${st.forwardSpeed.toFixed(1)} m/s`);

  // Kecepatan puncak diuji di "lintasan lurus" panjang (proyeksi dimatikan via lintasan lebar)
  const straight = new TrackPath({
    width: 400,
    points: [[0, 0], [1000, 0], [2000, 0], [3000, 0], [4000, 0], [4500, 1000], [-500, 1000]],
  });
  const s2 = createVehicleState();
  placeOnTrack(s2, straight, straight.project(300, 0, -1).s);
  for (let i = 0; i < Math.round(25 / DT); i++) stepVehicle(s2, { ...idle, throttle: 1 }, phys, straight, DT);
  assert.ok(s2.forwardSpeed <= phys.maxSpeed + 0.01, `top ${s2.forwardSpeed}`);
  assert.ok(s2.forwardSpeed > phys.maxSpeed * 0.9, `top terlalu rendah ${s2.forwardSpeed}`);

  for (let i = 0; i < Math.round(2 / DT); i++) stepVehicle(s2, { ...idle, brake: 1 }, phys, straight, DT);
  assert.ok(s2.forwardSpeed <= 0.5, `setelah rem 2 dtk: ${s2.forwardSpeed}`);
  for (let i = 0; i < Math.round(2 / DT); i++) stepVehicle(s2, { ...idle, brake: 1 }, phys, straight, DT);
  assert.ok(s2.forwardSpeed < -3, `mundur: ${s2.forwardSpeed}`);
});

test('fisika: tombol kanan membelokkan mobil ke kanan', () => {
  const st = createVehicleState();
  placeOnTrack(st, track, 10);
  run(st, { ...idle, throttle: 1 }, 1);
  const h0 = st.heading;
  run(st, { ...idle, throttle: 1, steer: 1 }, 0.4);
  assert.ok(wrapAngle(st.heading - h0) < -0.2, 'heading harus berkurang saat belok kanan');
  assert.ok(st.lateral > 0.3, `harus bergeser ke kanan, lateral=${st.lateral}`);
});

test('collision: mobil tidak menembus pembatas dan melambat saat menabrak', () => {
  for (const steer of [1, -1]) {
    const st = createVehicleState();
    placeOnTrack(st, track, 20);
    run(st, { ...idle, throttle: 1 }, 2.2);
    const before = Math.hypot(st.vx, st.vz);
    let maxEdge = 0;
    let hit = 0;
    run(st, { ...idle, throttle: 1, steer }, 1.2, (s) => {
      // tepi terluar bodi (memperhitungkan sudut mobil) tidak boleh melewati dinding
      maxEdge = Math.max(maxEdge, Math.abs(s.lateral) + s.extent);
      hit = Math.max(hit, s.impact);
    });
    assert.ok(maxEdge <= track.wallOffset + 1e-3, `bodi menembus pembatas: ${maxEdge} > ${track.wallOffset}`);
    assert.ok(hit > 0, 'harus terjadi tabrakan');
    assert.ok(Math.hypot(st.vx, st.vz) < before, 'kecepatan harus turun setelah tabrakan');
  }
});

test('collision: tabrakan frontal kecepatan tinggi tetap tertahan', () => {
  const st = createVehicleState();
  placeOnTrack(st, track, 15);
  st.heading = wrapAngle(st.heading - Math.PI / 2); // menghadap tegak lurus ke pembatas kanan
  st.vx = Math.sin(st.heading) * 55;
  st.vz = Math.cos(st.heading) * 55;
  let maxEdge = 0;
  run(st, { ...idle, throttle: 1 }, 1, (s) => (maxEdge = Math.max(maxEdge, Math.abs(s.lateral) + s.extent)));
  assert.ok(maxEdge <= track.wallOffset + 1e-3, `bodi menembus pembatas: ${maxEdge}`);
  assert.ok(Math.hypot(st.vx, st.vz) < 30, `masih terlalu cepat: ${Math.hypot(st.vx, st.vz)}`);
});

test('ramp: mobil melompat lalu mendarat kembali', () => {
  const ramp = track.ramps[0];
  const st = createVehicleState();
  placeOnTrack(st, track, ramp.s0 - 160, ramp.lateral);
  let maxY = 0;
  let airborne = false;
  let landed = false;
  run(st, (s) => autopilot(s, ramp.lateral), 6, (s) => {
    maxY = Math.max(maxY, s.y);
    if (!s.onGround) airborne = true;
    if (airborne && s.onGround) landed = true;
  });
  assert.ok(airborne, 'mobil harus melayang setelah ramp');
  assert.ok(maxY > ramp.height, `tinggi lompatan ${maxY.toFixed(2)} m`);
  assert.ok(landed, 'mobil harus mendarat');
});

test('autopilot menyelesaikan 1 lap tanpa macet', () => {
  const st = createVehicleState();
  placeOnTrack(st, track, 0);
  let travelled = 0;
  let lastS = st.s;
  let hits = 0;
  let t = 0;
  while (travelled < track.length && t < 120) {
    stepVehicle(st, autopilot(st), phys, track, DT);
    let ds = st.s - lastS;
    if (ds < -track.length / 2) ds += track.length;
    if (ds > track.length / 2) ds -= track.length;
    travelled += ds;
    lastS = st.s;
    if (st.impact > 2) hits++;
    st.impact = 0;
    t += DT;
  }
  assert.ok(travelled >= track.length, `hanya menempuh ${travelled.toFixed(0)} m`);
  assert.ok(t < 60, `waktu lap ${t.toFixed(1)} dtk terlalu lama`);
  console.log(`   waktu lap autopilot: ${t.toFixed(2)} dtk, tabrakan keras: ${hits}`);
});

test('RaceManager: lap hanya sah setelah semua checkpoint dilewati', () => {
  const st = createVehicleState();
  placeOnTrack(st, track, -12.5, -3.6);
  const vehicle = { state: st };
  const race = new RaceManager(track, { mode: 'practice', checkpoints: 4 });
  const r = race.addRacer('p', vehicle);
  race.start();
  const laps = [];
  for (let t = 0; t < 110 && r.lap < 3; t += DT) {
    stepVehicle(st, autopilot(st), phys, track, DT);
    race.update(DT);
    for (const e of race.drainEvents()) if (e.type === 'lap') laps.push(e.lapTime);
  }
  assert.equal(laps.length, 2, `jumlah lap ${laps.length}`);
  assert.ok(laps[1] < laps[0], 'lap ke-2 (start melayang) lebih cepat dari lap 1 (start diam)');
  assert.equal(r.bestLap, Math.min(...laps));

  // Mundur melewati garis start lalu maju lagi TIDAK boleh menambah lap
  const st2 = createVehicleState();
  placeOnTrack(st2, track, 5);
  const race2 = new RaceManager(track, { mode: 'practice' });
  const r2 = race2.addRacer('q', { state: st2 });
  race2.start();
  st2.s = track.length - 5; race2.update(0.1); // mundur lewati garis
  st2.s = 5; race2.update(0.1); // maju lagi lewati garis
  assert.equal(r2.lap, 1, 'lap tidak boleh bertambah tanpa checkpoint');
});

test('formatTime membulatkan ke perseratus detik', () => {
  assert.equal(formatTime(47.069), '00:47.07');
  assert.equal(formatTime(59.999), '01:00.00');
  assert.equal(formatTime(null), '--:--.--');
});

// ----------------------------------------------------------------- Tahap 2

test('grid start: 6 slot berbeda, di belakang garis, di dalam jalan', () => {
  const seen = new Set();
  for (let k = 0; k < 6; k++) {
    const g = gridSlot(k);
    assert.ok(g.s < 0, 'di belakang garis start');
    assert.ok(Math.abs(g.lateral) + phys.halfWidth < track.halfWidth, 'di dalam badan jalan');
    seen.add(`${g.s}|${g.lateral}`);
  }
  assert.equal(seen.size, 6);
});

test('balapan penuh 3 lap: countdown, semua finis, posisi & waktu konsisten', () => {
  const { race, stats, cars } = simulateRace({ playerDriver: skilledDriver(16) });
  assert.equal(stats.movedDuringCountdown, false, 'mobil tidak boleh bergerak selama countdown');
  assert.equal(race.phase, 'done');
  assert.ok(race.racers.every((r) => r.finished), 'semua pembalap selesai');
  const pos = race.standings.map((r) => r.position);
  assert.deepEqual(pos, [1, 2, 3, 4, 5, 6]);
  // Urutan finis = urutan waktu
  const finishers = race.standings.filter((r) => !r.dnf);
  for (let i = 1; i < finishers.length; i++) assert.ok(finishers[i].finishTime >= finishers[i - 1].finishTime);
  for (const r of finishers) {
    assert.equal(r.laps.length, 3, `${r.id} harus menyelesaikan 3 lap`);
    const sum = r.laps.reduce((a, b) => a + b, 0);
    assert.ok(Math.abs(sum - r.finishTime) < 0.02, `jumlah waktu lap = waktu finis (${r.id})`);
  }
  assert.ok(stats.maxEdge <= track.wallOffset + 1e-3, `bodi menembus pembatas: ${stats.maxEdge}`);
  assert.equal(stats.respawns, 0, 'AI tidak boleh macet di lintasan bersih');
  assert.ok(stats.contacts > 0, 'harus ada kontak antar-mobil (start berdesakan)');
  assert.equal(cars.length, 6);
});

test('AI: variasi kecepatan — urutan skill tercermin di waktu lap', () => {
  const { race } = simulateRace({ playerDriver: null });
  const best = Object.fromEntries(race.racers.map((r) => [r.id, r.bestLap]));
  assert.ok(best.arjuno < best.panderman, 'ARJUNO (skill tertinggi) lebih cepat dari PANDERMAN');
  const times = race.racers.map((r) => r.bestLap);
  assert.ok(Math.max(...times) - Math.min(...times) > 1.5, 'harus ada selisih waktu antar-AI');
});

test('AI melambat di tikungan dan menyesuaikan tingkat kesulitan', () => {
  const easy = simulateRace({ playerDriver: null, difficulty: 'mudah', laps: 2 }).race;
  const hard = simulateRace({ playerDriver: null, difficulty: 'sulit', laps: 2 }).race;
  const lap2 = (race, id) => race.racers.find((r) => r.id === id).laps[1];
  assert.ok(lap2(hard, 'arjuno') < lap2(easy, 'arjuno') - 3, 'level sulit jelas lebih cepat dari mudah');
});

test('kondisi menang & kalah: pemain cepat menang, pemain lambat kalah/DNF', () => {
  // "Pemain" yang dikemudikan dengan batas fisik mobil → harus bisa menang dari posisi paling belakang
  const fast = simulateRace({ playerDriver: skilledDriver(40) }).race;
  const pFast = fast.racers.find((r) => r.isPlayer);
  assert.equal(pFast.position, 1, `pemain cepat posisi ${pFast.position}`);
  // Pemain sangat lambat → tidak sempat finis dalam batas waktu → DNF, posisi terakhir
  const slow = simulateRace({ playerDriver: () => ({ throttle: 0.25, brake: 0, steer: 0, handbrake: false }), laps: 2 }).race;
  const pSlow = slow.racers.find((r) => r.isPlayer);
  assert.ok(pSlow.dnf, 'pemain lambat harus DNF');
  assert.equal(pSlow.position, 6);
});

test('countdown: tidak bisa bergerak sampai GO, event 3-2-1-GO berurutan', () => {
  const st = createVehicleState();
  placeOnTrack(st, track, gridSlot(0).s, gridSlot(0).lateral);
  const race = new RaceManager(track, { mode: 'race', laps: 1 });
  race.addRacer('p', { state: st });
  race.start();
  const seq = [];
  for (let t = 0; t < COUNTDOWN_SECONDS + 0.5; t += DT) {
    assert.equal(race.canMove, race.phase === 'racing');
    race.update(DT);
    for (const e of race.drainEvents()) seq.push(e.type === 'count' ? e.value : e.type);
  }
  assert.deepEqual(seq, [3, 2, 1, 'go']);
  assert.ok(race.canMove);
});

test('tabrakan antar-mobil: dua mobil tidak saling menembus', () => {
  const a = createVehicleState();
  const b = createVehicleState();
  placeOnTrack(a, track, 100, 0);
  placeOnTrack(b, track, 103, 0); // 3 m di depan (bodi 4,6 m → tumpang tindih)
  const cars = [{ state: a, phys }, { state: b, phys }];
  a.vx = Math.sin(a.heading) * 20;
  a.vz = Math.cos(a.heading) * 20;
  for (let i = 0; i < 240; i++) {
    stepVehicle(a, { throttle: 1, brake: 0, steer: 0, handbrake: false }, phys, track, DT);
    stepVehicle(b, idle, phys, track, DT);
    resolveCarCollisions(cars, track);
  }
  const d = Math.hypot(a.x - b.x, a.z - b.z);
  assert.ok(d > 2.2, `jarak pusat ${d.toFixed(2)} m — mobil saling menembus`);
  assert.ok(b.forwardSpeed > 2, 'mobil depan terdorong maju');
});

test('AI: kecepatan di tikungan tersempit jauh lebih rendah daripada di lurusan', () => {
  // Cari titik tikungan tersempit
  let tightS = 0, maxK = 0;
  for (let i = 0; i < track.count; i++) {
    if (Math.abs(track.curvature[i]) > maxK) { maxK = Math.abs(track.curvature[i]); tightS = track.s[i]; }
  }
  const st = createVehicleState();
  placeOnTrack(st, track, 0, 0);
  const ai = new AIRacer({ ...RIVALS[0], reaction: 0 }, phys, track, DIFFICULTY.normal);
  const inp = {};
  let vTight = Infinity, vMaxSeen = 0;
  for (let t = 0; t < 60; t += DT) {
    ai.computeInput(st, { cars: [{ state: st }], self: 0 }, DT, inp);
    stepVehicle(st, inp, phys, track, DT);
    let d = Math.abs(st.s - tightS);
    d = Math.min(d, track.length - d);
    if (d < 4) vTight = Math.min(vTight, st.forwardSpeed);
    vMaxSeen = Math.max(vMaxSeen, st.forwardSpeed);
  }
  assert.ok(vTight < vMaxSeen * 0.7, `tikungan ${(vTight * 3.6).toFixed(0)} km/j vs lurusan ${(vMaxSeen * 3.6).toFixed(0)} km/j`);
});

test('AI: menjaga jarak di belakang mobil lambat, atau menyalipnya bila berani', () => {
  function run(aggression) {
    const slow = createVehicleState();
    const fast = createVehicleState();
    placeOnTrack(slow, track, 40, 0);
    placeOnTrack(fast, track, 10, 0);
    const cars = [{ state: fast, phys }, { state: slow, phys }];
    const ai = new AIRacer({ ...RIVALS[0], reaction: 0, aggression, lane: 0, line: 0 }, phys, track, { speed: 1, corner: 1, catchUp: 0 });
    const blocker = new AIRacer({ ...RIVALS[4], reaction: 0, skill: 0.3, lane: 0, line: 0 }, phys, track, { speed: 1, corner: 1, catchUp: 0 });
    const a = {}, b = {};
    let hardHits = 0, passed = false;
    for (let t = 0; t < 25; t += DT) {
      ai.computeInput(fast, { cars, self: 0 }, DT, a);
      blocker.computeInput(slow, { cars, self: 1 }, DT, b);
      stepVehicle(fast, a, phys, track, DT);
      stepVehicle(slow, b, phys, track, DT);
      resolveCarCollisions(cars, track);
      if ((fast.carImpact || 0) > 4) hardHits++;
      fast.carImpact = slow.carImpact = 0;
      let ds = fast.s - slow.s;
      if (ds < -track.length / 2) ds += track.length;
      if (ds > 8) passed = true;
    }
    return { hardHits, passed };
  }
  const careful = run(0); // tidak mau menyalip → harus mengikuti tanpa menabrak keras
  assert.equal(careful.hardHits, 0, 'AI penurut tidak boleh menabrak keras dari belakang');
  assert.equal(careful.passed, false, 'AI penurut tetap di belakang');
  const brave = run(0.9);
  assert.ok(brave.passed, 'AI agresif harus berhasil menyalip mobil lambat');
  assert.equal(brave.hardHits, 0, 'menyalip tanpa tabrakan keras');
});

// ----------------------------------------------------------------- Tahap 3
import { TRACKS as ALL_TRACKS, TRACK_ORDER } from '../src/game/data/tracks.js';
import { CAR_ORDER } from '../src/game/data/cars.js';
import { ITEM_TYPES } from '../src/game/data/items.js';
import { ItemSystem, applyItem } from '../src/game/ItemSystem.js';
import { resetVehicleExtras } from '../src/game/Physics.js';
import { getTrack } from './simulateRace.mjs';

const go = { throttle: 1, brake: 0, steer: 0, handbrake: false, nitro: false };

test('4 lintasan valid: panjang, tikungan, tidak tumpang tindih, start di lurusan', () => {
  assert.equal(TRACK_ORDER.length, 4);
  for (const id of TRACK_ORDER) {
    const p = getTrack(id);
    assert.ok(p.length > 1200 && p.length < 2200, `${id} panjang ${p.length}`);
    assert.ok(p.minRadius() > 20, `${id} R min ${p.minRadius().toFixed(1)}`);
    let startK = 0;
    for (let d = -60; d <= 30; d += 2.5) startK = Math.max(startK, Math.abs(p.curvature[p.indexAt(d)]));
    assert.ok(1 / startK > 120, `${id}: grid start harus di lurusan`);
    for (let i = 0; i < p.count; i += 3) {
      for (let j = i + 3; j < p.count; j += 3) {
        let ds = Math.abs(p.s[i] - p.s[j]);
        ds = Math.min(ds, p.length - ds);
        if (ds < 80) continue;
        const d = Math.hypot(p.x[i] - p.x[j], p.z[i] - p.z[j]);
        assert.ok(d > p.wallOffset * 2 + 6, `${id}: bagian lintasan terlalu dekat (${d.toFixed(1)} m)`);
      }
    }
    // Semua item berada di dalam badan jalan
    for (const it of ALL_TRACKS[id].items) assert.ok(Math.abs(it.lateral) + 1 < p.halfWidth, `${id}: item di luar jalan`);
  }
});

test('karakter mobil: VORTEX tercepat, SKANTRI akselerasi terbaik, TITAN paling berat', () => {
  const top = Object.fromEntries(CAR_ORDER.map((id) => [id, CARS[id].physics.maxSpeed]));
  assert.equal(Object.entries(top).sort((a, b) => b[1] - a[1])[0][0], 'vortex');
  const straight = getTrack('gurun-4d');
  const t100 = {};
  for (const id of CAR_ORDER) {
    const st = createVehicleState();
    resetVehicleExtras(st);
    placeOnTrack(st, straight, 0, 0);
    let t = 0;
    while (st.forwardSpeed * 3.6 < 100 && t < 5) {
      stepVehicle(st, go, CARS[id].physics, straight, DT);
      t += DT;
    }
    t100[id] = t;
  }
  assert.equal(Object.entries(t100).sort((a, b) => a[1] - b[1])[0][0], 'skantri', JSON.stringify(t100));
  const mass = Object.fromEntries(CAR_ORDER.map((id) => [id, CARS[id].physics.mass]));
  assert.equal(Object.entries(mass).sort((a, b) => b[1] - a[1])[0][0], 'titan');
});

test('PHANTOM (handling) lebih cepat dari VORTEX di lintasan berliku dengan pengemudi yang sama', () => {
  const lap = (carId, trackId) => {
    const p = getTrack(trackId);
    const ph = CARS[carId].physics;
    const st = createVehicleState();
    resetVehicleExtras(st);
    placeOnTrack(st, p, -12, 0);
    const ai = new AIRacer({ skill: 1, corner: 18, line: 0.6, lane: 0, reaction: 0, aggression: 0.8 }, ph, p, { speed: 1, corner: 1, catchUp: 0 });
    const race = new RaceManager(p, { mode: 'practice' });
    const r = race.addRacer('p', { state: st });
    race.start();
    const inp = {};
    for (let t = 0; t < 200 && r.laps.length < 2; t += DT) {
      ai.computeInput(st, { cars: [{ state: st }], self: 0 }, DT, inp);
      inp.nitro = false;
      stepVehicle(st, inp, ph, p, DT);
      race.update(DT);
    }
    return r.laps[1];
  };
  for (const tid of ['kota-modern', 'pegunungan']) {
    assert.ok(lap('phantom', tid) < lap('vortex', tid), `${tid}: PHANTOM harus lebih cepat`);
  }
});

test('nitro: menambah kecepatan di atas maksimum, menghabiskan tangki, lalu terisi lagi', () => {
  // Lintasan lurus sangat panjang khusus pengujian
  const p = new TrackPath({ width: 400, points: [[0, 0], [2000, 0], [4000, 0], [6000, 0], [8000, 0], [8500, 1000], [-500, 1000]] });
  const ph = CARS.skantri.physics;
  const st = createVehicleState();
  resetVehicleExtras(st);
  placeOnTrack(st, p, p.project(300, 0, -1).s, 0);
  for (let t = 0; t < 4; t += DT) stepVehicle(st, go, ph, p, DT);
  const before = st.forwardSpeed;
  assert.ok(before <= ph.maxSpeed + 0.01);
  let peak = 0, boostedSteps = 0, minNitro = 1;
  for (let t = 0; t < 4; t += DT) {
    stepVehicle(st, { ...go, nitro: true }, ph, p, DT);
    if (st.boosting) boostedSteps++;
    peak = Math.max(peak, st.forwardSpeed);
    minNitro = Math.min(minNitro, st.nitro);
  }
  assert.ok(peak > ph.maxSpeed + ph.nitro.boostSpeed * 0.8, `kecepatan puncak nitro ${peak.toFixed(1)} m/s`);
  assert.ok(minNitro < 0.01, 'tangki nitro harus habis setelah ditahan lama');
  assert.ok(Math.abs(boostedSteps * DT - 1 / ph.nitro.drain) < 0.1, `durasi nitro ${(boostedSteps * DT).toFixed(2)} dtk sesuai kapasitas tangki`);
  assert.equal(st.boosting, false, 'tangki baru terisi sedikit → nitro masih terkunci');
  const empty = st.nitro;
  for (let t = 0; t < 3; t += DT) stepVehicle(st, go, ph, p, DT);
  assert.ok(st.nitro > empty + ph.nitro.regen * 2.5, 'nitro terisi pelan');
});

test('item: Speed Orb, Shield, Turbo Ring berefek nyata + respawn & cooldown', () => {
  const p = getTrack('gurun-4d');
  const ph = CARS.skantri.physics;
  // Speed Orb: dorongan kecepatan seketika
  const a = createVehicleState();
  resetVehicleExtras(a);
  placeOnTrack(a, p, 0, 0);
  for (let t = 0; t < 1; t += DT) stepVehicle(a, go, ph, p, DT);
  const v0 = a.forwardSpeed;
  applyItem(a, ph, 'speed');
  stepVehicle(a, go, ph, p, DT);
  assert.ok(a.forwardSpeed > v0 + ITEM_TYPES.speed.kick * 0.8, 'Speed Orb menambah kecepatan seketika');

  // Turbo: akselerasi lebih besar daripada tanpa turbo
  const accel = (withTurbo) => {
    const s = createVehicleState();
    resetVehicleExtras(s);
    placeOnTrack(s, p, 0, 0);
    if (withTurbo) applyItem(s, ph, 'turbo');
    for (let t = 0; t < 1; t += DT) stepVehicle(s, go, ph, p, DT);
    return s.forwardSpeed;
  };
  assert.ok(accel(true) > accel(false) * 1.4, 'Turbo Ring melipatgandakan akselerasi');

  // Shield: menabrak pembatas tanpa kehilangan kecepatan
  const crash = (shield) => {
    const s = createVehicleState();
    resetVehicleExtras(s);
    placeOnTrack(s, p, 20, 0);
    s.heading = wrapAngle(s.heading - 0.5);
    s.vx = Math.sin(s.heading) * 40;
    s.vz = Math.cos(s.heading) * 40;
    if (shield) applyItem(s, ph, 'shield');
    for (let t = 0; t < 1; t += DT) stepVehicle(s, idle, ph, p, DT);
    return Math.hypot(s.vx, s.vz);
  };
  assert.ok(crash(true) > crash(false) + 6, `Shield: ${crash(true).toFixed(1)} vs ${crash(false).toFixed(1)} m/s`);

  // Pengambilan, respawn, dan cooldown per mobil
  const sys = new ItemSystem(p, [{ at: 0.3, lateral: 0, type: 'shield' }]);
  const it = sys.items[0];
  const car = { state: createVehicleState(), phys: ph };
  resetVehicleExtras(car.state);
  Object.assign(car.state, { x: it.x, z: it.z, y: it.y });
  sys.update(DT, [car]);
  assert.equal(it.active, false, 'item diambil');
  assert.ok(car.state.fx.shield > 0, 'efek perisai aktif');
  for (let t = 0; t < ITEM_TYPES.shield.respawn + 0.1; t += DT) sys.update(DT, []);
  assert.equal(it.active, true, 'item muncul lagi setelah waktu respawn');
  sys.update(DT, [car]); // mobil masih cooldown → tidak bisa mengambil lagi
  assert.equal(it.active, true, 'cooldown per mobil mencegah pengambilan ulang');
});

test('Pegunungan: mobil mengikuti tanjakan & jembatan tanpa jatuh menembus jalan', () => {
  const p = getTrack('pegunungan');
  const ph = CARS.titan.physics;
  const st = createVehicleState();
  resetVehicleExtras(st);
  placeOnTrack(st, p, 0, 0);
  const ai = new AIRacer({ skill: 0.9, corner: 14, line: 0.5, lane: 0, reaction: 0, aggression: 0.5 }, ph, p, { speed: 1, corner: 1, catchUp: 0 });
  const inp = {};
  let maxY = 0, minGap = Infinity, bridgeY = 0;
  const b = ALL_TRACKS.pegunungan.bridge;
  for (let t = 0; t < 60; t += DT) {
    ai.computeInput(st, { cars: [{ state: st }], self: 0 }, DT, inp);
    stepVehicle(st, inp, ph, p, DT);
    const roadY = p.frameAt(st.s).y;
    minGap = Math.min(minGap, st.y - roadY);
    maxY = Math.max(maxY, st.y);
    const f = st.s / p.length;
    if (f > b.from && f < b.to) bridgeY = Math.max(bridgeY, st.y);
  }
  assert.ok(maxY > 6, `ketinggian maks ${maxY.toFixed(1)} m`);
  assert.ok(bridgeY > 4.5, `di atas jembatan y=${bridgeY.toFixed(1)} m`);
  assert.ok(minGap > -0.2, `mobil tidak boleh di bawah permukaan jalan (${minGap.toFixed(2)})`);
});

test('balapan penuh di 4 lintasan: semua finis, tak ada yang macet/menembus pembatas, item & nitro dipakai', () => {
  for (const trackId of TRACK_ORDER) {
    for (const playerCar of CAR_ORDER) {
      const { race, stats, path } = simulateRace({ trackId, playerCar, playerDriver: null, laps: 2 });
      const tag = `${trackId}/${playerCar}`;
      assert.ok(race.racers.every((r) => r.finished && !r.dnf), `${tag}: semua harus finis`);
      assert.equal(stats.respawns, 0, `${tag}: AI macet`);
      assert.ok(stats.maxEdge <= path.wallOffset + 1e-3, `${tag}: menembus pembatas ${stats.maxEdge}`);
      assert.ok(Object.values(stats.pickups).reduce((a, b) => a + b, 0) >= 4, `${tag}: item jarang diambil`);
      assert.ok(Object.values(stats.nitroTime).every((t) => t > 2), `${tag}: semua AI memakai nitro`);
    }
  }
});

test('TITAN (berat) lebih sedikit terpental saat bertabrakan dengan mobil ringan', () => {
  const p = getTrack('gurun-4d');
  const run = (heavyFirst) => {
    const a = createVehicleState(), b = createVehicleState();
    resetVehicleExtras(a);
    resetVehicleExtras(b);
    placeOnTrack(a, p, 100, -1.5);
    placeOnTrack(b, p, 100, 1.5);
    // Saling mendekat menyamping
    a.vx = a.tangentZ * 0 + -a.tangentZ * -6; // ke kanan (+lateral)
    a.vz = a.tangentX * -6;
    const cars = [
      { state: a, phys: heavyFirst ? CARS.titan.physics : CARS.vortex.physics },
      { state: b, phys: CARS.vortex.physics },
    ];
    // Arahkan a ke b secara eksplisit
    const nx = b.x - a.x, nz = b.z - a.z, d = Math.hypot(nx, nz);
    a.vx = (nx / d) * 8;
    a.vz = (nz / d) * 8;
    for (let i = 0; i < 60; i++) {
      a.x += a.vx * DT; a.z += a.vz * DT; b.x += b.vx * DT; b.z += b.vz * DT;
      resolveCarCollisions(cars, p);
    }
    return Math.hypot(b.vx, b.vz); // kecepatan mobil yang ditabrak
  };
  assert.ok(run(true) > run(false) * 1.15, 'mobil berat mendorong lebih kuat');
});
