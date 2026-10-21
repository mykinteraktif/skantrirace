import { buildTropis } from './tropis.js';
import { buildKota } from './kota.js';
import { buildGunung } from './gunung.js';
import { buildGurun } from './gurun.js';

/** Pilih pembangun dekorasi sesuai tema lintasan. */
export function buildScenery(track) {
  switch (track.kind) {
    case 'kota':
      return buildKota(track);
    case 'gunung':
      return buildGunung(track);
    case 'gurun':
      return buildGurun(track);
    default:
      return buildTropis(track);
  }
}
