import { useState } from 'react'

const TARGET = 15 // taps to finish
const KM = 100

// Message shown depending on how far along the race she is.
function statusFor(km) {
  if (km === 0) return '📍 London. Start line. Deep breath.'
  if (km < 30) return '🌅 Legs feeling good. Easy pace, Sara.'
  if (km < 60) return '🔥 Halfway-ish. This is where she gets stronger.'
  if (km < 90) return '💪 Getting tough? Sara has done harder (and softer 🫣) things.'
  if (km < 100) return '🌊 Can you smell the sea? Brighton is right there!'
  return '🏁 BRIGHTON!'
}

export default function RunLevel({ onDone }) {
  const [taps, setTaps] = useState(0)
  const finished = taps >= TARGET
  const km = Math.round((taps / TARGET) * KM)

  const run = () => {
    if (finished) return
    const next = taps + 1
    setTaps(next)
    if (next >= TARGET) onDone()
  }

  return (
    <div className="level-body">
      <p className="question">
        London → Brighton, 100 km. Tap to run. No walking! (okay, maybe sometimes)
      </p>
      <div
        className="progress"
        role="progressbar"
        aria-valuenow={km}
        aria-valuemin={0}
        aria-valuemax={KM}
      >
        <div className="progress-fill" style={{ width: `${(taps / TARGET) * 100}%` }} />
      </div>
      <p className="counter">
        {km} / {KM} km
      </p>
      <p className="reaction" aria-live="polite">
        {statusFor(km)}
      </p>
      <button type="button" className="btn" onClick={run} disabled={finished}>
        {finished ? '🏅 FINISHED' : '🏃 RUN'}
      </button>
      {finished && (
        <p className="reaction">
          100 km from London to Brighton on her own two legs. Rui will be
          the loudest one at the finish line. 🎉
        </p>
      )}
    </div>
  )
}
