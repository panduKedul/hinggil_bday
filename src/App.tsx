import { useEffect, useRef, useState } from 'react'
import Opening from './components/Opening'
import Petals from './components/Petals'
import Hero from './components/Hero'
import Message from './components/Message'
import Gallery from './components/Gallery'
import Appreciation from './components/Appreciation'
import Game from './components/Game'
import Wishes from './components/Wishes'
import Roadmap from './components/Roadmap'
import Finale from './components/Finale'
import Music from './components/Music'
import { useReveal } from './useReveal'
import song from './assets/music/honeybee.mp3'

export default function App() {
  const [opened, setOpened] = useState(false)
  const [playing, setPlaying] = useState(false)
  const audio = useRef<HTMLAudioElement>(null)

  const start = () => {
    audio.current?.play().then(() => setPlaying(true)).catch(() => setPlaying(false))
    window.setTimeout(() => setOpened(true), 900)
  }

  const toggle = () => {
    const a = audio.current
    if (!a) return
    if (a.paused) a.play().then(() => setPlaying(true)).catch(() => setPlaying(false))
    else {
      a.pause()
      setPlaying(false)
    }
  }

  useEffect(() => {
    document.body.style.overflow = opened ? '' : 'hidden'
    if (opened) window.scrollTo(0, 0)
  }, [opened])

  useReveal(opened)

  return (
    <>
      <Petals />
      <audio ref={audio} src={song} loop preload="auto" />
      {opened && <Music playing={playing} onToggle={toggle} />}
      {!opened && <Opening onOpen={start} />}
      <main className={opened ? 'site is-open' : 'site'} aria-hidden={!opened}>
        <Hero />
        <Message />
        <Gallery />
        <Game />
        <Appreciation />
        <Wishes />
        <Roadmap />
        <Finale />
      </main>
    </>
  )
}
