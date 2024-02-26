import { GameSymbol } from './game-symbol'
import styles from './game.module.css'

export const GameInfo = ({ isDraw, winnerSymbol, currentStep }) => {
  return (
    <div className={styles['game-info']}>
      {isDraw ? 'Ничья' : winnerSymbol ? 'Победили:' : 'Ход:'}
      {!isDraw && <GameSymbol symbol={currentStep} />}
    </div>
  )
}
