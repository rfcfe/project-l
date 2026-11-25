import { useState } from 'react'

// Vegan plum pudding cake with a crushed-cookie crust.
const INGREDIENTS = [
  { emoji: '🍪', name: 'Crushed cookie crust' },
  { emoji: '🧈', name: 'Vegan butter' },
  { emoji: '🟣', name: 'Plums' },
  { emoji: '🍮', name: 'Pudding' },
]

export default function BakeLevel({ onDone }) {
  const [added, setAdded] = useState([])
  const done = added.length === INGREDIENTS.length

  const add = (name) => {
    if (added.includes(name)) return
    const next = [...added, name]
    setAdded(next)
    if (next.length === INGREDIENTS.length) onDone()
  }

  return (
    <div className="level-body">
      <p className="question">Plum pudding cake time! Add all the ingredients.</p>
      <div className="options row">
        {INGREDIENTS.map(({ emoji, name }) => (
          <button
            key={name}
            type="button"
            className="btn option"
            disabled={added.includes(name)}
            onClick={() => add(name)}
          >
            {emoji} {name}
          </button>
        ))}
      </div>
      <p className="bowl" aria-live="polite">
        {done ? '🎂' : '🥣'} {added.length}/{INGREDIENTS.length}
      </p>
      {done && (
        <p className="reaction">
          Vegan plum cake with a cookie crust, done. Rui volunteers as
          official taste tester. 😋
        </p>
      )}
    </div>
  )
}
