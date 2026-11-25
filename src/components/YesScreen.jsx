import { useEffect } from 'react'
import confetti from 'canvas-confetti'
import Snail from './Snail'
import PipocaMedia from './PipocaMedia'

export default function YesScreen() {
  useEffect(() => {
    const end = Date.now() + 3000
    let frame
    const burst = () => {
      confetti({ particleCount: 4, angle: 60, spread: 70, origin: { x: 0 } })
      confetti({ particleCount: 4, angle: 120, spread: 70, origin: { x: 1 } })
      if (Date.now() < end) frame = requestAnimationFrame(burst)
    }
    burst()
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <section className="screen yes-screen">
      <p className="tag">🏆 ACHIEVEMENT UNLOCKED</p>
      <h2 className="title small">SHE SAID YES!</h2>

      <Snail />

      <p className="message">
        If you're not messing with me, you've just earned yourself a personal
        running crew, a baked goods taste tester, a dish cleaner and a life
        full of licking 👅 (thanks, Pipoca).
      </p>

      <p className="hint confirm-note">
        I still need a confirmation though... message me! 📱
      </p>

      <PipocaMedia kind="wagging" caption="Pipoca approves" />

      <p className="hint">Player 1 (Rui) + Player 2 (Sara) + Pipoca 🐾</p>
    </section>
  )
}
