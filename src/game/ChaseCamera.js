import * as THREE from 'three';
import { wrapAngle } from './Physics.js';

/**
 * Kamera orang ketiga yang mengikuti mobil dengan pegas halus,
 * FOV melebar saat kencang, dan guncangan saat tabrakan/mendarat.
 * Juga menyediakan kamera "fly-through" untuk latar menu.
 */
export class ChaseCamera {
  constructor(camera) {
    this.camera = camera;
    this.yaw = 0;
    this.pos = new THREE.Vector3();
    this.look = new THREE.Vector3();
    this.trauma = 0;
    this.baseFov = 62;
    this.menuS = 0;
    this.boostPull = 0;
    this.orbitA = 0.6;
    this.fovK = 1; // pengali tan(FOV/2) untuk layar terbagi (1 = layar penuh)
    this.fovCur = camera.fov;
    this._tmp = new THREE.Vector3();
  }

  /**
   * Sesuaikan FOV dengan rasio tampilan: layar terbagi atas-bawah sangat lebar → FOV vertikal dipersempit
   * agar mobil tidak tampak kecil; kiri-kanan sempit → FOV vertikal diperlebar agar tikungan tetap terlihat.
   * aspect = null → kembali normal (layar penuh).
   */
  setViewAspect(aspect) {
    const ref = 16 / 9;
    let k = 1;
    if (aspect) k = aspect > ref ? Math.pow(ref / aspect, 0.6) : Math.pow(ref / aspect, 0.4);
    this.fovK = k;
    this.#applyFov(true);
  }

  #effectiveFov(fov) {
    if (this.fovK === 1) return fov;
    return THREE.MathUtils.radToDeg(2 * Math.atan(Math.tan(THREE.MathUtils.degToRad(fov) / 2) * this.fovK));
  }

  #applyFov(force = false) {
    const cam = this.camera;
    const eff = this.#effectiveFov(this.fovCur);
    if (force || Math.abs(cam.fov - eff) > 0.01) {
      cam.fov = eff;
      cam.updateProjectionMatrix();
    }
  }

  addShake(amount) {
    this.trauma = Math.min(1, this.trauma + amount);
  }

  #desired(st, speed, out) {
    const dist = 7.0 + speed * 0.05 + this.boostPull;
    const height = 2.7 + speed * 0.012;
    const fx = Math.sin(this.yaw);
    const fz = Math.cos(this.yaw);
    return out.set(st.x - fx * dist, st.y + height, st.z - fz * dist);
  }

  snapTo(vehicle) {
    const st = vehicle.state;
    this.yaw = st.heading;
    this.#desired(st, 0, this.pos);
    this.look.set(st.x + Math.sin(this.yaw) * 6, st.y + 1.1, st.z + Math.cos(this.yaw) * 6);
    this.trauma = 0;
    this.#apply(0, 0);
  }

  follow(dt, vehicle) {
    const st = vehicle.state;
    const speed = Math.abs(st.forwardSpeed);

    // Arah kamera = heading mobil (dengan sedikit jeda agar terasa dinamis)
    const yawK = 1 - Math.exp(-(st.drifting ? 3.2 : 5.5) * dt);
    this.yaw = wrapAngle(this.yaw + wrapAngle(st.heading - this.yaw) * yawK);

    const desired = this.#desired(st, speed, this._tmp);
    const kXZ = 1 - Math.exp(-9 * dt);
    const kY = 1 - Math.exp(-5 * dt);
    this.pos.x += (desired.x - this.pos.x) * kXZ;
    this.pos.z += (desired.z - this.pos.z) * kXZ;
    this.pos.y += (desired.y - this.pos.y) * kY;

    const ahead = 6 + speed * 0.06;
    this.look.set(st.x + Math.sin(this.yaw) * ahead, st.y + 1.1, st.z + Math.cos(this.yaw) * ahead);

    const maxSpeed = vehicle.phys.maxSpeed;
    // Nitro: kamera sedikit menjauh & FOV melebar → kesan kecepatan
    const boost = st.boosting ? 1 : st.fx.speed > 0 || st.fx.turbo > 0 ? 0.5 : 0;
    this.boostPull += (boost * 1.6 - this.boostPull) * (1 - Math.exp(-4 * dt));
    const fov = this.baseFov + Math.min(1, speed / maxSpeed) * 14 + boost * 9;
    this.#apply(dt, fov);
  }

  /** Kamera sinematik menyusuri lintasan untuk latar belakang menu. */
  flyThrough(dt, track) {
    const path = track.path;
    this.menuS = (this.menuS + dt * 16) % path.length;
    const f = path.frameAt(this.menuS);
    const a = path.frameAt(this.menuS + 45);
    // Kamera tetap di atas badan jalan (di dalam pembatas) agar tidak menembus pohon di tepi lintasan
    const lateral = path.halfWidth * 0.5 + Math.sin(this.menuS * 0.01) * path.halfWidth * 0.45;
    const height = 9 + Math.sin(this.menuS * 0.02) * 2;
    this.pos.set(f.x + f.sx * lateral, f.y + height, f.z + f.sz * lateral);
    this.look.set(a.x, a.y + 1.5, a.z);
    this.trauma = 0;
    this.#apply(dt, 58);
  }

  /** Kamera garasi: berputar pelan mengelilingi mobil. */
  orbit(dt, vehicle) {
    this.orbitA += dt * 0.35;
    const o = vehicle.object.position;
    const h = vehicle.state.heading;
    const a = h + this.orbitA;
    this.pos.set(o.x + Math.sin(a) * 8.2, o.y + 2.3, o.z + Math.cos(a) * 8.2);
    // Mobil sedikit di kiri layar agar panel statistik di kanan tidak menutupi
    this.look.set(o.x + Math.cos(a) * 1.6, o.y + 0.75, o.z - Math.sin(a) * 1.6);
    this.trauma = 0;
    this.#apply(dt, 42);
  }

  /** Lobi 2 pemain: kamera di depan kedua mobil, bergoyang pelan. */
  showcase(dt, a, b) {
    this.orbitA += dt * 0.25;
    const pa = a.object.position, pb = b.object.position;
    const h = a.state.heading;
    const fx = Math.sin(h), fz = Math.cos(h);
    const mx = (pa.x + pb.x) / 2, my = (pa.y + pb.y) / 2, mz = (pa.z + pb.z) / 2;
    const sway = Math.sin(this.orbitA) * 2;
    // Kamera 14 m di depan mobil, bergeser ke samping (tegak lurus arah hadap). Titik bidik di bawah
    // mobil → mobil tampak di bagian atas-tengah layar, tidak tertutup panel pilihan di bawah.
    this.pos.set(mx + fx * 14 + fz * sway, my + 2.7, mz + fz * 14 - fx * sway);
    this.look.set(mx, my - 2, mz);
    this.trauma = 0;
    this.#apply(dt, 44);
  }

  #apply(dt, fov) {
    const cam = this.camera;
    cam.position.copy(this.pos);
    if (this.trauma > 0) {
      const t = this.trauma * this.trauma;
      cam.position.x += (Math.random() - 0.5) * 0.6 * t;
      cam.position.y += (Math.random() - 0.5) * 0.4 * t;
      cam.position.z += (Math.random() - 0.5) * 0.6 * t;
      this.trauma = Math.max(0, this.trauma - dt * 1.8);
    }
    cam.lookAt(this.look);
    if (fov && Math.abs(this.fovCur - fov) > 0.05) {
      this.fovCur += (fov - this.fovCur) * (dt > 0 ? 1 - Math.exp(-4 * dt) : 1);
    }
    this.#applyFov();
  }
}
