import { useState } from 'react'
import { GameField, GameInfo, GameTitle, useGameState } from '../components/game'
import { Header } from '../components/header/'
import { UiModal } from '../components/uikit/ui-modal'

export default function HomePage() {
  const [playersCount] = useState(2)
  const { cells, currentMove, nextMove, handleCellClick, winnerSequence } = useGameState(playersCount)

  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <main className="pt-6 mx-auto w-max">
        <GameTitle playersCount={playersCount} />
        <GameInfo className="mt-4" playersCount={playersCount} currentMove={currentMove} />
        <UiModal widht="md" />
        <GameField
          className="mt-6"
          cells={cells}
          currentMove={currentMove}
          nextMove={nextMove}
          handleCellClick={handleCellClick}
          winnerSequence={winnerSequence}
        />
      </main>
    </div>
  )
}
