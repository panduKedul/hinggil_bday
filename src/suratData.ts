// Isi halaman QR 2 (/surat). Ganti teks, file, atau tambah item di sini; komponen tidak perlu disentuh.
export const SURAT_JUDUL = 'Surat untukmu'
export const SURAT_PEMBUKA = 'Tiga surat dari orang-orang yang menyayangimu. Ketuk satu amplop, baca pelan-pelan.'
export const SURAT_PENUTUP = 'Semua suratnya sudah kamu baca. Selamat ulang tahun, Hinggil.'

export type Surat = { dari: string; judul: string; isi: string[]; ttd: string; nama?: string }

export const SURAT: Surat[] = [
  {
    dari: 'Mama',
    judul: 'Surat dari Mama',
    isi: [
      'Nak Hinggil,',
      'Mama nulis ini sambil senyum-senyum sendiri, soalnya bingung mau mulai dari mana. Dua puluh tahun itu rasanya cepat sekali. Kayaknya baru kemarin Mama masih sering menyisir rambutmu, sekarang kamu sudah punya urusan sendiri, cita-cita sendiri, dan orang yang kamu pilih sendiri.',
      'Yang pertama, Mama mau bilang terima kasih. Terima kasih sudah tumbuh jadi anak yang tahu diri tapi nggak minder. Mama tahu ada hal-hal yang kamu simpan sendiri biar Mama nggak kepikiran. Mama sebenarnya tahu, Nak. Mama diam bukan karena nggak peduli, Mama cuma nunggu kamu siap cerita. Kalau nanti ada yang berat, pintu rumah ini tetap terbuka, jam berapa pun.',
      'Soal Pandu, Mama sudah lihat sendiri bagaimana dia memperlakukan kamu. Mama nggak minta dia sempurna, nggak ada orang yang sempurna, Mama sama Bapak juga masih belajar sampai sekarang. Mama cuma minta dia jujur, sabar, dan mau pulang ke kamu walaupun lagi capek atau lagi kesal. Kalau itu dia jaga, sisanya bisa dikerjakan pelan-pelan bersama.',
      'Ke kamu juga Mama pesan, jangan merasa harus selalu kuat. Kalau capek, bilang. Kalau nggak setuju, bicarakan baik-baik, jangan dipendam sampai jadi besar. Rumah tangga itu isinya banyak ngobrol dan banyak ngalah di waktu yang tepat. Kadang kamu yang ngalah, kadang dia. Yang penting jangan ada yang merasa sendirian.',
      'Mama doakan kamu sehat, badan dan hatinya. Mama doakan rezekimu cukup dan lapang, kerjaanmu lancar, sukses dunia akhirat, dan kalau Tuhan mengizinkan, kamu sama Pandu dipertemukan sampai ke pelaminan dan terus sampai tua. Mama doakan kalian dijauhkan dari orang yang niatnya nggak baik, dan didekatkan sama orang-orang yang tulus. Kalau suatu hari kalian diuji, semoga kalian ingat bahwa dulu kalian pernah saling memilih, dan itu cukup untuk mulai lagi.',
      'Selamat ulang tahun, anak Mama. Jaga diri baik-baik, makan yang teratur, jangan begadang terus. Mama sayang kamu, dari dulu, sekarang, dan seterusnya.',
    ],
    ttd: 'Mama',
    nama: 'Wiwik Megawati Putri',
  },
  {
    dari: 'Bapak',
    judul: 'Surat dari Bapak',
    isi: [
      'Nak,',
      'Bapak ini nggak pandai nulis, apalagi yang begini. Sudah beberapa kali Bapak mulai terus berhenti. Mamamu bilang tulis saja seperti Bapak ngomong, ya sudah, begini saja.',
      'Dua puluh tahun lalu Bapak cuma mikir satu hal: semoga hidupnya nanti nggak susah. Sampai sekarang pikiran itu masih sama. Bedanya, sekarang Bapak sadar hidup memang nggak pernah benar-benar mudah, dan tugas Bapak bukan menyingkirkan semua kesulitanmu, tapi memastikan kamu punya bekal buat menghadapinya. Kalau lihat kamu sekarang, Bapak merasa bekal itu sudah ada. Kamu kuat, kamu mau usaha, dan kamu nggak gampang menyerah. Bapak bangga sama kamu, walaupun Bapak jarang bilang.',
      'Sekarang ada Pandu. Bapak nggak minta macam-macam. Bapak cuma minta satu: jaga anak Bapak. Jangan sampai dia menangis karena hal yang sebenarnya bisa dibicarakan. Kalau salah, mengaku. Kalau belum punya banyak, nggak apa-apa, yang penting mau kerja dan mau jujur. Rezeki itu datangnya ke orang yang mau jalan, bukan yang cuma menunggu.',
      'Buat kamu, Nak, pesan Bapak sederhana. Jangan buru-buru, tapi jangan ragu juga kalau memang sudah yakin. Ambil keputusan yang bisa kamu pertanggungjawabkan sendiri. Kalau nanti ternyata keliru, Bapak tetap di belakangmu. Itu nggak akan berubah.',
      'Doa Bapak juga sederhana. Semoga kamu sehat. Semoga rezekimu cukup dan datang dari jalan yang baik. Semoga kamu sama Pandu dikasih kesabaran, umur panjang, dan rumah yang tenang. Semoga kalau ada masalah, kalian selesaikan berdua tanpa perlu ada yang pergi. Dan semoga Bapak masih diberi umur untuk melihat kalian bahagia.',
      'Selamat ulang tahun, Nak. Makan yang cukup, istirahat, jangan lupa berdoa. Kalau ada apa-apa, kabari Bapak.',
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
      'Mama dan Bapak sudah percaya sama aku buat menjagamu, dan aku anggap itu amanah yang besar. Aku nggak mau mengecewakan mereka, dan yang paling penting, aku nggak mau mengecewakan kamu.',
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
  { dari: 'Mama', file: '/video/Ucapan-Mama.mp4', poster: '/video/Ucapan-Mama-poster.jpg' },
]
