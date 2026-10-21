import { wrapAngle } from './Physics.js';
import { ITEM_TYPES } from './data/items.js';

const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);

/**
 * AIRacer — "otak" pembalap komputer.
 * Menghasilkan input (gas/rem/kemudi) yang SAMA dengan input pemain, lalu mobil AI
 * digerakkan oleh fisika yang sama. Jadi AI tidak curang: ia juga bisa menabrak,
 * melambat, dan terdorong.
 *
 * Perilaku:
 *  1. Mengikuti jalur lintasan dengan "pure pursuit" (membidik titik di depan).
 *  2. Racing line: mengambil sisi dalam tikungan, kembali ke jalur favorit di lurusan.
 *  3. Melambat sebelum tikungan: kecepatan aman dihitung dari kelengkungan di depan
 *     (v = √(a_samping / kelengkungan)) dan jarak pengereman yang tersedia.
 *  4. Menjaga jarak: bila ada mobil lebih lambat di depan → menyalip lewat sisi yang
 *     lebih lega, atau mengikuti di belakangnya bila tidak ada ruang.
 *  5. Variasi: setiap AI punya skill, keberanian menikung, jalur, dan reaksi start berbeda.
 *  6. Pemulihan: bila macet/terbalik arah terlalu lama, mobil dikembalikan ke lintasan.
 *  7. Nitro: dipakai di lurusan hanya bila tikungan berikutnya masih cukup jauh untuk mengerem.
 *  8. Item: membelokkan jalur ke item di depan yang bisa dijangkau (bila tidak sedang cooldown).
 */
export class AIRacer {
  constructor(profile, phys, path, difficulty) {
    this.profile = profile;
    this.phys = phys;
    this.path = path;
    this.difficulty = difficulty;
    this.usable = path.halfWidth - 1.7; // batas lateral target (sisa ruang untuk lebar mobil)
    this.reset();
  }

  reset() {
    this.reaction = this.profile.reaction;
    this.latTarget = this.profile.lane * this.usable;
    this.latSmooth = this.latTarget;
    this.stuckTime = 0;
    this.wrongTime = 0;
    this.targetSpeed = 0;
    this.blocked = false;
    this.wantsRespawn = false;
    this.wobble = Math.random() * 100; // sedikit variasi agar tidak seperti robot
  }

  /** Kecepatan aman maksimum dengan memperhitungkan tikungan sampai 130 m ke depan. */
  #safeSpeed(s, vTop, aLat) {
    const path = this.path;
    const aBrake = this.phys.brake * 0.55; // pengereman yang nyaman, bukan maksimum
    let v = vTop;
    for (let d = 0; d <= 130; d += 5) {
      const k = Math.abs(path.curvature[path.indexAt(s + d)]);
      if (k < 1e-4) continue;
      const vCorner = Math.sqrt(aLat / k);
      const vAllowed = Math.sqrt(vCorner * vCorner + 2 * aBrake * d);
      if (vAllowed < v) v = vAllowed;
    }
    return v;
  }

  /**
   * Hitung input untuk satu langkah fisika.
   * ctx: { cars: [{ state }], self: indeks diri, playerGap: jarak (m) dari pemain (+ = di depan pemain),
   *        cruise: true setelah finis (melaju santai) }
   */
  computeInput(state, ctx, dt, out) {
    const p = this.profile;
    const path = this.path;
    const diff = this.difficulty;
    const L = path.length;
    const v = state.forwardSpeed;

    out.handbrake = false;
    out.nitro = false;

    // --- Reaksi start
    if (this.reaction > 0) {
      this.reaction -= dt;
      out.throttle = 0;
      out.brake = 0;
      out.steer = 0;
      return out;
    }

    // --- Kecepatan puncak & keberanian menikung (+ rubber band ringan)
    let speedK = p.skill * diff.speed;
    let cornerK = diff.corner;
    if (ctx.cruise) {
      speedK *= 0.72;
      cornerK *= 0.8;
    } else if (ctx.playerGap !== undefined) {
      const g = ctx.playerGap;
      if (g > 90) speedK *= 1 - Math.min(0.09, ((g - 90) / 1500) * diff.catchUp);
      else if (g < -60) speedK *= 1 + Math.min(0.05, ((-g - 60) / 1500) * diff.catchUp);
    }
    let vTop = Math.min(this.phys.maxSpeed, this.phys.maxSpeed * speedK);
    // Efek item aktif menaikkan kecepatan puncak (AI ikut merasakannya)
    if (state.fx.speed > 0) vTop += ITEM_TYPES.speed.topBonus;
    if (state.fx.turbo > 0) vTop += ITEM_TYPES.turbo.topBonus;
    const aLat = p.corner * cornerK * (this.phys.aiCorner ?? 1);
    let target = this.#safeSpeed(state.s, vTop, aLat);

    // --- Nitro: hanya bila aman (cukup ruang untuk mengerem sebelum tikungan berikutnya)
    const nitroCfg = this.phys.nitro;
    let useNitro = false;
    const reserve = 0.15 + (1 - p.aggression) * 0.45; // AI yang hati-hati menyimpan nitro lebih banyak
    if (!ctx.cruise && nitroCfg && state.nitro > reserve && v > 16 && !this.blocked && state.onGround) {
      const boosted = this.#safeSpeed(state.s, vTop + nitroCfg.boostSpeed * diff.speed, aLat);
      if (boosted > v + 5) {
        useNitro = true;
        target = boosted;
      }
    }
    this.usingNitro = useNitro;

    // --- Racing line: sisi dalam tikungan yang akan datang
    let kSum = 0;
    for (let d = 15; d <= 55; d += 10) kSum += path.curvature[path.indexAt(state.s + d)];
    const kAvg = kSum / 5;
    const cornerW = clamp(Math.abs(kAvg) * 70, 0, 1); // 0 = lurus, 1 = tikungan R ≤ 70 m
    let lat = (1 - cornerW) * p.lane * this.usable + cornerW * Math.sign(kAvg) * p.line * this.usable;
    lat += Math.sin((state.s + this.wobble) * 0.013) * 0.6;

    // --- Incar item yang ada di depan dan masih terjangkau
    if (this.items && !ctx.cruise) {
      for (const it of this.items) {
        if (!it.active || state.cool[it.type] > 0) continue;
        let ds = it.s - state.s;
        if (ds < -L / 2) ds += L;
        if (ds < 10 || ds > 60) continue;
        if (Math.abs(it.lateral - lat) > 4.2) continue;
        lat = it.lateral;
        break;
      }
    }

    // --- Menjaga jarak & menyalip
    this.blocked = false;
    let avoiding = false;
    let followSpeed = Infinity;
    const cars = ctx.cars;
    for (let i = 0; i < cars.length; i++) {
      if (i === ctx.self) continue;
      const o = cars[i].state;
      let ds = o.s - state.s;
      if (ds > L / 2) ds -= L;
      if (ds < -L / 2) ds += L;
      const dLat = o.lateral - state.lateral;

      // Mobil sejajar terlalu dekat → beri ruang ke samping
      if (Math.abs(ds) < 5 && Math.abs(dLat) < 2.6) {
        lat = state.lateral - Math.sign(dLat || 1) * 2.8;
        avoiding = true;
      }

      const closing = v - o.forwardSpeed;
      // Makin cepat mendekat, makin jauh mobil di depan harus diperhatikan
      const reach = 16 + Math.max(0, closing) * 1.8;
      if (ds <= 2 || ds > reach) continue;
      const inPath = Math.abs(o.lateral - lat) < 2.5;
      if (!inPath || closing < -1) continue;

      // Pilih sisi yang lebih lega untuk menyalip
      const roomLeft = o.lateral - 2.7 - -this.usable;
      const roomRight = this.usable - (o.lateral + 2.7);
      const canPass = Math.max(roomLeft, roomRight) >= 0 && p.aggression > 0.25;
      if (canPass) {
        lat = roomRight >= roomLeft ? o.lateral + 2.9 : o.lateral - 2.9;
        avoiding = true;
        // Belum sejajar di samping → tahan laju agar tidak menyerempet bagian belakangnya
        const beside = Math.abs(state.lateral - o.lateral) > 2.4;
        if (!beside) followSpeed = Math.min(followSpeed, o.forwardSpeed + Math.max(0.5, (ds - 5.5) * 0.9));
        else if (ds < 9) followSpeed = Math.min(followSpeed, o.forwardSpeed + 2 + p.aggression * 4);
      } else {
        this.blocked = true;
        followSpeed = Math.min(followSpeed, o.forwardSpeed + (ds - 9) * 0.6);
      }
    }
    target = Math.min(target, followSpeed);
    if (followSpeed !== Infinity) useNitro = false;
    out.nitro = useNitro;
    this.targetSpeed = target;

    lat = clamp(lat, -this.usable, this.usable);
    this.latTarget = lat;
    // Saat menghindar/menyalip, bergeser lebih sigap daripada saat mengikuti racing line
    this.latSmooth += (lat - this.latSmooth) * (1 - Math.exp(-(avoiding ? 5 : 2.2) * dt));

    // --- Kemudi: bidik titik di depan pada jalur target
    const look = 10 + Math.abs(v) * 0.4;
    const f = path.frameAt(state.s + look);
    const tx = f.x + f.sx * this.latSmooth - state.x;
    const tz = f.z + f.sz * this.latSmooth - state.z;
    const err = wrapAngle(Math.atan2(tx, tz) - state.heading);
    out.steer = clamp(-err * 2.6, -1, 1);

    // --- Gas & rem
    if (v < target - 0.3) {
      out.throttle = clamp((target - v) / 2.5, 0.35, 1);
      out.brake = 0;
    } else if (v > target + 1.5) {
      out.throttle = 0;
      out.brake = clamp((v - target) / 5, 0.2, 1);
    } else {
      out.throttle = 0.25;
      out.brake = 0;
    }

    // --- Deteksi macet / arah salah → minta dikembalikan ke lintasan
    const facing = Math.sin(state.heading) * state.tangentX + Math.cos(state.heading) * state.tangentZ;
    this.stuckTime = Math.abs(v) < 2.5 ? this.stuckTime + dt : 0;
    this.wrongTime = facing < -0.2 ? this.wrongTime + dt : 0;
    if (this.stuckTime > 2.2 || this.wrongTime > 1.5) {
      this.wantsRespawn = true;
      this.stuckTime = 0;
      this.wrongTime = 0;
    }
    return out;
  }
}

/** Profil autopilot untuk mobil pemain setelah finis (melaju santai). */
export const COOLDOWN_PROFILE = {
  id: 'autopilot',
  name: 'AUTOPILOT',
  skill: 0.7,
  corner: 12,
  line: 0.35,
  lane: 0,
  reaction: 0,
  aggression: 0.5,
};
