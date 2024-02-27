import { GameSymbol } from './game-symbol'
import { clsx } from 'clsx'

export const GameCell = ({ isWinner, onClick, symbol }) => {
  return (
    <button
      className={clsx(
        'border border-gray-400 -ml-px -mt-px flex items-center justify-center',
        isWinner && 'bg-red-200'
      )}
      onClick={onClick}
    >
      {symbol ? <GameSymbol symbol={symbol} /> : null}
    </button>
  )
}
