import { GameSymbol } from './game-symbol'

export const GameInfo = ({ isDraw, winnerSymbol, currentStep }) => {
  return (
    <div className="mb-2.5">
      {isDraw ? 'Ничья' : winnerSymbol ? 'Победили:' : 'Ход:'}
      {!isDraw && <GameSymbol symbol={currentStep} />}
    </div>
  )
}
