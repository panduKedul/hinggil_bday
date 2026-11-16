import { useState } from 'react'
import { NAME } from '../config'

const COLORS = ['#F8C8DC', '#F4AFC4', '#D9829B', '#FFF5ED', '#C77D91']

export default function Finale() {
  const [burst, setBurst] = useState<number | null>(null)

  const bits = burst
    ? Array.from({ length: 36 }, (_, i) => {
        const a = (i / 36) * Math.PI * 2
        const d = 90 + Math.random() * 150
        return {
          x: Math.cos(a) * d,
          y: Math.sin(a) * d - 40,
          r: Math.random() * 360,
          c: COLORS[i % COLORS.length],
          heart: i % 3 === 0,
        }
      })
    : []

  return (
    <section className="section finale" id="penutup">
      <div className="finale-inner reveal">
        <p className="eyebrow">Doa dan harapan</p>
        <h2 className="script big">Selamat ulang tahun, {NAME}</h2>
        <p className="lead">
          Semoga langkahmu ringan, hatimu selalu dijaga, dan orang-orang yang tulus selalu dekat denganmu. Semoga
          semua yang kamu perjuangkan pelan-pelan menemukan jalannya.
        </p>
        <div className="burst-wrap">
          <button className="btn" onClick={() => setBurst(Date.now())}>
            Tiup lilinnya 🕯️
          </button>
          {burst && (
            <div className="burst" key={burst} aria-hidden="true">
              {bits.map((b, i) => (
                <i
                  key={i}
                  className={b.heart ? 'bit heart' : 'bit'}
                  style={{ ['--x' as string]: `${b.x}px`, ['--y' as string]: `${b.y}px`, ['--r' as string]: `${b.r}deg`, background: b.c }}
                />
              ))}
            </div>
          )}
        </div>
        {burst && <p className="wish">Semoga semua doamu terkabul. ♥</p>}
      </div>
      <footer>Dibuat dengan sepenuh hati, khusus untukmu.</footer>
    </section>
  )
}
