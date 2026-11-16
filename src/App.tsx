import { useEffect, useState } from 'react'
import Opening from './components/Opening'
import Petals from './components/Petals'
import Hero from './components/Hero'
import Message from './components/Message'
import Gallery from './components/Gallery'
import Appreciation from './components/Appreciation'
import Finale from './components/Finale'
import { useReveal } from './useReveal'

export default function App() {
  const [opened, setOpened] = useState(false)

  useEffect(() => {
    document.body.style.overflow = opened ? '' : 'hidden'
    if (opened) window.scrollTo(0, 0)
  }, [opened])

  useReveal(opened)

  return (
    <>
      <Petals />
      {!opened && <Opening onOpen={() => setOpened(true)} />}
      <main className={opened ? 'site is-open' : 'site'} aria-hidden={!opened}>
        <Hero />
        <Message />
        <Gallery />
        <Appreciation />
        <Finale />
      </main>
    </>
  )
}
