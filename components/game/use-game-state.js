import { useState } from 'react'
import { GAME_SYMBOLS } from './constants'
import { getNextMove, computeWinner } from './game-logic'

const defaultCells = new Array(19 * 19).fill(null)

export function useGameState(playersCount) {
  const [{ currentMove, cells }, setGameState] = useState({ cells: defaultCells, currentMove: GAME_SYMBOLS.CROSS })

  const winnerSequence = computeWinner(cells)
  const nextMove = getNextMove(currentMove, playersCount)

  const handleCellClick = (index) => {
    setGameState((lastGameState) => {
      if (lastGameState.cells[index]) return lastGameState

      return {
        ...lastGameState,
        currentMove: getNextMove(lastGameState.currentMove, playersCount),
        cells: lastGameState.cells.map((cell, i) => (i === index ? lastGameState.currentMove : cell)),
      }
    })
  }

  return { cells, currentMove, nextMove, handleCellClick, winnerSequence }
}
