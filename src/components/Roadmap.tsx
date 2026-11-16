import { useState } from 'react'

interface Stop { year: number; place: string; where: string; note: string }

const stops: Stop[] = [
  { year: 2028, place: 'Yogyakarta', where: 'Indonesia', note: 'Pelan-pelan keliling kota, jajan di sepanjang jalan, dan lihat matahari terbit dari Borobudur.' },
  { year: 2028, place: 'Labuan Bajo', where: 'Indonesia', note: 'Berlayar di antara pulau-pulau, melihat sunset dari Pulau Padar.' },
  { year: 2029, place: 'Bali', where: 'Indonesia', note: 'Pantai, sawah bertingkat, dan malam tenang tanpa terburu-buru.' },
  { year: 2029, place: 'Raja Ampat', where: 'Indonesia', note: 'Laut paling jernih yang pernah ada, hanya berdua dan langit luas.' },
  { year: 2030, place: 'Kyoto dan Tokyo', where: 'Jepang', note: 'Jalan kaki di antara gerbang torii, lalu keliling lampu kota yang tidak pernah tidur.' },
  { year: 2031, place: 'Seoul dan Pulau Jeju', where: 'Korea Selatan', note: 'Kafe kecil, jalan malam, dan hamparan bunga di Jeju.' },
  { year: 2032, place: 'Cappadocia dan Istanbul', where: 'Turki', note: 'Balon udara saat fajar, lalu secangkir teh di tepi Bosphorus.' },
  { year: 2033, place: 'Swiss dan Paris', where: 'Eropa', note: 'Pegunungan bersalju, kereta panoramik, dan satu foto di depan menara itu.' },
]

export default function Roadmap() {
  const [said, setSaid] = useState<number[]>([])
  const all = said.length === stops.length

  const toggle = (i: number) => setSaid((s) => (s.includes(i) ? s.filter((x) => x !== i) : [...s, i]))

  return (
    <section className="section roadmap" id="roadmap">
      <p className="eyebrow reveal">Mulai 2028</p>
      <h2 className="script reveal d1">Our Road Maps Aamiin</h2>
      <p className="hint reveal d2">Ketuk “Aamiin” di setiap tempat yang ingin kita kunjungi bersama.</p>

      <ol className="road">
        {stops.map((s, i) => {
          const on = said.includes(i)
          return (
            <li key={s.place} className={on ? 'stop reveal on' : 'stop reveal'}>
              <span className="dot" aria-hidden="true">
                {on ? '♥' : ''}
              </span>
              <div className="stop-card">
                <span className="year">{s.year}</span>
                <h3>
                  {s.place}
                </h3>
                <span className="where">{s.where}</span>
                <p>{s.note}</p>
                <button className={on ? 'amin on' : 'amin'} onClick={() => toggle(i)} aria-pressed={on}>
                  {on ? 'Aamiin ♥' : 'Aamiin'}
                </button>
              </div>
            </li>
          )
        })}
      </ol>

      <p className="amin-count" aria-live="polite">
        {all ? 'Semuanya diaminkan. Mari kita jalani satu per satu. ♥' : `${said.length} dari ${stops.length} tempat diaminkan`}
      </p>
    </section>
  )
}
