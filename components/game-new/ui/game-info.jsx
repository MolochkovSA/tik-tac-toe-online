import { StarIcon } from './icons/star-icon'
import { UserIcon } from './icons/user-icon'
import { HistoryIcon } from './icons/hictory-icon'

export function GameInfo({ playersCount, isRatingGame, timeMode }) {
  return (
    <div className="text-slate-400 text-xs leading-tight flex items-center gap-3">
      {isRatingGame && <StarIcon />}
      <div className="flex items-center gap-1">
        <UserIcon />
        {playersCount}
      </div>
      <div className="flex items-center gap-1">
        <HistoryIcon />
        {timeMode}
      </div>
    </div>
  )
}
