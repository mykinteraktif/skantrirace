import * as THREE from 'three';
import { Sky } from 'three/addons/objects/Sky.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { Track } from './Track.js';
import { Vehicle } from './Vehicle.js';
import { buildCarModel } from './CarModels.js';
import { ChaseCamera } from './ChaseCamera.js';
import { Input } from './Input.js';
import { RaceManager, gridSlot } from './RaceManager.js';
import { AIRacer, COOLDOWN_PROFILE } from './AIRacer.js';
import { ItemSystem } from './ItemSystem.js';
import { ItemVisuals } from './ItemVisuals.js';
import { Particles } from './Particles.js';
import { GameAudio } from './Audio.js';
import { WORLD, resolveCarCollisions } from './Physics.js';
import { loadSettings, saveSettings, QUALITY, isTouchDevice } from './Settings.js';
import { TRACKS } from './data/tracks.js';
import { CARS, CAR_ORDER } from './data/cars.js';
import { RIVALS, DIFFICULTY } from './data/racers.js';
import { ITEM_TYPES } from './data/items.js';
import { HUD } from '../ui/HUD.js';
import { Menu, PLAYER_COLORS } from '../ui/Menu.js';
import { TouchControls } from '../ui/TouchControls.js';
import { SpeedLines } from '../ui/SpeedLines.js';
import { OnlineSession } from '../net/OnlineSession.js';
import { RaceMirror } from '../net/RaceMirror.js';
import { RemoteCar, packCar, packRacer, packItems, packEvent } from '../net/protocol.js';

const MAX_STEPS_PER_FRAME = 12;
const PLAYER_SLOT_RACE = 5; // pemain mulai dari barisan paling belakang
const PLAYER_SLOT_PRACTICE = 0;
const PLAYER_COLOR = PLAYER_COLORS[0];
// Mode 2 pemain: mobil PEMAIN 2 dicat cyan agar mudah dibedakan (walau memilih model yang sama)
const P2_PAINT = 0x0891b2;
const P2_GLOW = '#67e8f9';
const FINISH_TIMEOUT = 60; // detik setelah pemenang finis
const RESULTS_DELAY = 2.6; // detik setelah pemain finis sebelum layar hasil muncul
const QUALITY_STEPS = ['rendah', 'sedang', 'tinggi'];

const hex = (n) => '#' + new THREE.Color(n).getHexString();
const _v = new THREE.Vector3();
const _size = new THREE.Vector2();

/**
 * Game — pengendali utama: renderer, scene, loop, dan alur permainan.
 * Mode: 'menu' → 'playing' ⇄ 'paused' → 'results' → (main lagi / menu)
 *
 * Pemain manusia disebut "pilot". Mode biasa: 1 pilot. Mode 2 PEMAIN: 2 pilot, layar dibagi dua
 * (atas–bawah atau kiri–kanan); tiap pilot punya mobil, kamera, HUD, garis kecepatan, dan tombol sendiri.
 * Properti lama (vehicle, chase, camera, hud, controls) tetap milik PEMAIN 1.
 */
export class Game {
  constructor({ container, hudRoot, menuRoot, touchRoot, debug = false }) {
    this.container = container;
    this.debug = debug;
    this.settings = loadSettings();
    this.mode = 'menu';
    this.menuView = 'main'; // 'main' | 'garage' | 'tracks' | 'duo' (lobi 2 pemain)
    this.raceMode = 'race'; // 'race' | 'practice'
    this.time = 0;
    this.accumulator = 0;
    this.controls = { throttle: 0, brake: 0, steer: 0, handbrake: false, nitro: false };
    this.aiInput = { throttle: 0, brake: 0, steer: 0, handbrake: false, nitro: false };
    this.wrongWayTime = 0;
    this.timeScale = 1; // < 1 = gerak lambat (debug/pembelajaran), > 1 = dipercepat (uji otomatis)
    this.fps = { frames: 0, time: 0, value: 0, low: 0, high: 0 };
    this.timer = new THREE.Timer();
    this.timer.connect(document); // delta tidak melonjak saat tab disembunyikan
    this.cars = [];
    this.rivals = [];
    this.pilots = []; // pemain manusia di balapan yang sedang berjalan (1 atau 2)
    this.duo = false; // balapan saat ini mode 2 PEMAIN (layar terbagi)?
    this.netRace = null; // balapan ONLINE yang sedang berjalan: { role: 'host'|'guest', rivals, … }
    this.renders = 0; // jumlah render per frame terakhir (2 saat layar terbagi)
    this.spawnAcc = new Map();

    this.#initRenderer();
    this.#initScene();

    this.audio = new GameAudio();
    this.audio.setVolume(this.settings.volume);
    this.input = new Input(window);
    this.input.padSwap = this.settings.duoPadSwap;
    this.input.on('pause', () => this.togglePause());
    this.input.on('reset', (player) => this.resetCar(player));
    this.input.on('mute', () => {
      const muted = this.audio.toggleMute();
      if (this.mode === 'playing') for (const p of this.pilots) p.hud.message(muted ? 'SUARA MATI' : 'SUARA HIDUP', '', 0.9);
    });
    this.input.on('pad', (e) => this.#onPad(e));
    // Suara baru boleh menyala setelah ada interaksi (klik / sentuh / tombol) — mis. tamu online yang balapannya dimulai host
    this._onGesture = () => {
      if (this.mode === 'playing' || this.audio.ready) this.audio.unlock();
    };
    window.addEventListener('pointerdown', this._onGesture);
    window.addEventListener('keydown', this._onGesture);

    // Lapisan HUD: satu panel per pemain (panel ke-2 dibuat saat mode 2 PEMAIN pertama dipakai)
    this.hudLayer = hudRoot;
    const pane = document.createElement('div');
    pane.className = 'hud';
    pane.dataset.pane = '1';
    hudRoot.appendChild(pane);
    this.splitLine = document.createElement('div');
    this.splitLine.className = 'split-line';
    this.splitLine.hidden = true;
    hudRoot.appendChild(this.splitLine);
    this.hud = new HUD(pane);
    this.speedLines = new SpeedLines(container.parentElement);
    this.controls2 = { throttle: 0, brake: 0, steer: 0, handbrake: false, nitro: false };
    this.touch = new TouchControls(touchRoot, this.input, { onPause: () => this.togglePause() });
    this.flames = new Particles(this.scene, { capacity: 1100, additive: true });
    this.smoke = new Particles(this.scene, { capacity: 500, additive: false });

    this.qualityLevel = this.settings.quality === 'otomatis' ? 'sedang' : this.settings.quality;
    this.#applyQuality(this.qualityLevel);

    this.loadTrack(this.settings.track);
    this.loadCar(this.settings.car);
    this.#createRivals();
    this.chase = new ChaseCamera(this.camera);

    this.menu = new Menu(menuRoot, this.settings, {
      onRace: () => this.startRace(),
      onPractice: () => this.startPractice(),
      onResume: () => this.resume(),
      onRestart: () => this.restart(),
      onMenu: () => this.toMenu(),
      onScreen: (name) => this.#onMenuScreen(name),
      onPreviewCar: (id) => this.#previewCar(id),
      onConfirmCar: (id) => this.#confirmCar(id),
      onCancelCar: () => this.#previewCar(this.settings.car),
      onSelectTrack: (id) => this.#selectTrack(id),
      onSettings: (s, key) => this.#onSettings(key),
      onDuoStart: () => this.startDuo(),
      onDuoCar: (p, id) => this.#setDuoCar(p, id),
      // Mode online (2 perangkat)
      onNetHost: () => this.online.host(),
      onNetJoin: (code) => this.online.join(code),
      onNetLeave: () => this.online.leave(),
      onNetStart: () => this.online.startRace(),
      onNetProfile: () => this.#onNetProfile(),
      onNetLobby: () => this.online.sendLobby(),
      onNetToLobby: () => this.online.backToLobby(),
      onNetResume: () => this.#closeNetMenu(),
    });
    this.online = new OnlineSession(this);
    this.#updateQualityNote();

    this._onResize = () => this.resize();
    this._onVisibility = () => {
      // Mode online tidak bisa dijeda (lawan tetap bermain)
      if (document.hidden && this.mode === 'playing' && !this.netRace) this.pause();
    };
    window.addEventListener('resize', this._onResize);
    document.addEventListener('visibilitychange', this._onVisibility);

    this.resize();
    this.toMenu();
    this.renderer.setAnimationLoop((t) => this.#frame(t));

    // Tautan undangan (QR): ?gabung=KODE → langsung buka layar online & bergabung
    const join = new URLSearchParams(globalThis.location?.search ?? '').get('gabung');
    if (join) {
      this.menu.openOnline(join);
      this.online.join(join);
    }
  }

  // ------------------------------------------------------------------ setup
  #initRenderer() {
    const r = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    r.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    r.setSize(window.innerWidth, window.innerHeight);
    r.toneMapping = THREE.ACESFilmicToneMapping;
    r.toneMappingExposure = 0.85;
    r.shadowMap.enabled = true;
    r.shadowMap.type = THREE.PCFShadowMap;
    r.info.autoReset = false; // statistik dihitung per frame (layar terbagi = 2× render)
    this.container.appendChild(r.domElement);
    r.domElement.addEventListener('webglcontextlost', (e) => {
      e.preventDefault();
      this.pause();
      this.hud.message('GRAFIS TERPUTUS', 'Muat ulang halaman (F5) untuk melanjutkan', 999, 'warn');
    });
    this.renderer = r;
  }

  #initScene() {
    const scene = new THREE.Scene();
    this.scene = scene;
    this.camera = new THREE.PerspectiveCamera(62, window.innerWidth / window.innerHeight, 0.3, 3000);

    this.hemi = new THREE.HemisphereLight(0xcfe8ff, 0xe3cf9a, 0.9);
    scene.add(this.hemi);

    const sun = new THREE.DirectionalLight(0xfff1dc, 2.6);
    sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    const sc = sun.shadow.camera;
    sc.left = -45;
    sc.right = 45;
    sc.top = 45;
    sc.bottom = -45;
    sc.near = 1;
    sc.far = 320;
    sun.shadow.bias = -0.0004;
    sun.shadow.normalBias = 0.04;
    scene.add(sun, sun.target);
    this.sun = sun;
    this.sunDir = new THREE.Vector3(0, 1, 0);

    this.sky = new Sky();
    this.sky.scale.setScalar(4000);
    scene.add(this.sky);

    // Pantulan lingkungan ringan untuk cat mobil (tanpa file HDR eksternal)
    const pmrem = new THREE.PMREMGenerator(this.renderer);
    const envScene = new RoomEnvironment();
    this.envMap = pmrem.fromScene(envScene, 0.04).texture;
    envScene.dispose?.();
    pmrem.dispose();
    scene.environment = this.envMap;
    scene.environmentIntensity = 0.45;
  }

  #applyTheme(theme) {
    const u = this.sky.material.uniforms;
    u.turbidity.value = theme.sky.turbidity;
    u.rayleigh.value = theme.sky.rayleigh;
    u.mieCoefficient.value = 0.004;
    u.mieDirectionalG.value = 0.8;
    u.cloudCoverage.value = theme.sky.clouds;
    const phi = THREE.MathUtils.degToRad(90 - theme.sky.elevation);
    const theta = THREE.MathUtils.degToRad(theme.sky.azimuth);
    this.sunDir.setFromSphericalCoords(1, phi, theta);
    u.sunPosition.value.copy(this.sunDir);
    this.scene.fog = new THREE.Fog(theme.fogColor, theme.fogNear, theme.fogFar);
    this.renderer.toneMappingExposure = theme.exposure ?? 0.85;
    this.sun.color.set(theme.sun?.color ?? 0xfff1dc);
    this.sun.intensity = theme.sun?.intensity ?? 2.6;
    this.hemi.color.set(theme.hemi?.sky ?? 0xcfe8ff);
    this.hemi.groundColor.set(theme.hemi?.ground ?? 0xe3cf9a);
    this.hemi.intensity = theme.hemi?.intensity ?? 0.9;
    // Matahari rendah (senja) → perlu arah bayangan yang lebih jauh
    this.sunDistance = theme.sky.elevation < 15 ? 260 : 160;
    this.sun.shadow.camera.far = this.sunDistance + 200;
    this.sun.shadow.camera.updateProjectionMatrix();
  }

  /** Muat lintasan (lintasan lama dibuang dari GPU terlebih dahulu). */
  loadTrack(id) {
    if (this.track) this.track.dispose();
    const def = TRACKS[id];
    const decor = this.settings.quality === 'otomatis' ? 0.85 : QUALITY[this.settings.quality].decor;
    this.track = new Track(def, { decor });
    this.scene.add(this.track.group);
    this.#applyTheme(def.theme);
    this.hud.setTrack(this.track.path);
    this.hud2?.setTrack(this.track.path);
    this.items = new ItemSystem(this.track.path, def.items);
    this.itemVisuals = new ItemVisuals(this.items.items, this.track.group);
    this.flames?.clear();
    this.smoke?.clear();
    if (this.vehicle) this.#placeOnGrid();
  }

  /** Tampilan mobil: 'solo' (cat asli), 'p1' (cat asli + nomor P1), 'p2' (cat cyan + nomor P2). */
  #vehicleOpts(id, role) {
    const spec = CARS[id];
    if (role === 'p2') return { color: P2_PAINT, number: 'P2', glow: P2_GLOW };
    if (role === 'p1') return { glow: spec.glow, number: 'P1' };
    return { glow: spec.glow };
  }

  /** Mobil milik perangkat ini (PEMAIN 1 / pemain tunggal / tamu online). variant: 'solo' | 'p1' | 'p2'. */
  loadCar(id, variant = 'solo') {
    if (this.vehicle) this.vehicle.dispose();
    const spec = CARS[id];
    this.vehicle = new Vehicle(spec, this.#vehicleOpts(id, variant));
    this.vehicleVariant = variant;
    this.scene.add(this.vehicle.object);
    const g = gridSlot(PLAYER_SLOT_RACE);
    this.vehicle.place(this.track, g.s, g.lateral);
  }

  /** Mobil kedua: PEMAIN 2 di layar terbagi, atau mobil lawan di mode online. role: 'p2' (cyan) | 'p1'. */
  #loadCar2(id, role = 'p2') {
    if (this.vehicle2?.spec.id === id && this.vehicle2Role === role) return;
    this.vehicle2?.dispose();
    this.vehicle2 = new Vehicle(CARS[id], this.#vehicleOpts(id, role));
    this.vehicle2Role = role;
    this.vehicle2.object.visible = false;
    this.scene.add(this.vehicle2.object);
  }

  /** Perlengkapan PEMAIN 2 dibuat saat pertama dibutuhkan (mode biasa tidak terbebani). */
  #ensureP2() {
    if (!this.hud2) {
      this.camera2 = new THREE.PerspectiveCamera(62, 1, 0.3, 3000);
      this.chase2 = new ChaseCamera(this.camera2);
      const pane = document.createElement('div');
      pane.className = 'hud';
      pane.dataset.pane = '2';
      pane.hidden = true;
      this.hudLayer.insertBefore(pane, this.splitLine);
      this.hud2 = new HUD(pane, { player: 2 });
      this.hud2.setTrack(this.track.path);
      this.speedLines2 = new SpeedLines(this.container.parentElement);
      this.speedLines2.setVisible(false);
    }
    this.#loadCar2(this.settings.duoCars[1], 'p2');
  }

  #createRivals() {
    for (const r of this.rivals) r.vehicle.dispose();
    this.rivals = RIVALS.map((profile) => {
      const vehicle = new Vehicle(CARS[profile.car], {
        color: profile.color,
        number: profile.number,
        name: profile.name,
        glow: hex(profile.color),
      });
      this.scene.add(vehicle.object);
      return { profile, vehicle, ai: null };
    });
  }

  /**
   * Susun mobil di grid start. Mode latihan / garasi: hanya mobil pemain.
   * Lobi 2 PEMAIN: dua mobil berdampingan. Balapan 2 PEMAIN: lawan AI di depan, P1 & P2 di baris paling belakang.
   */
  #placeOnGrid() {
    const inMenu = this.mode === 'menu';
    const practice = this.raceMode === 'practice' && !inMenu;
    const garage = inMenu && (this.menuView === 'garage' || this.menuView === 'online');
    const lobby = inMenu && this.menuView === 'duo' && !!this.vehicle2;
    const duoRace = !inMenu && this.duo;
    const netRace = !inMenu && !!this.netRace;
    const nRivals = duoRace ? this.settings.duoRivals : netRace ? this.netRace.rivals : this.rivals.length;
    if (garage) {
      this.vehicle.place(this.track, -26, 0);
    } else if (lobby) {
      // Kamera menghadap mobil dari depan: lateral + tampak di kiri layar (sesuai kartu PEMAIN 1)
      this.vehicle.place(this.track, -26, 2.3);
      this.vehicle2.place(this.track, -26, -2.3);
    } else if (duoRace || netRace) {
      // Online: host = slot P1, tamu = slot P2 (vehicle = mobil perangkat ini)
      const guest = netRace && this.netRace.role === 'guest';
      const g1 = gridSlot(guest ? nRivals + 1 : nRivals);
      const g2 = gridSlot(guest ? nRivals : nRivals + 1);
      this.vehicle.place(this.track, g1.s, g1.lateral);
      this.vehicle2.place(this.track, g2.s, g2.lateral);
    } else {
      const ps = gridSlot(practice ? PLAYER_SLOT_PRACTICE : PLAYER_SLOT_RACE);
      this.vehicle.place(this.track, ps.s, ps.lateral);
    }
    if (this.vehicle2) this.vehicle2.object.visible = lobby || duoRace || netRace;
    const slots = duoRace || netRace ? [0, 1, 2, 3, 4, 5] : [0, 1, 2, 3, 4, 5].filter((k) => k !== PLAYER_SLOT_RACE);
    this.rivals.forEach((r, i) => {
      const g = gridSlot(slots[i]);
      r.vehicle.place(this.track, g.s, g.lateral);
      r.vehicle.object.visible = !practice && !garage && !lobby && i < nRivals;
    });
  }

  // ------------------------------------------------------------------ menu: mobil, lintasan, pengaturan
  #onMenuScreen(name) {
    const prev = this.menuView;
    this.menuView = name;
    if ((name === 'garage' || name === 'duo' || name === 'online') && !this.carThumbs) {
      // Gambar mini 3D tiap mobil, dibuat sekali saat garasi / lobi pertama dibuka
      this.carThumbs = this.#renderCarThumbs();
      this.menu.setCarThumbs(this.carThumbs);
    }
    if (name === 'duo') {
      // Lobi 2 PEMAIN: tampilkan mobil pilihan kedua pemain
      this.#ensureP2();
      if (this.vehicle.spec.id !== this.settings.duoCars[0] || this.vehicleVariant !== 'p1') this.loadCar(this.settings.duoCars[0], 'p1');
      this.input.setMode('duo');
    } else if (name === 'online') {
      this.netRefreshCar();
    } else if (prev === 'duo' || prev === 'online') {
      if (this.vehicle.spec.id !== this.settings.car || this.vehicleVariant !== 'solo') this.loadCar(this.settings.car);
      this.input.setMode('solo');
    }
    this.#placeOnGrid();
  }

  /** Ganti mobil salah satu pemain di lobi 2 PEMAIN. */
  #setDuoCar(p, id) {
    this.settings.duoCars[p] = id;
    saveSettings(this.settings);
    if (p === 0) {
      if (this.vehicle.spec.id !== id || this.vehicleVariant !== 'p1') this.loadCar(id, 'p1');
    } else this.#loadCar2(id, 'p2');
    this.#placeOnGrid();
  }

  #previewCar(id) {
    if (this.vehicle.spec.id !== id) {
      this.loadCar(id);
      this.#placeOnGrid();
    }
  }

  #confirmCar(id) {
    this.settings.car = id;
    saveSettings(this.settings);
    this.#previewCar(id);
  }

  #selectTrack(id) {
    this.settings.track = id;
    saveSettings(this.settings);
    this.loadTrack(id);
    this.chase.menuS = 0;
  }

  #onSettings(key) {
    saveSettings(this.settings);
    if (key === 'volume') this.audio.setVolume(this.settings.volume);
    if (key === 'quality') {
      const q = this.settings.quality;
      this.qualityLevel = q === 'otomatis' ? 'sedang' : q;
      this.#applyQuality(this.qualityLevel);
      this.loadTrack(this.settings.track); // kepadatan dekorasi ikut berubah
      this.#updateQualityNote();
    }
    if (key === 'showFps' && !this.settings.showFps && !this.debug) this.hud.hideFps();
    if (key === 'duoPadSwap') this.input.padSwap = this.settings.duoPadSwap;
  }

  #updateQualityNote() {
    if (!this.menu) return;
    this.menu.setQualityNote(this.settings.quality === 'otomatis' ? `Mode otomatis — saat ini: ${QUALITY[this.qualityLevel].label}.` : '');
  }

  /** Kualitas grafis: resolusi render & bayangan. */
  #applyQuality(level) {
    const q = QUALITY[level];
    const r = this.renderer;
    r.setPixelRatio(Math.min(window.devicePixelRatio || 1, q.pixelRatio));
    if (r.shadowMap.enabled !== q.shadows) {
      r.shadowMap.enabled = q.shadows;
      this.scene.traverse((o) => {
        if (o.material) [].concat(o.material).forEach((m) => (m.needsUpdate = true));
      });
    }
    this.sun.castShadow = q.shadows;
    if (this.sun.shadow.mapSize.x !== q.shadowSize) {
      this.sun.shadow.mapSize.set(q.shadowSize, q.shadowSize);
      if (this.sun.shadow.map) {
        this.sun.shadow.map.dispose();
        this.sun.shadow.map = null;
      }
    }
    this.qualityLevel = level;
    if (this.camera) this.resize();
  }

  /** Mode otomatis: turunkan kualitas bila FPS rendah, naikkan bila longgar. */
  #autoQuality(dt) {
    if (this.settings.quality !== 'otomatis' || this.mode !== 'playing' || this.timeScale !== 1) return;
    const f = this.fps;
    if (f.value === 0) return;
    f.low = f.value < 38 ? f.low + dt : 0;
    f.high = f.value > 57 ? f.high + dt : 0;
    const i = QUALITY_STEPS.indexOf(this.qualityLevel);
    if (f.low > 3 && i > 0) {
      this.#applyQuality(QUALITY_STEPS[i - 1]);
      f.low = 0;
      this.#updateQualityNote();
    } else if (f.high > 12 && i < QUALITY_STEPS.length - 1) {
      this.#applyQuality(QUALITY_STEPS[i + 1]);
      f.high = 0;
      this.#updateQualityNote();
    }
  }

  /** Gambar mini tiap mobil memakai renderer kecil terpisah (dibuang setelah selesai). */
  #renderCarThumbs() {
    const out = {};
    let r;
    try {
      r = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
    } catch {
      return out;
    }
    r.setPixelRatio(1);
    r.setSize(320, 180, false);
    r.toneMapping = THREE.ACESFilmicToneMapping;
    r.toneMappingExposure = 0.95;
    const scene = new THREE.Scene();
    const pm = new THREE.PMREMGenerator(r);
    const room = new RoomEnvironment();
    const env = pm.fromScene(room, 0.04).texture;
    scene.environment = env;
    scene.environmentIntensity = 0.55;
    scene.add(new THREE.HemisphereLight(0xdbeafe, 0x334155, 1.2));
    const key = new THREE.DirectionalLight(0xffffff, 2.4);
    key.position.set(5, 8, 6);
    scene.add(key);
    const cam = new THREE.PerspectiveCamera(30, 16 / 9, 0.1, 100);
    cam.position.set(4.3, 1.75, 4.7);
    cam.lookAt(0, 0.5, 0);
    for (const id of CAR_ORDER) {
      const m = buildCarModel(CARS[id], { glow: CARS[id].glow });
      m.root.rotation.y = 0.35;
      scene.add(m.root);
      r.render(scene, cam);
      out[id] = r.domElement.toDataURL('image/png');
      scene.remove(m.root);
      m.root.traverse((o) => {
        if (o.geometry) o.geometry.dispose();
        if (o.material) [].concat(o.material).forEach((mm) => (mm.map?.dispose(), mm.dispose()));
      });
    }
    env.dispose();
    pm.dispose();
    room.dispose?.();
    r.dispose();
    r.forceContextLoss();
    return out;
  }


  // ------------------------------------------------------------------ alur permainan
  /** Sedang menampilkan layar terbagi 2 pemain? */
  get split() {
    return this.duo && this.pilots.length === 2 && (this.mode === 'playing' || this.mode === 'paused' || this.mode === 'results');
  }

  /**
   * Mulai balapan / latihan.
   * opts.duo  : 2 PEMAIN layar terbagi
   * opts.net  : balapan ONLINE { role: 'host'|'guest', track, laps, rivals, diff, host:{name,car}, guest:{name,car} }
   */
  #begin(raceMode, opts = {}) {
    const net = raceMode === 'race' ? (opts.net ?? null) : null;
    this.raceMode = raceMode;
    this.duo = !!opts.duo && raceMode === 'race' && !net;
    this.netRace = net ? { role: net.role, rivals: net.rivals, cfg: net, sendAcc: 0, guestCar: null, itemBits: null, pending: new Map() } : null;
    this.netMenuOpen = false;
    this.mode = 'playing';
    this.menuView = 'main';
    if (net) {
      // Mobil perangkat ini: host = P1, tamu = P2; mobil lawan memakai identitas sebaliknya
      const mine = net.role === 'host' ? net.host : net.guest;
      const other = net.role === 'host' ? net.guest : net.host;
      const myRole = net.role === 'host' ? 'p1' : 'p2';
      if (this.vehicle.spec.id !== mine.car || this.vehicleVariant !== myRole) this.loadCar(mine.car, myRole);
      this.#loadCar2(other.car, net.role === 'host' ? 'p2' : 'p1');
    } else if (this.duo) {
      this.#ensureP2();
      if (this.vehicle.spec.id !== this.settings.duoCars[0] || this.vehicleVariant !== 'p1') this.loadCar(this.settings.duoCars[0], 'p1');
    } else if (this.vehicleVariant !== 'solo' || this.vehicle.spec.id !== this.settings.car) {
      this.loadCar(this.settings.car);
    }
    this.#placeOnGrid();
    const path = this.track.path;
    const diff = DIFFICULTY[net ? net.diff ?? this.settings.difficulty : this.settings.difficulty] ?? DIFFICULTY.normal;
    const laps = net ? net.laps : this.settings.laps;
    const nRivals = raceMode !== 'race' ? 0 : net ? net.rivals : this.duo ? this.settings.duoRivals : this.rivals.length;
    const guest = net?.role === 'guest';

    // Tamu online hanya "mencerminkan" aturan balapan dari host
    this.race = guest
      ? new RaceMirror(path, { laps, finishTimeout: FINISH_TIMEOUT })
      : new RaceManager(path, { mode: raceMode, laps, finishTimeout: FINISH_TIMEOUT });
    this.items.reset();
    this.cars = [];
    this.pilots = [];

    // --- Pemain manusia di perangkat ini (1, atau 2 saat layar terbagi)
    const p1 = { vehicle: this.vehicle, chase: this.chase, camera: this.camera, hud: this.hud, speedLines: this.speedLines, controls: this.controls };
    let humans;
    if (net) {
      const me = net.role === 'host' ? net.host : net.guest;
      humans = [{ ...p1, id: net.role === 'host' ? 'p1' : 'p2', slot: net.role === 'host' ? nRivals : nRivals + 1, name: me.name, color: PLAYER_COLORS[net.role === 'host' ? 0 : 1], playerIndex: net.role === 'host' ? 1 : 2 }];
    } else if (this.duo) {
      humans = [
        { ...p1, id: 'p1', slot: nRivals, name: this.settings.duoNames[0], color: PLAYER_COLORS[0] },
        { vehicle: this.vehicle2, chase: this.chase2, camera: this.camera2, hud: this.hud2, speedLines: this.speedLines2, controls: this.controls2, id: 'p2', slot: nRivals + 1, name: this.settings.duoNames[1], color: PLAYER_COLORS[1] },
      ];
    } else {
      humans = [{ ...p1, id: 'player', slot: raceMode === 'race' ? PLAYER_SLOT_RACE : PLAYER_SLOT_PRACTICE, name: this.vehicle.spec.name, color: PLAYER_COLOR }];
    }
    const addHuman = (h, index) => {
      const g = gridSlot(h.slot);
      h.vehicle.resetForRace(this.track, g.s, g.lateral);
      const car = { vehicle: h.vehicle, state: h.vehicle.state, phys: h.vehicle.phys, isPlayer: true, ai: null };
      car.racer = this.race.addRacer(h.id, h.vehicle, { name: h.name, color: h.color, isPlayer: true });
      car.racer.carName = h.vehicle.spec.name;
      car.racer.playerIndex = h.playerIndex ?? index + 1;
      const cooldownAI = new AIRacer(COOLDOWN_PROFILE, h.vehicle.phys, path, diff);
      cooldownAI.reaction = 0;
      const pilot = { ...h, index, car, racer: car.racer, done: false, wrongWayTime: 0, prevS: h.vehicle.state.s, cooldownAI, view: null };
      car.pilot = pilot;
      this.cars.push(car);
      this.pilots.push(pilot);
    };
    // Urutan pembalap sama di kedua perangkat online: P1, P2, lalu AI
    if (net && guest) {
      this.#addRemote('p1', this.vehicle2, net.host.name, PLAYER_COLORS[0], 1, gridSlot(nRivals));
      addHuman(humans[0], 0);
    } else {
      humans.forEach(addHuman);
      if (net) this.netRace.guestCar = this.#addRemote('p2', this.vehicle2, net.guest.name, PLAYER_COLORS[1], 2, gridSlot(nRivals + 1));
    }

    // --- Lawan AI (tamu online: digerakkan dari snapshot host)
    if (raceMode === 'race') {
      const slots = this.duo || net ? [0, 1, 2, 3, 4, 5] : [0, 1, 2, 3, 4, 5].filter((k) => k !== PLAYER_SLOT_RACE);
      this.rivals.slice(0, nRivals).forEach((r, i) => {
        const g = gridSlot(slots[i]);
        r.vehicle.resetForRace(this.track, g.s, g.lateral);
        const car = { vehicle: r.vehicle, state: r.vehicle.state, phys: r.vehicle.phys, isPlayer: false, ai: null };
        if (guest) {
          car.remote = new RemoteCar();
          car.kinematic = true;
        } else {
          r.ai = new AIRacer(r.profile, r.vehicle.phys, path, diff);
          r.ai.items = this.items.items;
          car.ai = r.ai;
        }
        car.racer = this.race.addRacer(r.profile.id, r.vehicle, { name: r.profile.name, color: hex(r.profile.color) });
        car.racer.carName = CARS[r.profile.car].name;
        this.cars.push(car);
      });
    }
    const lead = this.pilots[0];
    this.player = lead.racer;
    this.cooldownAI = lead.cooldownAI;
    this.playerDone = false;
    this.resultsTimer = 0;
    this.goTimer = 0;
    this.resultsRefresh = 0;
    this.prevPlayerS = this.vehicle.state.s;
    this.flames.clear();
    this.smoke.clear();
    this.race.start();

    // Papan nama: tiap pemain melihat nama lawan manusianya di atas mobil
    if (net) {
      this.vehicle.setNameTag(null);
      const other = guest ? net.host : net.guest;
      this.vehicle2.setNameTag(other.name, guest ? 'P1' : 'P2', PLAYER_COLORS[guest ? 0 : 1]);
    } else {
      this.vehicle.setNameTag(this.duo ? this.settings.duoNames[0] : null, 'P1', PLAYER_COLORS[0]);
      this.vehicle2?.setNameTag(this.duo ? this.settings.duoNames[1] : null, 'P2', PLAYER_COLORS[1]);
    }

    this.input.clear();
    this.input.setMode(this.duo ? 'duo' : 'solo');
    this.input.setPlayerEnabled(0, true);
    this.input.setPlayerEnabled(1, true);
    this.touch.release();
    this.input.enabled = true;
    this.accumulator = 0;
    this.wrongWayTime = 0;
    this.menu.hide();
    if (!guest) this.audio.unlock(); // tamu online: menunggu sentuhan/tombol pertama (aturan autoplay browser)
    this.audio.setDuo(this.duo);
    this.resize(); // tata letak: layar penuh atau terbagi
    for (const p of this.pilots) p.chase.snapTo(p.vehicle);
    this.#showHud(true);
    for (const p of this.pilots) {
      p.hud.setMode(raceMode, this.cars.length);
      p.hud.setRacers(
        this.cars.map((c) => c.racer),
        this.duo || net ? p.racer : null,
      );
      p.hud.setIdentity(this.duo || net ? p.name : null, p.color);
      p.hud.setControls(this.duo ? p.index + 1 : 0);
      p.hud.showHint(this.duo ? 10 : raceMode === 'race' ? 12 : 10);
    }
    this.#updateTouch();
    if (this.duo) {
      // Bagian layar pendek: cukup lampu & angka hitung mundur (info lintasan sudah terlihat di lobi)
    } else if (net) {
      const opp = guest ? net.host.name : net.guest.name;
      this.hud.message('BERSIAP!', `${this.track.def.name} · ${laps} lap · lawan: ${opp}${nRivals ? ` + ${nRivals} AI` : ''}`, 1.2);
    } else if (raceMode === 'race') {
      this.hud.message('BERSIAP!', `${this.track.def.name} · ${this.settings.laps} lap · kalahkan ${RIVALS.length} lawan`, 1.2);
    } else {
      this.hud.message('LATIHAN BEBAS', `${this.track.def.name} · lewati 3 checkpoint lalu garis START`, 3.2);
    }
    this.timer.reset();
  }

  /** Mobil manusia di perangkat lain (mode online): tidak disimulasikan di sini, posisinya dari jaringan. */
  #addRemote(id, vehicle, name, color, playerIndex, slot) {
    vehicle.resetForRace(this.track, slot.s, slot.lateral);
    vehicle.object.visible = true;
    const car = { vehicle, state: vehicle.state, phys: vehicle.phys, isPlayer: true, ai: null, remote: new RemoteCar(), kinematic: true };
    car.racer = this.race.addRacer(id, vehicle, { name, color, isPlayer: true });
    car.racer.carName = vehicle.spec.name;
    car.racer.playerIndex = playerIndex;
    this.cars.push(car);
    return car;
  }

  startRace() {
    this.#begin('race');
  }

  startPractice() {
    this.#begin('practice');
  }

  /** Balapan 2 PEMAIN (layar terbagi) dengan pilihan dari lobi. */
  startDuo() {
    this.#begin('race', { duo: true });
  }

  restart() {
    if (this.netRace) {
      // Online: hanya host yang bisa memulai ulang (tamu ikut otomatis)
      if (this.netRace.role === 'host') this.online.startRace();
      return;
    }
    this.#begin(this.raceMode, { duo: this.duo });
  }

  #updateTouch() {
    const t = this.settings.touch;
    const want = t === 'selalu' || (t === 'otomatis' && isTouchDevice());
    // Mode 2 PEMAIN memakai keyboard / gamepad: tombol sentuh disembunyikan
    this.touch.setEnabled(want && this.mode === 'playing' && !this.duo);
  }

  #showHud(on) {
    this.hudLayer.hidden = !on;
    this.hud.show(on);
    this.hud2?.show(on && this.duo);
  }

  pause() {
    if (this.mode !== 'playing') return;
    this.mode = 'paused';
    this.needsRender = true;
    this.input.clear();
    this.touch.release();
    this.audio.stopEngine();
    this.#updateTouch();
    this.menu.show('pause');
  }

  resume() {
    if (this.mode !== 'paused') return;
    this.mode = 'playing';
    this.menu.hide();
    this.input.clear();
    this.#updateTouch();
    this.timer.reset(); // buang waktu selama jeda
  }

  togglePause() {
    if (this.mode === 'playing' && this.netRace) return this.netMenuOpen ? this.#closeNetMenu() : this.#openNetMenu();
    if (this.mode === 'playing') this.pause();
    else if (this.mode === 'paused') this.resume();
    else if (this.mode === 'menu') this.menu.back();
  }

  /** Online tidak bisa dijeda: Esc membuka menu kecil, balapan tetap berjalan. */
  #openNetMenu() {
    this.netMenuOpen = true;
    this.input.clear();
    this.input.enabled = false;
    this.touch.release();
    this.menu.show('netpause');
  }

  #closeNetMenu() {
    if (!this.netMenuOpen) return;
    this.netMenuOpen = false;
    this.input.clear();
    this.input.enabled = true;
    this.menu.hide();
  }

  /** Akhiri tampilan balapan (tanpa membuka menu). */
  #endRaceView() {
    this.mode = 'menu';
    this.menuView = 'main';
    this.duo = false;
    this.netRace = null;
    this.netMenuOpen = false;
    this.input.enabled = true;
    this.#showHud(false);
    this.audio.stopEngine();
    this.audio.setDuo(false);
    this.speedLines.update(1, 0);
    this.speedLines2?.setVisible(false);
    this.cars = [];
    this.pilots = [];
    this.items.reset();
    this.input.setMode('solo');
    this.vehicle.setNameTag(null);
    this.vehicle2?.setNameTag(null);
  }

  toMenu() {
    if (this.online.active) this.online.leave(); // keluar dari ruang online
    this.mode = 'menu';
    this.menuView = 'main';
    this.duo = false;
    this.netRace = null;
    this.netMenuOpen = false;
    this.input.enabled = true;
    this.#showHud(false);
    this.audio.stopEngine();
    this.audio.setDuo(false);
    this.speedLines.update(1, 0);
    this.speedLines2?.setVisible(false);
    this.cars = [];
    this.pilots = [];
    this.items.reset();
    this.input.setMode('solo');
    if (this.vehicleVariant !== 'solo' || this.vehicle.spec.id !== this.settings.car) this.loadCar(this.settings.car);
    this.vehicle.setNameTag(null);
    this.vehicle2?.setNameTag(null);
    this.#placeOnGrid();
    this.#updateTouch();
    this.resize();
    this.menu.show('main');
  }

  #showResults() {
    this.mode = 'results';
    this.#showHud(false);
    this.audio.stopEngine();
    this.#updateTouch();
    const versus = this.duo || !!this.netRace;
    this.menu.updateResults(this.race.standings, this.race.totalLaps, versus, this.netRace ? this.player : null);
    if (this.duo) {
      this.menu.showDuoResults(
        this.pilots.map((p) => ({ name: p.name, racer: p.racer })),
        this.cars.length,
      );
    } else if (this.netRace) {
      const humans = this.race.racers.filter((r) => r.isPlayer).sort((a, b) => a.playerIndex - b.playerIndex);
      this.menu.showDuoResults(
        humans.map((r) => ({ name: r.name, racer: r })),
        this.cars.length,
        { online: this.netRace.role, me: this.player },
      );
    } else this.menu.showResults(this.player, this.cars.length);
  }

  /** Kembalikan mobil ke tengah jalan (R = PEMAIN 1 / pemain tunggal, Backspace = PEMAIN 2). */
  resetCar(i = 0) {
    const p = this.pilots[i];
    if (this.mode !== 'playing' || !p || p.done || !this.race?.canMove) return;
    p.vehicle.place(this.track, p.vehicle.state.s, 0);
    p.chase.snapTo(p.vehicle);
    p.hud.message('RESET', '', 0.8);
  }

  /** Tombol gamepad: Start = jeda, Back = reset; di menu diteruskan ke navigasi menu. */
  #onPad(e) {
    if (e.button === 'start' && (this.mode === 'playing' || this.mode === 'paused')) return this.togglePause();
    if (e.button === 'back' && this.mode === 'playing') return this.resetCar(e.player);
    if (this.mode === 'menu' || this.mode === 'results') this.menu.padNav(e);
  }

  resize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    this.renderer.setSize(w, h);
    const pr = this.renderer.getPixelRatio();
    const layer = this.hudLayer;
    if (this.split) {
      // Layar terbagi: PEMAIN 1 di atas / kiri, PEMAIN 2 di bawah / kanan
      const tb = this.settings.duoLayout !== 'kiri-kanan';
      const v1 = tb ? { x: 0, y: 0, w, h: Math.floor(h / 2) } : { x: 0, y: 0, w: Math.floor(w / 2), h };
      const v2 = tb ? { x: 0, y: v1.h, w, h: h - v1.h } : { x: v1.w, y: 0, w: w - v1.w, h };
      [v1, v2].forEach((v, i) => {
        const p = this.pilots[i];
        p.view = v;
        p.camera.aspect = v.w / v.h;
        p.camera.updateProjectionMatrix();
        p.chase.setViewAspect(v.w / v.h);
        p.speedLines.setRect(v);
        p.speedLines.setVisible(true);
        const st = p.hud.root.style;
        st.left = `${v.x}px`;
        st.top = `${v.y}px`;
        st.width = `${v.w}px`;
        st.height = `${v.h}px`;
      });
      layer.classList.add('duo');
      layer.classList.toggle('tb', tb);
      layer.classList.toggle('lr', !tb);
      const ls = this.splitLine.style;
      if (tb) Object.assign(ls, { left: '0px', width: `${w}px`, top: `${v1.h - 1.5}px`, height: '3px' });
      else Object.assign(ls, { top: '0px', height: `${h}px`, left: `${v1.w - 1.5}px`, width: '3px' });
      this.splitLine.hidden = false;
    } else {
      this.camera.aspect = w / h;
      this.camera.updateProjectionMatrix();
      this.chase?.setViewAspect(null);
      this.speedLines?.setRect(null);
      this.speedLines2?.setVisible(false);
      for (const hd of [this.hud, this.hud2]) {
        if (!hd) continue;
        const st = hd.root.style;
        st.left = st.top = st.width = st.height = '';
      }
      layer?.classList.remove('duo', 'tb', 'lr');
      if (this.splitLine) this.splitLine.hidden = true;
    }
    const ph = (this.split ? this.pilots[0].view.h : h) * pr;
    this.flames?.setViewportHeight(ph);
    this.smoke?.setViewportHeight(ph);
    this.needsRender = true;
  }

  // ------------------------------------------------------------------ loop
  #frame(timestamp) {
    this.timer.update(timestamp);
    const realDt = Math.min(0.1, this.timer.getDelta());
    const dt = realDt * this.timeScale;
    this.time += dt;
    this.#countFps(realDt);
    this.#autoQuality(realDt);
    this.input.poll(); // gamepad

    if (this.mode === 'playing' || this.mode === 'results') this.#updatePlaying(dt);
    else if (this.mode === 'menu') {
      if (this.menuView === 'garage' || this.menuView === 'online') {
        this.vehicle.syncVisual(dt);
        this.chase.orbit(dt, this.vehicle);
      } else if (this.menuView === 'duo' && this.vehicle2) {
        this.vehicle.syncVisual(dt);
        this.vehicle2.syncVisual(dt);
        this.chase.showcase(dt, this.vehicle, this.vehicle2);
        this.menu.setPadStatus(this.input.padCount, this.input.padOwners);
      } else this.chase.flyThrough(dt, this.track);
    }
    // Mode online: kirim snapshot (host) / posisi mobil sendiri (tamu) ±20× per detik
    if (this.netRace && (this.mode === 'playing' || this.mode === 'results')) this.online.tick(realDt);
    this.online.frame(realDt);

    // Saat jeda gambar diam: render sekali saja agar GPU tidak bekerja sia-sia
    if (this.mode === 'paused' && !this.needsRender) return;
    this.needsRender = false;

    this.sky.material.uniforms.time.value = this.time;
    this.track.update(dt, this.time);
    this.itemVisuals.update(dt, this.time);
    this.flames.update(dt);
    this.smoke.update(dt);
    this.renderer.info.reset();
    if (this.split) {
      this.#renderSplit();
    } else {
      const flying = this.mode === 'menu' && !['garage', 'duo', 'online'].includes(this.menuView);
      this.#updateSun(flying ? this.chase.look : this.vehicle.object.position);
      this.#updateNameTags(this.camera, this.vehicle);
      this.renderer.render(this.scene, this.camera);
      this.renders = 1;
    }
  }

  /** Dua tampilan dalam satu kanvas (viewport + scissor). Bayangan matahari mengikuti mobil masing-masing. */
  #renderSplit() {
    const r = this.renderer;
    const size = r.getSize(_size);
    const pr = r.getPixelRatio();
    r.setScissorTest(true);
    for (const p of this.pilots) {
      const v = p.view;
      const y = size.y - v.y - v.h; // WebGL menghitung dari bawah
      r.setViewport(v.x, y, v.w, v.h);
      r.setScissor(v.x, y, v.w, v.h);
      const ph = (v.h * pr) / p.chase.fovK;
      this.flames.setViewportHeight(ph);
      this.smoke.setViewportHeight(ph);
      this.#updateSun(p.vehicle.object.position);
      this.#updateNameTags(p.camera, p.vehicle);
      r.render(this.scene, p.camera);
    }
    r.setScissorTest(false);
    r.setViewport(0, 0, size.x, size.y);
    this.renders = this.pilots.length;
  }

  /** Satu langkah fisika untuk semua mobil + aturan balapan + item. */
  #stepWorld(h) {
    const path = this.track.path;
    if (this.race.canMove) {
      // Rubber band AI mengacu ke pemain manusia terdepan (termasuk lawan online)
      let lead = -Infinity;
      for (const c of this.cars) if (c.racer.isPlayer) lead = Math.max(lead, c.racer.progress);
      const allDone = this.#humansDone();
      for (let i = 0; i < this.cars.length; i++) {
        const car = this.cars[i];
        if (car.remote) continue; // mobil perangkat lain: posisinya dari jaringan
        let inp;
        if (car.pilot) {
          const p = car.pilot;
          inp = p.done ? p.cooldownAI.computeInput(car.state, { cars: this.cars, self: i, cruise: true }, h, this.aiInput) : p.controls;
        } else {
          inp = car.ai.computeInput(
            car.state,
            { cars: this.cars, self: i, playerGap: car.racer.progress - lead, cruise: car.racer.finished || allDone },
            h,
            this.aiInput,
          );
          if (car.ai.wantsRespawn) {
            car.ai.wantsRespawn = false;
            car.vehicle.place(this.track, car.state.s, 0);
          }
        }
        car.vehicle.step(inp, this.track, h);
      }
      if (this.cars.length > 1) resolveCarCollisions(this.cars, path);
      // Item: tiap perangkat hanya memeriksa mobil yang disimulasikannya sendiri
      this.items.update(h, this.netRace ? this.cars.filter((c) => !c.remote) : this.cars);
    }
    this.race.update(h);
  }

  #allDone() {
    return this.pilots.every((p) => p.done);
  }

  /** Semua pembalap manusia (di perangkat ini & lawan online) sudah finis / waktu habis? */
  #humansDone() {
    if (!this.#allDone()) return false;
    return this.cars.every((c) => !c.remote || !c.racer.isPlayer || c.racer.finished || c.gone);
  }

  #updatePlaying(dt) {
    for (const p of this.pilots) this.input.read(p.controls, p.index);
    // Mobil milik perangkat lain (online): perkirakan & haluskan posisinya dulu, sekali per frame
    if (this.netRace) {
      const path = this.track.path;
      for (const car of this.cars) if (car.remote && !car.gone) car.remote.apply(car.state, this.time, dt, path);
    }

    this.accumulator += dt;
    let steps = 0;
    const maxSteps = MAX_STEPS_PER_FRAME * Math.max(1, Math.ceil(this.timeScale));
    while (this.accumulator >= WORLD.fixedStep && steps < maxSteps) {
      this.#stepWorld(WORLD.fixedStep);
      this.accumulator -= WORLD.fixedStep;
      steps++;
    }
    if (steps === maxSteps) this.accumulator = 0; // perangkat terlalu lambat: buang sisa waktu

    // Efek tabrakan & pendaratan (tiap pemain di bagian layarnya sendiri)
    for (const p of this.pilots) {
      const st = p.vehicle.state;
      const hit = Math.max(st.impact, st.carImpact * 0.8);
      if (hit > 2 && this.mode === 'playing') {
        const shielded = st.fx.shield > 0;
        p.chase.addShake(Math.min(shielded ? 0.2 : 0.7, hit / 25));
        if (!shielded) p.hud.flash(Math.min(0.6, hit / 35));
        this.audio.hit(hit);
      }
      if (st.landing > 4) p.chase.addShake(Math.min(0.4, st.landing / 30));
    }

    for (const car of this.cars) {
      car.vehicle.syncVisual(dt);
      this.#emitParticles(car, dt);
      car.state.impact = 0;
      car.state.carImpact = 0;
      car.state.landing = 0;
    }
    if (this.cars.length === 0) this.vehicle.syncVisual(dt);
    for (const p of this.pilots) p.chase.follow(dt, p.vehicle);

    this.#handleRaceEvents();
    this.#handleItemEvents();
    this.#checkPortals();

    // Timer UI
    if (this.goTimer > 0) {
      this.goTimer -= dt;
      if (this.goTimer <= 0) for (const p of this.pilots) p.hud.countdown(null);
    }
    if (this.resultsTimer > 0) {
      this.resultsTimer -= dt;
      if (this.resultsTimer <= 0 && this.mode === 'playing') this.#showResults();
    }
    if (this.mode === 'results') {
      for (const p of this.pilots) p.speedLines.update(dt, 0);
      this.resultsRefresh -= dt;
      if (this.resultsRefresh <= 0) {
        this.resultsRefresh = 0.25;
        this.menu.updateResults(this.race.standings, this.race.totalLaps, this.duo || !!this.netRace, this.netRace ? this.player : null);
      }
      return;
    }

    for (const p of this.pilots) {
      const v = p.vehicle;
      const st = v.state;
      // Garis kecepatan saat nitro / item kecepatan
      let lines = 0, lineColor = '255,255,255';
      if (st.boosting) {
        lines = 1;
        lineColor = '186,230,253';
      } else if (st.fx.turbo > 0) {
        lines = 0.7;
        lineColor = '253,186,116';
      } else if (st.fx.speed > 0) {
        lines = 0.7;
        lineColor = '253,224,71';
      }
      p.speedLines.update(dt, lines, lineColor);

      const r = p.racer;
      p.wrongWayTime = !p.done && this.race.isWrongWay(r) ? p.wrongWayTime + dt : 0;
      const speedRatio = Math.min(1, Math.abs(st.forwardSpeed) / v.phys.maxSpeed);
      this.audio.updateEngine(speedRatio, p.done ? 0.3 : st.boosting ? 1 : p.controls.throttle, true, p.index);
      this.audio.updateNitro(st.boosting, speedRatio, p.index);

      p.hud.update(dt, {
        mode: this.raceMode,
        speedKmh: v.speedKmh,
        position: r.position,
        lap: r.lap,
        totalLaps: this.race.totalLaps,
        raceTime: this.race.time,
        standings: this.race.standings,
        timeLeft: this.race.timeLeft,
        finished: r.finished,
        checkpoint: r.nextCheckpoint,
        checkpointTotal: this.race.checkpoints.length,
        lapTime: r.finished ? 0 : this.race.currentLapTime(r),
        bestLap: r.bestLap,
        lastLap: r.lastLap,
        drifting: st.drifting,
        airborne: !st.onGround && st.airTime > 0.2,
        wrongWay: p.wrongWayTime > 1,
        nitro: st.nitro,
        boosting: st.boosting,
        fx: st.fx,
      });
      if (this.netRace) p.hud.setNetInfo(this.online.pingLabel(), this.online.laggy);

      // Peta mini: mobil sendiri digambar paling atas; pemain manusia lain diberi tepi putih
      const markers = [];
      for (const car of this.cars) {
        if (car.pilot === p) continue;
        markers.push({ x: car.state.x, z: car.state.z, heading: car.state.heading, color: car.racer.color, me: false, human: !!car.pilot });
      }
      markers.push({ x: st.x, z: st.z, heading: st.heading, color: p.color, me: true });
      p.hud.drawMinimap(markers);
    }
    this.wrongWayTime = this.pilots[0]?.wrongWayTime ?? 0;
  }

  /** Api nitro/turbo dari knalpot dan asap ban saat drift. */
  #emitParticles(car, dt) {
    const st = car.state;
    const v = car.vehicle;
    const acc = this.spawnAcc.get(car) ?? { flame: 0, smoke: 0 };
    this.spawnAcc.set(car, acc);
    const flaming = st.boosting || st.fx.turbo > 0;
    if (flaming && dt > 0) {
      acc.flame += dt * 70;
      v.object.updateMatrixWorld();
      const bx = -Math.sin(st.heading), bz = -Math.cos(st.heading);
      while (acc.flame >= 1) {
        acc.flame -= 1;
        for (let e = 0; e < v.model.exhausts.length; e++) {
          v.exhaustWorld(e, _v);
          const sp = 6 + Math.random() * 5;
          const turbo = !st.boosting;
          const c = turbo ? [1, 0.45 + Math.random() * 0.25, 0.12] : Math.random() < 0.5 ? [0.55, 0.9, 1] : [0.3, 0.55, 1];
          this.flames.spawn(
            _v.x + (Math.random() - 0.5) * 0.15, _v.y + (Math.random() - 0.5) * 0.1, _v.z + (Math.random() - 0.5) * 0.15,
            st.vx * 0.55 + bx * sp, 0.4 + Math.random() * 0.6, st.vz * 0.55 + bz * sp,
            0.22 + Math.random() * 0.12, 0.45, c[0], c[1], c[2], 1.6,
          );
        }
      }
    } else acc.flame = 0;

    if (st.drifting && Math.abs(st.forwardSpeed) > 12 && dt > 0) {
      acc.smoke += dt * 30;
      const rx = Math.cos(st.heading), rz = -Math.sin(st.heading);
      const bx = -Math.sin(st.heading), bz = -Math.cos(st.heading);
      const back = v.spec.shape.axleR;
      while (acc.smoke >= 1) {
        acc.smoke -= 1;
        for (const sx of [-1, 1]) {
          const x = st.x + rx * sx * v.spec.shape.track - bx * back;
          const z = st.z + rz * sx * v.spec.shape.track - bz * back;
          this.smoke.spawn(x, st.y + 0.25, z, st.vx * 0.2, 0.8, st.vz * 0.2, 0.9, 0.9, 0.86, 0.86, 0.88, 3.2);
        }
      }
    } else acc.smoke = 0;
  }

  #handleItemEvents() {
    for (const e of this.items.drainEvents()) {
      if (e.type !== 'pickup') continue;
      const it = e.item;
      this.#itemBurst(it);
      const p = e.car ? this.pilots.find((q) => q.vehicle.state === e.car.state) : null;
      if (p && this.mode === 'playing') {
        const t = ITEM_TYPES[it.type];
        p.hud.message(t.name, t.label, 1.3, `item-${it.type}`);
        this.audio.pickup(it.type);
      }
      // Tamu online: laporkan ke host agar item ikut hilang di perangkat host
      if (p && this.netRace?.role === 'guest') {
        this.netRace.pending.set(it.id, this.time + 1.5);
        this.online.sendPick(it.id);
      }
    }
  }

  /** Percikan warna saat item diambil. */
  #itemBurst(it) {
    const col = new THREE.Color(ITEM_TYPES[it.type].color);
    for (let i = 0; i < 26; i++) {
      const a = Math.random() * Math.PI * 2;
      const sp = 4 + Math.random() * 6;
      this.flames.spawn(it.x, it.y + 1.4, it.z, Math.cos(a) * sp, 1 + Math.random() * 4, Math.sin(a) * sp, 0.5, 0.5, col.r, col.g, col.b, 0.8);
    }
  }

  /** Portal Gurun 4D: kilatan & bunyi saat pemain melintas (efek visual). */
  #checkPortals() {
    const portals = this.track.portals;
    const L = this.track.path.length;
    for (const p of this.pilots) {
      const s = p.vehicle.state.s;
      if (portals && this.mode === 'playing') {
        let d = s - p.prevS;
        if (d < -L / 2) d += L;
        if (d > 0 && d < 40) {
          for (const portal of portals) {
            let t = portal.s - p.prevS;
            if (t < 0) t += L;
            if (t > 0 && t <= d) {
              this.audio.portal();
              p.hud.portalFlash?.();
            }
          }
        }
      }
      p.prevS = s;
    }
    if (this.pilots[0]) this.prevPlayerS = this.pilots[0].prevS;
  }

  #pilotOf(racer) {
    return this.pilots.find((p) => p.racer === racer) ?? null;
  }

  /** Pemain selesai (finis / waktu habis): kontrol dimatikan, mobil melaju santai dengan autopilot. */
  #pilotDone(p) {
    p.done = true;
    this.input.setPlayerEnabled(p.index, false);
    if (p.index === 0) this.touch.release();
    this.playerDone = this.pilots[0].done;
  }

  #handleRaceEvents() {
    const forward = this.netRace?.role === 'host';
    for (const e of this.race.drainEvents()) {
      if (forward) this.online.sendEvent(packEvent(e)); // host meneruskan semua event balapan ke tamu
      switch (e.type) {
        case 'count':
          for (const p of this.pilots) p.hud.countdown(e.value);
          this.audio.countBeep();
          break;
        case 'go':
          for (const p of this.pilots) p.hud.countdown('GO');
          this.audio.goBeep();
          this.goTimer = 0.9;
          break;
        case 'checkpoint': {
          const p = this.#pilotOf(e.racer);
          if (p) {
            p.hud.message(`CHECKPOINT ${e.index}/${this.race.checkpoints.length}`, '', 1.1, 'cp');
            this.audio.checkpoint();
          }
          break;
        }
        case 'lap': {
          const p = this.#pilotOf(e.racer);
          if (p) {
            const t = e.lapTime.toFixed(2).replace('.', ',');
            if (this.raceMode === 'race') {
              p.hud.message(e.final ? 'LAP TERAKHIR!' : `LAP ${e.lap}/${this.race.totalLaps}`, `Lap sebelumnya ${t} detik${e.isBest ? ' · TERBAIK' : ''}`, 2.4, e.final ? 'best' : '');
            } else {
              p.hud.message(e.isBest ? 'REKOR BARU!' : `LAP ${e.lap - 1} SELESAI`, `Waktu lap ${t} detik`, 2.6, e.isBest ? 'best' : '');
            }
            this.audio.lap(e.isBest);
          }
          break;
        }
        case 'finish': {
          const p = this.#pilotOf(e.racer);
          if (p) {
            this.#pilotDone(p);
            const win = e.place === 1;
            p.hud.message(win ? 'JUARA 1!' : 'FINIS!', `Posisi ${e.place} · ${e.time.toFixed(2).replace('.', ',')} detik`, RESULTS_DELAY, win ? 'best' : '');
            this.audio.finish(win);
            if (this.#humansDone()) this.resultsTimer = RESULTS_DELAY;
          } else if (e.racer?.isPlayer && this.#humansDone() && this.resultsTimer <= 0) {
            this.resultsTimer = RESULTS_DELAY; // lawan online finis setelah pemain di perangkat ini
          }
          if (e.place === 1) {
            for (const q of this.pilots) {
              if (q !== p && !q.done) q.hud.message(`${e.racer.name} FINIS PERTAMA`, `Selesaikan balapan dalam ${FINISH_TIMEOUT} detik!`, 2.4, 'warn');
            }
          }
          break;
        }
        case 'dnf': {
          const p = this.#pilotOf(e.racer);
          if (p) {
            this.#pilotDone(p);
            p.hud.message('WAKTU HABIS', 'Kamu tidak sempat finis', 2.2, 'warn');
            this.audio.finish(false);
            if (this.#humansDone()) this.resultsTimer = Math.max(this.resultsTimer, 2.2);
          } else if (e.racer?.isPlayer && this.#humansDone() && this.resultsTimer <= 0) {
            this.resultsTimer = 2.2;
          }
          break;
        }
      }
    }
  }

  /**
   * Papan nama hanya tampil pada jarak sedang (tidak menutupi layar, tidak jadi titik kecil).
   * own = mobil pemilik kamera (papan namanya sendiri disembunyikan).
   */
  #updateNameTags(camera, own) {
    const cam = camera.position;
    const show = this.mode === 'playing' && this.raceMode === 'race';
    const list = this.rivals.map((r) => r.vehicle);
    list.push(this.vehicle);
    if (this.vehicle2) list.push(this.vehicle2);
    for (const v of list) {
      const tag = v.nameTag;
      if (!tag) continue;
      const d = show && v !== own ? cam.distanceTo(v.object.position) : Infinity;
      tag.visible = d > 14 && d < 95;
    }
  }

  #updateSun(focus) {
    this.sun.target.position.copy(focus);
    this.sun.position.copy(focus).addScaledVector(this.sunDir, this.sunDistance ?? 160);
  }

  #countFps(dt) {
    const f = this.fps;
    f.frames++;
    f.time += dt;
    if (f.time >= 0.5) {
      f.value = Math.round(f.frames / f.time);
      f.frames = 0;
      f.time = 0;
      if (this.debug || this.settings.showFps) this.hud.setFps(f.value, QUALITY[this.qualityLevel].label);
    }
  }

  // ------------------------------------------------------------------ ONLINE (dipanggil OnlineSession)
  /** Host: mulai balapan online. cfg: { track, laps, rivals, diff, host:{name,car}, guest:{name,car} } */
  netStartHost(cfg) {
    if (this.track.def.id !== cfg.track) {
      this.settings.track = cfg.track;
      this.loadTrack(cfg.track);
    }
    this.#begin('race', { net: { ...cfg, role: 'host' } });
  }

  /** Tamu: mulai balapan sesuai pesan 'start' dari host. */
  netStartGuest(cfg) {
    if (!TRACKS[cfg.track] || !CARS[cfg.host?.car] || !CARS[cfg.guest?.car]) return false;
    if (this.track.def.id !== cfg.track) {
      this.settings.track = cfg.track;
      saveSettings(this.settings);
      this.loadTrack(cfg.track);
    }
    this.#begin('race', { net: { ...cfg, role: 'guest' } });
    return true;
  }

  /** Kembali ke lobi online (koneksi tetap tersambung). */
  netToLobby() {
    if (this.mode !== 'menu') {
      this.#endRaceView();
      this.#updateTouch();
      this.resize();
    }
    this.menu.show('online');
    this.#onMenuScreen('online');
  }

  /** Tamu: host keluar / koneksi putus → kembali ke layar online (pesan diatur OnlineSession). */
  netHostLost() {
    this.netToLobby();
  }

  /** Mobil di lobi online: cat sesuai peran (host = P1, tamu = P2). */
  netRefreshCar() {
    const role = this.online.role === 'host' ? 'p1' : this.online.role === 'guest' ? 'p2' : 'solo';
    if (this.vehicle.spec.id !== this.settings.car || this.vehicleVariant !== role) {
      this.loadCar(this.settings.car, role);
      this.#placeOnGrid();
    }
  }

  #onNetProfile() {
    saveSettings(this.settings);
    if (this.menuView === 'online') this.netRefreshCar();
    this.online.sendProfile();
  }

  #carById() {
    if (!this.netRace.byId) this.netRace.byId = new Map(this.cars.map((c) => [c.racer.id, c]));
    return this.netRace.byId;
  }

  /** Host → tamu: keadaan balapan ringkas. */
  netBuildSnapshot() {
    const r = this.race;
    const round = (v, k) => Math.round(v * k) / k;
    return {
      t: 'snap',
      ph: r.phase,
      cd: round(r.countdown, 100),
      tm: round(r.time, 1000),
      tl: r.timeLeft === null ? null : round(r.timeLeft, 100),
      cars: this.cars.filter((c) => !c.remote).map((c) => [c.racer.id, packCar(c.state)]),
      rc: r.racers.map(packRacer),
      it: packItems(this.items.items),
    };
  }

  /** Tamu: terapkan snapshot dari host. */
  netSnapshot(m) {
    if (this.netRace?.role !== 'guest') return;
    this.race.applySnapshot(m);
    const byId = this.#carById();
    for (const [id, packed] of m.cars ?? []) {
      const car = byId.get(id);
      if (car?.remote) car.remote.push(packed, this.time);
    }
    if (typeof m.it === 'string') this.#applyItemBits(m.it);
  }

  /** Tamu: status item mengikuti host (item yang baru diambil sendiri ditahan hilang sampai host mengonfirmasi). */
  #applyItemBits(bits) {
    const nr = this.netRace;
    this.items.items.forEach((it, i) => {
      const on = bits[i] === '1';
      const until = nr.pending.get(it.id);
      if (until !== undefined) {
        if (on && this.time < until) return;
        nr.pending.delete(it.id);
      }
      if (it.active && !on && nr.itemBits) this.#itemBurst(it); // diambil pembalap lain
      it.active = on;
      if (!on) it.timer = 999; // muncul lagi hanya bila host bilang muncul
    });
    nr.itemBits = bits;
  }

  /** Host: posisi terbaru mobil tamu. */
  netRemoteCar(packed) {
    const car = this.netRace?.guestCar;
    if (car && !car.gone && Array.isArray(packed)) car.remote.push(packed, this.time);
  }

  /** Host: tamu mengambil item (efeknya sudah diterapkan di perangkat tamu). */
  netPick(id) {
    if (this.netRace?.role === 'host') this.items.takeRemote(id, this.netRace.guestCar);
  }

  /** Tamu: event balapan dari host. */
  netEvent(e) {
    if (this.netRace?.role === 'guest' && e && typeof e.type === 'string') this.race.pushEvent(e);
  }

  /** Tamu → host: state mobil sendiri. */
  netOwnCar() {
    return packCar(this.vehicle.state);
  }

  /** Host: lawan keluar saat balapan → dianggap tidak finis, balapan lanjut melawan AI. */
  netOpponentLeft(reason) {
    const nr = this.netRace;
    if (!nr || nr.role !== 'host') return;
    const car = nr.guestCar;
    if (!car || car.gone) return;
    car.gone = true;
    car.vehicle.object.visible = false;
    this.cars = this.cars.filter((c) => c !== car);
    nr.byId = null;
    if (!car.racer.finished) {
      car.racer.finished = true;
      car.racer.dnf = true;
    }
    if (this.mode === 'playing') this.hud.message('LAWAN KELUAR', reason || 'Balapan dilanjutkan melawan AI', 2.6, 'warn');
    if (this.#humansDone() && this.resultsTimer <= 0 && this.mode === 'playing') this.resultsTimer = RESULTS_DELAY;
  }

  /** Untuk pengujian otomatis: status ringkas permainan. */
  snapshot() {
    const st = this.vehicle.state;
    const race = this.race;
    return {
      mode: this.mode,
      menuView: this.menuView,
      menuScreen: this.menu?.current ?? null,
      raceMode: this.raceMode,
      car: this.vehicle.spec.id,
      track: this.track.def.id,
      settings: JSON.parse(JSON.stringify(this.settings)),
      quality: this.qualityLevel,
      shadows: this.renderer.shadowMap.enabled,
      pixelRatio: this.renderer.getPixelRatio(),
      touch: this.touch.enabled,
      phase: race?.phase ?? 'idle',
      countdown: race?.countdown ?? 0,
      totalLaps: race?.totalLaps ?? 0,
      fps: this.fps.value,
      raceTime: race?.time ?? 0,
      x: st.x,
      y: st.y,
      z: st.z,
      s: st.s,
      lateral: st.lateral,
      extent: st.extent,
      speedKmh: this.vehicle.speedKmh,
      onGround: st.onGround,
      heading: st.heading,
      nitro: st.nitro,
      boosting: st.boosting,
      fx: { ...st.fx },
      cool: { ...st.cool },
      lap: this.player?.lap ?? 0,
      position: this.player?.position ?? 0,
      finished: this.player?.finished ?? false,
      checkpoint: this.player?.nextCheckpoint ?? 0,
      bestLap: this.player?.bestLap ?? null,
      items: this.items.items.map((i) => ({ type: i.type, active: i.active, x: i.x, z: i.z, s: i.s, lateral: i.lateral })),
      racers: (race?.standings ?? []).map((r) => ({
        id: r.id,
        name: r.name,
        isPlayer: r.isPlayer,
        playerIndex: r.playerIndex ?? null,
        car: r.carName,
        position: r.position,
        lap: r.lap,
        finished: r.finished,
        dnf: r.dnf,
        finishTime: r.finishTime,
        progress: r.progress,
        speed: r.vehicle.state.forwardSpeed,
        x: r.vehicle.state.x,
        z: r.vehicle.state.z,
        lateral: r.vehicle.state.lateral,
        extent: r.vehicle.state.extent,
        nitro: r.vehicle.state.nitro,
      })),
      // --- mode online
      net: this.online.debugInfo(),
      netRace: this.netRace ? { role: this.netRace.role, rivals: this.netRace.rivals, guestGone: !!this.netRace.guestCar?.gone } : null,
      remotes: this.cars.filter((c) => c.remote).map((c) => ({ id: c.racer.id, x: c.state.x, z: c.state.z, s: c.state.s, speedKmh: c.state.forwardSpeed * 3.6, updates: c.remote.count, visible: c.vehicle.object.visible })),
      // --- mode 2 PEMAIN
      duo: this.duo,
      split: this.split,
      layout: this.settings.duoLayout,
      renders: this.renders,
      views: this.split ? this.pilots.map((p) => ({ ...p.view })) : null,
      pads: this.input.padCount,
      padOwners: [...this.input.padOwners],
      p1tag: !!this.vehicle.nameTag,
      p2: this.vehicle2 ? { car: this.vehicle2.spec.id, visible: this.vehicle2.object.visible, tag: !!this.vehicle2.nameTag } : null,
      players: this.pilots.map((p) => {
        const ps = p.vehicle.state;
        const c = p.camera;
        return {
          index: p.index,
          id: p.racer.id,
          name: p.name,
          car: p.vehicle.spec.id,
          speedKmh: p.vehicle.speedKmh,
          x: ps.x,
          y: ps.y,
          z: ps.z,
          s: ps.s,
          lateral: ps.lateral,
          extent: ps.extent,
          heading: ps.heading,
          nitro: ps.nitro,
          boosting: ps.boosting,
          drifting: ps.drifting,
          fx: { ...ps.fx },
          position: p.racer.position,
          lap: p.racer.lap,
          finished: p.racer.finished,
          dnf: p.racer.dnf,
          done: p.done,
          controls: { ...p.controls },
          cam: { x: c.position.x, y: c.position.y, z: c.position.z, aspect: c.aspect, fov: c.fov },
        };
      }),
      result: this.menu?.result ?? null,
      wallOffset: this.track.path.wallOffset,
      halfWidth: this.vehicle.phys.halfWidth,
      trackLength: this.track.path.length,
      drawCalls: this.renderer.info.render.calls,
      triangles: this.renderer.info.render.triangles,
      geometries: this.renderer.info.memory.geometries,
      textures: this.renderer.info.memory.textures,
    };
  }

  dispose() {
    this.renderer.setAnimationLoop(null);
    this.timer.dispose();
    window.removeEventListener('resize', this._onResize);
    window.removeEventListener('pointerdown', this._onGesture);
    window.removeEventListener('keydown', this._onGesture);
    document.removeEventListener('visibilitychange', this._onVisibility);
    this.input.dispose();
    this.audio.dispose();
    this.vehicle.dispose();
    this.vehicle2?.dispose();
    for (const r of this.rivals) r.vehicle.dispose();
    this.flames.dispose();
    this.smoke.dispose();
    this.track.dispose();
    this.envMap.dispose();
    this.sky.geometry.dispose();
    this.sky.material.dispose();
    this.renderer.dispose();
    this.renderer.domElement.remove();
  }
}
