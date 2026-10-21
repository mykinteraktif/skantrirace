import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { rimTexture, glowTexture, numberTexture } from './textures.js';

/**
 * CarModels.js — model 3D prosedural untuk 4 mobil (semua menghadap +Z, satuan meter).
 *
 *  SKANTRI  'wedge'   : bodi baji, sayap belakang tinggi, ventilasi kap mesin
 *  VORTEX   'arrow'   : hypercar panjang & rendah, moncong runcing, sirip kembar, spoiler bebek
 *  PHANTOM  'phantom' : kanopi gelembung, side pod dengan lampu neon, lampu belakang penuh
 *  TITAN    'titan'   : GT kekar, spakbor lebar, scoop kap mesin, garis balap, sayap GT
 *
 * Potongan bodi statis digabung per material (±7–9 mesh per mobil) agar 6 mobil tetap ringan.
 */

function extrudeProfile(points, width, bevel = 0.06) {
  const shape = new THREE.Shape();
  shape.moveTo(points[0][0], points[0][1]);
  for (let i = 1; i < points.length; i++) shape.lineTo(points[i][0], points[i][1]);
  shape.closePath();
  const geo = new THREE.ExtrudeGeometry(shape, {
    depth: width - bevel * 2,
    bevelEnabled: true,
    bevelThickness: bevel,
    bevelSize: bevel,
    bevelSegments: 2,
    curveSegments: 4,
  });
  // Bentuk (u = panjang, v = tinggi) diekstrusi sepanjang Z → putar agar panjang = Z dan lebar = X
  geo.rotateY(-Math.PI / 2);
  geo.translate((width - bevel * 2) / 2, 0, 0);
  geo.computeVertexNormals();
  return geo;
}

const box = (w, h, d) => new THREE.BoxGeometry(w, h, d);

export function buildCarModel(spec, opts = {}) {
  const sh = spec.shape;
  const W = sh.width;
  const hw = W / 2;
  const root = new THREE.Group();
  root.rotation.order = 'YXZ';
  const body = new THREE.Group(); // dipisah agar bisa miring (roll) & mengayun
  root.add(body);

  const glowColor = opts.glow ?? spec.glow ?? '#22d3ee';
  const paint = new THREE.MeshPhysicalMaterial({
    color: opts.color ?? spec.color,
    metalness: 0.55,
    roughness: 0.3,
    clearcoat: 1,
    clearcoatRoughness: 0.08,
  });
  const dark = new THREE.MeshStandardMaterial({ color: spec.accent, roughness: 0.45, metalness: 0.4 });
  const glass = new THREE.MeshPhysicalMaterial({ color: 0x0b1220, metalness: 0.2, roughness: 0.05, clearcoat: 1 });
  const headMat = new THREE.MeshStandardMaterial({ color: 0xe0f2fe, emissive: 0xbfe9ff, emissiveIntensity: 2.4 });
  const tailMat = new THREE.MeshStandardMaterial({ color: 0x7f1d1d, emissive: 0xff2433, emissiveIntensity: 1.2 });
  const metal = new THREE.MeshStandardMaterial({ color: 0x9ca3af, metalness: 0.9, roughness: 0.25 });
  const neon = new THREE.MeshStandardMaterial({ color: 0x111111, emissive: new THREE.Color(glowColor), emissiveIntensity: 2.2 });
  const white = new THREE.MeshStandardMaterial({ color: 0xf1f5f9, roughness: 0.4 });

  const parts = new Map();
  const add = (geo, mat, x = 0, y = 0, z = 0, rot = null, scale = null) => {
    const holder = new THREE.Object3D();
    holder.position.set(x, y, z);
    if (rot) holder.rotation.set(rot[0], rot[1], rot[2]);
    if (scale) holder.scale.set(scale[0], scale[1], scale[2]);
    holder.updateMatrix();
    const g = (geo.index ? geo.toNonIndexed() : geo.clone()).applyMatrix4(holder.matrix);
    g.clearGroups();
    if (!parts.has(mat)) parts.set(mat, []);
    parts.get(mat).push(g);
    geo.dispose();
  };
  const mirror = (fn) => [-1, 1].forEach(fn);

  // ---------------------------------------------------------------- bodi & kabin
  add(extrudeProfile(sh.body, W), paint);
  if (sh.model === 'phantom') {
    // Kanopi gelembung ala pesawat tempur
    add(new THREE.SphereGeometry(1, 20, 12, 0, Math.PI * 2, 0, Math.PI / 2), glass, 0, 0.72, -0.35, null, [sh.cabinWidth / 2, 0.42, 1.25]);
  } else {
    add(extrudeProfile(sh.cabin, sh.cabinWidth, 0.05), glass);
  }

  // Bagian umum: splitter depan, rok samping, diffuser
  add(box(W + 0.08, 0.06, 0.42), dark, 0, 0.27, sh.nose - 0.08);
  mirror((sx) => add(box(0.1, 0.2, (sh.axleF - sh.axleR) * 0.75), dark, sx * (hw + 0.01), 0.36, (sh.axleF + sh.axleR) / 2));
  add(box(W * 0.9, 0.2, 0.3), dark, 0, 0.36, sh.tail + 0.12);

  // Lampu depan
  const headY = sh.headY ?? (sh.model === 'titan' ? 0.62 : sh.model === 'arrow' ? 0.44 : 0.53);
  mirror((sx) => add(box(0.42, 0.07, 0.14), headMat, sx * hw * 0.66, headY, sh.nose, [0, sx * 0.22, 0]));

  // Nomor balap di pintu
  const numMat = new THREE.MeshStandardMaterial({ map: numberTexture(opts.number ?? spec.number ?? '01'), transparent: true, roughness: 0.4 });
  if (sh.model === 'phantom') {
    // Side pod menutupi pintu → nomor di kap mesin
    add(new THREE.PlaneGeometry(0.75, 0.44), numMat, 0, 0.668, 1.3, [-Math.PI / 2 + 0.145, 0, 0]);
  } else {
    mirror((sx) => add(new THREE.PlaneGeometry(0.62, 0.36), numMat, sx * (hw + 0.006), sh.model === 'titan' ? 0.66 : 0.58, 0.12, [0, (sx * Math.PI) / 2, 0]));
  }

  // Knalpot ganda (titik keluar api nitro)
  const exhausts = [];
  const exY = sh.model === 'titan' ? 0.42 : 0.38;
  mirror((sx) => {
    add(new THREE.CylinderGeometry(0.09, 0.09, 0.3, 10), metal, sx * 0.35, exY, sh.tail + 0.05, [Math.PI / 2, 0, 0]);
    exhausts.push(new THREE.Vector3(sx * 0.35, exY, sh.tail - 0.12));
  });

  // ---------------------------------------------------------------- ciri tiap model
  const tailZ = sh.tail - 0.02;
  switch (sh.model) {
    case 'wedge': {
      mirror((sx) => add(box(0.12, 0.26, 0.6), dark, sx * hw, 0.66, -0.75)); // air intake
      for (let i = 0; i < 4; i++) add(box(1.0, 0.03, 0.08), dark, 0, 0.965, -1.62 - i * 0.14); // ventilasi
      mirror((sx) => add(box(0.16, 0.1, 0.22), paint, sx * (hw + 0.04), 0.98, 0.5)); // spion
      add(box(0.5, 0.04, 1.0), paint, 0, 1.29, -0.42); // garis atap
      // Lampu belakang bentuk "C"
      add(box(1.74, 0.08, 0.06), tailMat, 0, 0.76, tailZ);
      mirror((sx) => {
        add(box(0.34, 0.07, 0.06), tailMat, sx * 0.74, 0.64, tailZ - 0.03);
        add(box(0.07, 0.19, 0.06), tailMat, sx * 0.89, 0.7, tailZ - 0.02);
      });
      add(box(1.5, 0.2, 0.05), dark, 0, 0.47, tailZ - 0.04);
      break;
    }
    case 'arrow': {
      // Moncong runcing & garis neon samping
      add(box(1.2, 0.05, 0.5), dark, 0, 0.3, sh.nose + 0.08);
      mirror((sx) => {
        add(box(0.03, 0.04, 2.6), neon, sx * (hw + 0.02), 0.5, 0.1);
        add(box(0.14, 0.3, 0.7), dark, sx * (hw - 0.02), 0.62, -0.95); // intake di belakang pintu
        add(box(0.06, 0.5, 0.85), dark, sx * 0.55, 1.02, -1.85, [0.3, 0, 0]); // sirip kembar
        add(box(0.15, 0.09, 0.2), paint, sx * (hw + 0.04), 0.86, 0.75); // spion
      });
      // Lampu belakang tipis menyatu dengan spoiler bebek
      add(box(1.82, 0.05, 0.06), tailMat, 0, 0.74, tailZ);
      add(box(1.6, 0.16, 0.05), dark, 0, 0.5, tailZ - 0.04);
      break;
    }
    case 'phantom': {
      mirror((sx) => {
        add(box(0.26, 0.3, 2.3), dark, sx * (hw - 0.02), 0.5, -0.25); // side pod
        add(box(0.03, 0.04, 2.2), neon, sx * (hw + 0.115), 0.58, -0.25); // strip neon
        add(box(0.3, 0.06, 0.5), dark, sx * 0.6, 0.36, sh.nose - 0.1, [0, sx * -0.35, 0]); // "taring" depan
        add(box(0.04, 0.24, 0.6), dark, sx * 0.45, 0.42, sh.tail + 0.25); // sirip diffuser
      });
      add(box(W * 0.94, 0.07, 0.06), tailMat, 0, 0.66, tailZ); // lampu belakang penuh
      add(box(W * 0.6, 0.03, 0.06), neon, 0, 0.56, tailZ - 0.01);
      add(box(1.2, 0.04, 1.4), dark, 0, 0.79, -1.5); // kaca mesin gelap
      break;
    }
    case 'titan': {
      // Spakbor lebar di atas tiap roda
      for (const z of [sh.axleF, sh.axleR]) {
        mirror((sx) => add(box(0.24, 0.32, 1.05), paint, sx * (hw + 0.02), 0.72, z));
      }
      add(box(0.6, 0.16, 0.8), dark, 0, 0.92, 1.25); // scoop kap mesin
      add(box(W * 0.75, 0.24, 0.06), dark, 0, 0.52, sh.nose - 0.02); // grill depan
      // Garis balap kembar di kap, atap, dan bagasi
      mirror((sx) => {
        add(box(0.16, 0.02, 2.0), white, sx * 0.18, 0.87, 1.05, [-0.06, 0, 0]);
        add(box(0.16, 0.02, 1.0), white, sx * 0.18, 1.415, -0.45);
        add(box(0.17, 0.1, 0.24), paint, sx * (hw + 0.06), 1.06, 0.45); // spion
      });
      // Lampu belakang kotak ganda
      mirror((sx) => add(box(0.42, 0.14, 0.06), tailMat, sx * 0.66, 0.74, tailZ));
      add(box(1.4, 0.22, 0.05), dark, 0, 0.5, tailZ - 0.03);
      break;
    }
  }

  // ---------------------------------------------------------------- sayap belakang
  const wing = sh.wing ?? { type: 'none' };
  if (wing.type === 'tall') {
    add(box(wing.width, 0.07, 0.5), dark, 0, wing.y, wing.z, [-0.08, 0, 0]);
    mirror((sx) => {
      add(box(0.07, 0.42, 0.2), dark, sx * 0.6, wing.y - 0.24, wing.z + 0.03);
      add(box(0.05, 0.32, 0.6), paint, sx * (wing.width / 2), wing.y, wing.z);
    });
  } else if (wing.type === 'duck') {
    add(box(wing.width, 0.06, 0.32), dark, 0, wing.y, wing.z, [0.25, 0, 0]);
  } else if (wing.type === 'gt') {
    add(box(wing.width, 0.06, 0.46), dark, 0, wing.y, wing.z, [-0.1, 0, 0]);
    mirror((sx) => {
      add(box(0.06, 0.5, 0.12), dark, sx * 0.5, wing.y - 0.27, wing.z + 0.12, [0.25, 0, 0]); // tiang leher angsa
      add(box(0.05, 0.36, 0.62), dark, sx * (wing.width / 2), wing.y - 0.05, wing.z);
    });
  }

  // Gabungkan potongan bodi: satu mesh per material
  for (const [mat, geos] of parts) {
    const merged = mergeGeometries(geos, false);
    geos.forEach((g) => g.dispose());
    const mesh = new THREE.Mesh(merged, mat);
    mesh.castShadow = !mat.transparent;
    body.add(mesh);
  }

  // ---------------------------------------------------------------- roda
  const R = sh.wheelR;
  const tireMat = new THREE.MeshStandardMaterial({ color: 0x15171b, roughness: 0.85 });
  const rimMat = new THREE.MeshStandardMaterial({ map: rimTexture(), metalness: 0.6, roughness: 0.35 });
  const wheelGeo = new THREE.CylinderGeometry(R, R, sh.model === 'titan' ? 0.4 : 0.34, 22);
  wheelGeo.rotateZ(Math.PI / 2);
  const wheels = [];
  const frontPivots = [];
  for (const [z, front] of [[sh.axleF, true], [sh.axleR, false]]) {
    for (const sx of [-1, 1]) {
      const pivot = new THREE.Group();
      pivot.position.set(sx * sh.track, R, z);
      const wheel = new THREE.Mesh(wheelGeo, [tireMat, rimMat, rimMat]);
      wheel.castShadow = true;
      pivot.add(wheel);
      root.add(pivot); // roda tidak ikut miring bersama bodi
      wheels.push(wheel);
      if (front) frontPivots.push(pivot);
    }
  }

  // ---------------------------------------------------------------- underglow
  const glow = new THREE.Mesh(
    new THREE.PlaneGeometry(W + 0.6, (sh.nose - sh.tail) + 0.8),
    new THREE.MeshBasicMaterial({
      map: glowTexture(glowColor),
      transparent: true,
      opacity: 0.55,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    }),
  );
  glow.rotation.x = -Math.PI / 2;
  glow.position.set(0, 0.04, (sh.nose + sh.tail) / 2);
  root.add(glow);

  return { root, body, wheels, frontPivots, tailMat, exhausts, glow, wheelRadius: R };
}
