export function computePlayerTimer(gameState, playerSymbol, isWinner) {
  return {
    timer: gameState.timers[playerSymbol],
    timerStartAt: playerSymbol === gameState.currentMove && !isWinner ? gameState.currentMoveStart : null,
  }
}
