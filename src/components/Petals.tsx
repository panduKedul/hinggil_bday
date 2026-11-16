import { useMemo } from 'react'

export default function Petals() {
  const items = useMemo(() => {
    const n = window.matchMedia('(max-width: 640px)').matches ? 9 : 16
    return Array.from({ length: n }, (_, i) => ({
      left: (i * 100) / n + Math.random() * (60 / n),
      size: 10 + Math.random() * 12,
      dur: 14 + Math.random() * 12,
      delay: -Math.random() * 20,
      sway: 20 + Math.random() * 40,
      heart: i % 4 === 0,
    }))
  }, [])

  return (
    <div className="petals" aria-hidden="true">
      {items.map((p, i) => (
        <span
          key={i}
          className={p.heart ? 'petal heart' : 'petal'}
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            animationDuration: `${p.dur}s`,
            animationDelay: `${p.delay}s`,
            ['--sway' as string]: `${p.sway}px`,
          }}
        />
      ))}
    </div>
  )
}
