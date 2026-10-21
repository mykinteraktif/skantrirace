/**
 * Simulasi balapan penuh tanpa grafis (dipakai uji logika & penyetelan AI).
 * playerDriver: fungsi (state) → input, atau null agar pemain ikut dikendalikan AI.
 * Jalankan langsung: node tests/simulateRace.mjs   (ringkasan semua lintasan)
 */
import { TrackPath } from '../src/game/TrackPath.js';
import { createVehicleState, placeOnTrack, stepVehicle, resolveCarCollisions, resetVehicleExtras, WORLD, wrapAngle } from '../src/game/Physics.js';
import { RaceManager, gridSlot } from '../src/game/RaceManager.js';
import { AIRacer } from '../src/game/AIRacer.js';
import { ItemSystem } from '../src/game/ItemSystem.js';
import { TRACKS, DEFAULT_TRACK, TRACK_ORDER } from '../src/game/data/tracks.js';
import { CARS, DEFAULT_CAR, CAR_ORDER } from '../src/game/data/cars.js';
import { RIVALS, DIFFICULTY, RACE_LAPS } from '../src/game/data/racers.js';

const pathCache = new Map();
export function getTrack(id = DEFAULT_TRACK) {
  if (!pathCache.has(id)) pathCache.set(id, new TrackPath(TRACKS[id]));
  return pathCache.get(id);
}
export const track = getTrack(DEFAULT_TRACK);
export const phys = CARS[DEFAULT_CAR].physics;

/** Pengemudi "manusia terampil": ikut garis tengah, menikung dengan a_samping tertentu, tanpa nitro. */
export function skilledDriver(aLat = 16, path = track, carPhys = phys) {
  return (st) => {
    const look = 12 + Math.abs(st.forwardSpeed) * 0.35;
    const f = path.frameAt(st.s + look);
    const err = wrapAngle(Math.atan2(f.x - st.x, f.z - st.z) - st.heading);
    const k = path.maxCurvatureAhead(st.s, 60);
    const vMax = Math.min(carPhys.maxSpeed, Math.sqrt(aLat / Math.max(k, 1e-4)));
    const v = st.forwardSpeed;
    return { throttle: v < vMax ? 1 : 0, brake: v > vMax + 3 ? 1 : 0, steer: Math.max(-1, Math.min(1, -err * 2.5)), handbrake: false, nitro: false };
  };
}

export function simulateRace({
  playerDriver = undefined,
  playerCar = DEFAULT_CAR,
  trackId = DEFAULT_TRACK,
  playerSlot = 5,
  difficulty = 'normal',
  laps = RACE_LAPS,
  maxTime = 500,
  items = true,
} = {}) {
  const DT = WORLD.fixedStep;
  const path = getTrack(trackId);
  const pPhys = CARS[playerCar].physics;
  if (playerDriver === undefined) playerDriver = skilledDriver(16, path, pPhys);
  const race = new RaceManager(path, { mode: 'race', laps });
  const itemSys = new ItemSystem(path, items ? TRACKS[trackId].items : []);
  const cars = [];
  const rivalSlots = [0, 1, 2, 3, 4, 5].filter((k) => k !== playerSlot);

  const pState = createVehicleState();
  const ps = gridSlot(playerSlot);
  placeOnTrack(pState, path, ps.s, ps.lateral);
  cars.push({ state: pState, phys: pPhys, ai: null, id: 'player', vehicle: { state: pState } });

  RIVALS.forEach((rv, i) => {
    const st = createVehicleState();
    const g = gridSlot(rivalSlots[i]);
    placeOnTrack(st, path, g.s, g.lateral);
    const cp = CARS[rv.car].physics;
    const ai = new AIRacer(rv, cp, path, DIFFICULTY[difficulty]);
    ai.items = itemSys.items;
    cars.push({ state: st, phys: cp, ai, id: rv.id, vehicle: { state: st } });
  });
  if (!playerDriver) {
    cars[0].ai = new AIRacer(RIVALS[0], pPhys, path, DIFFICULTY[difficulty]);
    cars[0].ai.items = itemSys.items;
  }
  for (const c of cars) resetVehicleExtras(c.state);

  cars.forEach((c) => (c.racer = race.addRacer(c.id, c.vehicle, { isPlayer: c.id === 'player' })));
  race.start();

  const stats = { contacts: 0, maxEdge: 0, respawns: 0, hardWallHits: 0, movedDuringCountdown: false, pickups: {}, nitroTime: {}, maxSpeed: {} };
  const startPos = cars.map((c) => [c.state.x, c.state.z]);
  const input = {};
  let t = 0;
  while (t < maxTime && !race.racers.every((r) => r.finished)) {
    if (race.canMove) {
      for (let i = 0; i < cars.length; i++) {
        const c = cars[i];
        let inp;
        if (c.ai) {
          inp = c.ai.computeInput(c.state, { cars, self: i, playerGap: c.racer.progress - cars[0].racer.progress, cruise: c.racer.finished }, DT, input);
          if (c.ai.wantsRespawn) {
            c.ai.wantsRespawn = false;
            stats.respawns++;
            placeOnTrack(c.state, path, c.state.s, 0);
          }
        } else {
          inp = playerDriver(c.state);
        }
        stepVehicle(c.state, inp, c.phys, path, DT);
        if (c.state.boosting) stats.nitroTime[c.id] = (stats.nitroTime[c.id] || 0) + DT;
        stats.maxSpeed[c.id] = Math.max(stats.maxSpeed[c.id] || 0, c.state.forwardSpeed);
        if (c.state.impact > 8) stats.hardWallHits++;
        c.state.impact = 0;
      }
      stats.contacts += resolveCarCollisions(cars, path);
      itemSys.update(DT, cars);
      for (const e of itemSys.drainEvents()) {
        if (e.type === 'pickup') stats.pickups[e.item.type] = (stats.pickups[e.item.type] || 0) + 1;
      }
      for (const c of cars) stats.maxEdge = Math.max(stats.maxEdge, Math.abs(c.state.lateral) + c.state.extent);
    } else if (cars.some((c, i) => c.state.x !== startPos[i][0] || c.state.z !== startPos[i][1])) {
      stats.movedDuringCountdown = true;
    }
    race.update(DT);
    t += DT;
  }
  return { race, cars, stats, simTime: t, path };
}

// Ringkasan semua lintasan: node tests/simulateRace.mjs
if (import.meta.url === `file://${process.argv[1]}`) {
  for (const trackId of TRACK_ORDER) {
    const { race, stats, simTime, path } = simulateRace({ trackId, playerDriver: null });
    console.log(`\n== ${TRACKS[trackId].name} (${path.length.toFixed(0)} m) — ${simTime.toFixed(1)} dtk simulasi`);
    for (const r of race.standings) {
      const car = r.id === 'player' ? 'skantri' : RIVALS.find((x) => x.id === r.id).car;
      console.log(`  P${r.position} ${r.id.padEnd(10)} ${car.padEnd(8)} ${r.dnf ? 'DNF' : r.finishTime?.toFixed(2)}  lap=${r.laps.map((x) => x.toFixed(1)).join('/')}  nitro=${(stats.nitroTime[r.id] || 0).toFixed(1)}s  vmax=${((stats.maxSpeed[r.id] || 0) * 3.6).toFixed(0)}`);
    }
    console.log('  stats', JSON.stringify({ contacts: stats.contacts, maxEdge: +stats.maxEdge.toFixed(2), wall: path.wallOffset, respawns: stats.respawns, hardWallHits: stats.hardWallHits, pickups: stats.pickups }));
  }
}
