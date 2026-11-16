import { useState } from 'react'
import { NAME } from '../config'

export default function Opening({ onOpen }: { onOpen: () => void }) {
  const [leaving, setLeaving] = useState(false)

  const open = () => {
    setLeaving(true)
    onOpen()
  }

  return (
    <section className={leaving ? 'opening leaving' : 'opening'} aria-label="Pembuka">
      <div className="opening-card">
        <div className="envelope" aria-hidden="true">
          <div className="env-flap" />
          <div className="env-seal">♥</div>
        </div>
        <p className="eyebrow">Untuk {NAME}</p>
        <h1 className="script">Ada sesuatu untukmu</h1>
        <p className="lead">Sebuah hadiah kecil yang dibuat pelan-pelan, hanya untukmu.</p>
        <button className="btn" onClick={open}>
          Buka kejutanmu
        </button>
      </div>
    </section>
  )
}
