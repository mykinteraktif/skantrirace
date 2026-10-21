import * as THREE from 'three';

/**
 * Particles — sistem partikel ringan (satu draw call) untuk api nitro, asap drift,
 * dan percikan saat mengambil item. Kapasitas tetap, partikel lama didaur ulang.
 */
export class Particles {
  constructor(parent, { capacity = 900, additive = true } = {}) {
    this.cap = capacity;
    this.count = 0;
    this.pos = new Float32Array(capacity * 3);
    this.vel = new Float32Array(capacity * 3);
    this.col = new Float32Array(capacity * 3);
    this.alpha = new Float32Array(capacity);
    this.size = new Float32Array(capacity);
    this.life = new Float32Array(capacity);
    this.maxLife = new Float32Array(capacity);
    this.grow = new Float32Array(capacity);
    this.next = 0;

    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('color', new THREE.BufferAttribute(this.col, 3).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('alpha', new THREE.BufferAttribute(this.alpha, 1).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('size', new THREE.BufferAttribute(this.size, 1).setUsage(THREE.DynamicDrawUsage));
    g.setDrawRange(0, 0);
    this.geometry = g;
    this.material = new THREE.ShaderMaterial({
      uniforms: { uScale: { value: 400 } },
      vertexShader: /* glsl */ `
        attribute float alpha; attribute float size; attribute vec3 color;
        uniform float uScale; varying float vA; varying vec3 vC;
        void main() {
          vA = alpha; vC = color;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * uScale / max(1.0, -mv.z);
          gl_Position = projectionMatrix * mv;
        }`,
      fragmentShader: /* glsl */ `
        varying float vA; varying vec3 vC;
        void main() {
          vec2 d = gl_PointCoord - 0.5;
          float r = length(d) * 2.0;
          float a = smoothstep(1.0, 0.0, r) * vA;
          if (a < 0.01) discard;
          gl_FragColor = vec4(vC, a);
        }`,
      transparent: true,
      depthWrite: false,
      blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
      toneMapped: false,
    });
    this.points = new THREE.Points(g, this.material);
    this.points.frustumCulled = false;
    this.points.renderOrder = 4;
    parent.add(this.points);
  }

  /** Skala ukuran titik mengikuti tinggi layar. */
  setViewportHeight(h) {
    this.material.uniforms.uScale.value = h * 0.6;
  }

  spawn(x, y, z, vx, vy, vz, life, size, r, g, b, grow = 1.5) {
    const i = this.next;
    this.next = (this.next + 1) % this.cap;
    if (this.count < this.cap) this.count++;
    const k = i * 3;
    this.pos[k] = x;
    this.pos[k + 1] = y;
    this.pos[k + 2] = z;
    this.vel[k] = vx;
    this.vel[k + 1] = vy;
    this.vel[k + 2] = vz;
    this.col[k] = r;
    this.col[k + 1] = g;
    this.col[k + 2] = b;
    this.life[i] = life;
    this.maxLife[i] = life;
    this.size[i] = size;
    this.grow[i] = grow;
    this.alpha[i] = 1;
  }

  update(dt) {
    const n = this.count;
    for (let i = 0; i < n; i++) {
      if (this.life[i] <= 0) {
        this.alpha[i] = 0;
        continue;
      }
      this.life[i] -= dt;
      const k = i * 3;
      this.pos[k] += this.vel[k] * dt;
      this.pos[k + 1] += this.vel[k + 1] * dt;
      this.pos[k + 2] += this.vel[k + 2] * dt;
      const damp = Math.exp(-3 * dt);
      this.vel[k] *= damp;
      this.vel[k + 1] *= damp;
      this.vel[k + 2] *= damp;
      const t = Math.max(0, this.life[i] / this.maxLife[i]);
      this.alpha[i] = t;
      this.size[i] += this.grow[i] * dt;
    }
    this.geometry.setDrawRange(0, n);
    const a = this.geometry.attributes;
    a.position.needsUpdate = true;
    a.alpha.needsUpdate = true;
    a.size.needsUpdate = true;
    a.color.needsUpdate = true;
  }

  clear() {
    this.life.fill(0);
    this.alpha.fill(0);
  }

  dispose() {
    this.geometry.dispose();
    this.material.dispose();
    this.points.removeFromParent();
  }
}
