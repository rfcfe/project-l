import { useState } from 'react'
import PipocaMedia from '../PipocaMedia'

const PETS_NEEDED = 5

export default function PetLevel({ onDone }) {
  const [pets, setPets] = useState(0)
  const done = pets >= PETS_NEEDED

  const pet = () => {
    if (done) return
    const next = pets + 1
    setPets(next)
    if (next >= PETS_NEEDED) onDone()
  }

  return (
    <div className="level-body">
      <p className="question">Bonus level! Pipoca is sleeping. Pet her {PETS_NEEDED} times.</p>
      {done ? (
        <PipocaMedia kind="wagging" caption="She's awake and thrilled!" />
      ) : (
        <PipocaMedia kind="sleepy" caption="zzz..." />
      )}
      <button type="button" className="btn pet" onClick={pet} disabled={done}>
        🐕 PET PIPOCA
      </button>
      <p className="hearts" aria-live="polite">
        {'❤️'.repeat(pets)}
        {'🤍'.repeat(PETS_NEEDED - pets)}
      </p>
      {done && (
        <p className="reaction">
          Pipoca approves. Tail wagging at maximum speed. 🌭🐾
        </p>
      )}
    </div>
  )
}
