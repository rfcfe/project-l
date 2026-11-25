import { pipocaMedia } from '../media'

// kind: 'sad' | 'sleepy' | 'wagging'. Renders nothing if the file is missing.
export default function PipocaMedia({ kind, caption }) {
  const src = pipocaMedia[kind]
  if (!src) return null

  const isVideo = kind === 'wagging'

  return (
    <figure className="pipoca-media">
      {isVideo ? (
        <video src={src} autoPlay loop muted playsInline aria-label="Pipoca wagging her tail" />
      ) : (
        <img src={src} alt={`${kind} Pipoca`} />
      )}
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}
