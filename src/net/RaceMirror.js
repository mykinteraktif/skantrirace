import { isWrongWayState, checkpointPositions, COUNTDOWN_SECONDS } from '../game/RaceManager.js';
import { unpackRacerInto } from './protocol.js';

/**
 * RaceMirror — "cermin" aturan balapan di perangkat TAMU (mode online).
 *
 * Tamu tidak menghitung lap/posisi sendiri: semua diambil dari snapshot & event host, supaya kedua perangkat
 * selalu sepakat siapa juara. Antarmukanya sama dengan RaceManager (phase, time, standings, drainEvents, …)
 * sehingga HUD & alur permainan tidak perlu dibedakan.
 */
export class RaceMirror {
  constructor(trackPath, { laps = 3, finishTimeout = 60 } = {}) {
    this.path = trackPath;
    this.mode = 'race';
    this.totalLaps = laps;
    this.finishTimeout = finishTimeout;
    this.checkpoints = checkpointPositions(trackPath.length);
    this.racers = [];
    this.byId = new Map();
    this.events = [];
    this.phase = 'countdown';
    this.countdown = COUNTDOWN_SECONDS;
    this.time = 0;
    this._timeLeft = null;
    this.standings = [];
    this.snapshots = 0;
  }

  addRacer(id, vehicle, info = {}) {
    const r = {
      id,
      vehicle,
      name: info.name ?? id,
      color: info.color ?? '#ffffff',
      isPlayer: !!info.isPlayer,
      lap: 1,
      nextCheckpoint: 0,
      lapStart: 0,
      lastLap: null,
      bestLap: null,
      laps: [],
      progress: 0,
      finished: false,
      finishTime: null,
      dnf: false,
      position: this.racers.length + 1,
    };
    this.racers.push(r);
    this.byId.set(id, r);
    this.standings = this.racers.slice();
    return r;
  }

  start() {
    this.phase = 'countdown';
    this.countdown = COUNTDOWN_SECONDS;
    this.time = 0;
    this._timeLeft = null;
  }

  get canMove() {
    return this.phase === 'racing' || this.phase === 'done';
  }

  get timeLeft() {
    return this._timeLeft;
  }

  /** Snapshot host: { ph, cd, tm, tl, rc: [racer…] } */
  applySnapshot(s) {
    this.snapshots++;
    if (s.ph) this.phase = s.ph;
    if (typeof s.cd === 'number') this.countdown = s.cd;
    // Waktu berjalan sendiri di antara snapshot; dikoreksi bila selisihnya mencolok
    if (typeof s.tm === 'number' && Math.abs(s.tm - this.time) > 0.12) this.time = s.tm;
    this._timeLeft = typeof s.tl === 'number' ? s.tl : null;
    if (Array.isArray(s.rc)) {
      for (const a of s.rc) {
        const r = this.byId.get(a[0]);
        if (r) unpackRacerInto(r, a);
      }
      this.standings = this.racers.slice().sort((a, b) => a.position - b.position);
    }
  }

  /** Event dari host (racer berupa id) → event lokal dengan objek racer. */
  pushEvent(e) {
    const ev = { ...e };
    if (typeof e.racer === 'string') {
      ev.racer = this.byId.get(e.racer);
      if (!ev.racer) return;
    }
    if (e.type === 'go') {
      this.phase = 'racing';
      this.time = 0;
    }
    if (e.type === 'all-finished') this.phase = 'done';
    this.events.push(ev);
  }

  update(dt) {
    if (this.phase === 'countdown') this.countdown = Math.max(0, this.countdown - dt);
    else if (this.phase === 'racing' || this.phase === 'done') {
      this.time += dt;
      if (this._timeLeft !== null) this._timeLeft = Math.max(0, this._timeLeft - dt);
    }
  }

  currentLapTime(r) {
    return this.canMove ? Math.max(0, this.time - r.lapStart) : 0;
  }

  isWrongWay(r) {
    return isWrongWayState(r.vehicle.state);
  }

  drainEvents() {
    const e = this.events.slice();
    this.events.length = 0;
    return e;
  }
}
