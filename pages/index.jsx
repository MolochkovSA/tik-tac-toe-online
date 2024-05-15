import { useState } from 'react'
import { GameField, GameInfo, GameTitle, useGameState } from '../components/game'
import { Header } from '../components/header/'
import { GameSymbol } from '../components/game/game-symbol'

export default function HomePage() {
  const [playersCount] = useState(2)
  const { cells, currentMove, nextMove, handleCellClick, winnerSequence, winnerSymbol, handlePlayerTimeOver } =
    useGameState(playersCount)

  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <main className="pt-6 mx-auto w-max">
        <GameTitle playersCount={playersCount} />
        <GameInfo
          className="mt-4"
          playersCount={playersCount}
          currentMove={currentMove}
          winnerSymbol={winnerSymbol}
          onPlayerTimeOver={handlePlayerTimeOver}
        />
        {winnerSymbol && (
          <div className="mt-4">
            <GameSymbol symbol={winnerSymbol} />
          </div>
        )}
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
