/**
 * RaceManager — aturan balapan: countdown, checkpoint, lap, posisi, finis.
 *
 * Mode:
 *  - 'race'     : countdown 3-2-1-GO, sejumlah lap, posisi 1..n, garis finis, batas waktu.
 *  - 'practice' : langsung jalan, lap tak terbatas, hanya mencatat waktu lap.
 *
 * Validasi lap: pembalap harus melewati semua checkpoint secara berurutan
 * sebelum garis START/FINIS dihitung sebagai lap baru (tidak bisa curang mundur-maju).
 *
 * Posisi: dihitung dari "progres" = jarak tempuh bersih sepanjang lintasan sejak start
 * (maju menambah, mundur mengurangi). Yang sudah finis selalu di depan, urut waktu finis.
 */

/** Slot grid start ke-k (0 = paling depan). Dipakai juga oleh Track untuk marka grid. */
export function gridSlot(k) {
  const row = Math.floor(k / 2);
  const mark = -10 - row * 9 - (k % 2) * 4.5; // garis marka di aspal
  return {
    mark,
    s: mark - 2.6, // pusat mobil sedikit di belakang marka
    lateral: k % 2 ? 3.6 : -3.6,
  };
}

export const COUNTDOWN_SECONDS = 3;

export class RaceManager {
  constructor(trackPath, { mode = 'race', laps = 3, checkpoints = 4, finishTimeout = 60 } = {}) {
    this.path = trackPath;
    this.mode = mode;
    this.totalLaps = mode === 'race' ? laps : Infinity;
    this.finishTimeout = finishTimeout;
    const L = trackPath.length;
    // Checkpoint di 1/4, 2/4, 3/4 lintasan (garis finis di s = 0)
    this.checkpoints = [];
    for (let i = 1; i < checkpoints; i++) this.checkpoints.push((i / checkpoints) * L);
    this.racers = [];
    this.events = [];
    this.reset();
  }

  reset() {
    this.phase = 'idle'; // idle → countdown → racing → (semua selesai) done
    this.time = 0; // waktu balapan sejak GO
    this.countdown = 0;
    this.lastCount = 0;
    this.finishOrder = [];
    this.deadline = Infinity;
    this.events.length = 0;
  }

  addRacer(id, vehicle, info = {}) {
    const r = { id, vehicle, name: info.name ?? id, color: info.color ?? '#ffffff', isPlayer: !!info.isPlayer };
    this.#resetRacer(r);
    this.racers.push(r);
    return r;
  }

  #resetRacer(r) {
    r.lap = 1; // lap yang sedang dijalani
    r.nextCheckpoint = 0;
    r.lapStart = 0;
    r.lastLap = null;
    r.bestLap = null;
    r.laps = [];
    r.prevS = r.vehicle.state.s;
    // progres awal = posisi grid relatif terhadap garis start (negatif = di belakang garis)
    let s0 = r.vehicle.state.s;
    if (s0 > this.path.length / 2) s0 -= this.path.length;
    r.progress = s0;
    r.finished = false;
    r.finishTime = null;
    r.dnf = false;
    r.position = 0;
  }

  /** Mulai. Mode balapan diawali countdown; latihan langsung jalan. */
  start() {
    this.reset();
    for (const r of this.racers) this.#resetRacer(r);
    if (this.mode === 'race') {
      this.phase = 'countdown';
      this.countdown = COUNTDOWN_SECONDS;
      this.lastCount = COUNTDOWN_SECONDS + 1;
    } else {
      this.phase = 'racing';
    }
    this.#rank();
  }

  /** Mobil boleh bergerak? (tidak selama countdown) */
  get canMove() {
    return this.phase === 'racing' || this.phase === 'done';
  }

  /** Jarak tempuh bertanda antara dua nilai s (memperhitungkan putaran). */
  #delta(prev, cur) {
    const L = this.path.length;
    let d = cur - prev;
    if (d < -L / 2) d += L;
    if (d > L / 2) d -= L;
    return d;
  }

  #crossed(prevS, d, target) {
    const L = this.path.length;
    let t = target - prevS;
    if (t < 0) t += L;
    return t > 0 && t <= d;
  }

  update(dt) {
    if (this.phase === 'idle') return;

    if (this.phase === 'countdown') {
      this.countdown -= dt;
      const n = Math.ceil(this.countdown);
      if (n < this.lastCount && n >= 1) {
        this.lastCount = n;
        this.events.push({ type: 'count', value: n });
      }
      if (this.countdown <= 0) {
        this.phase = 'racing';
        this.time = 0;
        for (const r of this.racers) r.prevS = r.vehicle.state.s;
        this.events.push({ type: 'go' });
      }
      return;
    }

    this.time += dt;
    const L = this.path.length;
    for (const r of this.racers) {
      const s = r.vehicle.state.s;
      if (r.finished) {
        r.prevS = s;
        continue;
      }
      const d = this.#delta(r.prevS, s);
      r.progress += d;
      if (d > 0) {
        const cp = this.checkpoints[r.nextCheckpoint];
        if (cp !== undefined && this.#crossed(r.prevS, d, cp)) {
          r.nextCheckpoint++;
          this.events.push({ type: 'checkpoint', racer: r, index: r.nextCheckpoint });
        }
        if (r.prevS + d >= L && r.nextCheckpoint >= this.checkpoints.length) {
          this.#completeLap(r);
        }
      }
      r.prevS = s;
    }

    // Batas waktu setelah pemenang finis
    if (this.time > this.deadline) {
      for (const r of this.racers) {
        if (!r.finished) {
          r.finished = true;
          r.dnf = true;
          this.events.push({ type: 'dnf', racer: r });
        }
      }
    }

    this.#rank();
    if (this.phase === 'racing' && this.mode === 'race' && this.racers.every((r) => r.finished)) {
      this.phase = 'done';
      this.events.push({ type: 'all-finished' });
    }
  }

  #completeLap(r) {
    const lapTime = this.time - r.lapStart;
    const isBest = r.bestLap === null || lapTime < r.bestLap;
    r.lastLap = lapTime;
    r.laps.push(lapTime);
    if (isBest) r.bestLap = lapTime;
    r.lapStart = this.time;
    r.nextCheckpoint = 0;
    const completed = r.lap;
    if (completed >= this.totalLaps) {
      r.finished = true;
      r.finishTime = this.time;
      this.finishOrder.push(r);
      if (this.finishOrder.length === 1) this.deadline = this.time + this.finishTimeout;
      this.events.push({ type: 'finish', racer: r, place: this.finishOrder.length, time: this.time, lapTime, isBest });
    } else {
      r.lap++;
      this.events.push({ type: 'lap', racer: r, lapTime, isBest, lap: r.lap, final: r.lap === this.totalLaps });
    }
  }

  #rank() {
    const sorted = this.racers.slice().sort((a, b) => {
      if (a.dnf !== b.dnf) return a.dnf ? 1 : -1;
      if (a.finishTime !== null && b.finishTime !== null) return a.finishTime - b.finishTime;
      if (a.finishTime !== null) return -1;
      if (b.finishTime !== null) return 1;
      return b.progress - a.progress;
    });
    sorted.forEach((r, i) => (r.position = i + 1));
    this.standings = sorted;
  }

  /** Waktu tersisa sebelum batas waktu (null bila belum berlaku). */
  get timeLeft() {
    return isFinite(this.deadline) ? Math.max(0, this.deadline - this.time) : null;
  }

  currentLapTime(r) {
    return this.phase === 'racing' || this.phase === 'done' ? this.time - r.lapStart : 0;
  }

  /** Arah salah: bergerak berlawanan dengan arah lintasan. */
  isWrongWay(r) {
    const st = r.vehicle.state;
    const speed = Math.hypot(st.vx, st.vz);
    if (speed < 5) return false;
    const dot = (st.vx * st.tangentX + st.vz * st.tangentZ) / speed;
    return dot < -0.35;
  }

  drainEvents() {
    const e = this.events.slice();
    this.events.length = 0;
    return e;
  }
}

export function formatTime(t) {
  if (t === null || t === undefined || !isFinite(t)) return '--:--.--';
  const total = Math.round(t * 100); // dibulatkan ke perseratus detik
  const m = Math.floor(total / 6000);
  const s = Math.floor((total % 6000) / 100);
  const cs = total % 100;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}.${String(cs).padStart(2, '0')}`;
}
