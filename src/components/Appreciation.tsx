const items = [
  { icon: '❀', title: 'Kekuatanmu', text: 'Kamu menghadapi hari yang berat dengan tenang, lalu tetap sempat peduli pada orang lain.' },
  { icon: '✦', title: 'Kemandirianmu', text: 'Kamu bisa berdiri sendiri, dan itu membuat setiap kali kamu mau berbagi terasa lebih berarti.' },
  { icon: '♡', title: 'Kebaikanmu', text: 'Hangatmu tidak berisik. Ia terasa dari hal-hal kecil yang kamu lakukan tanpa pamrih.' },
  { icon: '☾', title: 'Jiwamu yang indah', text: 'Lembut tapi teguh. Dua hal yang jarang bisa hadir bersamaan, tapi ada pada dirimu.' },
  { icon: '✿', title: 'Hal-hal kecilmu', text: 'Manyun andalanmu, tatapanmu yang tiba-tiba jahil, cara tertawamu. Semua itu favoritku.' },
]

export default function Appreciation() {
  return (
    <section className="section appreciation" id="tentangmu">
      <p className="eyebrow reveal">Tentang kamu</p>
      <h2 className="script reveal d1">Yang kukagumi darimu</h2>
      <div className="cards">
        {items.map((it, i) => (
          <article key={it.title} className="card reveal" style={{ transitionDelay: `${(i % 3) * 90}ms` }}>
            <span className="card-icon" aria-hidden="true">
              {it.icon}
            </span>
            <h3>{it.title}</h3>
            <p>{it.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
