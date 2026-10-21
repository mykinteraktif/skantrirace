import { ITEM_TYPES } from './data/items.js';

/**
 * Physics.js — fisika arcade kendaraan (murni JavaScript, tanpa Three.js/DOM).
 *
 * Model sederhana tapi responsif:
 *  - Gaya maju/rem dihitung pada sumbu depan mobil.
 *  - "Grip" meredam kecepatan menyamping → drift muncul saat rem tangan.
 *  - Sebagian kecepatan ikut berputar bersama mobil (align) agar kemudi terasa sigap.
 *  - Collision pembatas: cukup cek offset lateral terhadap garis tengah lintasan.
 *  - Vertikal: mengikuti permukaan jalan (tanjakan & ramp), melompat di ujung ramp, gravitasi di udara.
 *  - Nitro: tangki 0..1, menambah akselerasi & kecepatan maksimum, terisi pelan (lebih cepat saat drift).
 *  - Efek item: Speed Orb (kecepatan maks), Turbo Ring (akselerasi), Shield (kebal benturan).
 *
 * Konvensi: heading = 0 menghadap +Z. Depan f = (sin h, cos h).
 * Kemudi positif (+1) = belok kanan → heading berkurang.
 */

export const WORLD = {
  gravity: 26, // sedikit lebih kuat dari nyata agar lompatan terasa "arcade"
  fixedStep: 1 / 120,
};

export function createVehicleState() {
  return {
    x: 0,
    y: 0,
    z: 0,
    heading: 0,
    vx: 0,
    vz: 0,
    vy: 0,
    steer: 0, // kemudi yang sudah dihaluskan (-1..1)
    forwardSpeed: 0, // m/s, negatif = mundur
    lateralSpeed: 0,
    onGround: true,
    airTime: 0,
    drifting: false,
    scraping: false,
    // Data lintasan (diperbarui tiap langkah)
    trackIndex: -1,
    s: 0,
    lateral: 0,
    extent: 1, // lebar efektif terhadap pembatas (m), bergantung sudut mobil
    carImpact: 0, // kecepatan tumbukan dengan mobil lain pada frame ini
    tangentX: 0,
    tangentZ: 1,
    // Event per-frame (dibaca lalu di-reset oleh Game)
    impact: 0,
    landing: 0,
    // Akumulasi jarak untuk rotasi roda
    odometer: 0,
    // Nitro & efek item
    nitro: 1, // isi tangki 0..1
    boosting: false,
    nitroLock: false, // true setelah tangki habis, sampai terisi 15%
    slope: 0, // kemiringan jalan saat ini (dy/ds)
    fx: { speed: 0, shield: 0, turbo: 0 }, // sisa durasi efek (detik)
    cool: { speed: 0, shield: 0, turbo: 0 }, // sisa cooldown per jenis item (detik)
  };
}

/** Kosongkan efek & isi penuh nitro (awal balapan). */
export function resetVehicleExtras(state) {
  state.nitro = 1;
  state.boosting = false;
  state.nitroLock = false;
  for (const k of Object.keys(state.fx)) {
    state.fx[k] = 0;
    state.cool[k] = 0;
  }
}

export function wrapAngle(a) {
  while (a > Math.PI) a -= Math.PI * 2;
  while (a < -Math.PI) a += Math.PI * 2;
  return a;
}

const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);

/** Tempatkan kendaraan di lintasan pada jarak s dan offset lateral. */
export function placeOnTrack(state, track, s, lateral = 0) {
  const f = track.frameAt(s);
  state.x = f.x + f.sx * lateral;
  state.z = f.z + f.sz * lateral;
  state.y = f.y;
  state.heading = f.heading;
  state.vx = state.vz = state.vy = 0;
  state.steer = 0;
  state.forwardSpeed = 0;
  state.lateralSpeed = 0;
  state.onGround = true;
  state.airTime = 0;
  state.drifting = false;
  state.trackIndex = f.index;
  state.s = f.s;
  state.lateral = lateral;
  state.tangentX = f.tx;
  state.tangentZ = f.tz;
}

const _proj = {};
const _surf = {};

/**
 * Satu langkah fisika (dt tetap, lihat WORLD.fixedStep).
 * input: { throttle 0..1, brake 0..1, steer -1..1, handbrake bool }
 */
export function stepVehicle(state, input, phys, track, dt) {
  const grounded = state.onGround;

  // --- 0. Timer efek item & nitro
  const effects = state.fx;
  const cool = state.cool;
  for (const k in effects) {
    if (effects[k] > 0) effects[k] = Math.max(0, effects[k] - dt);
    if (cool[k] > 0) cool[k] = Math.max(0, cool[k] - dt);
  }
  const nitroCfg = phys.nitro;
  const vfNow = state.vx * Math.sin(state.heading) + state.vz * Math.cos(state.heading);
  state.boosting = false;
  if (nitroCfg) {
    // Tangki habis → terkunci sampai terisi 15% (mencegah nitro "berkedip" saat tombol terus ditahan)
    if (state.nitro <= 0.005) state.nitroLock = true;
    else if (state.nitro >= 0.15) state.nitroLock = false;
    if (input.nitro && !state.nitroLock && vfNow > 2 && !(input.brake > 0)) {
      state.boosting = true;
      state.nitro = Math.max(0, state.nitro - nitroCfg.drain * dt);
    } else {
      const regen = nitroCfg.regen + (state.drifting ? nitroCfg.driftRegen : 0);
      state.nitro = Math.min(1, state.nitro + regen * dt);
    }
  }
  // Kecepatan maks dasar (+ bonus item); nitro ditambahkan terpisah di bawah
  let maxSpeed = phys.maxSpeed;
  let accel = phys.accel;
  if (effects.speed > 0) maxSpeed += ITEM_TYPES.speed.topBonus;
  if (effects.turbo > 0) {
    maxSpeed += ITEM_TYPES.turbo.topBonus;
    accel *= ITEM_TYPES.turbo.accelMult;
  }

  // --- 1. Haluskan kemudi (kembali ke tengah lebih cepat daripada membelok)
  const target = clamp(input.steer, -1, 1);
  const returning = Math.abs(target) < Math.abs(state.steer) || Math.sign(target) !== Math.sign(state.steer);
  const rate = returning ? 9 : 5;
  state.steer += clamp(target - state.steer, -rate * dt, rate * dt);

  // --- 2. Uraikan kecepatan ke sumbu mobil
  let h = state.heading;
  let fx = Math.sin(h), fz = Math.cos(h);
  let rx = Math.cos(h), rz = -Math.sin(h);
  let vf = state.vx * fx + state.vz * fz;
  let vl = state.vx * rx + state.vz * rz;

  if (grounded) {
    const brake = clamp(input.brake, 0, 1);
    const throttle = state.boosting ? 1 : clamp(input.throttle, 0, 1); // nitro selalu mendorong

    if (throttle > 0) {
      if (vf >= -0.5) {
        const r = Math.max(0, vf / maxSpeed);
        // Di atas kecepatan maksimum (mis. setelah nitro habis) → melambat perlahan, tidak mendadak
        const k = Math.max(1 - r * r, state.boosting ? 0 : -0.25);
        vf += accel * throttle * k * dt;
        // Nitro: dorongan kuat dan konstan sampai batas kecepatan nitro
        if (state.boosting) {
          const cap = maxSpeed + nitroCfg.boostSpeed;
          vf += nitroCfg.boostAccel * clamp((cap - vf) / 4, 0, 1) * dt;
        }
      } else {
        vf += phys.brake * throttle * dt; // sedang mundur → gas berfungsi sebagai rem
      }
    }
    if (brake > 0) {
      if (vf > 0.5) {
        vf -= phys.brake * brake * dt;
        if (vf < 0) vf = 0;
      } else {
        vf -= phys.accel * 0.45 * brake * dt; // mundur
        if (vf < -phys.reverseMax) vf = -phys.reverseMax;
      }
    }
    if (throttle === 0 && brake === 0) {
      const d = phys.coastDecel * dt;
      vf = Math.abs(vf) <= d ? 0 : vf - Math.sign(vf) * d;
    }
    // Hambatan udara ringan
    vf -= vf * Math.abs(vf) * 0.0005 * dt;
    // Tanjakan memperlambat, turunan mempercepat (dibuat ringan agar tetap arcade)
    vf -= WORLD.gravity * 0.3 * state.slope * dt;

    let grip = phys.grip;
    if (input.handbrake) {
      grip = phys.driftGrip;
      const d = 7 * dt;
      vf = Math.abs(vf) <= d ? 0 : vf - Math.sign(vf) * d;
    }
    vl *= Math.exp(-grip * dt);
  } else {
    vl *= Math.exp(-0.4 * dt);
  }

  state.vx = fx * vf + rx * vl;
  state.vz = fz * vf + rz * vl;

  // --- 3. Kemudi → perubahan heading
  const absVf = Math.abs(vf);
  let yawRate;
  if (grounded) {
    const lowK = clamp(absVf / 7, 0, 1); // tidak bisa memutar di tempat
    const highK = 1 - (1 - phys.highSpeedSteer) * clamp(absVf / phys.maxSpeed, 0, 1);
    yawRate = state.steer * phys.steerRate * lowK * highK * (input.handbrake ? 1.35 : 1);
    if (vf < 0) yawRate = -yawRate;
  } else {
    yawRate = state.steer * 0.6; // sedikit kontrol di udara
  }
  const dTheta = -yawRate * dt;
  state.heading = wrapAngle(state.heading + dTheta);

  // Sebagian kecepatan ikut berputar bersama mobil (rasa arcade yang responsif)
  const align = grounded ? (input.handbrake ? 0.25 : 0.88) : 0;
  if (align > 0) {
    const a = dTheta * align;
    const c = Math.cos(a), s = Math.sin(a);
    const vx = state.vx * c + state.vz * s;
    const vz = state.vz * c - state.vx * s;
    state.vx = vx;
    state.vz = vz;
  }

  // --- 4. Integrasi posisi
  state.x += state.vx * dt;
  state.z += state.vz * dt;

  // --- 5. Collision pembatas
  const p = collideWalls(state, phys, track, dt);

  // --- 6. Vertikal: permukaan, ramp, lompatan
  const surf = track.surfaceAt(p, _surf);
  const vAlong = state.vx * p.tx + state.vz * p.tz;
  const surfaceVy = surf.slope * vAlong;
  state.slope = state.onGround ? surf.slope : 0;

  if (state.onGround) {
    if (surf.height >= state.y - 0.08) {
      state.y = surf.height;
      state.vy = surfaceVy;
    } else {
      state.onGround = false; // ujung ramp: lanjut melayang dengan vy terakhir
      state.airTime = 0;
    }
  }
  if (!state.onGround) {
    state.vy -= WORLD.gravity * dt;
    state.y += state.vy * dt;
    state.airTime += dt;
    if (state.y <= surf.height) {
      state.landing = Math.max(state.landing, -state.vy);
      state.y = surf.height;
      state.vy = surfaceVy;
      state.onGround = true;
    }
  }

  // --- 7. Nilai turunan untuk HUD/visual
  updateDerived(state);
  state.odometer += state.forwardSpeed * dt;
}

function updateDerived(state) {
  const h = state.heading;
  const fx = Math.sin(h), fz = Math.cos(h);
  const rx = Math.cos(h), rz = -Math.sin(h);
  state.forwardSpeed = state.vx * fx + state.vz * fz;
  state.lateralSpeed = state.vx * rx + state.vz * rz;
  state.drifting = state.onGround && Math.abs(state.lateralSpeed) > 3 && Math.abs(state.forwardSpeed) > 10;
}

/**
 * Collision dengan pembatas lintasan (via proyeksi ke garis tengah).
 * Lebar efektif mobil bergantung sudutnya: saat miring, sudut bodi lebih dulu menyentuh dinding.
 * Mengembalikan hasil proyeksi (objek bersama — jangan disimpan).
 */
export function collideWalls(state, phys, track, dt) {
  const p = track.project(state.x, state.z, state.trackIndex, _proj);
  const hx = Math.sin(state.heading);
  const hz = Math.cos(state.heading);
  const cosA = Math.abs(hx * p.tx + hz * p.tz);
  const sinA = Math.abs(hx * p.sx + hz * p.sz);
  state.extent = phys.halfWidth * cosA + phys.halfLength * sinA;

  const limit = track.wallOffset - state.extent;
  state.scraping = false;
  if (Math.abs(p.lateral) > limit) {
    const side = Math.sign(p.lateral);
    const nx = p.sx * side;
    const nz = p.sz * side; // normal mengarah KE pembatas
    const overlap = Math.abs(p.lateral) - limit;
    state.x -= nx * overlap;
    state.z -= nz * overlap;
    p.lateral = limit * side;

    const vn = state.vx * nx + state.vz * nz;
    const shielded = state.fx.shield > 0;
    if (vn > 0) {
      const bounce = shielded ? 0.05 : 0.3;
      state.vx -= nx * vn * (1 + bounce);
      state.vz -= nz * vn * (1 + bounce);
      // Semakin frontal tabrakannya, semakin besar kecepatan yang hilang.
      // Shield: tidak kehilangan kecepatan. TITAN (wallLoss < 1) lebih stabil.
      const loss = shielded ? 0 : clamp(0.06 + vn * 0.022, 0.06, 0.55) * (phys.wallLoss ?? 1);
      state.vx *= 1 - loss;
      state.vz *= 1 - loss;
      state.impact = Math.max(state.impact, vn);

      // Luruskan moncong mobil searah lintasan agar tidak "menempel" ke pembatas
      const facing = hx * p.tx + hz * p.tz >= 0 ? 1 : -1;
      const trackH = Math.atan2(p.tx * facing, p.tz * facing);
      const diff = wrapAngle(trackH - state.heading);
      state.heading = wrapAngle(state.heading + diff * clamp(vn * 0.05, 0.05, 0.5));
    }
    if (dt > 0 && !shielded) {
      // Gesekan saat bergesekan dengan pembatas
      const scrape = Math.exp(-1.4 * (phys.wallLoss ?? 1) * dt);
      state.vx *= scrape;
      state.vz *= scrape;
    }
    state.scraping = true;
  }

  state.trackIndex = p.index;
  state.s = p.s;
  state.lateral = p.lateral;
  state.tangentX = p.tx;
  state.tangentZ = p.tz;
  return p;
}

// ---------------------------------------------------------------------------
// Tabrakan antar-mobil
// Setiap mobil didekati dua lingkaran (depan & belakang) — murah dan cukup akurat
// untuk bentuk mobil yang memanjang. Massa semua mobil dianggap sama.
// ---------------------------------------------------------------------------
const CAR_CIRCLE_OFFSET = 1.2; // m dari pusat ke pusat lingkaran depan/belakang
const CAR_CIRCLE_RADIUS = 1.12;
const CAR_RESTITUTION = 0.25;

function carMass(car) {
  const base = car.phys.mass ?? 1;
  return car.state.fx.shield > 0 ? base * ITEM_TYPES.shield.massMult : base;
}

/**
 * cars: [{ state, phys }]. Dipanggil setelah semua mobil melangkah.
 * Mengembalikan jumlah kontak (untuk statistik/pengujian).
 */
export function resolveCarCollisions(cars, track) {
  let contacts = 0;
  const minD = CAR_CIRCLE_RADIUS * 2;
  for (let i = 0; i < cars.length; i++) {
    const A = cars[i].state;
    for (let j = i + 1; j < cars.length; j++) {
      const B = cars[j].state;
      // Uji kasar: jarak pusat
      const dxC = B.x - A.x;
      const dzC = B.z - A.z;
      const reach = CAR_CIRCLE_OFFSET * 2 + minD;
      if (dxC * dxC + dzC * dzC > reach * reach) continue;
      if (Math.abs(A.y - B.y) > 1.3) continue; // satu sedang melompat di atas yang lain

      const mA = carMass(cars[i]);
      const mB = carMass(cars[j]);
      const afx = Math.sin(A.heading), afz = Math.cos(A.heading);
      const bfx = Math.sin(B.heading), bfz = Math.cos(B.heading);
      let hit = false;
      for (const oa of [-CAR_CIRCLE_OFFSET, CAR_CIRCLE_OFFSET]) {
        for (const ob of [-CAR_CIRCLE_OFFSET, CAR_CIRCLE_OFFSET]) {
          const ax = A.x + afx * oa, az = A.z + afz * oa;
          const bx = B.x + bfx * ob, bz = B.z + bfz * ob;
          let nx = bx - ax, nz = bz - az;
          const d = Math.hypot(nx, nz);
          if (d >= minD) continue;
          if (d < 1e-4) {
            nx = A.tangentZ; // arah sembarang yang konsisten (ke samping lintasan)
            nz = -A.tangentX;
          } else {
            nx /= d;
            nz /= d;
          }
          // Dorong keluar sebanding kebalikan massa (mobil berat/berperisai bergeser lebih sedikit)
          const overlap = minD - Math.max(d, 0);
          const wA = 1 / mA, wB = 1 / mB, wSum = wA + wB;
          A.x -= nx * overlap * (wA / wSum);
          A.z -= nz * overlap * (wA / wSum);
          B.x += nx * overlap * (wB / wSum);
          B.z += nz * overlap * (wB / wSum);
          // Impuls bila saling mendekat
          const rel = (B.vx - A.vx) * nx + (B.vz - A.vz) * nz;
          if (rel < 0) {
            const jImp = (-(1 + CAR_RESTITUTION) * rel) / wSum;
            A.vx -= nx * jImp * wA;
            A.vz -= nz * jImp * wA;
            B.vx += nx * jImp * wB;
            B.vz += nz * jImp * wB;
            A.carImpact = Math.max(A.carImpact || 0, -rel);
            B.carImpact = Math.max(B.carImpact || 0, -rel);
          }
          hit = true;
        }
      }
      if (hit) contacts++;
    }
  }
  if (contacts > 0) {
    // Mobil yang terdorong tidak boleh menembus pembatas
    for (const c of cars) {
      collideWalls(c.state, c.phys, track, 0);
      updateDerived(c.state);
    }
  }
  return contacts;
}
