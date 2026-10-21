import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { seededRandom } from '../textures.js';
import { makeInstanced, clearance, scaled, addChevrons, randomAround, riverDistance, roadside } from './common.js';

/**
 * Dekorasi Pegunungan: hutan pinus, tebing batu raksasa di tepi lintasan,
 * bongkahan batu, dan barisan gunung bersalju di kejauhan.
 * (Jembatan & sungai dibangun di Track.js karena menjadi bagian dari jalan.)
 */
function pineGeometry() {
  const parts = [];
  const trunk = new THREE.CylinderGeometry(0.18, 0.28, 2.2, 6);
  trunk.translate(0, 1.1, 0);
  parts.push(trunk.toNonIndexed());
  for (let i = 0; i < 3; i++) {
    const c = new THREE.ConeGeometry(2.2 - i * 0.55, 3.2 - i * 0.4, 8);
    c.translate(0, 3 + i * 1.7, 0);
    parts.push(c.toNonIndexed());
  }
  // Warna per vertex: batang cokelat, daun hijau tua
  const colored = parts.map((g, k) => {
    const n = g.getAttribute('position').count;
    const col = new Float32Array(n * 3);
    const c = new THREE.Color(k === 0 ? 0x5b4330 : k === 3 ? 0x2f6b3a : 0x245a31);
    for (let i = 0; i < n; i++) col.set([c.r, c.g, c.b], i * 3);
    g.setAttribute('color', new THREE.BufferAttribute(col, 3));
    g.deleteAttribute('uv');
    return g;
  });
  const merged = mergeGeometries(colored, false);
  colored.forEach((g) => g.dispose());
  trunk.dispose();
  return merged;
}

export function buildGunung(track) {
  const path = track.path;
  const group = new THREE.Group();
  group.name = 'scenery-gunung';
  const rand = seededRandom(3676); // 3.676 m — ketinggian Semeru
  const b = path.bounds;
  const awayFromRiver = (x, z) => riverDistance(track, x, z) > 20;

  // --- Hutan pinus: sebagian rapat di tepi jalan, sebagian tersebar
  const pines = [];
  for (let i = 0; i < scaled(track, 120); i++) {
    const p = roadside(track, rand, 4, 22);
    if (clearance(path, p.x, p.z) < 3.5 || !awayFromRiver(p.x, p.z)) continue;
    const near = path.project(p.x, p.z, -1);
    // Di lereng tanggul, pohon diletakkan di permukaan tanah (y=0) agar tidak melayang
    pines.push({ x: p.x, z: p.z, y: near.y > 1 ? 0 : 0, ry: rand() * 6, s: 0.8 + rand() * 0.9 });
  }
  for (let i = 0; i < scaled(track, 240); i++) {
    const p = randomAround(track, rand, 8, 260, awayFromRiver);
    if (p) pines.push({ x: p.x, z: p.z, ry: rand() * 6, s: 0.9 + rand() * 1.1 });
  }
  group.add(makeInstanced(pineGeometry(), new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.9, flatShading: true }), pines));

  // --- Tebing batu raksasa di sisi luar beberapa tikungan
  const cliffs = [];
  for (let s = 20; s < path.length; s += 70) {
    const f = path.frameAt(s);
    const k = path.curvature[path.indexAt(s)];
    const side = k !== 0 ? -Math.sign(k) : rand() < 0.5 ? -1 : 1;
    const lat = side * (path.wallOffset + 22 + rand() * 18);
    const x = f.x + f.sx * lat, z = f.z + f.sz * lat;
    const w = 14 + rand() * 18;
    if (clearance(path, x, z) < w * 0.75 + 4 || !awayFromRiver(x, z)) continue;
    cliffs.push({ x, z, y: -2, sx: w, sy: 16 + rand() * 26, sz: w * (0.7 + rand() * 0.5), ry: rand() * 6, rx: (rand() - 0.5) * 0.2 });
  }
  const cliffGeo = new THREE.DodecahedronGeometry(1, 0);
  cliffGeo.translate(0, 0.6, 0);
  group.add(
    makeInstanced(cliffGeo, new THREE.MeshStandardMaterial({ color: 0xffffff, flatShading: true, roughness: 1 }), cliffs, {
      colors: cliffs.map(() => ['#7c7468', '#8a8174', '#6f685e', '#958b7c'][Math.floor(rand() * 4)]),
    }),
  );

  // --- Bongkahan batu kecil
  const rocks = [];
  for (let i = 0; i < scaled(track, 90); i++) {
    const p = randomAround(track, rand, 4, 200, awayFromRiver);
    if (!p) continue;
    const s = 0.8 + rand() * 2.4;
    rocks.push({ x: p.x, z: p.z, y: -0.2, sx: s * 1.2, sy: s * 0.7, sz: s, ry: rand() * 6 });
  }
  group.add(
    makeInstanced(new THREE.IcosahedronGeometry(1, 0), new THREE.MeshStandardMaterial({ color: 0xffffff, flatShading: true }), rocks, {
      colors: rocks.map(() => ['#8d8577', '#7a7366', '#9c9384'][Math.floor(rand() * 3)]),
    }),
  );

  addChevrons(track, group);

  // --- Barisan gunung bersalju di kejauhan
  const mountains = [];
  const caps = [];
  for (let i = 0; i < 16; i++) {
    const a = (i / 16) * Math.PI * 2 + rand() * 0.3;
    const r = track.radius + 380 + rand() * 300;
    const radius = 140 + rand() * 170;
    const h = 150 + rand() * 170;
    const x = b.cx + Math.cos(a) * r, z = b.cz + Math.sin(a) * r;
    mountains.push({ x, z, sx: radius, sy: h, sz: radius * (0.8 + rand() * 0.4), ry: rand() * 6 });
    caps.push({ x, z, y: h * 0.66, sx: radius * 0.345, sy: h * 0.345, sz: radius * 0.345 * (0.8 + rand() * 0.3), ry: rand() * 6 });
  }
  const mGeo = new THREE.ConeGeometry(1, 1, 9, 3);
  mGeo.translate(0, 0.5, 0);
  group.add(makeInstanced(mGeo, new THREE.MeshStandardMaterial({ color: 0x5d6b58, flatShading: true, roughness: 1 }), mountains, { shadow: false }));
  const cGeo = new THREE.ConeGeometry(1, 1, 9, 1);
  cGeo.translate(0, 0.5, 0);
  group.add(makeInstanced(cGeo, new THREE.MeshStandardMaterial({ color: 0xf1f5f9, flatShading: true, roughness: 0.8 }), caps, { shadow: false }));

  track.group.add(group);
  track.sceneryCounts = { pines: pines.length, cliffs: cliffs.length, rocks: rocks.length, mountains: mountains.length };
}
