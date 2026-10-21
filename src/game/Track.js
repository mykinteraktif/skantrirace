import * as THREE from 'three';
import { TrackPath } from './TrackPath.js';
import { gridSlot } from './RaceManager.js';
import { buildScenery } from './scenery/index.js';
import {
  roadTexture,
  curbTexture,
  barrierTexture,
  guardrailTexture,
  concreteBarrierTexture,
  checkerTexture,
  bannerTexture,
  rampTexture,
  sandTexture,
  grassTexture,
  sidewalkTexture,
  cityGroundTexture,
  waterTexture,
} from './textures.js';

const hexStr = (n) => '#' + new THREE.Color(n).getHexString();

/**
 * Track — membangun seluruh objek 3D sebuah lintasan dari definisinya:
 * jalan, curb, pembatas, tanggul/jembatan, garis start, gerbang, ramp, tanah, dan dekorasi tema.
 * Semua sumber daya GPU dibuang lewat dispose() agar tidak bocor saat ganti lintasan.
 *
 * quality.decor (0..1) mengatur kepadatan dekorasi (pengaturan grafis).
 */
export class Track {
  constructor(def, quality = { decor: 1 }) {
    this.def = def;
    this.theme = def.theme;
    this.kind = def.theme.kind;
    this.quality = quality;
    this.path = new TrackPath(def);
    this.group = new THREE.Group();
    this.group.name = `track:${def.id}`;
    this.animated = []; // objek dengan update(dt, time)
    this.bridge = this.#bridgeRange();

    this.#buildRoad();
    this.#buildWalls();
    this.#buildVerge();
    if (this.bridge) this.#buildBridge();
    this.#buildStart();
    this.#buildRamps();
    this.#buildGround();
    buildScenery(this);
  }

  /** Indeks sampel jembatan [i0, i1] atau null. */
  #bridgeRange() {
    const b = this.def.bridge;
    if (!b) return null;
    const p = this.path;
    return { i0: p.indexAt(b.from * p.length), i1: p.indexAt(b.to * p.length), from: b.from, to: b.to };
  }

  inBridge(i) {
    const b = this.bridge;
    return !!b && i >= b.i0 && i <= b.i1;
  }

  /**
   * Pita (ribbon) mengikuti lintasan antara tepi A dan tepi B.
   * a/b: angka (offset lateral) atau fungsi (i) → { off, y } dengan y absolut.
   * yA/yB: tinggi relatif terhadap jalan (hanya bila a/b berupa angka).
   * vScale = panjang (m) untuk satu ulangan tekstur. range = [i0, i1] untuk sebagian lintasan.
   */
  ribbon(a, b, yA, yB, vScale, range = null) {
    const p = this.path;
    const n = p.count;
    const i0 = range ? range[0] : 0;
    const rows = range ? range[1] - range[0] + 1 : n + 1;
    const pos = new Float32Array(rows * 2 * 3);
    const uv = new Float32Array(rows * 2 * 2);
    const edge = (spec, yRel, i, out) => {
      if (typeof spec === 'function') return spec(i, out);
      out.off = spec;
      out.y = p.y[i] + yRel;
      return out;
    };
    const ea = {}, eb = {};
    let sDist = p.s[i0 % n];
    for (let r = 0; r < rows; r++) {
      const raw = i0 + r;
      const i = raw % n;
      if (r > 0) sDist += p.segLen[(raw - 1) % n]; // jarak kumulatif → tekstur tidak "terlipat" di garis start
      edge(a, yA, i, ea);
      edge(b, yB, i, eb);
      const k = r * 6;
      pos[k] = p.x[i] + p.sx[i] * ea.off;
      pos[k + 1] = ea.y;
      pos[k + 2] = p.z[i] + p.sz[i] * ea.off;
      pos[k + 3] = p.x[i] + p.sx[i] * eb.off;
      pos[k + 4] = eb.y;
      pos[k + 5] = p.z[i] + p.sz[i] * eb.off;
      const u = r * 4;
      uv[u] = 0;
      uv[u + 1] = sDist / vScale;
      uv[u + 2] = 1;
      uv[u + 3] = sDist / vScale;
    }
    const index = [];
    for (let r = 0; r < rows - 1; r++) {
      const q = r * 2;
      index.push(q, q + 1, q + 2, q + 1, q + 3, q + 2);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
    g.setIndex(index);
    g.computeVertexNormals();
    return g;
  }

  // ------------------------------------------------------------------ jalan
  #buildRoad() {
    const p = this.path;
    const hw = p.halfWidth;

    const road = new THREE.Mesh(
      this.ribbon(-hw, hw, 0, 0, 14),
      new THREE.MeshStandardMaterial({ map: roadTexture(), roughness: 0.92, metalness: 0.0 }),
    );
    road.receiveShadow = true;
    road.name = 'road';
    this.group.add(road);

    const curbMat = new THREE.MeshStandardMaterial({ map: curbTexture(), roughness: 0.7 });
    for (const side of [-1, 1]) {
      const a = side * hw;
      const b = side * (hw + p.curbWidth);
      const geo = side < 0 ? this.ribbon(b, a, 0.04, 0.04, 4) : this.ribbon(a, b, 0.04, 0.04, 4);
      const curb = new THREE.Mesh(geo, curbMat);
      curb.receiveShadow = true;
      this.group.add(curb);
    }

    // Jalur sempit antara curb dan pembatas
    const innerMat = new THREE.MeshStandardMaterial({ color: this.theme.shoulder, roughness: 1 });
    for (const side of [-1, 1]) {
      const a = side * (hw + p.curbWidth);
      const b = side * (p.wallOffset + 0.02);
      const g = side < 0 ? this.ribbon(b, a, 0.02, 0.02, 10) : this.ribbon(a, b, 0.02, 0.02, 10);
      const m = new THREE.Mesh(g, innerMat);
      m.receiveShadow = true;
      this.group.add(m);
    }
  }

  // ------------------------------------------------------------------ pembatas
  #buildWalls() {
    const p = this.path;
    const off = p.wallOffset;
    const h = this.kind === 'gunung' ? 0.95 : 1.15;
    const thick = 0.5;
    let tex;
    if (this.kind === 'kota') tex = concreteBarrierTexture('#22d3ee');
    else if (this.kind === 'gunung') tex = guardrailTexture();
    else tex = barrierTexture(this.theme.barrierA, this.theme.barrierB);
    const mat = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.55, metalness: this.kind === 'gunung' ? 0.5 : 0, side: THREE.DoubleSide });
    const capMat = new THREE.MeshStandardMaterial({ color: this.kind === 'kota' ? 0x6b7280 : 0xdfe3e8, roughness: 0.6, side: THREE.DoubleSide });

    for (const side of [-1, 1]) {
      const inner = side * off;
      const outerOff = side * (off + thick);
      const face = new THREE.Mesh(this.ribbon(inner, inner, 0, h, 4), mat);
      // u tekstur pembatas berjalan vertikal → tukar UV
      const uvAttr = face.geometry.getAttribute('uv');
      for (let i = 0; i < uvAttr.count; i++) {
        const u = uvAttr.getX(i);
        const v = uvAttr.getY(i);
        uvAttr.setXY(i, v, u);
      }
      face.castShadow = true;
      face.receiveShadow = true;
      this.group.add(face);
      this.group.add(new THREE.Mesh(this.ribbon(outerOff, outerOff, 0, h, 4), capMat));
      this.group.add(new THREE.Mesh(this.ribbon(inner, outerOff, h, h, 4), capMat));
    }

    // Kota: strip neon di atas pembatas (kiri cyan, kanan merah muda)
    if (this.kind === 'kota') {
      const neon = this.theme.neon;
      [-1, 1].forEach((side, k) => {
        const m = new THREE.MeshBasicMaterial({ color: neon[k], toneMapped: false });
        const a = side * (off + 0.05), b = side * (off + 0.2);
        const g = side < 0 ? this.ribbon(b, a, h + 0.02, h + 0.02, 4) : this.ribbon(a, b, h + 0.02, h + 0.02, 4);
        this.group.add(new THREE.Mesh(g, m));
      });
    }
  }

  // ------------------------------------------------------------------ verge / tanggul
  /**
   * Bahu luar pembatas: rata di lintasan datar, menjadi tanggul miring bila jalan menanjak.
   * Bagian jembatan dilewati (di bawahnya ada sungai & tiang).
   */
  #buildVerge() {
    const p = this.path;
    const verge = { tropis: 9, kota: 7, gunung: 4, gurun: 5 }[this.kind] ?? 5;
    const base = p.wallOffset + 0.5;
    let tex;
    if (this.kind === 'kota') tex = sidewalkTexture();
    else if (this.kind === 'gurun') tex = sandTexture(hexStr(this.theme.shoulder));
    else tex = grassTexture(hexStr(this.theme.shoulder));
    const mat = new THREE.MeshStandardMaterial({ map: tex, roughness: 1, side: THREE.DoubleSide });
    const width = (i) => verge + Math.max(0, p.y[i]) * 1.8;
    const ranges = [];
    if (this.bridge) {
      ranges.push([this.bridge.i1, this.bridge.i0 + p.count]); // dari ujung jembatan memutar ke awal jembatan
    } else {
      ranges.push(null);
    }
    for (const range of ranges) {
      for (const side of [-1, 1]) {
        const top = (i, o) => ((o.off = side * base), (o.y = p.y[i] - 0.02), o);
        const bottom = (i, o) => ((o.off = side * (base + width(i))), (o.y = -0.03), o);
        const g = side < 0 ? this.ribbon(bottom, top, 0, 0, 10, range) : this.ribbon(top, bottom, 0, 0, 10, range);
        const uvAttr = g.getAttribute('uv');
        for (let i = 0; i < uvAttr.count; i++) uvAttr.setX(i, uvAttr.getX(i) * (verge / 10));
        const m = new THREE.Mesh(g, mat);
        m.receiveShadow = true;
        this.group.add(m);
      }
    }
  }

  // ------------------------------------------------------------------ jembatan
  #buildBridge() {
    const p = this.path;
    const { i0, i1 } = this.bridge;
    const range = [i0, i1];
    const off = p.wallOffset + 0.5;
    const depth = 1.1;
    const deckMat = new THREE.MeshStandardMaterial({ color: 0x8b9099, roughness: 0.8, side: THREE.DoubleSide });
    // Sisi & bawah dek
    for (const side of [-1, 1]) {
      const edge = side * off;
      this.group.add(new THREE.Mesh(this.ribbon(edge, edge, -depth, 0, 6, range), deckMat));
    }
    this.group.add(new THREE.Mesh(this.ribbon(off, -off, -depth, -depth, 6, range), deckMat));

    // Tiang penyangga & rangka baja merah di atas pembatas
    const pillarGeo = new THREE.BoxGeometry(1.4, 1, 1.4);
    pillarGeo.translate(0, 0.5, 0);
    const pillars = new THREE.InstancedMesh(pillarGeo, new THREE.MeshStandardMaterial({ color: 0x9ca3af, roughness: 0.85 }), 64);
    const trussMat = new THREE.MeshStandardMaterial({ color: 0xb91c1c, roughness: 0.5, metalness: 0.4 });
    const postGeo = new THREE.BoxGeometry(0.25, 3.2, 0.25);
    postGeo.translate(0, 1.6, 0);
    const posts = new THREE.InstancedMesh(postGeo, trussMat, 128);
    const m4 = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    const up = new THREE.Vector3(0, 1, 0);
    let np = 0, nq = 0;
    for (let i = i0 + 2; i <= i1 - 1; i += 4) {
      const y = p.y[i] - depth;
      for (const lat of [-off + 1, off - 1]) {
        if (np >= 64) break;
        m4.compose(new THREE.Vector3(p.x[i] + p.sx[i] * lat, 0, p.z[i] + p.sz[i] * lat), q.setFromAxisAngle(up, Math.atan2(p.tx[i], p.tz[i])), new THREE.Vector3(1, Math.max(0.1, y), 1));
        pillars.setMatrixAt(np++, m4);
      }
    }
    for (let i = i0; i <= i1; i += 2) {
      for (const lat of [-(off - 0.25), off - 0.25]) {
        if (nq >= 128) break;
        m4.compose(new THREE.Vector3(p.x[i] + p.sx[i] * lat, p.y[i] + 0.95, p.z[i] + p.sz[i] * lat), q.setFromAxisAngle(up, Math.atan2(p.tx[i], p.tz[i])), new THREE.Vector3(1, 1, 1));
        posts.setMatrixAt(nq++, m4);
      }
    }
    pillars.count = np;
    posts.count = nq;
    pillars.castShadow = posts.castShadow = true;
    this.group.add(pillars, posts);
    // Rel atas rangka
    for (const side of [-1, 1]) {
      const lat = side * (off - 0.25);
      const rail = this.ribbon(lat - 0.12, lat + 0.12, 4.1, 4.1, 6, range);
      this.group.add(new THREE.Mesh(rail, trussMat));
      this.group.add(new THREE.Mesh(this.ribbon(lat, lat, 3.9, 4.1, 6, range), trussMat));
    }

    // Sungai mengalir di bawah jembatan
    const mid = p.frameAt(((this.bridge.from + this.bridge.to) / 2) * p.length);
    const water = waterTexture(hexStr(this.theme.river ?? 0x2f80b4));
    water.repeat.set(2, 40);
    const river = new THREE.Mesh(
      new THREE.PlaneGeometry(26, 1400),
      new THREE.MeshStandardMaterial({ map: water, roughness: 0.15, metalness: 0.1 }),
    );
    river.rotation.order = 'YXZ';
    river.rotation.set(-Math.PI / 2, Math.atan2(mid.tx, mid.tz) + Math.PI / 2, 0); // tegak lurus jalan
    river.position.set(mid.x, 0.03, mid.z);
    river.receiveShadow = true;
    this.group.add(river);
    const bankMat = new THREE.MeshStandardMaterial({ map: sandTexture('#bfa77a'), roughness: 1 });
    for (const side of [-1, 1]) {
      const bank = new THREE.Mesh(new THREE.PlaneGeometry(5, 1400), bankMat);
      bank.rotation.copy(river.rotation);
      bank.position.set(mid.x + mid.tx * side * 15.5, 0.02, mid.z + mid.tz * side * 15.5);
      this.group.add(bank);
    }
    this.riverInfo = { x: mid.x, z: mid.z, dirX: mid.sx, dirZ: mid.sz, halfWidth: 18 };
    this.animated.push({ update: (dt) => (water.offset.y -= dt * 0.25) });
  }

  // ------------------------------------------------------------------ start
  #buildStart() {
    const p = this.path;
    const f = p.frameAt(0);
    const hw = p.halfWidth;

    const lineMat = new THREE.MeshStandardMaterial({
      map: checkerTexture(16, 2),
      roughness: 0.8,
      polygonOffset: true,
      polygonOffsetFactor: -2,
      polygonOffsetUnits: -2,
    });
    const line = new THREE.Mesh(new THREE.PlaneGeometry(hw * 2, 2.4), lineMat);
    line.rotation.order = 'YXZ';
    line.rotation.set(-Math.PI / 2, f.heading, 0);
    line.position.set(f.x, f.y + 0.01, f.z);
    line.receiveShadow = true;
    this.group.add(line);

    // Gerbang START
    const gate = new THREE.Group();
    gate.position.set(f.x, f.y, f.z);
    gate.rotation.y = f.heading;
    const span = p.wallOffset + 1.6;
    const pillarMat = new THREE.MeshStandardMaterial({ color: 0x1f2937, roughness: 0.4, metalness: 0.6 });
    const neonMat = new THREE.MeshStandardMaterial({ color: 0x0e7490, emissive: 0x22d3ee, emissiveIntensity: 2.2 });
    for (const sx of [-1, 1]) {
      const pillar = new THREE.Mesh(new THREE.BoxGeometry(1.4, 9, 1.4), pillarMat);
      pillar.position.set(sx * span, 4.5, 0);
      pillar.castShadow = true;
      gate.add(pillar);
      const neon = new THREE.Mesh(new THREE.BoxGeometry(0.18, 8.6, 0.18), neonMat);
      neon.position.set(sx * (span - 0.72), 4.5, -0.72);
      gate.add(neon);
    }
    const beam = new THREE.Mesh(new THREE.BoxGeometry(span * 2 + 1.4, 2.6, 1.0), pillarMat);
    beam.position.set(0, 8.4, 0);
    beam.castShadow = true;
    gate.add(beam);
    const front = new THREE.Mesh(
      new THREE.PlaneGeometry(span * 1.5, span * 1.5 * 0.25),
      new THREE.MeshBasicMaterial({ map: bannerTexture('START'), toneMapped: false }),
    );
    front.position.set(0, 8.4, -0.52);
    front.rotation.y = Math.PI; // menghadap mobil yang datang
    gate.add(front);
    const backBanner = new THREE.Mesh(
      new THREE.PlaneGeometry(span * 1.5, span * 1.5 * 0.25),
      new THREE.MeshBasicMaterial({ map: bannerTexture('SKANTRI RACE', 'CHAMPIONS RACING'), toneMapped: false }),
    );
    backBanner.position.set(0, 8.4, 0.52);
    gate.add(backBanner);
    this.group.add(gate);

    // Marka grid start (6 posisi)
    const gridMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.75 });
    for (let k = 0; k < 6; k++) {
      const slot = gridSlot(k);
      const g = p.frameAt(slot.mark);
      const mark = new THREE.Mesh(new THREE.PlaneGeometry(3.2, 0.3), gridMat);
      mark.rotation.order = 'YXZ';
      mark.rotation.set(-Math.PI / 2, g.heading, 0);
      mark.position.set(g.x + g.sx * slot.lateral, g.y + 0.02, g.z + g.sz * slot.lateral);
      this.group.add(mark);
    }
  }

  // ------------------------------------------------------------------ ramp
  #buildRamps() {
    const p = this.path;
    if (!p.ramps.length) return;
    const mat = new THREE.MeshStandardMaterial({ map: rampTexture(), roughness: 0.6, side: THREE.DoubleSide });
    const sideMat = new THREE.MeshStandardMaterial({ color: 0x2b2f36, roughness: 0.8, side: THREE.DoubleSide });
    for (const r of p.ramps) {
      const f = p.frameAt(r.s0);
      const hw = r.halfWidth, L = r.length, H = r.height;
      // Baji: bidang miring + sisi belakang + dua sisi segitiga (lokal: x lateral, z maju).
      // Lokal +X = kiri pengemudi, maka u tekstur dibalik agar panah tidak cermin.
      const slope = new THREE.BufferGeometry();
      slope.setAttribute('position', new THREE.Float32BufferAttribute([
        -hw, 0, 0, -hw, H, L, hw, 0, 0,
        hw, 0, 0, -hw, H, L, hw, H, L,
      ], 3));
      slope.setAttribute('uv', new THREE.Float32BufferAttribute([1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1], 2));
      slope.computeVertexNormals();
      const sides = new THREE.BufferGeometry();
      sides.setAttribute('position', new THREE.Float32BufferAttribute([
        -hw, 0, L, -hw, H, L, hw, 0, L,
        hw, 0, L, -hw, H, L, hw, H, L,
        -hw, 0, 0, -hw, H, L, -hw, 0, L,
        hw, 0, 0, hw, 0, L, hw, H, L,
      ], 3));
      sides.computeVertexNormals();
      const ramp = new THREE.Group();
      for (const m of [new THREE.Mesh(slope, mat), new THREE.Mesh(sides, sideMat)]) {
        m.castShadow = true;
        m.receiveShadow = true;
        ramp.add(m);
      }
      // Lokal +X pada grup = arah sx·(-1) karena rotasi heading; geser sesuai lateral
      ramp.position.set(f.x + f.sx * r.lateral, f.y + 0.01, f.z + f.sz * r.lateral);
      ramp.rotation.y = f.heading;
      ramp.name = 'ramp';
      this.group.add(ramp);
    }
  }

  // ------------------------------------------------------------------ tanah & latar
  #buildGround() {
    const p = this.path;
    const b = p.bounds;
    let maxR = 0;
    for (let i = 0; i < p.count; i++) maxR = Math.max(maxR, Math.hypot(p.x[i] - b.cx, p.z[i] - b.cz));
    this.center = new THREE.Vector2(b.cx, b.cz);
    this.radius = maxR;

    if (this.kind === 'tropis') {
      this.islandCenter = this.center;
      this.islandRadius = maxR + 90;
      const sand = sandTexture(hexStr(this.theme.ground));
      sand.repeat.set(this.islandRadius / 8, this.islandRadius / 8);
      const island = new THREE.Mesh(new THREE.CircleGeometry(this.islandRadius, 96), new THREE.MeshStandardMaterial({ map: sand, roughness: 1 }));
      island.rotation.x = -Math.PI / 2;
      island.position.set(b.cx, -0.06, b.cz);
      island.receiveShadow = true;
      this.group.add(island);
      const foam = new THREE.Mesh(
        new THREE.RingGeometry(this.islandRadius - 1, this.islandRadius + 7, 96),
        new THREE.MeshBasicMaterial({ color: 0xf1fbff, transparent: true, opacity: 0.55, depthWrite: false }),
      );
      foam.rotation.x = -Math.PI / 2;
      foam.position.set(b.cx, -0.35, b.cz);
      this.group.add(foam);
      this.animated.push({
        update: (dt, t) => {
          foam.material.opacity = 0.4 + Math.sin(t * 1.3) * 0.15;
          foam.scale.setScalar(1 + Math.sin(t * 0.9) * 0.004);
        },
      });
      const sea = new THREE.Mesh(new THREE.PlaneGeometry(6000, 6000), new THREE.MeshStandardMaterial({ color: this.theme.sea, roughness: 0.12, metalness: 0.05 }));
      sea.rotation.x = -Math.PI / 2;
      sea.position.set(b.cx, -0.6, b.cz);
      this.group.add(sea);
      return;
    }

    let tex;
    let repeat = 60;
    if (this.kind === 'kota') {
      tex = cityGroundTexture();
      repeat = 50;
    } else if (this.kind === 'gurun') tex = sandTexture(hexStr(this.theme.ground));
    else tex = grassTexture(hexStr(this.theme.ground));
    if (this.kind !== 'kota') repeat = 3000 / 8;
    tex.repeat.set(repeat, repeat);
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(3000, 3000), new THREE.MeshStandardMaterial({ map: tex, roughness: 1 }));
    ground.rotation.x = -Math.PI / 2;
    ground.position.set(b.cx, -0.06, b.cz);
    ground.receiveShadow = true;
    this.group.add(ground);
  }

  update(dt, time) {
    for (const a of this.animated) a.update(dt, time);
  }

  /** Lepaskan semua geometri, material, dan tekstur dari GPU. */
  dispose() {
    const mats = new Set();
    this.group.traverse((o) => {
      if (o.geometry && !o.isSprite) o.geometry.dispose();
      if (o.material) (Array.isArray(o.material) ? o.material : [o.material]).forEach((m) => mats.add(m));
    });
    for (const m of mats) {
      for (const key of Object.keys(m)) {
        const v = m[key];
        if (v && v.isTexture) v.dispose();
      }
      if (m.uniforms) for (const u of Object.values(m.uniforms)) if (u.value && u.value.isTexture) u.value.dispose();
      m.dispose();
    }
    this.group.removeFromParent();
    this.animated.length = 0;
  }
}
