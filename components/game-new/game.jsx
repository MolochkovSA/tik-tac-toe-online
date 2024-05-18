import { PLAYERS, DEFAULTTIMER, PLAYERS_COUNT } from './constants'
import { useGameState } from './model/use-game-state'
import { BackLink } from './ui/back-link'
import { GameCell } from './ui/game-cell'
import { GameInfo } from './ui/game-info'
import { GameLayout } from './ui/game-layout'
import { GameMoveInfo } from './ui/game-move-info'
import { GameOverModal } from './ui/game-over-modal'
import { GameTitle } from './ui/game-title'
import { PlayerInfo } from './ui/player-info'

export function Game() {
  const { cells, currentMove, nextMove, handlePlayerTimeOver, handleCellClick, winnerSequence, winnerSymbol } =
    useGameState(PLAYERS_COUNT)

  const winnerPlayer = PLAYERS.find((player) => player.symbol === winnerSymbol)
  return (
    <>
      <GameLayout
        backLink={<BackLink />}
        title={<GameTitle />}
        gameInfo={<GameInfo playersCount={2} isRatingGame timeMode={'1 мин. на ход'} />}
        playersList={PLAYERS.slice(0, PLAYERS_COUNT).map(({ id, ...restPlayer }, index) => (
          <PlayerInfo key={id} isRight={index % 2} seconds={DEFAULTTIMER} {...restPlayer} />
        ))}
        gameMoveInfo={<GameMoveInfo currentMove={currentMove} nextMove={nextMove} />}
        gameCells={cells.map((cell, index) => (
          <GameCell
            key={index}
            onClick={() => handleCellClick(index)}
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
