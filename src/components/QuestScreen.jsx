import { useState } from 'react'
import ChoiceLevel from './levels/ChoiceLevel'
import RunLevel from './levels/RunLevel'
import BakeLevel from './levels/BakeLevel'
import PetLevel from './levels/PetLevel'

const LEVELS = [
  {
    title: 'Vice City Heist',
    subtitle: 'GTA VI',
    render: (onDone) => (
      <ChoiceLevel
        question="We're in the getaway car. Who's driving?"
        options={[
          {
            label: '🚗 Sara',
            reaction: 'We lost half the car, but we still managed to escape in style. 😎',
          },
          {
            label: '🚗 Rui',
            reaction: 'Smooth choice. Sit back, relax and let me impress you. Spoiler: we will crash, but I will look really good doing it. 😏',
          },
        ]}
        onDone={onDone}
      />
    ),
  },
  {
    title: 'Pick Your Ride',
    subtitle: 'Hogwarts Legacy / Red Dead',
    render: (onDone) => (
      <ChoiceLevel
        question="Which one are we taking on the next adventure?"
        options={[
          {
            label: '🧹 Broomstick',
            reaction: 'Flying over the castle together. Rui will try not to fall off.',
          },
          {
            label: '🐎 Horse',
            reaction: 'Riding into the sunset, Arthur-style. Rui will carry the snacks.',
          },
        ]}
        onDone={onDone}
      />
    ),
  },
  {
    title: 'London → Brighton',
    subtitle: 'The 100k ultra',
    render: (onDone) => <RunLevel onDone={onDone} />,
  },
  {
    title: 'Bake Off',
    subtitle: 'Vegan plum cake',
    render: (onDone) => <BakeLevel onDone={onDone} />,
  },
  {
    title: 'Bonus: Pipoca',
    subtitle: 'The best dog',
    render: (onDone) => <PetLevel onDone={onDone} />,
  },
]

export default function QuestScreen({ onComplete }) {
  const [index, setIndex] = useState(0)
  const [levelDone, setLevelDone] = useState(false)

  const level = LEVELS[index]
  const isLast = index === LEVELS.length - 1

  const next = () => {
    if (isLast) {
      onComplete()
    } else {
      setIndex(index + 1)
      setLevelDone(false)
    }
  }

  return (
    <section className="screen quest">
      <p className="tag">
        LEVEL {index + 1} / {LEVELS.length}
      </p>
      <h2 className="level-title">{level.title}</h2>
      <p className="hint">{level.subtitle}</p>

      {/* key resets the level's state when we move to the next one */}
      <div key={index}>{level.render(() => setLevelDone(true))}</div>

      {levelDone && (
        <button type="button" className="btn blink" onClick={next}>
          {isLast ? '⚔️ FINAL BOSS' : 'NEXT LEVEL ▶'}
        </button>
      )}
    </section>
  )
}
