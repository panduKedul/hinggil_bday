import { useEffect, useState } from 'react'
import Petals from './components/Petals'
import { NAME } from './config'
import { useReveal } from './useReveal'
import { SURAT, SURAT_JUDUL, SURAT_PEMBUKA, SURAT_PENUTUP } from './suratData'

export default function SuratPage() {
  const [open, setOpen] = useState<number | null>(null)
  const [read, setRead] = useState<number[]>([])

  useReveal(true)

  useEffect(() => {
    document.title = `Surat untuk ${NAME}`
  }, [])

  useEffect(() => {
    if (open === null) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const pick = (i: number) => {
    setOpen(i)
    setRead((r) => (r.includes(i) ? r : [...r, i]))
  }

  const letter = open === null ? null : SURAT[open]

  return (
    <>
      <Petals />
      <main className="site is-open surat">
        <section className="section">
          <p className="eyebrow reveal">Untuk {NAME}</p>
          <h1 className="script big reveal d1">{SURAT_JUDUL}</h1>
          <p className="lead reveal d2 surat-lead">{SURAT_PEMBUKA}</p>
          <div className="envelopes">
            {SURAT.map((s, i) => (
              <button
                key={s.label}
                className={read.includes(i) ? 'env-btn read reveal' : 'env-btn reveal'}
                style={{ transitionDelay: `${i * 70}ms` }}
                onClick={() => pick(i)}
                aria-label={`Buka surat: ${s.judul}`}
              >
                <span className="env-mini" aria-hidden="true">
                  <span className="env-mini-flap" />
                  <span className="env-mini-seal">{read.includes(i) ? '✓' : '♥'}</span>
                </span>
                <span className="env-label">{s.label}</span>
              </button>
            ))}
          </div>
          {read.length === SURAT.length && <p className="amin-count surat-end">{SURAT_PENUTUP} ♥</p>}
        </section>
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
            <p className="sign">♥</p>
          </div>
        </div>
      )}
    </>
  )
}
