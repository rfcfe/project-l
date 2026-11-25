import { useState } from 'react'

// Generic "pick an option, get a reaction" level.
export default function ChoiceLevel({ question, options, onDone }) {
  const [picked, setPicked] = useState(null)

  return (
    <div className="level-body">
      <p className="question">{question}</p>
      <div className="options">
        {options.map((option, i) => (
          <button
            key={option.label}
            type="button"
            className={`btn option ${picked === i ? 'picked' : ''}`}
            disabled={picked !== null}
            onClick={() => {
              setPicked(i)
              onDone()
            }}
          >
            {option.label}
          </button>
        ))}
      </div>
      {picked !== null && <p className="reaction">{options[picked].reaction}</p>}
    </div>
  )
}
