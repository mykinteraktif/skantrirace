import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { seededRandom, stripeTexture, wallTexture } from '../textures.js';
import { makeInstanced, clearance, scaled, addChevrons } from './common.js';

/**
 * Dekorasi Trek Mondoroko (tema pantai tropis): palem, batu, rumah pesisir,
 * payung pantai, rambu chevron, mercusuar, dan pulau-pulau di kejauhan.
 */
function palmGeometries() {
  const trunk = new THREE.CylinderGeometry(0.2, 0.34, 8, 7, 8);
  trunk.translate(0, 4, 0);
  const pos = trunk.getAttribute('position');
  for (let i = 0; i < pos.count; i++) {
    const t = pos.getY(i) / 8;
    pos.setX(i, pos.getX(i) + 0.9 * t * t); // batang melengkung
  }
  trunk.computeVertexNormals();

  const leaves = [];
  for (let k = 0; k < 8; k++) {
    const leaf = new THREE.PlaneGeometry(1.0, 4.2, 1, 6);
    const lp = leaf.getAttribute('position');
    for (let i = 0; i < lp.count; i++) {
      const w = lp.getX(i);
      const y = lp.getY(i) + 2.1; // 0..4.2
      const t = y / 4.2;
      const out = y;
      const h = 0.5 * y - 0.13 * y * y;
      lp.setXYZ(i, out, h, w * (1 - 0.7 * t));
    }
    leaf.rotateY((k / 8) * Math.PI * 2 + (k % 2) * 0.2);
    leaf.rotateZ(0);
    leaf.translate(0.9, 7.9, 0);
    leaves.push(leaf);
  }
  const crown = mergeGeometries(leaves);
  crown.computeVertexNormals();
  leaves.forEach((g) => g.dispose());
  return { trunk, crown };
}

export function buildTropis(track) {
  const path = track.path;
  const group = new THREE.Group();
  group.name = 'scenery';
  const rand = seededRandom(2026);
  const deco = { palms: scaled(track, 120), rocks: scaled(track, 70), houses: scaled(track, 22), lighthouse: true };
  const cx = track.islandCenter.x;
  const cz = track.islandCenter.y;
  const R = track.islandRadius;

  const randomOnIsland = (minClear, maxDist = R - 10) => {
    for (let tries = 0; tries < 60; tries++) {
      const a = rand() * Math.PI * 2;
      const r = Math.sqrt(rand()) * maxDist;
      const x = cx + Math.cos(a) * r;
      const z = cz + Math.sin(a) * r;
      if (clearance(path, x, z) > minClear) return { x, z };
    }
    return null;
  };

  // --- Pohon palem: sebagian di tepi lintasan (memberi kesan kecepatan), sebagian acak
  const palms = [];
  const roadside = Math.floor(deco.palms * 0.6);
  for (let i = 0; i < roadside; i++) {
    const f = path.frameAt(rand() * path.length);
    const side = rand() < 0.5 ? -1 : 1;
    const lat = side * (path.wallOffset + 3 + rand() * 10);
    const x = f.x + f.sx * lat;
    const z = f.z + f.sz * lat;
    if (clearance(path, x, z) < 2.5) continue;
    palms.push({ x, z, ry: rand() * Math.PI * 2, s: 0.8 + rand() * 0.5 });
  }
  while (palms.length < deco.palms) {
    const p = randomOnIsland(4);
    if (!p) break;
    palms.push({ ...p, ry: rand() * Math.PI * 2, s: 0.75 + rand() * 0.6 });
  }
  const { trunk, crown } = palmGeometries();
  group.add(makeInstanced(trunk, new THREE.MeshStandardMaterial({ color: 0x8a6a45, roughness: 0.95 }), palms));
  const leafColors = palms.map(() => ['#2f8f3a', '#3a9e45', '#28803a', '#4caf50'][Math.floor(rand() * 4)]);
  group.add(
    makeInstanced(crown, new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.8, side: THREE.DoubleSide }), palms, {
      colors: leafColors,
    }),
  );

  // --- Batu: acak + di garis pantai
  const rocks = [];
  for (let i = 0; i < deco.rocks; i++) {
    let x, z;
    if (i % 3 === 0) {
      const a = rand() * Math.PI * 2;
      const r = R - 4 + rand() * 8;
      x = cx + Math.cos(a) * r;
      z = cz + Math.sin(a) * r;
      if (clearance(path, x, z) < 6) continue;
    } else {
      const p = randomOnIsland(5);
      if (!p) continue;
      ({ x, z } = p);
    }
    const s = 0.8 + rand() * 2.6;
    rocks.push({ x, z, y: -0.2, ry: rand() * 6, rx: rand() * 0.4, sx: s * (0.8 + rand() * 0.6), sy: s * (0.5 + rand() * 0.4), sz: s });
  }
  const rockGeo = new THREE.IcosahedronGeometry(1, 0);
  const rockColors = rocks.map(() => ['#8d8577', '#9c9384', '#7a7366', '#a8a090'][Math.floor(rand() * 4)]);
  group.add(
    makeInstanced(rockGeo, new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 1, flatShading: true }), rocks, {
      colors: rockColors,
    }),
  );

  // --- Rumah pesisir: dua kelompok "desa"
  const houses = [];
  for (let v = 0; v < 2 && houses.length < deco.houses; v++) {
    const center = randomOnIsland(45, R - 40);
    if (!center) continue;
    for (let k = 0; k < deco.houses / 2; k++) {
      const a = rand() * Math.PI * 2;
      const r = 6 + rand() * 32;
      const x = center.x + Math.cos(a) * r;
      const z = center.z + Math.sin(a) * r;
      if (clearance(path, x, z) < 16) continue;
      if (houses.some((h) => Math.hypot(h.x - x, h.z - z) < 11)) continue;
      houses.push({ x, z, ry: Math.round(rand() * 4) * (Math.PI / 2) + (rand() - 0.5) * 0.3, sx: 6 + rand() * 3, sy: 4 + rand() * 3, sz: 6 + rand() * 3 });
    }
  }
  const houseGeo = new THREE.BoxGeometry(1, 1, 1);
  houseGeo.translate(0, 0.5, 0);
  const roofGeo = new THREE.ConeGeometry(0.8, 0.5, 4);
  roofGeo.rotateY(Math.PI / 4);
  roofGeo.translate(0, 1.25, 0);
  const wallColors = houses.map(() => ['#f5f0e6', '#f3e3c3', '#d6e8f2', '#f6d2bd'][Math.floor(rand() * 4)]);
  const roofColors = houses.map(() => ['#c4622d', '#b5532a', '#2f6fa8', '#d9733b'][Math.floor(rand() * 4)]);
  group.add(
    makeInstanced(houseGeo, new THREE.MeshStandardMaterial({ map: wallTexture(), roughness: 0.85 }), houses, { colors: wallColors }),
  );
  group.add(makeInstanced(roofGeo, new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.7, flatShading: true }), houses, { colors: roofColors }));

  // --- Payung pantai di dekat garis pantai
  const umbrellas = [];
  for (let i = 0; i < 26; i++) {
    const a = rand() * Math.PI * 2;
    const r = R - 18 + rand() * 12;
    const x = cx + Math.cos(a) * r;
    const z = cz + Math.sin(a) * r;
    if (clearance(path, x, z) < 6) continue;
    umbrellas.push({ x, z, rz: (rand() - 0.5) * 0.2, s: 0.9 + rand() * 0.3 });
  }
  const poleGeo = new THREE.CylinderGeometry(0.05, 0.05, 2.4, 5);
  poleGeo.translate(0, 1.2, 0);
  const canopyGeo = new THREE.ConeGeometry(1.4, 0.6, 10);
  canopyGeo.translate(0, 2.5, 0);
  group.add(makeInstanced(poleGeo, new THREE.MeshStandardMaterial({ color: 0xe5e7eb }), umbrellas, { shadow: false }));
  group.add(
    makeInstanced(canopyGeo, new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.7 }), umbrellas, {
      colors: umbrellas.map(() => ['#ef4444', '#facc15', '#22d3ee', '#f97316', '#3b82f6'][Math.floor(rand() * 5)]),
    }),
  );

  const signs = addChevrons(track, group);

  // --- Mercusuar (landmark)
  if (deco.lighthouse) {
    let best = null;
    for (let a = 0; a < Math.PI * 2; a += 0.15) {
      const x = cx + Math.cos(a) * (R - 22);
      const z = cz + Math.sin(a) * (R - 22);
      const c = clearance(path, x, z);
      if (!best || c > best.c) best = { x, z, c };
    }
    const lh = new THREE.Group();
    const stripes = stripeTexture('#e02634', '#f8f8f8', 6);
    const tower = new THREE.Mesh(new THREE.CylinderGeometry(1.5, 2.4, 20, 18), new THREE.MeshStandardMaterial({ map: stripes, roughness: 0.6 }));
    tower.position.y = 10;
    const gallery = new THREE.Mesh(new THREE.CylinderGeometry(2.3, 2.3, 0.5, 18), new THREE.MeshStandardMaterial({ color: 0x1f2937 }));
    gallery.position.y = 20.2;
    const lamp = new THREE.Mesh(
      new THREE.CylinderGeometry(1.1, 1.1, 2, 12),
      new THREE.MeshStandardMaterial({ color: 0xfff3b0, emissive: 0xffd34d, emissiveIntensity: 1.6 }),
    );
    lamp.position.y = 21.4;
    const roof = new THREE.Mesh(new THREE.ConeGeometry(1.6, 1.8, 18), new THREE.MeshStandardMaterial({ color: 0xc81e2b, roughness: 0.5 }));
    roof.position.y = 23.3;
    const base = new THREE.Mesh(new THREE.IcosahedronGeometry(6, 1), new THREE.MeshStandardMaterial({ color: 0x8d8577, flatShading: true }));
    base.scale.set(1, 0.35, 1);
    for (const m of [tower, gallery, lamp, roof, base]) {
      m.castShadow = true;
      lh.add(m);
    }
    lh.position.set(best.x, 0, best.z);
    group.add(lh);
  }

  // --- Pulau-pulau jauh sebagai latar belakang
  const islands = [];
  for (let i = 0; i < 9; i++) {
    const a = (i / 9) * Math.PI * 2 + rand() * 0.4;
    const r = R + 320 + rand() * 300;
    const w = 150 + rand() * 170;
    islands.push({ x: cx + Math.cos(a) * r, z: cz + Math.sin(a) * r, y: -1, ry: rand() * 6, sx: w, sy: 22 + rand() * 38, sz: w * (0.6 + rand() * 0.5) });
  }
  const hillGeo = new THREE.SphereGeometry(1, 9, 5, 0, Math.PI * 2, 0, Math.PI / 2); // kubah rendah
    group.add(
    makeInstanced(hillGeo, new THREE.MeshStandardMaterial({ color: 0x4f7d4a, roughness: 1, flatShading: true }), islands, { shadow: false }),
  );

  track.group.add(group);
  track.sceneryCounts = { palms: palms.length, rocks: rocks.length, houses: houses.length, signs, umbrellas: umbrellas.length };
}
