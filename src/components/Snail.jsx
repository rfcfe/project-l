import { snailSrc } from '../media'

export default function Snail({ caption = '' }) {
  return (
    <figure className="snail">
      {snailSrc ? (
        <img src={snailSrc} alt="A suspicious snail" />
      ) : (
        <span className="snail-emoji" role="img" aria-label="A suspicious snail">
          🐌
        </span>
      )}
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}
