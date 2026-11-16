import { useState } from 'react'

const TRACK_ID = '4kX7xkopoXZCfE1D6fNwl2'

export default function Music() {
  const [open, setOpen] = useState(false)

  return (
    <div className="music-wrap">
      {open && (
        <iframe
          className="music-embed"
          title="Honeybee - Olivia Rodrigo"
          src={`https://open.spotify.com/embed/track/${TRACK_ID}?utm_source=generator&theme=0`}
          width="100%"
          height="152"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      )}
      <button className={open ? 'music on' : 'music'} onClick={() => setOpen((o) => !o)} aria-expanded={open}>
        <i aria-hidden="true">{open ? '✕' : '♪'}</i>
        {open ? 'Tutup' : 'Putar musik'}
      </button>
    </div>
  )
}
