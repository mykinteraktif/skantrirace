/**
 * Item bonus — semuanya berefek NYATA pada fisika (lihat Physics.js), bukan sekadar visual.
 *
 * duration : lama efek (detik)
 * cooldown : jeda per mobil sebelum bisa mengambil item jenis yang sama lagi (detik)
 * respawn  : waktu sampai item di lintasan muncul kembali setelah diambil (detik)
 */
export const ITEM_TYPES = {
  speed: {
    name: 'SPEED ORB',
    label: 'Tambahan kecepatan',
    color: '#facc15',
    duration: 2.5,
    cooldown: 5,
    respawn: 8,
    kick: 10, // m/s tambahan seketika ke arah depan
    topBonus: 9, // m/s tambahan kecepatan maksimum selama efek
  },
  shield: {
    name: 'SHIELD',
    label: 'Perlindungan sementara',
    color: '#38bdf8',
    duration: 6,
    cooldown: 10,
    respawn: 10,
    massMult: 4, // mobil lain terpental, kamu tidak
  },
  turbo: {
    name: 'TURBO RING',
    label: 'Akselerasi berlipat',
    color: '#fb923c',
    duration: 3,
    cooldown: 3,
    respawn: 4,
    accelMult: 1.9,
    topBonus: 5,
  },
};

export const ITEM_ORDER = ['speed', 'shield', 'turbo'];
