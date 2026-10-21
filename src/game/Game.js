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
import { Menu } from '../ui/Menu.js';
import { TouchControls } from '../ui/TouchControls.js';
import { SpeedLines } from '../ui/SpeedLines.js';

const MAX_STEPS_PER_FRAME = 12;
const PLAYER_SLOT_RACE = 5; // pemain mulai dari barisan paling belakang
const PLAYER_SLOT_PRACTICE = 0;
const PLAYER_COLOR = '#ef4444';
const FINISH_TIMEOUT = 60; // detik setelah pemenang finis
const RESULTS_DELAY = 2.6; // detik setelah pemain finis sebelum layar hasil muncul
const QUALITY_STEPS = ['rendah', 'sedang', 'tinggi'];

const hex = (n) => '#' + new THREE.Color(n).getHexString();
const _v = new THREE.Vector3();

/**
 * Game — pengendali utama: renderer, scene, loop, dan alur permainan.
 * Mode: 'menu' → 'playing' ⇄ 'paused' → 'results' → (main lagi / menu)
 */
export class Game {
  constructor({ container, hudRoot, menuRoot, touchRoot, debug = false }) {
    this.container = container;
    this.debug = debug;
    this.settings = loadSettings();
    this.mode = 'menu';
    this.menuView = 'main'; // 'main' | 'garage' | 'tracks'
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
    this.spawnAcc = new Map();

    this.#initRenderer();
    this.#initScene();

    this.audio = new GameAudio();
    this.audio.setVolume(this.settings.volume);
    this.input = new Input(window);
    this.input.on('pause', () => this.togglePause());
    this.input.on('reset', () => this.resetCar());
    this.input.on('mute', () => {
      const muted = this.audio.toggleMute();
      if (this.mode === 'playing') this.hud.message(muted ? 'SUARA MATI' : 'SUARA HIDUP', '', 0.9);
    });

    this.hud = new HUD(hudRoot);
    this.speedLines = new SpeedLines(container.parentElement);
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
    });
    this.#updateQualityNote();

    this._onResize = () => this.resize();
    this._onVisibility = () => {
      if (document.hidden && this.mode === 'playing') this.pause();
    };
    window.addEventListener('resize', this._onResize);
    document.addEventListener('visibilitychange', this._onVisibility);

    this.resize();
    this.toMenu();
    this.renderer.setAnimationLoop((t) => this.#frame(t));
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
    this.items = new ItemSystem(this.track.path, def.items);
    this.itemVisuals = new ItemVisuals(this.items.items, this.track.group);
    this.flames?.clear();
    this.smoke?.clear();
    if (this.vehicle) this.#placeOnGrid();
  }

  loadCar(id) {
    if (this.vehicle) this.vehicle.dispose();
    this.vehicle = new Vehicle(CARS[id], { glow: CARS[id].glow });
    this.scene.add(this.vehicle.object);
    const g = gridSlot(PLAYER_SLOT_RACE);
    this.vehicle.place(this.track, g.s, g.lateral);
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

  /** Susun mobil di grid start. Mode latihan / garasi: hanya mobil pemain. */
  #placeOnGrid() {
    const practice = this.raceMode === 'practice' && this.mode !== 'menu';
    const garage = this.mode === 'menu' && this.menuView === 'garage';
    if (garage) {
      this.vehicle.place(this.track, -26, 0);
    } else {
      const ps = gridSlot(practice ? PLAYER_SLOT_PRACTICE : PLAYER_SLOT_RACE);
      this.vehicle.place(this.track, ps.s, ps.lateral);
    }
    const slots = [0, 1, 2, 3, 4, 5].filter((k) => k !== PLAYER_SLOT_RACE);
    this.rivals.forEach((r, i) => {
      const g = gridSlot(slots[i]);
      r.vehicle.place(this.track, g.s, g.lateral);
      r.vehicle.object.visible = !practice && !garage;
    });
  }

  // ------------------------------------------------------------------ menu: mobil, lintasan, pengaturan
  #onMenuScreen(name) {
    this.menuView = name;
    if (name === 'garage' && !this.carThumbs) {
      // Gambar mini 3D tiap mobil, dibuat sekali saat garasi pertama dibuka
      this.carThumbs = this.#renderCarThumbs();
      this.menu.setCarThumbs(this.carThumbs);
    }
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
  #begin(raceMode) {
    this.raceMode = raceMode;
    this.mode = 'playing';
    this.menuView = 'main';
    this.#placeOnGrid();
    const path = this.track.path;
    const diff = DIFFICULTY[this.settings.difficulty];

    this.race = new RaceManager(path, { mode: raceMode, laps: this.settings.laps, finishTimeout: FINISH_TIMEOUT });
    this.items.reset();
    this.cars = [];
    const ps = gridSlot(raceMode === 'race' ? PLAYER_SLOT_RACE : PLAYER_SLOT_PRACTICE);
    this.vehicle.resetForRace(this.track, ps.s, ps.lateral);
    const playerCar = { vehicle: this.vehicle, state: this.vehicle.state, phys: this.vehicle.phys, isPlayer: true, ai: null };
    playerCar.racer = this.race.addRacer('player', this.vehicle, { name: this.vehicle.spec.name, color: PLAYER_COLOR, isPlayer: true });
    playerCar.racer.carName = this.vehicle.spec.name;
    this.cars.push(playerCar);
    if (raceMode === 'race') {
      const slots = [0, 1, 2, 3, 4, 5].filter((k) => k !== PLAYER_SLOT_RACE);
      this.rivals.forEach((r, i) => {
        const g = gridSlot(slots[i]);
        r.vehicle.resetForRace(this.track, g.s, g.lateral);
        r.ai = new AIRacer(r.profile, r.vehicle.phys, path, diff);
        r.ai.items = this.items.items;
        const car = { vehicle: r.vehicle, state: r.vehicle.state, phys: r.vehicle.phys, isPlayer: false, ai: r.ai };
        car.racer = this.race.addRacer(r.profile.id, r.vehicle, { name: r.profile.name, color: hex(r.profile.color) });
        car.racer.carName = CARS[r.profile.car].name;
        this.cars.push(car);
      });
    }
    this.player = playerCar.racer;
    this.cooldownAI = new AIRacer(COOLDOWN_PROFILE, this.vehicle.phys, path, diff);
    this.cooldownAI.reaction = 0;
    this.playerDone = false;
    this.resultsTimer = 0;
    this.goTimer = 0;
    this.resultsRefresh = 0;
    this.prevPlayerS = this.vehicle.state.s;
    this.flames.clear();
    this.smoke.clear();
    this.race.start();

    this.chase.snapTo(this.vehicle);
    this.input.clear();
    this.touch.release();
    this.input.enabled = true;
    this.accumulator = 0;
    this.wrongWayTime = 0;
    this.menu.hide();
    this.hud.show(true);
    this.hud.setMode(raceMode, this.cars.length);
    this.hud.setRacers(this.cars.map((c) => c.racer));
    this.hud.showHint(raceMode === 'race' ? 12 : 10);
    this.#updateTouch();
    this.audio.unlock();
    if (raceMode === 'race') {
      this.hud.message('BERSIAP!', `${this.track.def.name} · ${this.settings.laps} lap · kalahkan ${RIVALS.length} lawan`, 1.2);
    } else {
      this.hud.message('LATIHAN BEBAS', `${this.track.def.name} · lewati 3 checkpoint lalu garis START`, 3.2);
    }
    this.timer.reset();
  }

  startRace() {
    this.#begin('race');
  }

  startPractice() {
    this.#begin('practice');
  }

  restart() {
    this.#begin(this.raceMode);
  }

  #updateTouch() {
    const t = this.settings.touch;
    const want = t === 'selalu' || (t === 'otomatis' && isTouchDevice());
    this.touch.setEnabled(want && this.mode === 'playing');
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
    if (this.mode === 'playing') this.pause();
    else if (this.mode === 'paused') this.resume();
    else if (this.mode === 'menu') this.menu.back();
  }

  toMenu() {
    this.mode = 'menu';
    this.menuView = 'main';
    this.hud.show(false);
    this.audio.stopEngine();
    this.speedLines.update(1, 0);
    this.cars = [];
    this.items.reset();
    this.#placeOnGrid();
    this.#updateTouch();
    this.menu.show('main');
  }

  #showResults() {
    this.mode = 'results';
    this.hud.show(false);
    this.audio.stopEngine();
    this.#updateTouch();
    this.menu.updateResults(this.race.standings, this.race.totalLaps);
    this.menu.showResults(this.player, this.cars.length);
  }

  /** Kembalikan mobil ke tengah jalan (tombol R). */
  resetCar() {
    if (this.mode !== 'playing' || this.playerDone || !this.race.canMove) return;
    this.vehicle.place(this.track, this.vehicle.state.s, 0);
    this.chase.snapTo(this.vehicle);
    this.hud.message('RESET', '', 0.8);
  }

  resize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
    this.speedLines?.resize();
    const ph = h * this.renderer.getPixelRatio();
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

    if (this.mode === 'playing' || this.mode === 'results') this.#updatePlaying(dt);
    else if (this.mode === 'menu') {
      if (this.menuView === 'garage') {
        this.vehicle.syncVisual(dt);
        this.chase.orbit(dt, this.vehicle);
      } else this.chase.flyThrough(dt, this.track);
    }

    // Saat jeda gambar diam: render sekali saja agar GPU tidak bekerja sia-sia
    if (this.mode === 'paused' && !this.needsRender) return;
    this.needsRender = false;

    const focus = this.mode === 'menu' && this.menuView !== 'garage' ? this.chase.look : this.vehicle.object.position;
    this.#updateSun(focus);
    this.sky.material.uniforms.time.value = this.time;
    this.track.update(dt, this.time);
    this.itemVisuals.update(dt, this.time);
    this.flames.update(dt);
    this.smoke.update(dt);
    this.#updateNameTags();
    this.renderer.render(this.scene, this.camera);
  }

  /** Satu langkah fisika untuk semua mobil + aturan balapan + item. */
  #stepWorld(h) {
    const path = this.track.path;
    if (this.race.canMove) {
      for (let i = 0; i < this.cars.length; i++) {
        const car = this.cars[i];
        let inp;
        if (car.isPlayer) {
          inp = this.playerDone
            ? this.cooldownAI.computeInput(car.state, { cars: this.cars, self: i, cruise: true }, h, this.aiInput)
            : this.controls;
        } else {
          inp = car.ai.computeInput(
            car.state,
            { cars: this.cars, self: i, playerGap: car.racer.progress - this.player.progress, cruise: car.racer.finished || this.playerDone },
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
      this.items.update(h, this.cars);
    }
    this.race.update(h);
  }

  #updatePlaying(dt) {
    const v = this.vehicle;
    const st = v.state;
    this.input.read(this.controls);

    this.accumulator += dt;
    let steps = 0;
    const maxSteps = MAX_STEPS_PER_FRAME * Math.max(1, Math.ceil(this.timeScale));
    while (this.accumulator >= WORLD.fixedStep && steps < maxSteps) {
      this.#stepWorld(WORLD.fixedStep);
      this.accumulator -= WORLD.fixedStep;
      steps++;
    }
    if (steps === maxSteps) this.accumulator = 0; // perangkat terlalu lambat: buang sisa waktu

    // Efek tabrakan & pendaratan (pemain)
    const hit = Math.max(st.impact, st.carImpact * 0.8);
    if (hit > 2 && this.mode === 'playing') {
      const shielded = st.fx.shield > 0;
      this.chase.addShake(Math.min(shielded ? 0.2 : 0.7, hit / 25));
      if (!shielded) this.hud.flash(Math.min(0.6, hit / 35));
      this.audio.hit(hit);
    }
    if (st.landing > 4) this.chase.addShake(Math.min(0.4, st.landing / 30));

    for (const car of this.cars) {
      car.vehicle.syncVisual(dt);
      this.#emitParticles(car, dt);
      car.state.impact = 0;
      car.state.carImpact = 0;
      car.state.landing = 0;
    }
    if (this.cars.length === 0) v.syncVisual(dt);
    this.chase.follow(dt, v);

    this.#handleRaceEvents();
    this.#handleItemEvents();
    this.#checkPortals();

    // Timer UI
    if (this.goTimer > 0) {
      this.goTimer -= dt;
      if (this.goTimer <= 0) this.hud.countdown(null);
    }
    if (this.resultsTimer > 0) {
      this.resultsTimer -= dt;
      if (this.resultsTimer <= 0 && this.mode === 'playing') this.#showResults();
    }
    if (this.mode === 'results') {
      this.speedLines.update(dt, 0);
      this.resultsRefresh -= dt;
      if (this.resultsRefresh <= 0) {
        this.resultsRefresh = 0.25;
        this.menu.updateResults(this.race.standings, this.race.totalLaps);
      }
      return;
    }

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
    this.speedLines.update(dt, lines, lineColor);

    this.wrongWayTime = !this.playerDone && this.race.isWrongWay(this.player) ? this.wrongWayTime + dt : 0;
    const speedRatio = Math.min(1, Math.abs(st.forwardSpeed) / v.phys.maxSpeed);
    this.audio.updateEngine(speedRatio, this.playerDone ? 0.3 : st.boosting ? 1 : this.controls.throttle, true);
    this.audio.updateNitro(st.boosting, speedRatio);

    this.hud.update(dt, {
      mode: this.raceMode,
      speedKmh: v.speedKmh,
      position: this.player.position,
      lap: this.player.lap,
      totalLaps: this.race.totalLaps,
      raceTime: this.race.time,
      standings: this.race.standings,
      timeLeft: this.race.timeLeft,
      finished: this.player.finished,
      checkpoint: this.player.nextCheckpoint,
      checkpointTotal: this.race.checkpoints.length,
      lapTime: this.player.finished ? 0 : this.race.currentLapTime(this.player),
      bestLap: this.player.bestLap,
      lastLap: this.player.lastLap,
      drifting: st.drifting,
      airborne: !st.onGround && st.airTime > 0.2,
      wrongWay: this.wrongWayTime > 1,
      nitro: st.nitro,
      boosting: st.boosting,
      fx: st.fx,
    });

    const markers = [];
    for (const car of this.cars) {
      if (car.isPlayer) continue;
      markers.push({ x: car.state.x, z: car.state.z, heading: car.state.heading, color: car.racer.color, me: false });
    }
    markers.push({ x: st.x, z: st.z, heading: st.heading, color: PLAYER_COLOR, me: true });
    this.hud.drawMinimap(markers);
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
      const col = new THREE.Color(ITEM_TYPES[it.type].color);
      for (let i = 0; i < 26; i++) {
        const a = Math.random() * Math.PI * 2;
        const sp = 4 + Math.random() * 6;
        this.flames.spawn(it.x, it.y + 1.4, it.z, Math.cos(a) * sp, 1 + Math.random() * 4, Math.sin(a) * sp, 0.5, 0.5, col.r, col.g, col.b, 0.8);
      }
      if (e.car.state === this.vehicle.state && this.mode === 'playing') {
        const t = ITEM_TYPES[it.type];
        this.hud.message(t.name, t.label, 1.3, `item-${it.type}`);
        this.audio.pickup(it.type);
      }
    }
  }

  /** Portal Gurun 4D: kilatan & bunyi saat pemain melintas (efek visual). */
  #checkPortals() {
    const portals = this.track.portals;
    const s = this.vehicle.state.s;
    if (portals && this.mode === 'playing') {
      const L = this.track.path.length;
      let d = s - this.prevPlayerS;
      if (d < -L / 2) d += L;
      if (d > 0 && d < 40) {
        for (const p of portals) {
          let t = p.s - this.prevPlayerS;
          if (t < 0) t += L;
          if (t > 0 && t <= d) {
            this.audio.portal();
            this.hud.portalFlash?.();
          }
        }
      }
    }
    this.prevPlayerS = s;
  }

  #handleRaceEvents() {
    const hud = this.hud;
    for (const e of this.race.drainEvents()) {
      switch (e.type) {
        case 'count':
          hud.countdown(e.value);
          this.audio.countBeep();
          break;
        case 'go':
          hud.countdown('GO');
          this.audio.goBeep();
          this.goTimer = 0.9;
          break;
        case 'checkpoint':
          if (e.racer === this.player) {
            hud.message(`CHECKPOINT ${e.index}/${this.race.checkpoints.length}`, '', 1.1, 'cp');
            this.audio.checkpoint();
          }
          break;
        case 'lap':
          if (e.racer === this.player) {
            const t = e.lapTime.toFixed(2).replace('.', ',');
            if (this.raceMode === 'race') {
              hud.message(e.final ? 'LAP TERAKHIR!' : `LAP ${e.lap}/${this.race.totalLaps}`, `Lap sebelumnya ${t} detik${e.isBest ? ' · TERBAIK' : ''}`, 2.4, e.final ? 'best' : '');
            } else {
              hud.message(e.isBest ? 'REKOR BARU!' : `LAP ${e.lap - 1} SELESAI`, `Waktu lap ${t} detik`, 2.6, e.isBest ? 'best' : '');
            }
            this.audio.lap(e.isBest);
          }
          break;
        case 'finish':
          if (e.racer === this.player) {
            this.playerDone = true;
            this.input.enabled = false;
            this.touch.release();
            const win = e.place === 1;
            hud.message(win ? 'JUARA 1!' : 'FINIS!', `Posisi ${e.place} · ${e.time.toFixed(2).replace('.', ',')} detik`, RESULTS_DELAY, win ? 'best' : '');
            this.audio.finish(win);
            this.resultsTimer = RESULTS_DELAY;
          } else if (e.place === 1 && !this.playerDone) {
            hud.message(`${e.racer.name} FINIS PERTAMA`, `Selesaikan balapan dalam ${FINISH_TIMEOUT} detik!`, 2.4, 'warn');
          }
          break;
        case 'dnf':
          if (e.racer === this.player) {
            this.playerDone = true;
            this.input.enabled = false;
            this.touch.release();
            hud.message('WAKTU HABIS', 'Kamu tidak sempat finis', 2.2, 'warn');
            this.audio.finish(false);
            this.resultsTimer = 2.2;
          }
          break;
      }
    }
  }

  /** Papan nama lawan hanya tampil pada jarak sedang (tidak menutupi layar, tidak jadi titik kecil). */
  #updateNameTags() {
    const cam = this.camera.position;
    const show = this.mode === 'playing' && this.raceMode === 'race';
    for (const r of this.rivals) {
      const tag = r.vehicle.nameTag;
      if (!tag) continue;
      const d = show ? cam.distanceTo(r.vehicle.object.position) : Infinity;
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
      settings: { ...this.settings },
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
    document.removeEventListener('visibilitychange', this._onVisibility);
    this.input.dispose();
    this.audio.dispose();
    this.vehicle.dispose();
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
