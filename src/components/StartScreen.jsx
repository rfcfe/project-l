export default function StartScreen({ onStart }) {
  return (
    <section className="screen start">
      <p className="tag">A Rui Production</p>
      <h1 className="title">
        SARA'S
        <br />
        QUEST
      </h1>
      <p className="subtitle">
        A short adventure with games, running, baking and one very good dog.
      </p>
      <button type="button" className="btn blink" onClick={onStart}>
        ▶ PRESS START
      </button>
      <p className="hint">1 player · ~2 minutes</p>
    </section>
  )
}
