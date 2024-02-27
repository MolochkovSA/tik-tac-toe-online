import clsx from 'clsx'
import { SYMBOL_X, SYMBOL_O } from './constants'

export const GameSymbol = ({ symbol }) => {
  return (
    <span
      className={clsx(
        'text-xl leading-6',
        symbol === SYMBOL_X && 'text-red-500',
        symbol === SYMBOL_O && 'text-green-500'
      )}
    >
      {symbol}
    </span>
  )
}
