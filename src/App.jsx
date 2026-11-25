import { useState } from 'react'
import StartScreen from './components/StartScreen'
import QuestScreen from './components/QuestScreen'
import BossScreen from './components/BossScreen'
import YesScreen from './components/YesScreen'
import GameOverScreen from './components/GameOverScreen'
import './App.css'

function App() {
  const [stage, setStage] = useState('start') // start | quest | boss | yes | gameover

  return (
    <main className="app">
      {stage === 'start' && <StartScreen onStart={() => setStage('quest')} />}
      {stage === 'quest' && <QuestScreen onComplete={() => setStage('boss')} />}
      {stage === 'boss' && (
        <BossScreen onYes={() => setStage('yes')} onGameOver={() => setStage('gameover')} />
      )}
      {stage === 'yes' && <YesScreen />}
      {stage === 'gameover' && <GameOverScreen onRestart={() => setStage('start')} />}
    </main>
  )
}

export default App
