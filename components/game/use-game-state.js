import { useState } from 'react'
import { GAME_SYMBOLS, MOVE_ORDER } from './constants'

const defaultCells = new Array(19 * 19).fill(null)

function getNextMove(currentMove, playersCount) {
  const sliceMoveOrder = MOVE_ORDER.slice(0, playersCount)
  const nextMoveIndex = sliceMoveOrder.indexOf(currentMove) + 1
  return sliceMoveOrder[nextMoveIndex] ?? sliceMoveOrder[0]
}

export function useGameState(playersCount) {
  const [{ currentMove, cells }, setGameState] = useState({ cells: defaultCells, currentMove: GAME_SYMBOLS.CROSS })

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

  return { cells, currentMove, nextMove, handleCellClick }
}
