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
    this._tmp = new THREE.Vector3();
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
    if (fov && Math.abs(cam.fov - fov) > 0.05) {
      cam.fov += (fov - cam.fov) * (dt > 0 ? 1 - Math.exp(-4 * dt) : 1);
      cam.updateProjectionMatrix();
    }
  }
}
