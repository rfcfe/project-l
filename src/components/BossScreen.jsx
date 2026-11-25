import { useState } from 'react'
import Snail from './Snail'
import PipocaMedia from './PipocaMedia'

// Text shown on the "No" button after each click (7 changes).
// After the last one is clicked, it's game over.
const NO_TEXTS = [
  'No',
  'Are you sure?',
  'Really sure?',
  'Think about Pipoca...',
  'Pipoca is crying now',
  'I will do the dishes',
  'Last chance...',
  'Pretty please?',
]

export default function BossScreen({ onYes, onGameOver }) {
  const [noClicks, setNoClicks] = useState(0)

  const noLabel = NO_TEXTS[noClicks]

  // Yes grows, No shrinks with every click.
  const yesScale = 1 + noClicks * 0.1
  const noScale = Math.max(1 - noClicks * 0.06, 0.6)

  // After the second-to-last No click, Yes and No swap sides.
  const swapped = noClicks >= NO_TEXTS.length - 1

  const handleNo = () => {
    const next = noClicks + 1
    if (next >= NO_TEXTS.length) {
      onGameOver()
    } else {
      setNoClicks(next)
    }
  }

  return (
    <section className="screen boss">
      <p className="tag">⚔️ FINAL BOSS</p>
      <h2 className="boss-question">
        Sara, will you be my exclusive partner in crime?
      </h2>
      <p className="hint">Rui · co-op mode · forever player two</p>

      {/* Fixed-height slot so nothing below jumps when media appears */}
      <div className="boss-media">
        {noClicks >= 3 && <PipocaMedia kind="sad" caption="Pipoca is watching..." />}
        {noClicks >= 4 && <Snail />}
      </div>

      <div className={`boss-buttons ${swapped ? 'swapped' : ''}`}>
        <button
          type="button"
          className="btn yes"
          style={{ transform: `scale(${yesScale})` }}
          onClick={onYes}
        >
          YES 💖
        </button>
        <button
          type="button"
          className="btn no"
          style={{ transform: `scale(${noScale})` }}
          onClick={handleNo}
        >
          {noLabel}
        </button>
      </div>
    </section>
  )
}
