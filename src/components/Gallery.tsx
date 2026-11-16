import { useCallback, useEffect, useState } from 'react'
import { gallery } from '../photos'

export default function Gallery() {
  const [open, setOpen] = useState<number | null>(null)

  const close = useCallback(() => setOpen(null), [])
  const step = useCallback(
    (d: number) => setOpen((i) => (i === null ? i : (i + d + gallery.length) % gallery.length)),
    [],
  )

  useEffect(() => {
    if (open === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, close, step])

  const cur = open === null ? null : gallery[open]

  return (
    <section className="section gallery" id="kenangan">
      <p className="eyebrow reveal">Kenangan manis</p>
      <h2 className="script reveal d1">Potongan hari-hari kita</h2>
      <div className="masonry">
        {gallery.map((p, i) => (
          <button
            key={p.src}
            className="polaroid reveal"
            style={{ ['--tilt' as string]: `${((i % 5) - 2) * 0.9}deg` }}
            onClick={() => setOpen(i)}
            aria-label={`Perbesar foto: ${p.caption}`}
          >
            <img src={p.src} width={p.w} height={p.h} alt={p.alt} loading="lazy" decoding="async" />
            <span>{p.caption}</span>
          </button>
        ))}
      </div>

      {cur && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Foto diperbesar" onClick={close}>
          <button className="lb-btn lb-close" onClick={close} aria-label="Tutup">
            ✕
          </button>
          <button
            className="lb-btn lb-prev"
            onClick={(e) => {
              e.stopPropagation()
              step(-1)
            }}
            aria-label="Foto sebelumnya"
          >
            ‹
          </button>
          <figure onClick={(e) => e.stopPropagation()}>
            <img src={cur.src} alt={cur.alt} />
            <figcaption>{cur.caption}</figcaption>
          </figure>
          <button
            className="lb-btn lb-next"
            onClick={(e) => {
              e.stopPropagation()
              step(1)
            }}
            aria-label="Foto berikutnya"
          >
            ›
          </button>
        </div>
      )}
    </section>
  )
}
