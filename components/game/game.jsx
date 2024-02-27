import { GameInfo } from './game-info'
import { GameCell } from './game-cell'
import { useGameState } from './use-game-state'
import { ResetButton } from './reset-btn'

export const Game = () => {
  const { cells, currentStep, winnerSequence, handleCellClick, handleResetClick, isDraw } = useGameState()

  return (
    <div className="flex flex-col items-center w-40 mx-auto my-24 p-5 border border-black">
      <GameInfo isDraw={isDraw} winnerSymbol={winnerSequence} currentStep={currentStep} />
      <div className="grid pt-px pl-px grid-cols-[repeat(3,_30px)] grid-rows-[repeat(3,_30px)]">
        {cells.map((symbol, index) => (
          <GameCell
            key={index}
            isWinner={winnerSequence?.includes(index)}
            symbol={symbol}
            onClick={() => handleCellClick(index)}
          />
        ))}
      </div>
      <ResetButton onClick={handleResetClick} />
    </div>
  )
}
