import { useState } from 'react'
import { GAME_SYMBOLS } from '../constants'
import { computeWinner } from './compute-winner'
import { getNextMove } from './get-next-move'

const defaultCells = new Array(19 * 19).fill(null)

export function useGameState(playersCount) {
  const [{ currentMove, cells, playersTimeOver }, setGameState] = useState({
    cells: defaultCells,
    currentMove: GAME_SYMBOLS.CROSS,
    playersTimeOver: [],
  })

  const winnerSequence = computeWinner(cells)
  const winnerSymbol = cells[winnerSequence?.[0]]
  const nextMove = getNextMove(currentMove, playersCount)

  const handleCellClick = (index) => {
    setGameState((lastGameState) => {
      if (lastGameState.cells[index] || winnerSequence) return lastGameState

      return {
        ...lastGameState,
        currentMove: getNextMove(lastGameState.currentMove, playersCount),
        cells: lastGameState.cells.map((cell, i) => (i === index ? lastGameState.currentMove : cell)),
      }
    })
  }

  const handlePlayerTimeOver = (symbol) => {
    setGameState((lastGameState) => {
      return {
        ...lastGameState,
        playersTimeOver: [...lastGameState.playersTimeOver, symbol],
        currentMove: getNextMove(lastGameState.currentMove, playersCount),
      }
    })
  }

  return { cells, currentMove, nextMove, handlePlayerTimeOver, handleCellClick, winnerSequence, winnerSymbol }
}
