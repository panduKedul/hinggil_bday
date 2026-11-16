import hero from './assets/photos/hero.webp'
import p01 from './assets/photos/p01.webp'
import p02 from './assets/photos/p02.webp'
import p03 from './assets/photos/p03.webp'
import p04 from './assets/photos/p04.webp'
import p05 from './assets/photos/p05.webp'
import p06 from './assets/photos/p06.webp'
import p07 from './assets/photos/p07.webp'
import p08 from './assets/photos/p08.webp'
import p09 from './assets/photos/p09.webp'
import p10 from './assets/photos/p10.webp'
import p11 from './assets/photos/p11.webp'
import p12 from './assets/photos/p12.webp'
import p13 from './assets/photos/p13.webp'
import p15 from './assets/photos/p15.webp'
import p16 from './assets/photos/p16.webp'
import p17 from './assets/photos/p17.webp'

export interface Photo { src: string; w: number; h: number; caption: string; alt: string }

export const heroPhoto: Photo = { src: hero, w: 1400, h: 1400, caption: '', alt: 'Potret Inggil berhijab abu-abu muda sambil tersenyum tipis' }

export const her: Photo[] = [
  { src: p02, w: 1400, h: 1050, caption: 'Perjalanan yang jadi menyenangkan', alt: 'Inggil bersandar di tangan di dalam bus' },
  { src: p07, w: 480, h: 658, caption: 'Photobooth', alt: 'Dua pose photobooth berlatar hijau pastel' },
  { src: p01, w: 1400, h: 657, caption: 'Tatapan yang tenang', alt: 'Selfie close-up berhijab hitam' },
  { src: p10, w: 646, h: 1400, caption: 'Senyum lewat layar', alt: 'Tangkapan layar video call, Inggil tersenyum lebar' },
  { src: p03, w: 1400, h: 1050, caption: 'Senyum di tengah perjalanan', alt: 'Inggil tersenyum di dalam bus' },
  { src: p08, w: 480, h: 667, caption: 'Versi sephia', alt: 'Photobooth bernuansa sephia' },
  { src: p12, w: 1400, h: 656, caption: 'Manyun andalan', alt: 'Selfie manyun berhijab krem' },
  { src: p09, w: 480, h: 673, caption: 'Hitam putih, tetap manis', alt: 'Photobooth hitam putih' },
  { src: p11, w: 1400, h: 1050, caption: 'Kedip kecil', alt: 'Selfie sambil mengedip' },
  { src: p13, w: 646, h: 1400, caption: 'Pagi lewat video call', alt: 'Tangkapan layar video call pagi hari' },
  { src: p04, w: 1400, h: 627, caption: 'Satu tatapan, sejuta cerita', alt: 'Selfie berhijab hitam' },
]

export const us: Photo[] = [
  { src: p05, w: 1050, h: 1400, caption: 'Dua wajah, satu frame', alt: 'Selfie berdua, Inggil tersenyum di sisi kanan' },
  { src: p06, w: 788, h: 1400, caption: 'Hari yang hangat', alt: 'Selfie berdua dari dekat' },
  { src: p15, w: 788, h: 1400, caption: 'Dekat itu nyaman', alt: 'Selfie berdua dari dekat di tempat gelap' },
  { src: p16, w: 646, h: 1400, caption: 'Berdua lewat layar', alt: 'Tangkapan layar video call berdua' },
  { src: p17, w: 1050, h: 1400, caption: 'Tenang di sampingmu', alt: 'Selfie berdua, Inggil memejamkan mata' },
]

export const gallery: Photo[] = [...her, ...us]

export const memoryFaces: string[] = [hero, p01, p02, p03, p11, p12]
