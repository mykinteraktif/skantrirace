// Font dibundel lokal (lisensi SIL OFL) → tetap tampil walau lab komputer offline
import '@fontsource/russo-one/latin-400.css';
import '@fontsource/rajdhani/latin-600.css';
import '@fontsource/rajdhani/latin-700.css';
import './style.css';
import { Game } from './game/Game.js';

/** Three.js versi ini membutuhkan WebGL 2. */
function hasWebGL2() {
  try {
    const canvas = document.createElement('canvas');
    return !!(window.WebGL2RenderingContext && canvas.getContext('webgl2'));
  } catch {
    return false;
  }
}

function showFatal(title, detail) {
  const box = document.getElementById('fatal');
  box.querySelector('h1').textContent = title;
  box.querySelector('p').textContent = detail;
  box.hidden = false;
  document.getElementById('loading')?.remove();
}

async function waitForFonts() {
  if (!document.fonts?.load) return;
  const fonts = Promise.all([
    document.fonts.load('400 64px "Russo One"'),
    document.fonts.load('700 32px "Rajdhani"'),
    document.fonts.load('600 32px "Rajdhani"'),
  ]);
  // Jangan menunggu lebih dari 2,5 detik
  await Promise.race([fonts, new Promise((r) => setTimeout(r, 2500))]).catch(() => {});
}

async function boot() {
  if (!hasWebGL2()) {
    showFatal(
      'WebGL 2 tidak tersedia',
      'Game ini membutuhkan WebGL 2. Gunakan Google Chrome/Edge versi terbaru, aktifkan "Use graphics acceleration when available" di Pengaturan > Sistem, lalu perbarui driver kartu grafis.',
    );
    return;
  }

  await waitForFonts();

  const debug = new URLSearchParams(location.search).has('debug');
  try {
    const game = new Game({
      container: document.getElementById('stage'),
      hudRoot: document.getElementById('hud'),
      menuRoot: document.getElementById('menu'),
      touchRoot: document.getElementById('touch'),
      debug,
    });
    if (debug) window.__skantri = game;
  } catch (err) {
    console.error(err);
    showFatal('Gagal memulai game', String(err?.message || err));
    return;
  }

  const loading = document.getElementById('loading');
  loading.classList.add('done');
  setTimeout(() => loading.remove(), 600);
}

boot();
