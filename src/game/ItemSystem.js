import { ITEM_TYPES } from './data/items.js';

/**
 * ItemSystem — logika item di lintasan (tanpa grafis, bisa diuji di Node).
 *
 *  Speed Orb  : dorongan kecepatan seketika + kecepatan maksimum naik sementara.
 *  Shield     : kebal benturan (tidak melambat saat menabrak), mobil lain terpental.
 *  Turbo Ring : lewati cincinnya → akselerasi berlipat sementara.
 *
 * Dua jenis cooldown:
 *  - respawn : item yang diambil hilang lalu muncul lagi setelah beberapa detik.
 *  - per mobil: mobil yang baru memakai item tidak bisa mengambil jenis yang sama sampai cooldown habis
 *               (item dilewati tanpa diambil, sehingga tetap tersedia untuk pembalap lain).
 */
export class ItemSystem {
  constructor(path, defs = []) {
    this.path = path;
    this.items = defs.map((d, id) => {
      const f = path.frameAt(d.at * path.length);
      return {
        id,
        type: d.type,
        lateral: d.lateral,
        s: f.s,
        x: f.x + f.sx * d.lateral,
        y: f.y,
        z: f.z + f.sz * d.lateral,
        heading: f.heading,
        active: true,
        timer: 0,
      };
    });
    this.events = [];
  }

  reset() {
    for (const it of this.items) {
      it.active = true;
      it.timer = 0;
    }
    this.events.length = 0;
  }

  /** cars: [{ state, phys, id? }] */
  update(dt, cars) {
    for (const it of this.items) {
      if (!it.active) {
        it.timer -= dt;
        if (it.timer <= 0) {
          it.active = true;
          this.events.push({ type: 'respawn', item: it });
        }
        continue;
      }
      const radius = it.type === 'turbo' ? 2.9 : 2.5;
      for (const car of cars) {
        const st = car.state;
        const dx = st.x - it.x;
        const dz = st.z - it.z;
        if (dx * dx + dz * dz > radius * radius) continue;
        if (Math.abs(st.y - it.y) > 2.6) continue; // sedang melompat tinggi di atasnya
        if (st.cool[it.type] > 0) continue; // cooldown per mobil
        applyItem(st, car.phys, it.type);
        it.active = false;
        it.timer = ITEM_TYPES[it.type].respawn;
        this.events.push({ type: 'pickup', item: it, car });
        break;
      }
    }
  }

  /**
   * Mode online (host): tamu melaporkan sudah mengambil item `id` (efeknya sudah diterapkan di perangkat tamu).
   * Item dinonaktifkan di sini agar ikut hilang bagi semua pembalap. Mengembalikan true bila item masih aktif.
   */
  takeRemote(id, car = null) {
    const it = this.items[id];
    if (!it || !it.active) return false;
    it.active = false;
    it.timer = ITEM_TYPES[it.type].respawn;
    this.events.push({ type: 'pickup', item: it, car, remote: true });
    return true;
  }

  drainEvents() {
    const e = this.events.slice();
    this.events.length = 0;
    return e;
  }
}

/** Terapkan efek item pada state mobil. */
export function applyItem(state, phys, type) {
  const cfg = ITEM_TYPES[type];
  state.fx[type] = cfg.duration;
  state.cool[type] = cfg.cooldown;
  if (type === 'speed') {
    // Dorongan seketika ke arah depan, dibatasi agar tetap terkendali
    const fx = Math.sin(state.heading);
    const fz = Math.cos(state.heading);
    const vf = state.vx * fx + state.vz * fz;
    const target = Math.min(vf + cfg.kick, phys.maxSpeed + cfg.topBonus);
    const add = Math.max(0, target - vf);
    state.vx += fx * add;
    state.vz += fz * add;
    state.nitro = Math.min(1, state.nitro + 0.15); // bonus kecil isi nitro
  }
}
