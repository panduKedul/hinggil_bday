import { useEffect, useMemo, useState } from 'react'
import { memoryFaces } from '../photos'

interface Card { id: number; face: number }

function shuffled(): Card[] {
  const deck = [...memoryFaces, ...memoryFaces].map((_, i) => ({ id: i, face: i % memoryFaces.length }))
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[deck[i], deck[j]] = [deck[j], deck[i]]
  }
  return deck
}

export default function Game() {
  const [round, setRound] = useState(0)
  const deck = useMemo(shuffled, [round])
  const [flipped, setFlipped] = useState<number[]>([])
  const [matched, setMatched] = useState<number[]>([])
  const [moves, setMoves] = useState(0)

  const won = matched.length === memoryFaces.length

  useEffect(() => {
    if (flipped.length !== 2) return
    const [a, b] = flipped
    const t = window.setTimeout(
      () => {
        if (deck[a].face === deck[b].face) setMatched((m) => [...m, deck[a].face])
        setFlipped([])
      },
      deck[a].face === deck[b].face ? 450 : 850,
    )
    return () => window.clearTimeout(t)
  }, [flipped, deck])

  const pick = (i: number) => {
    if (flipped.length === 2 || flipped.includes(i) || matched.includes(deck[i].face)) return
    setFlipped((f) => [...f, i])
    if (flipped.length === 1) setMoves((m) => m + 1)
  }

  const reset = () => {
    setRound((r) => r + 1)
    setFlipped([])
    setMatched([])
    setMoves(0)
  }

  return (
    <section className="section game" id="main">
      <p className="eyebrow reveal">Main sebentar</p>
      <h2 className="script reveal d1">Cocokkan senyumnya</h2>
      <p className="hint reveal d2">Temukan 6 pasang foto yang sama. Langkah: {moves}</p>
      <div className="memory reveal d2">
        {deck.map((c, i) => {
          const up = flipped.includes(i) || matched.includes(c.face)
          return (
            <button
              key={c.id}
              className={up ? 'mcard up' : 'mcard'}
              onClick={() => pick(i)}
              aria-label={up ? 'Kartu terbuka' : 'Kartu tertutup'}
            >
              <span className="mface back">♥</span>
              <span className="mface front">
                <img src={memoryFaces[c.face]} alt="" loading="lazy" />
              </span>
            </button>
          )
        })}
      </div>
      {won && (
        <div className="win">
          <p className="script">Semuanya ketemu! ♥</p>
          <p className="hint">Selesai dalam {moves} langkah. Seperti kamu: selalu berhasil membuatku tersenyum.</p>
          <button className="btn ghost" onClick={reset}>
            Main lagi
          </button>
        </div>
      )}
    </section>
  )
}
