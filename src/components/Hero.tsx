import { NAME } from '../config'
import { heroPhoto } from '../photos'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-text">
        <p className="eyebrow reveal">Selamat Ulang Tahun</p>
        <h1 className="script hero-name reveal d1">{NAME}</h1>
        <p className="lead reveal d2">
          Hari ini milikmu. Untuk perempuan yang kuat, mandiri, dan tetap lembut di waktu yang sama.
        </p>
        <a className="btn ghost reveal d3" href="#pesan">
          Baca pesanku ↓
        </a>
      </div>
      <figure className="hero-photo reveal d1">
        <div className="arch">
          <img src={heroPhoto.src} width={heroPhoto.w} height={heroPhoto.h} alt={heroPhoto.alt} />
        </div>
        <span className="spark s1">✦</span>
        <span className="spark s2">✦</span>
        <span className="spark s3">✧</span>
      </figure>
    </section>
  )
}
