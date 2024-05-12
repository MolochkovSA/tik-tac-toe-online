import { useState } from 'react'
import { GAME_SYMBOLS, MOVE_ORDER } from './constants'

const defaultCells = new Array(19 * 19).fill(null)

function getNextMove(currentMove) {
  const nextMoveIndex = MOVE_ORDER.indexOf(currentMove) + 1
  return MOVE_ORDER[nextMoveIndex] ?? MOVE_ORDER[0]
}

export function useGameState() {
  const [{ currentMove, cells }, setGameState] = useState({ cells: defaultCells, currentMove: GAME_SYMBOLS.CROSS })

  const nextMove = getNextMove(currentMove)

  const handleCellClick = (index) => {
    setGameState((lastGameState) => {
      if (lastGameState.cells[index]) return lastGameState

      return {
        ...lastGameState,
        currentMove: getNextMove(lastGameState.currentMove),
        cells: lastGameState.cells.map((cell, i) => (i === index ? lastGameState.currentMove : cell)),
      }
    })
  }

  return { cells, currentMove, nextMove, handleCellClick }
}
