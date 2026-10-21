import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { seededRandom, strataTexture } from '../textures.js';
import { makeInstanced, clearance, scaled, addChevrons, randomAround } from './common.js';

/**
 * Dekorasi Gurun 4D: mesa berlapis, gapura batu, bukit pasir, kaktus, batuan,
 * dan PORTAL futuristik yang berpendar melintang di atas jalan.
 */
function cactusGeometry() {
  const parts = [];
  const main = new THREE.CylinderGeometry(0.35, 0.4, 4, 8);
  main.translate(0, 2, 0);
  parts.push(main);
  for (const [side, h] of [[-1, 1.6], [1, 2.3]]) {
    const arm = new THREE.CylinderGeometry(0.22, 0.24, 1.0, 6);
    arm.rotateZ(Math.PI / 2);
    arm.translate(side * 0.75, h, 0);
    parts.push(arm);
    const up = new THREE.CylinderGeometry(0.22, 0.24, 1.3, 6);
    up.translate(side * 1.2, h + 0.6, 0);
    parts.push(up);
  }
  const g = mergeGeometries(parts.map((p) => p.toNonIndexed()), false);
  parts.forEach((p) => p.dispose());
  return g;
}

/** Material portal: gradien cyan ↔ magenta yang mengalir. */
function portalMaterial() {
  return new THREE.ShaderMaterial({
    uniforms: { uTime: { value: 0 } },
    vertexShader: /* glsl */ `
      varying vec2 vUv;
      void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
    fragmentShader: /* glsl */ `
      uniform float uTime; varying vec2 vUv;
      void main() {
        float t = fract(vUv.x * 3.0 - uTime * 0.35);
        vec3 a = vec3(0.13, 0.83, 0.93), b = vec3(0.91, 0.47, 0.98);
        vec3 col = mix(a, b, smoothstep(0.0, 1.0, abs(t * 2.0 - 1.0)));
        float rim = 0.65 + 0.35 * sin(vUv.y * 6.2831);
        gl_FragColor = vec4(col * (1.4 + rim), 1.0);
      }`,
    toneMapped: false,
  });
}

export function buildGurun(track) {
  const path = track.path;
  const group = new THREE.Group();
  group.name = 'scenery-gurun';
  const rand = seededRandom(404);
  const b = path.bounds;

  // --- Mesa (bukit batu bertingkat dengan puncak datar)
  const mesas = [];
  for (let i = 0; i < scaled(track, 26); i++) {
    const r = 14 + rand() * 30;
    const p = randomAround(track, rand, r + 12, 340);
    if (!p) continue;
    mesas.push({ x: p.x, z: p.z, sx: r, sy: 14 + rand() * 34, sz: r * (0.7 + rand() * 0.5), ry: rand() * 6 });
  }
  for (let i = 0; i < 14; i++) {
    const a = rand() * Math.PI * 2;
    const r = track.radius + 420 + rand() * 300;
    const w = 50 + rand() * 90;
    mesas.push({ x: b.cx + Math.cos(a) * r, z: b.cz + Math.sin(a) * r, sx: w, sy: 40 + rand() * 70, sz: w * 0.7, ry: rand() * 6 });
  }
  const strata = strataTexture();
  strata.repeat.set(4, 1);
  const mesaGeo = new THREE.CylinderGeometry(0.82, 1, 1, 9, 1);
  mesaGeo.translate(0, 0.5, 0);
  group.add(makeInstanced(mesaGeo, new THREE.MeshStandardMaterial({ map: strata, flatShading: true, roughness: 1 }), mesas));

  // --- Gapura batu alam
  const arches = [];
  for (let k = 0; k < 3; k++) {
    const s = ((k + 0.2) / 3) * path.length;
    const f = path.frameAt(s);
    const side = k % 2 ? 1 : -1;
    const lat = side * (path.wallOffset + 26);
    const x = f.x + f.sx * lat, z = f.z + f.sz * lat;
    if (clearance(path, x, z) < 18) continue;
    arches.push({ x, z, ry: f.heading + rand(), s: 1 + rand() * 0.4 });
  }
  const archGeo = new THREE.TorusGeometry(10, 2.6, 6, 14, Math.PI);
  group.add(makeInstanced(archGeo, new THREE.MeshStandardMaterial({ color: 0xb8673a, flatShading: true, roughness: 1 }), arches));

  // --- Bukit pasir
  const dunes = [];
  for (let i = 0; i < scaled(track, 50); i++) {
    const p = randomAround(track, rand, 20, 420);
    if (!p) continue;
    const s = 18 + rand() * 40;
    dunes.push({ x: p.x, z: p.z, y: -1, sx: s, sy: 3 + rand() * 7, sz: s * (0.5 + rand() * 0.6), ry: rand() * 6 });
  }
  group.add(
    makeInstanced(new THREE.SphereGeometry(1, 14, 6, 0, Math.PI * 2, 0, Math.PI / 2), new THREE.MeshStandardMaterial({ color: 0xd9a86b, roughness: 1 }), dunes, {
      shadow: false,
      receive: true,
    }),
  );

  // --- Kaktus & batuan kecil
  const cacti = [];
  for (let i = 0; i < scaled(track, 70); i++) {
    const p = randomAround(track, rand, 4, 180);
    if (p) cacti.push({ x: p.x, z: p.z, ry: rand() * 6, s: 0.7 + rand() * 0.8 });
  }
  group.add(makeInstanced(cactusGeometry(), new THREE.MeshStandardMaterial({ color: 0x4f7d3a, roughness: 0.8 }), cacti));
  const rocks = [];
  for (let i = 0; i < scaled(track, 80); i++) {
    const p = randomAround(track, rand, 3.5, 200);
    if (!p) continue;
    const s = 0.6 + rand() * 2.2;
    rocks.push({ x: p.x, z: p.z, y: -0.15, sx: s * 1.3, sy: s * 0.7, sz: s, ry: rand() * 6 });
  }
  group.add(
    makeInstanced(new THREE.DodecahedronGeometry(1, 0), new THREE.MeshStandardMaterial({ color: 0xffffff, flatShading: true }), rocks, {
      colors: rocks.map(() => ['#a65a2e', '#c27a45', '#8c4a26'][Math.floor(rand() * 3)]),
    }),
  );

  addChevrons(track, group);

  // --- Portal futuristik melintang di atas jalan (visual, berputar & berpendar)
  const portals = [];
  const mat = portalMaterial();
  const innerMat = new THREE.MeshBasicMaterial({ color: 0xf0abfc, transparent: true, opacity: 0.55, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false });
  for (const at of track.def.portals ?? []) {
    const f = path.frameAt(at * path.length);
    const R = path.wallOffset + 1.6;
    const portal = new THREE.Group();
    portal.position.set(f.x, f.y + R * 0.32, f.z);
    portal.rotation.y = f.heading;
    const ring = new THREE.Mesh(new THREE.TorusGeometry(R, 0.55, 10, 64), mat);
    portal.add(ring);
    const inner = new THREE.Mesh(new THREE.TorusGeometry(R - 1.3, 0.12, 6, 64), innerMat);
    portal.add(inner);
    // Kaki portal (tiang hitam)
    for (const sx of [-1, 1]) {
      const leg = new THREE.Mesh(new THREE.BoxGeometry(0.9, 2.4, 0.9), new THREE.MeshStandardMaterial({ color: 0x111827, metalness: 0.7, roughness: 0.3 }));
      leg.position.set(sx * (R * 0.95), -R * 0.32 + 1.2, 0);
      portal.add(leg);
    }
    group.add(portal);
    portals.push({ portal, inner, s: f.s });
  }
  track.portals = portals;
  track.animated.push({
    update: (dt, t) => {
      mat.uniforms.uTime.value = t;
      for (const p of portals) p.inner.rotation.z += dt * 0.9;
    },
  });

  track.group.add(group);
  track.sceneryCounts = { mesas: mesas.length, arches: arches.length, dunes: dunes.length, cacti: cacti.length, portals: portals.length };
}
