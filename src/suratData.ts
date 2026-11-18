// Isi halaman QR 2 (/surat). Ganti teks, file, atau tambah item di sini; komponen tidak perlu disentuh.
export const SURAT_JUDUL = 'Surat untukmu'
export const SURAT_PEMBUKA = 'Tiga surat dari orang-orang yang menyayangimu. Ketuk satu amplop, baca pelan-pelan.'
export const SURAT_PENUTUP = 'Semua suratnya sudah kamu baca. Selamat ulang tahun, Hinggil.'

export type Surat = { dari: string; judul: string; isi: string[]; ttd: string; nama?: string }

export const SURAT: Surat[] = [
  {
    dari: 'Mama Pandu',
    judul: 'Surat dari Mama',
    isi: [
      'Nak Hinggil,',
      'Mama nulis ini sambil senyum-senyum sendiri, soalnya bingung mau mulai dari mana. Mama bukan orang yang pandai merangkai kata, jadi maaf kalau nanti bahasanya biasa saja. Yang penting isinya dari hati.',
      'Selamat ulang tahun yang ke-20, ya, Nak. Dua puluh tahun itu umur yang bagus. Sudah cukup dewasa buat mikir ke depan, tapi masih banyak waktu buat belajar dan mencoba. Mama senang kamu ada di umur ini dengan sehat dan dengan hati yang baik.',
      'Mama mau bilang terima kasih. Terima kasih sudah mau berjalan bersama Pandu dan sabar menghadapi dia. Namanya anak laki-laki, pasti ada saja kurangnya. Kalau suatu hari dia bikin kamu kesal atau kecewa, bilang saja ke Mama. Mama yang membesarkan dia, jadi Mama nggak akan sungkan menegur. Kamu nggak perlu merasa sendirian di keluarga ini.',
      'Mama dan Bapak sudah menganggap kamu bagian dari keluarga kami. Jadi kalau kamu butuh apa-apa, atau cuma pengin cerita, jangan sungkan. Pintu kami terbuka buat kamu.',
      'Pesan Mama untuk kalian berdua, jangan gampang menyerah kalau jalannya lagi nggak enak. Semua pasangan pasti ada masa susahnya. Yang bikin kuat itu mau duduk bareng, ngobrol, dan saling mengalah di waktu yang pas. Jangan dipendam sendiri, apalagi sampai jadi besar.',
      'Mama doakan kamu sehat, badan dan hatinya. Mama doakan rezekimu cukup dan lapang, kuliah dan kerjaanmu lancar, sukses dunia akhirat. Mama doakan kamu sama Pandu dijaga dari orang-orang yang niatnya nggak baik, dan didekatkan sama orang-orang yang tulus. Dan kalau Tuhan mengizinkan, semoga kalian diberi jalan sampai ke pelaminan dan terus bersama sampai tua.',
      'Selamat ulang tahun sekali lagi, Nak. Jaga kesehatan, makan yang teratur, jangan begadang terus. Mama sayang sama kamu.',
    ],
    ttd: 'Mama',
    nama: 'Wiwik Megawati Putri',
  },
  {
    dari: 'Bapak Pandu',
    judul: 'Surat dari Bapak',
    isi: [
      'Nak Hinggil,',
      'Bapak ini nggak pandai nulis, apalagi yang begini. Sudah beberapa kali Bapak mulai terus berhenti. Mama bilang tulis saja seperti Bapak ngomong, ya sudah, begini saja.',
      'Pertama, selamat ulang tahun. Dua puluh tahun. Semoga sehat terus dan diberi umur yang panjang.',
      'Bapak tahu kamu dan Pandu sedang berjalan bersama. Bapak nggak mau ikut campur terlalu banyak, itu urusan kalian. Tapi Bapak mau kamu tahu satu hal: Bapak dan Mama sudah menerima kamu dengan baik. Kamu nggak perlu merasa harus membuktikan apa-apa ke kami. Kamu datang ke keluarga ini dengan niat baik, dan itu sudah cukup.',
      'Bapak sudah berpesan ke Pandu, jaga kamu. Hormati kamu. Jangan membuat kamu menangis karena hal yang sebenarnya bisa dibicarakan. Kalau dia salah, dia harus mengaku. Kalau belum punya banyak, nggak apa-apa, yang penting mau kerja dan mau jujur. Rezeki itu datangnya ke orang yang mau jalan, bukan yang cuma menunggu. Kalau Pandu lalai, bilang ke Bapak.',
      'Buat kamu, Nak, pesan Bapak sederhana. Jangan buru-buru, tapi jangan ragu juga kalau memang sudah yakin. Ambil keputusan yang bisa kamu pertanggungjawabkan sendiri. Dan jangan lupa orang tuamu sendiri, tetap hormati dan kabari mereka.',
      'Doa Bapak juga sederhana. Semoga kamu sehat. Semoga rezekimu cukup dan datang dari jalan yang baik. Semoga kamu sama Pandu dikasih kesabaran, umur panjang, dan rumah yang tenang. Semoga kalau ada masalah, kalian selesaikan berdua tanpa perlu ada yang pergi. Dan semoga Bapak masih diberi umur untuk melihat kalian bahagia.',
      'Sekali lagi, selamat ulang tahun. Jaga diri baik-baik.',
    ],
    ttd: 'Bapak',
    nama: 'I Made Budi Artha',
  },
  {
    dari: 'Pandu',
    judul: 'Surat cinta dari Pandu',
    isi: [
      'Hinggil,',
      'Selamat ulang tahun yang ke-20, sayang. Aku mulai surat ini beberapa kali dan selalu kuhapus lagi, soalnya yang ada di kepalaku banyak banget dan aku nggak tahu mana yang harus duluan. Jadi aku tulis pelan-pelan saja, seperti lagi ngobrol sama kamu.',
      'Aku mau mulai dari terima kasih. Terima kasih sudah mau berjalan sama aku sejauh ini, padahal aku tahu aku bukan orang yang gampang. Kamu sabar sama aku, kamu dengarkan ceritaku bahkan waktu aku sendiri belum rapi menyampaikannya. Banyak hal baik di hidupku sekarang yang mulainya dari kamu, dan kadang aku lupa bilang itu.',
      'Aku suka caramu menjalani hidup. Kamu berusaha, kamu berdiri di kakimu sendiri, dan kamu tetap lembut sama orang-orang di sekitarmu. Kamu nggak pernah pamer soal itu, tapi aku memperhatikan. Kalau suatu hari kamu lagi capek dan bilang "nggak apa-apa", aku mau kamu tahu kamu boleh bilang "aku capek" ke aku. Aku nggak akan menganggap itu lemah.',
      'Aku jujur ya: aku nggak punya semuanya. Jalan kita ke depan masih banyak yang belum jelas, dan mungkin ada waktunya kita harus mulai dari nol, atau dari yang lebih rendah dari itu. Aku nggak takut, karena yang aku butuhkan ada di sebelahku. Yang bisa aku janjikan bukan hidup tanpa masalah. Yang aku janjikan, aku mau berusaha, aku mau belajar jadi lebih baik, dan aku nggak akan membiarkan kamu menghadapinya sendirian.',
      'Mama dan Bapak juga menyayangimu, dan aku bersyukur kamu diterima dengan baik di keluargaku. Aku ingin jadi laki-laki yang bikin mereka, dan keluargamu, yakin bahwa kamu nggak salah memilih. Aku nggak mau mengecewakan mereka, dan yang paling penting, aku nggak mau mengecewakan kamu.',
      'Doaku buat kamu di umur yang baru: semoga kamu sehat, semoga kamu lebih sering tertawa lepas, semoga cita-citamu satu-satu terkabul, dan semoga kamu selalu merasa cukup. Semoga hal-hal yang kamu pendam pelan-pelan bisa kamu ceritakan. Dan kalau Tuhan mengizinkan, semoga kita diberi jalan untuk bersama sampai tua. Aku akan ada di situ, ikut senang waktu kamu berhasil, dan ikut bantu waktu kamu jatuh.',
      'Aku sayang kamu, Hinggil. Terima kasih sudah jadi perempuan yang selama ini ingin aku temukan.',
    ],
    ttd: 'Pandu',
    nama: 'Muhammad Pandu Wirakusuma',
  },
]

export const WALLPAPER_JUDUL = 'Wallpaper untukmu'
export const WALLPAPER_PEMBUKA = 'Pasang di layar HP. Ketuk untuk melihat besar, lalu unduh.'

export type Wallpaper = { nama: string; thumb: string; file: string }

export const WALLPAPER: Wallpaper[] = [
  { nama: 'Wallpaper 1', thumb: '/unduh/thumb-1.webp', file: '/unduh/Wallpaper-Hinggil-1.png' },
  { nama: 'Wallpaper 2', thumb: '/unduh/thumb-2.webp', file: '/unduh/Wallpaper-Hinggil-2.png' },
]

export const VIDEO_JUDUL = 'Ucapan dalam video'
export const VIDEO_PEMBUKA = 'Ada yang ingin menyampaikan langsung. Putar, atau simpan untuk ditonton lagi.'

export type Video = { dari: string; file: string; poster: string }

export const VIDEO: Video[] = [
  { dari: 'Mama Pandu', file: '/video/Ucapan-Mama.mp4', poster: '/video/Ucapan-Mama-poster.jpg' },
]
