import { GameInfo } from './game-info'
import { GameCell } from './game-cell'
import { useGameState } from './use-game-state'
import styles from './game.module.css'

export const Game = () => {
  const { cells, currentStep, winnerSequence, handleCellClick, handleResetClick, isDraw } = useGameState()

  return (
    <div className="flex flex-col items-center w-40 mx-auto my-24 p-5 border border-black">
      <GameInfo isDraw={isDraw} winnerSymbol={winnerSequence} currentStep={currentStep} />
      <div className={styles['game-field']}>
        {cells.map((symbol, index) => (
          <GameCell
            key={index}
            isWinner={winnerSequence?.includes(index)}
            symbol={symbol}
            onClick={() => handleCellClick(index)}
          />
        ))}
      </div>
      <button
        className="cursor-pointer mt-2.5 bg-transparent border border-gray-400 py-1 px-3 rounded "
        onClick={handleResetClick}
      >
        Сбросить
      </button>
    </div>
  )
}
