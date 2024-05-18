import { MOVE_ORDER } from '../constants'

export function getNextMove(currentMove, playersCount) {
  const sliceMoveOrder = MOVE_ORDER.slice(0, playersCount)
  const nextMoveIndex = sliceMoveOrder.indexOf(currentMove) + 1
  return sliceMoveOrder[nextMoveIndex] ?? sliceMoveOrder[0]
}
