import * as THREE from 'three';
import { createVehicleState, placeOnTrack, stepVehicle, resetVehicleExtras } from './Physics.js';
import { buildCarModel } from './CarModels.js';
import { nameTagTexture } from './textures.js';

/** Material gelembung perisai: makin terang di tepi (efek fresnel). */
function shieldMaterial() {
  return new THREE.ShaderMaterial({
    uniforms: { uTime: { value: 0 }, uColor: { value: new THREE.Color('#38bdf8') }, uFade: { value: 1 } },
    vertexShader: /* glsl */ `
      varying vec3 vN; varying vec3 vV; varying vec3 vP;
      void main() {
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        vN = normalize(normalMatrix * normal);
        vV = normalize(-mv.xyz);
        vP = position;
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: /* glsl */ `
      uniform float uTime; uniform vec3 uColor; uniform float uFade;
      varying vec3 vN; varying vec3 vV; varying vec3 vP;
      void main() {
        float f = pow(1.0 - abs(dot(vN, vV)), 2.2);
        float bands = 0.5 + 0.5 * sin(vP.y * 18.0 - uTime * 6.0);
        float a = (0.12 + f * 0.75 + bands * 0.08) * uFade;
        gl_FragColor = vec4(uColor * (0.6 + f), a);
      }`,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    side: THREE.DoubleSide,
  });
}

/**
 * Vehicle — menyatukan state fisika, spesifikasi mobil, dan model 3D.
 */
export class Vehicle {
  /**
   * opts: { color, number, glow, name } — name menampilkan papan nama di atas mobil (untuk lawan).
   */
  constructor(spec, opts = {}) {
    this.spec = spec;
    this.phys = spec.physics;
    this.state = createVehicleState();
    this.model = buildCarModel(spec, opts);
    this.object = this.model.root;
    this.pitch = 0;
    this.squat = 0;
    this.bounce = 0;
    this.bounceVel = 0;
    this.braking = false;
    this.lastForward = 0;
    this.time = 0;

    if (opts.name) this.setNameTag(opts.name, opts.number ?? '', '#' + new THREE.Color(opts.color ?? spec.color).getHexString());

    // Gelembung perisai (tersembunyi sampai item Shield aktif)
    const len = spec.shape.nose - spec.shape.tail;
    this.shield = new THREE.Mesh(new THREE.SphereGeometry(1, 24, 16), shieldMaterial());
    this.shield.scale.set(spec.shape.width * 0.85, 1.05, len * 0.6);
    this.shield.position.set(0, 0.7, (spec.shape.nose + spec.shape.tail) / 2);
    this.shield.visible = false;
    this.shield.renderOrder = 3;
    this.object.add(this.shield);
  }

  /** Pasang / ganti / lepas papan nama di atas mobil (name = null → lepas). */
  setNameTag(name, number = '', color = '#22d3ee') {
    const key = name ? `${name}|${number}|${color}` : null;
    if (key === this.nameTagKey) return;
    if (this.nameTag) {
      this.nameTag.material.map?.dispose();
      this.nameTag.material.dispose();
      this.nameTag.removeFromParent();
      this.nameTag = null;
    }
    this.nameTagKey = key;
    if (!name) return;
    const tag = new THREE.Sprite(
      new THREE.SpriteMaterial({ map: nameTagTexture(name, number, color), transparent: true, depthWrite: false, fog: true }),
    );
    tag.scale.set(3.2, 0.8, 1);
    tag.position.set(0, 2.45, 0);
    tag.renderOrder = 2;
    this.object.add(tag);
    this.nameTag = tag;
  }

  place(track, s, lateral = 0) {
    placeOnTrack(this.state, track.path, s, lateral);
    this.pitch = this.squat = this.bounce = this.bounceVel = 0;
    this.lastForward = 0;
    this.syncVisual(0);
  }

  /** Tempatkan di grid & kosongkan nitro/efek (awal balapan). */
  resetForRace(track, s, lateral) {
    resetVehicleExtras(this.state);
    this.place(track, s, lateral);
  }

  step(input, track, dt) {
    this.braking = input.brake > 0 && this.state.forwardSpeed > 0.5;
    stepVehicle(this.state, input, this.phys, track.path, dt);
  }

  get speedKmh() {
    return this.state.forwardSpeed * 3.6;
  }

  /** Titik knalpot dalam koordinat dunia (untuk api nitro). */
  exhaustWorld(i, out) {
    return out.copy(this.model.exhausts[i]).applyMatrix4(this.object.matrixWorld);
  }

  /** Perbarui model 3D dari state fisika (dipanggil sekali per frame render). */
  syncVisual(dt) {
    const st = this.state;
    const m = this.model;
    const k = dt > 0 ? 1 - Math.exp(-10 * dt) : 1;
    this.time += dt;

    // Pitch: mengikuti arah gerak vertikal (ramp/tanjakan/lompatan)
    const horiz = Math.max(6, Math.abs(st.forwardSpeed));
    const targetPitch = Math.max(-0.4, Math.min(0.4, -Math.atan2(st.vy, horiz)));
    this.pitch += (targetPitch - this.pitch) * k;

    // Squat/dive dari percepatan longitudinal
    if (dt > 0) {
      const accel = Math.max(-60, Math.min(60, (st.forwardSpeed - this.lastForward) / dt));
      this.lastForward = st.forwardSpeed;
      const target = Math.max(-0.05, Math.min(0.05, -accel * 0.0022));
      this.squat += (target - this.squat) * (1 - Math.exp(-6 * dt));
    }

    // Pegas suspensi saat mendarat — disub-langkah agar stabil walau FPS rendah
    if (st.landing > 0) {
      this.bounceVel -= Math.min(st.landing, 12) * 0.12;
    }
    if (dt > 0) {
      const vdt = Math.min(dt, 0.05);
      const n = Math.ceil(vdt / (1 / 120));
      const h = vdt / n;
      for (let i = 0; i < n; i++) {
        this.bounceVel += (-this.bounce * 180 - this.bounceVel * 14) * h;
        this.bounce += this.bounceVel * h;
      }
      this.bounce = Math.max(-0.25, Math.min(0.25, this.bounce));
    }

    this.object.position.set(st.x, st.y, st.z);
    this.object.rotation.set(this.pitch, st.heading, 0);

    const speedK = Math.min(1, Math.abs(st.forwardSpeed) / 30);
    m.body.rotation.z = -st.steer * speedK * 0.045 + (st.drifting ? -Math.sign(st.lateralSpeed) * 0.02 : 0);
    m.body.rotation.x = this.squat;
    m.body.position.y = this.bounce;

    const spin = st.odometer / m.wheelRadius;
    for (const w of m.wheels) w.rotation.x = spin;
    for (const p of m.frontPivots) p.rotation.y = -st.steer * 0.42;

    m.tailMat.emissiveIntensity = this.braking ? 4 : 1.2;
    m.glow.material.opacity = st.onGround ? (st.boosting ? 0.95 : 0.55) : 0.25;

    // Perisai: berkedip saat hampir habis
    const sh = st.fx.shield;
    this.shield.visible = sh > 0 && (sh > 1.2 || Math.sin(this.time * 30) > -0.3);
    if (this.shield.visible) {
      const u = this.shield.material.uniforms;
      u.uTime.value = this.time;
      u.uFade.value = Math.min(1, sh * 2);
    }
  }

  dispose() {
    const mats = new Set();
    this.object.traverse((o) => {
      // Geometri Sprite dipakai bersama oleh semua sprite Three.js → jangan dibuang
      if (o.geometry && !o.isSprite) o.geometry.dispose();
      if (o.material) (Array.isArray(o.material) ? o.material : [o.material]).forEach((mm) => mats.add(mm));
    });
    for (const mm of mats) {
      if (mm.map) mm.map.dispose();
      mm.dispose();
    }
    this.object.removeFromParent();
  }
}
