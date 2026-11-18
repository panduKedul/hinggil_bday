// Isi halaman QR 2 (/surat). Ganti teks di sini kapan saja, komponen tidak perlu disentuh.
export const SURAT_JUDUL = 'Buka saat kamu…'
export const SURAT_PEMBUKA = 'Surat-surat kecil, disimpan untuk hari yang butuh. Ketuk satu amplop, baca pelan-pelan.'
export const SURAT_PENUTUP = 'Kapan pun kamu butuh, amplopnya selalu di sini.'

export type Surat = { label: string; judul: string; isi: string[] }

export const SURAT: Surat[] = [
  {
    label: 'lelah',
    judul: 'Buka saat kamu lelah',
    isi: [
      'Berhenti sebentar. Tarik napas. Kamu tidak harus menyelesaikan semuanya hari ini.',
      'Kamu sudah jalan sejauh ini, dan itu bukan kebetulan. Istirahat bukan berarti kalah, itu cara supaya kamu bisa lanjut dengan utuh.',
    ],
  },
  {
    label: 'sedih',
    judul: 'Buka saat kamu sedih',
    isi: [
      'Boleh sedih. Kamu tidak perlu pura-pura baik-baik saja di sini.',
      'Apa pun yang bikin hatimu berat, ia akan melunak pelan-pelan. Sampai saat itu, kamu tidak sendirian.',
    ],
  },
  {
    label: 'ragu',
    judul: 'Buka saat kamu ragu pada dirimu',
    isi: [
      'Kamu lebih mampu dari yang kamu kira. Aku melihatnya dari cara kamu menjalani hal-hal yang tidak mudah.',
      'Ragu itu wajar. Yang penting kamu tetap melangkah, sekecil apa pun langkahnya.',
    ],
  },
  {
    label: 'senang',
    judul: 'Buka saat kamu senang',
    isi: [
      'Nah, ini bagian favoritku. Rayakan, sekecil apa pun alasannya.',
      'Dan kalau boleh, ceritakan padaku. Aku mau tahu apa yang bikin kamu tersenyum hari ini.',
    ],
  },
  {
    label: 'rindu',
    judul: 'Buka saat kamu kangen',
    isi: [
      'Aku juga. Mungkin tidak selalu terucap, tapi selalu ada.',
      'Jarak dan sibuk tidak mengubah apa pun. Kamu tetap salah satu orang yang paling kupikirkan.',
    ],
  },
  {
    label: 'ulang tahun',
    judul: 'Buka saat ulang tahunmu',
    isi: [
      'Selamat ulang tahun. Terima kasih sudah ada, dan sudah jadi kamu.',
      'Semoga setiap tahun membawamu lebih dekat ke hal-hal yang kamu inginkan, dan semoga aku masih boleh ada di dekatnya.',
    ],
  },
]
