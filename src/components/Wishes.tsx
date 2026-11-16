import { useState } from 'react'

const wishes = [
  'Semoga tahun ini kamu lebih sering istirahat dan lebih jarang menahan lelah sendirian.',
  'Semoga semua yang kamu perjuangkan pelan-pelan menemukan jalannya.',
  'Semoga kamu selalu dikelilingi orang-orang yang tulus.',
  'Semoga tawamu makin sering muncul, dan makin lepas.',
  'Semoga kamu tahu bahwa kamu cukup, persis seperti dirimu sekarang.',
  'Semoga hari-harimu ringan, dan malam-malammu tenang.',
  'Semoga ada aku di sampingmu saat kamu butuh bersandar.',
]

export default function Wishes() {
  const [picked, setPicked] = useState<Record<number, number>>({})
  const used = Object.values(picked)

  const draw = (slot: number) => {
    if (slot in picked) return
    const free = wishes.map((_, i) => i).filter((i) => !used.includes(i))
    setPicked((p) => ({ ...p, [slot]: free[Math.floor(Math.random() * free.length)] }))
  }

  return (
    <section className="section wishes" id="harapan">
      <p className="eyebrow reveal">Kejutan kecil</p>
      <h2 className="script reveal d1">Pilih satu kartu</h2>
      <p className="hint reveal d2">Ketuk kartunya, ada harapan yang menunggumu.</p>
      <div className="wish-row">
        {[0, 1, 2].map((slot) => {
          const open = slot in picked
          return (
            <button key={slot} className={open ? 'wcard open' : 'wcard'} onClick={() => draw(slot)} aria-label={open ? 'Kartu harapan terbuka' : 'Buka kartu harapan'}>
              <span className="wface wback">✦</span>
              <span className="wface wfront">{open ? wishes[picked[slot]] : ''}</span>
            </button>
          )
        })}
      </div>
    </section>
  )
}
