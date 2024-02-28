import { useState } from 'react'
import { SYMBOL_X, SYMBOL_O } from './constants'

export const useGameState = () => {
  const emptyCells = [null, null, null, null, null, null, null, null, null]
  const [cells, setCells] = useState(emptyCells)
  const [currentStep, setCurrentStep] = useState(SYMBOL_X)
  const [winnerSequence, setWinnerSequence] = useState()

  const handleCellClick = (index) => {
    if (cells[index] || winnerSequence) return

    const cellsCopy = [...cells]
    cellsCopy[index] = currentStep
    const winner = computeWinner(cellsCopy)

    if (winner) {
      setWinnerSequence(winner)
    } else {
      setCurrentStep(currentStep === SYMBOL_O ? SYMBOL_X : SYMBOL_O)
    }

    setCells(cellsCopy)
  }

  const handleResetClick = () => {
    setCells(emptyCells)
    setCurrentStep(SYMBOL_X)
    setWinnerSequence()
  }

  const isDraw = !winnerSequence && !cells.filter((item) => !item).length

  return {
    cells,
    currentStep,
    winnerSequence,
    handleCellClick,
    handleResetClick,
    isDraw,
  }
}

const computeWinner = (cells) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  return lines.filter((line) => {
    const [a, b, c] = line
    return cells[a] && cells[a] === cells[b] && cells[a] === cells[c]
  })[0]
}
