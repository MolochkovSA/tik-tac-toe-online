export function computeWinnerSymbol(gameState, winnerSequence) {
  return gameState.cells[winnerSequence?.[0]]
}
