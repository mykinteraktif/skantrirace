import * as THREE from 'three';
import { seededRandom, windowTexture, billboardTexture } from '../textures.js';
import { makeInstanced, clearance, scaled, addChevrons, roadside } from './common.js';

/**
 * Dekorasi Kota Modern: gedung bertingkat (jendela menyala), lampu jalan, papan reklame neon,
 * pohon di trotoar, dan siluet kota di kejauhan. Suasana senja agar lampu neon terlihat.
 */
export function buildKota(track) {
  const path = track.path;
  const group = new THREE.Group();
  group.name = 'scenery-kota';
  const rand = seededRandom(1945);
  const b = path.bounds;
  const neon = track.theme.neon;

  // --- Gedung: grid blok kota, dibagi 3 kelas tinggi agar kepadatan jendela konsisten
  const classes = [
    { min: 16, max: 34, rep: 1, items: [] },
    { min: 34, max: 70, rep: 2, items: [] },
    { min: 70, max: 130, rep: 3.6, items: [] },
  ];
  const cell = 34;
  const margin = 260;
  const density = track.quality?.decor ?? 1;
  for (let gx = b.minX - margin; gx <= b.maxX + margin; gx += cell) {
    for (let gz = b.minZ - margin; gz <= b.maxZ + margin; gz += cell) {
      if (rand() > 0.72 * density + 0.15) continue;
      const w = 14 + rand() * 12;
      const d = 14 + rand() * 12;
      const x = gx + (rand() - 0.5) * 8;
      const z = gz + (rand() - 0.5) * 8;
      const c = clearance(path, x, z);
      const need = Math.hypot(w, d) / 2 + 9;
      if (c < need) continue;
      // Gedung tertinggi di dekat pusat kota
      const centerK = 1 - Math.min(1, Math.hypot(x - b.cx, z - b.cz) / (track.radius + margin));
      const roll = rand() * (0.5 + centerK);
      const cls = roll > 0.95 ? classes[2] : roll > 0.55 ? classes[1] : classes[0];
      const h = cls.min + rand() * (cls.max - cls.min);
      cls.items.push({ x, z, sx: w, sy: h, sz: d, ry: Math.round(rand()) * (Math.PI / 2) });
    }
  }
  const tints = ['#e2e8f0', '#cbd5e1', '#bfdbfe', '#fde68a', '#c7d2fe', '#d1d5db'];
  classes.forEach((cls, k) => {
    if (!cls.items.length) return;
    const tex = windowTexture(7 + k);
    tex.map.repeat.set(1, cls.rep);
    tex.emissive.repeat.set(1, cls.rep);
    const geo = new THREE.BoxGeometry(1, 1, 1);
    geo.translate(0, 0.5, 0);
    const mat = new THREE.MeshStandardMaterial({
      map: tex.map,
      emissiveMap: tex.emissive,
      emissive: 0xffffff,
      emissiveIntensity: 1.1,
      roughness: 0.6,
      metalness: 0.2,
    });
    group.add(makeInstanced(geo, mat, cls.items, { colors: cls.items.map(() => tints[Math.floor(rand() * tints.length)]) }));
  });

  // Atap: blok utilitas + lampu merah penanda ketinggian di gedung tinggi
  const tall = classes[2].items.concat(classes[1].items.filter(() => rand() < 0.3));
  const roofBox = new THREE.BoxGeometry(1, 1, 1);
  roofBox.translate(0, 0.5, 0);
  group.add(
    makeInstanced(roofBox, new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.8 }),
      tall.map((t) => ({ x: t.x, z: t.z, y: t.sy, sx: t.sx * 0.4, sy: 3, sz: t.sz * 0.4 })), { shadow: false }),
  );
  group.add(
    makeInstanced(new THREE.SphereGeometry(0.6, 8, 6), new THREE.MeshBasicMaterial({ color: 0xff3344, toneMapped: false }),
      tall.map((t) => ({ x: t.x, z: t.z, y: t.sy + 3.6 })), { shadow: false }),
  );

  // --- Lampu jalan di kedua sisi
  const poles = [];
  const heads = [];
  const arms = [];
  for (let s = 6; s < path.length; s += 32) {
    const f = path.frameAt(s);
    for (const side of [-1, 1]) {
      const lat = side * (path.wallOffset + 1.4);
      const x = f.x + f.sx * lat, z = f.z + f.sz * lat;
      poles.push({ x, z, y: 0 });
      heads.push({ x: x - f.sx * side * 2.2, z: z - f.sz * side * 2.2, y: 8.6, ry: f.heading });
      arms.push({ x: x - f.sx * side * 1.1, z: z - f.sz * side * 1.1, y: 8.75, ry: f.heading });
    }
  }
  const poleGeo = new THREE.CylinderGeometry(0.12, 0.16, 8.8, 6);
  poleGeo.translate(0, 4.4, 0);
  group.add(makeInstanced(poleGeo, new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.6, roughness: 0.4 }), poles));
  group.add(makeInstanced(new THREE.BoxGeometry(2.4, 0.14, 0.14), new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.6, roughness: 0.4 }), arms, { shadow: false }));
  group.add(
    makeInstanced(new THREE.BoxGeometry(1.6, 0.18, 0.7), new THREE.MeshStandardMaterial({ color: 0x111827, emissive: 0xfff1c1, emissiveIntensity: 1.6 }), heads, {
      shadow: false,
    }),
  );

  // --- Papan reklame neon (teks orisinal)
  const texts = [
    ['SKANTRI RACE', 'CHAMPIONS RACING'],
    ['MANTAP', 'Mandiri Aktif Terampil Berprestasi'],
    ['SMK BISA!', 'SMKS PGRI SINGOSARI'],
    ['NEON CITY', 'GRAND PRIX'],
    ['TURBO 4D', 'AMBIL CINCIN TURBO'],
    ['JADI JUARA', 'BALAP · TANTANG'],
  ];
  const boards = [];
  for (let k = 0; k < texts.length; k++) {
    const s = ((k + 0.35) / texts.length) * path.length;
    const f = path.frameAt(s);
    const side = k % 2 ? 1 : -1;
    const lat = side * (path.wallOffset + 6);
    const x = f.x + f.sx * lat, z = f.z + f.sz * lat;
    if (clearance(path, x, z) < 4) continue;
    const tex = billboardTexture(texts[k][0], texts[k][1], neon[k % neon.length], neon[(k + 1) % neon.length]);
    const mat = new THREE.MeshBasicMaterial({ map: tex, toneMapped: false, side: THREE.DoubleSide });
    const board = new THREE.Mesh(new THREE.PlaneGeometry(12, 6), mat);
    // Menghadap pengemudi yang datang, sedikit diputar ke arah jalan
    board.position.set(x, 9.5, z);
    board.rotation.y = f.heading + Math.PI + side * 0.35;
    group.add(board);
    boards.push(board);
    const post = new THREE.Mesh(new THREE.BoxGeometry(0.5, 7, 0.5), new THREE.MeshStandardMaterial({ color: 0x1f2937 }));
    post.position.set(x, 3.5, z);
    post.castShadow = true;
    group.add(post);
  }
  track.animated.push({
    update: (dt, t) => boards.forEach((bd, i) => bd.material.color.setScalar(0.85 + 0.15 * Math.sin(t * 3 + i * 1.7))),
  });

  // --- Pohon kota di trotoar
  const trees = [];
  for (let i = 0; i < scaled(track, 110); i++) {
    const p = roadside(track, rand, 3.5, 6.5);
    if (clearance(path, p.x, p.z) < 2.5) continue;
    trees.push({ x: p.x, z: p.z, s: 0.8 + rand() * 0.5 });
  }
  const trunk = new THREE.CylinderGeometry(0.15, 0.22, 2.6, 6);
  trunk.translate(0, 1.3, 0);
  const crown = new THREE.IcosahedronGeometry(1.6, 0);
  crown.translate(0, 3.6, 0);
  group.add(makeInstanced(trunk, new THREE.MeshStandardMaterial({ color: 0x6b4f35 }), trees));
  group.add(
    makeInstanced(crown, new THREE.MeshStandardMaterial({ color: 0xffffff, flatShading: true, roughness: 0.9 }), trees, {
      colors: trees.map(() => ['#3f7d3a', '#4d8f45', '#2f6b34'][Math.floor(rand() * 3)]),
    }),
  );

  addChevrons(track, group);

  // --- Siluet kota jauh (tanpa bayangan)
  const sky = [];
  for (let i = 0; i < scaled(track, 90); i++) {
    const a = rand() * Math.PI * 2;
    const r = track.radius + 420 + rand() * 380;
    sky.push({ x: b.cx + Math.cos(a) * r, z: b.cz + Math.sin(a) * r, sx: 30 + rand() * 40, sy: 60 + rand() * 180, sz: 30 + rand() * 40 });
  }
  const skyGeo = new THREE.BoxGeometry(1, 1, 1);
  skyGeo.translate(0, 0.5, 0);
  const skyTex = windowTexture(99);
  skyTex.map.repeat.set(1, 4);
  skyTex.emissive.repeat.set(1, 4);
  group.add(
    makeInstanced(skyGeo, new THREE.MeshStandardMaterial({ map: skyTex.map, emissiveMap: skyTex.emissive, emissive: 0xffffff, emissiveIntensity: 0.9, color: 0x7c8aa5 }), sky, {
      shadow: false,
    }),
  );

  track.group.add(group);
  track.sceneryCounts = {
    buildings: classes.reduce((a, c) => a + c.items.length, 0),
    lamps: poles.length,
    billboards: boards.length,
    trees: trees.length,
  };
}
