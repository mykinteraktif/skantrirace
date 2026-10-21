import { defineConfig } from 'vite';

export default defineConfig({
  // base './' agar hasil build bisa dibuka dari subfolder (GitHub Pages, hosting sekolah, dll.)
  base: './',
  server: {
    host: true, // bisa diakses dari HP/laptop lain dalam satu jaringan
    port: 5173,
    open: true,
  },
  build: {
    target: 'es2020',
    chunkSizeWarningLimit: 1200, // Three.js memang berukuran besar
  },
});
