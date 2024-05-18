import { useReducer } from 'react'
import { PLAYERS, DEFAULTTIMER, PLAYERS_COUNT } from './constants'
import { computeWinnerSymbol } from './model/compute-winner-symbol'
import { computeWinner } from './model/compute-winner'
import { getNextMove } from './model/get-next-move'

import { GAME_STATE_ACTIONS, gameStateReducer, iniGameState } from './model/game-state-reducer'

import { BackLink } from './ui/back-link'
import { GameCell } from './ui/game-cell'
import { GameInfo } from './ui/game-info'
import { GameLayout } from './ui/game-layout'
import { GameMoveInfo } from './ui/game-move-info'
import { GameOverModal } from './ui/game-over-modal'
import { GameTitle } from './ui/game-title'
import { PlayerInfo } from './ui/player-info'

export function Game() {
  const [gameState, dispath] = useReducer(gameStateReducer, { playersCount: PLAYERS_COUNT }, iniGameState)

  const winnerSequence = computeWinner(gameState.cells)
  const nextMove = getNextMove(gameState.currentMove, PLAYERS_COUNT)
  const winnerSymbol = computeWinnerSymbol(gameState, winnerSequence)
  const winnerPlayer = PLAYERS.find((player) => player.symbol === winnerSymbol)

  const { cells, currentMove } = gameState

  return (
    <>
      <GameLayout
        backLink={<BackLink />}
        title={<GameTitle />}
        gameInfo={<GameInfo playersCount={PLAYERS_COUNT} isRatingGame timeMode={'1 мин. на ход'} />}
        playersList={PLAYERS.slice(0, PLAYERS_COUNT).map(({ id, ...restPlayer }, index) => (
          <PlayerInfo key={id} isRight={index % 2} seconds={DEFAULTTIMER} {...restPlayer} />
        ))}
        gameMoveInfo={<GameMoveInfo currentMove={currentMove} nextMove={nextMove} />}
        gameCells={cells.map((cell, index) => (
          <GameCell
            key={index}
            onClick={() => dispath({ type: GAME_STATE_ACTIONS.CELL_CLICK, index })}
            isWinner={winnerSequence?.includes(index)}
            symbol={cell}
          />
        ))}
      />
      <GameOverModal
        players={PLAYERS.slice(0, PLAYERS_COUNT).map(({ id, ...restPlayer }, index) => (
          <PlayerInfo key={id} isRight={index % 2} seconds={DEFAULTTIMER} {...restPlayer} />
        ))}
        winnerName={winnerPlayer?.name}
      />
    </>
  )
}
