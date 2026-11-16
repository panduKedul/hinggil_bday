import { useRef, useState } from 'react'

const files = import.meta.glob('../assets/music/*.{mp3,m4a,ogg}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>

const src = Object.values(files)[0]

export default function Music() {
  const ref = useRef<HTMLAudioElement>(null)
  const [on, setOn] = useState(false)

  if (!src) return null

  const toggle = () => {
    const a = ref.current
    if (!a) return
    if (a.paused) a.play().then(() => setOn(true)).catch(() => setOn(false))
    else {
      a.pause()
      setOn(false)
    }
  }

  return (
    <>
      <audio ref={ref} src={src} loop preload="none" />
      <button className={on ? 'music on' : 'music'} onClick={toggle} aria-pressed={on} aria-label={on ? 'Jeda musik' : 'Putar musik'}>
        <i aria-hidden="true">{on ? '❚❚' : '♪'}</i>
        {on ? 'Jeda' : 'Putar musik'}
      </button>
    </>
  )
}
