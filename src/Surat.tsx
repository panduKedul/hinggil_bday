import { useEffect, useRef, useState } from 'react'
import Petals from './components/Petals'
import Music from './components/Music'
import { NAME } from './config'
import { useReveal } from './useReveal'
import song from './assets/music/segalanya-itu-kamu.mp3'
import {
  SURAT, SURAT_JUDUL, SURAT_PEMBUKA, SURAT_PENUTUP,
  WALLPAPER, WALLPAPER_JUDUL, WALLPAPER_PEMBUKA,
  VIDEO, VIDEO_JUDUL, VIDEO_PEMBUKA,
} from './suratData'

export default function SuratPage() {
  const [open, setOpen] = useState<number | null>(null)
  const [read, setRead] = useState<number[]>([])
  const [wp, setWp] = useState<number | null>(null)
  const [playing, setPlaying] = useState(false)
  const audio = useRef<HTMLAudioElement>(null)

  const play = () => audio.current?.play().then(() => setPlaying(true)).catch(() => setPlaying(false))

  const toggle = () => {
    const a = audio.current
    if (!a) return
    if (a.paused) play()
    else {
      a.pause()
      setPlaying(false)
    }
  }

  // Browser memblokir autoplay, jadi musik mulai di ketukan pertama.
  useEffect(() => {
    const first = (e: Event) => {
      window.removeEventListener('click', first)
      if (!(e.target as HTMLElement).closest('.music')) play()
    }
    window.addEventListener('click', first)
    return () => window.removeEventListener('click', first)
  }, [])

  const pauseForVideo = () => {
    audio.current?.pause()
    setPlaying(false)
  }

  useReveal(true)

  useEffect(() => {
    document.title = `Surat untuk ${NAME}`
  }, [])

  const modal = open !== null || wp !== null
  useEffect(() => {
    if (!modal) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return
      setOpen(null)
      setWp(null)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [modal])

  const pick = (i: number) => {
    setOpen(i)
    setRead((r) => (r.includes(i) ? r : [...r, i]))
  }

  const letter = open === null ? null : SURAT[open]
  const wall = wp === null ? null : WALLPAPER[wp]

  return (
    <>
      <Petals />
      <audio ref={audio} src={song} loop preload="none" />
      <Music playing={playing} onToggle={toggle} />
      <main className="site is-open surat">
        <section className="section">
          <p className="eyebrow reveal">Untuk {NAME}</p>
          <h1 className="script big reveal d1">{SURAT_JUDUL}</h1>
          <p className="lead reveal d2 surat-lead">{SURAT_PEMBUKA}</p>
          <div className="envelopes">
            {SURAT.map((s, i) => (
              <button
                key={s.dari}
                className={read.includes(i) ? 'env-btn read reveal' : 'env-btn reveal'}
                style={{ transitionDelay: `${i * 90}ms` }}
                onClick={() => pick(i)}
                aria-label={`Buka ${s.judul}`}
              >
                <span className="env-mini" aria-hidden="true">
                  <span className="env-mini-flap" />
                  <span className="env-mini-seal">{read.includes(i) ? '✓' : '♥'}</span>
                </span>
                <span className="env-from">dari</span>
                <span className="env-label">{s.dari}</span>
              </button>
            ))}
          </div>
          {read.length === SURAT.length && <p className="amin-count surat-end">{SURAT_PENUTUP} ♥</p>}
        </section>

        {VIDEO.length > 0 && (
          <section className="section extra" id="video">
            <h2 className="script reveal">{VIDEO_JUDUL}</h2>
            <p className="hint reveal d1">{VIDEO_PEMBUKA}</p>
            <div className="videos">
              {VIDEO.map((v) => (
                <figure key={v.file} className="vid reveal">
                  <video controls playsInline preload="metadata" poster={v.poster} src={v.file} onPlay={pauseForVideo} />
                  <figcaption>
                    <span>Ucapan dari {v.dari}</span>
                    <a className="btn ghost small" href={v.file} download>
                      Unduh video
                    </a>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        {WALLPAPER.length > 0 && (
          <section className="section extra" id="wallpaper">
            <h2 className="script reveal">{WALLPAPER_JUDUL}</h2>
            <p className="hint reveal d1">{WALLPAPER_PEMBUKA}</p>
            <div className="wps">
              {WALLPAPER.map((w, i) => (
                <figure key={w.file} className="wp reveal" style={{ transitionDelay: `${i * 90}ms` }}>
                  <button className="wp-img" onClick={() => setWp(i)} aria-label={`Lihat ${w.nama}`}>
                    <img src={w.thumb} alt={w.nama} loading="lazy" />
                  </button>
                  <figcaption>
                    <span>{w.nama}</span>
                    <a className="btn ghost small" href={w.file} download>
                      Unduh
                    </a>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}
        <footer>Dibuat dengan sepenuh hati, khusus untukmu.</footer>
      </main>

      {letter && (
        <div className="lightbox letter-back" role="dialog" aria-modal="true" aria-label={letter.judul} onClick={() => setOpen(null)}>
          <div className="paper letter" onClick={(e) => e.stopPropagation()}>
            <button className="lb-btn lb-close" onClick={() => setOpen(null)} aria-label="Tutup">
              ×
            </button>
            <h2 className="script">{letter.judul}</h2>
            {letter.isi.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <p className="sign">
              {letter.ttd}
              {letter.nama && <small>{letter.nama}</small>}
            </p>
          </div>
        </div>
      )}

      {wall && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={wall.nama} onClick={() => setWp(null)}>
          <figure onClick={(e) => e.stopPropagation()}>
            <img src={wall.file} alt={wall.nama} />
            <figcaption>
              <a className="btn" href={wall.file} download>
                Unduh {wall.nama}
              </a>
            </figcaption>
          </figure>
          <button className="lb-btn lb-close" onClick={() => setWp(null)} aria-label="Tutup">
            ×
          </button>
        </div>
      )}
    </>
  )
}
