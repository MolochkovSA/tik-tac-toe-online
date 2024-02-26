import { GameInfo } from './game-info'
import { GameCell } from './game-cell'
import { useGameState } from './use-game-state'
import styles from './game.module.css'

export const Game = () => {
  const { cells, currentStep, winnerSequence, handleCellClick, handleResetClick, isDraw } = useGameState()

  return (
    <div className={styles.game}>
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
      <button className={styles.reset} onClick={handleResetClick}>
        Сбросить
      </button>
    </div>
  )
}
