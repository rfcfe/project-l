import PipocaMedia from './PipocaMedia'

export default function GameOverScreen({ onRestart }) {
  return (
    <section className="screen game-over">
      <h1 className="title gameover-title">GAME OVER</h1>

      <PipocaMedia kind="sad" />

      <p className="message">fine 😞 ok...</p>

      <p className="reaction">No worries, we're still cool ❤️</p>
      <p className="hint">🏆 Friendship achievement unlocked anyway.</p>

      <button type="button" className="btn blink" onClick={onRestart}>
        ↻ PLAY AGAIN
      </button>
    </section>
  )
}
