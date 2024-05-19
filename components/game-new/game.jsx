import { useCallback, useMemo, useReducer } from 'react'
import { PLAYERS, DEFAULT_TIMER, PLAYERS_COUNT } from './constants'
import { computeWinnerSymbol } from './model/compute-winner-symbol'
import { computeWinner } from './model/compute-winner'
import { getNextMove } from './model/get-next-move'

import { GAME_STATE_ACTIONS, gameStateReducer, initGameState } from './model/game-state-reducer'

import { BackLink } from './ui/back-link'
import { GameCell } from './ui/game-cell'
import { GameInfo } from './ui/game-info'
import { GameLayout } from './ui/game-layout'
import { GameMoveInfo } from './ui/game-move-info'
import { GameOverModal } from './ui/game-over-modal'
import { GameTitle } from './ui/game-title'
import { PlayerInfo } from './ui/player-info'
import { computePlayerTimer } from './model/compute-player-timer'
import { useInterval } from '../lib/timers'

export function Game() {
  const [gameState, dispath] = useReducer(
    gameStateReducer,
    { playersCount: PLAYERS_COUNT, defaultTimer: DEFAULT_TIMER, currentMoveStart: Date.now() },
    initGameState
  )

  const winnerSequence = useMemo(() => computeWinner(gameState.cells), [gameState])

  const nextMove = getNextMove(gameState.currentMove, PLAYERS_COUNT, gameState.timers)
  const winnerSymbol = computeWinnerSymbol(gameState, { winnerSequence, nextMove })
  const winnerPlayer = PLAYERS.find((player) => player.symbol === winnerSymbol)

  useInterval(
    1000,
    !winnerSymbol && gameState.currentMoveStart,
    useCallback(() => {
      dispath({ type: GAME_STATE_ACTIONS.TICK, now: Date.now() })
    }, [])
  )

  const handleCellClick = useCallback(
    (index) => dispath({ type: GAME_STATE_ACTIONS.CELL_CLICK, index, now: Date.now() }),
    []
  )

  const { cells, currentMove } = gameState

  return (
    <>
      <GameLayout
        backLink={<BackLink />}
        title={<GameTitle />}
        gameInfo={<GameInfo playersCount={PLAYERS_COUNT} isRatingGame timeMode={'1 мин. на ход'} />}
        playersList={PLAYERS.slice(0, PLAYERS_COUNT).map(({ id, ...restPlayer }, index) => {
          const { timer, timerStartAt } = computePlayerTimer(gameState, restPlayer.symbol, !!winnerSymbol)

          return <PlayerInfo key={id} isRight={index % 2} timer={timer} timerStartAt={timerStartAt} {...restPlayer} />
        })}
        gameMoveInfo={<GameMoveInfo currentMove={currentMove} nextMove={nextMove} />}
        gameCells={cells.map((cell, index) => (
          <GameCell
            key={index}
            disabled={!!winnerSymbol}
            onClick={handleCellClick}
            isWinner={winnerSequence?.includes(index)}
            symbol={cell}
            index={index}
          />
        ))}
      />
      <GameOverModal
        players={PLAYERS.slice(0, PLAYERS_COUNT).map(({ id, ...restPlayer }, index) => {
          const { timer, timerStartAt } = computePlayerTimer(gameState, restPlayer.symbol, !!winnerSymbol)

          return <PlayerInfo key={id} isRight={index % 2} timer={timer} timerStartAt={timerStartAt} {...restPlayer} />
        })}
        winnerName={winnerPlayer?.name}
      />
    </>
  )
}
