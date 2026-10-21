import * as THREE from 'three';
import { chevronTexture } from '../textures.js';

/**
 * Alat bantu dekorasi: InstancedMesh (ratusan objek = 1 draw call) dan pengecekan jarak
 * agar dekorasi tidak pernah menutupi jalan.
 */
const _m = new THREE.Matrix4();
const _q = new THREE.Quaternion();
const _p = new THREE.Vector3();
const _s = new THREE.Vector3();
const _e = new THREE.Euler();
const _c = new THREE.Color();
const _proj = {};

export function makeInstanced(geometry, material, items, { shadow = true, receive = shadow, colors = null } = {}) {
  const mesh = new THREE.InstancedMesh(geometry, material, Math.max(1, items.length));
  mesh.count = items.length;
  items.forEach((it, i) => {
    _e.set(it.rx ?? 0, it.ry ?? 0, it.rz ?? 0);
    _q.setFromEuler(_e);
    _p.set(it.x, it.y ?? 0, it.z);
    _s.set(it.sx ?? it.s ?? 1, it.sy ?? it.s ?? 1, it.sz ?? it.s ?? 1);
    _m.compose(_p, _q, _s);
    mesh.setMatrixAt(i, _m);
    if (colors) mesh.setColorAt(i, _c.set(colors[i]));
  });
  mesh.instanceMatrix.needsUpdate = true;
  if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  mesh.castShadow = shadow;
  mesh.receiveShadow = receive;
  mesh.computeBoundingSphere();
  return mesh;
}

/** Jarak bebas dari pembatas (m). Negatif = di dalam area jalan. */
export function clearance(path, x, z) {
  path.project(x, z, -1, _proj);
  return _proj.distance - path.wallOffset;
}

/** Info proyeksi lengkap (untuk tinggi jalan di dekat titik). */
export function nearestOnTrack(path, x, z) {
  return path.project(x, z, -1, {});
}

/** Jumlah dekorasi disesuaikan dengan pengaturan grafis. */
export const scaled = (track, n) => Math.max(1, Math.round(n * (track.quality?.decor ?? 1)));

/** Titik acak di sekitar lintasan dengan jarak bebas minimum. */
export function randomAround(track, rand, minClear, maxDist, extraCheck = null) {
  const c = track.center;
  const R = track.radius + maxDist;
  for (let tries = 0; tries < 80; tries++) {
    const a = rand() * Math.PI * 2;
    const r = Math.sqrt(rand()) * R;
    const x = c.x + Math.cos(a) * r;
    const z = c.y + Math.sin(a) * r;
    if (clearance(track.path, x, z) < minClear) continue;
    if (extraCheck && !extraCheck(x, z)) continue;
    return { x, z };
  }
  return null;
}

/** Titik di tepi lintasan (offset lateral dari dinding) pada jarak s acak. */
export function roadside(track, rand, minOff, maxOff) {
  const p = track.path;
  const f = p.frameAt(rand() * p.length);
  const side = rand() < 0.5 ? -1 : 1;
  const lat = side * (p.wallOffset + minOff + rand() * (maxOff - minOff));
  return { x: f.x + f.sx * lat, z: f.z + f.sz * lat, heading: f.heading, side, s: f.s };
}

/** Jarak dari garis tengah sungai (Pegunungan): |d × (p − o)| dengan d = arah aliran sungai. */
export function riverDistance(track, x, z) {
  const r = track.riverInfo;
  if (!r) return Infinity;
  return Math.abs(r.dirX * (z - r.z) - r.dirZ * (x - r.x));
}

/**
 * Rambu chevron di sisi luar tikungan tajam (semua tema).
 * Tinggi mengikuti jalan; pada jalan menanjak, tiang berdiri di lereng tanggul.
 */
export function addChevrons(track, group) {
  const path = track.path;
  const signsR = [];
  const signsL = [];
  const posts = [];
  for (let s = 0; s < path.length; s += 13) {
    const i = path.indexAt(s);
    const k = path.curvature[i];
    if (Math.abs(k) < 1 / 95 || track.inBridge(i)) continue;
    const f = path.frameAt(s);
    const lat = -Math.sign(k) * (path.wallOffset + 2.2); // sisi luar tikungan
    const x = f.x + f.sx * lat;
    const z = f.z + f.sz * lat;
    const baseY = f.y * Math.max(0, 1 - 1.7 / (4 + f.y * 1.8));
    const ry = f.heading + Math.PI; // menghadap pengemudi yang datang
    (k > 0 ? signsR : signsL).push({ x, z, y: baseY + 1.9, ry });
    for (const o of [-1.1, 1.1]) {
      posts.push({ x: x + Math.cos(f.heading) * o, z: z - Math.sin(f.heading) * o, y: baseY, ry });
    }
  }
  const boardGeo = new THREE.PlaneGeometry(3.0, 1.5);
  const postGeo = new THREE.CylinderGeometry(0.07, 0.07, 2.7, 5);
  postGeo.translate(0, 1.35, 0);
  group.add(makeInstanced(boardGeo, new THREE.MeshStandardMaterial({ map: chevronTexture(false), roughness: 0.5, side: THREE.DoubleSide }), signsR));
  group.add(makeInstanced(boardGeo, new THREE.MeshStandardMaterial({ map: chevronTexture(true), roughness: 0.5, side: THREE.DoubleSide }), signsL));
  group.add(makeInstanced(postGeo, new THREE.MeshStandardMaterial({ color: 0x4b5563, metalness: 0.5, roughness: 0.4 }), posts));
  return signsR.length + signsL.length;
}
