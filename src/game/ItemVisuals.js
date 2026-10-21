import * as THREE from 'three';
import { ITEM_TYPES } from './data/items.js';
import { glowTexture } from './textures.js';

/**
 * Tampilan item di lintasan:
 *  Speed Orb  → bola kuning berpendar dengan cincin berputar
 *  Shield     → kristal biru (oktahedron) dengan halo
 *  Turbo Ring → cincin oranye tegak melintang jalur
 * Item yang sedang menunggu respawn tampil sebagai bayangan kecil yang membesar.
 */
export class ItemVisuals {
  constructor(items, parent) {
    this.group = new THREE.Group();
    this.group.name = 'items';
    this.entries = [];
    const mats = {};
    for (const type of Object.keys(ITEM_TYPES)) {
      const color = new THREE.Color(ITEM_TYPES[type].color);
      mats[type] = {
        core: new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: 1.8, roughness: 0.3, metalness: 0.2, transparent: true }),
        halo: new THREE.SpriteMaterial({ map: glowTexture(ITEM_TYPES[type].color), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }),
      };
    }
    const geos = {
      speed: new THREE.SphereGeometry(0.75, 20, 14),
      speedRing: new THREE.TorusGeometry(1.15, 0.08, 6, 32),
      shield: new THREE.OctahedronGeometry(0.95, 0),
      turbo: new THREE.TorusGeometry(2.3, 0.26, 10, 40),
    };
    this.shared = { mats, geos };

    for (const it of items) {
      const g = new THREE.Group();
      g.position.set(it.x, it.y, it.z);
      g.rotation.y = it.heading;
      const m = mats[it.type];
      let spin;
      if (it.type === 'turbo') {
        const ring = new THREE.Mesh(geos.turbo, m.core);
        ring.position.y = 2.3;
        g.add(ring);
        // Panah chevron di dalam cincin
        const halo = new THREE.Sprite(m.halo);
        halo.scale.set(4.2, 4.2, 1);
        halo.position.y = 2.3;
        g.add(halo);
        spin = ring;
      } else {
        const core = new THREE.Mesh(it.type === 'speed' ? geos.speed : geos.shield, m.core);
        core.position.y = 1.4;
        g.add(core);
        if (it.type === 'speed') {
          const ring = new THREE.Mesh(geos.speedRing, m.core);
          ring.position.y = 1.4;
          ring.rotation.x = Math.PI / 2.4;
          g.add(ring);
        }
        const halo = new THREE.Sprite(m.halo);
        halo.scale.set(3.2, 3.2, 1);
        halo.position.y = 1.4;
        g.add(halo);
        spin = core;
      }
      this.group.add(g);
      this.entries.push({ item: it, group: g, spin, phase: it.id * 1.3 });
    }
    parent.add(this.group);
  }

  update(dt, time) {
    for (const e of this.entries) {
      const it = e.item;
      const respawn = ITEM_TYPES[it.type].respawn;
      const k = it.active ? 1 : 0.2 + 0.35 * (1 - Math.max(0, it.timer) / respawn);
      const s = e.group.scale.x + (k - e.group.scale.x) * Math.min(1, dt * 10);
      e.group.scale.setScalar(s);
      e.group.visible = true;
      if (it.type === 'turbo') {
        e.spin.rotation.z += dt * 1.6;
      } else {
        e.spin.rotation.y += dt * 2.2;
        e.group.position.y = it.y + Math.sin(time * 2.4 + e.phase) * 0.18;
      }
      e.group.children.forEach((c) => {
        if (c.material && 'opacity' in c.material && !c.isSprite) c.material.opacity = 1;
      });
      e.group.traverse((c) => {
        if (c.isSprite) c.material.opacity = it.active ? 0.85 : 0.25;
      });
    }
  }
}
