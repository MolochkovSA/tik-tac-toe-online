import { PLAYERS, DEFAULTTIMER } from './constants'
import { BackLink } from './ui/back-link'
import { GameInfo } from './ui/game-info'
import { GameLayout } from './ui/game-layout'
import { GameTitle } from './ui/game-title'
import { PlayerInfo } from './ui/player-info'

export function Game() {
  return (
    <GameLayout
      backLink={<BackLink />}
      title={<GameTitle />}
      gameInfo={<GameInfo playersCount={2} isRatingGame timeMode={'1 мин. на ход'} />}
      playersList={PLAYERS.map(({ id, ...restPlayer }, index) => (
        <PlayerInfo key={id} isRight={index % 2} seconds={DEFAULTTIMER} {...restPlayer} />
      ))}
    ></GameLayout>
  )
}
