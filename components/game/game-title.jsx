import Link from 'next/link'
import { ArrowLeftIcon } from './icons/arrow-left-icon'
import { StarIcon } from './icons/star-icon'
import { UserIcon } from './icons/user-icon'
import { HistoryIcon } from './icons/hictory-icon'

export function GameTitle() {
  return (
    <div className="pl-2">
      <Link href="#" className="flex items-center gap-2 text-teal-600 text-xs leading-tight -mb-0.5">
        <ArrowLeftIcon />
        На галвную
      </Link>
      <h1 className="text-4xl leading-tight">Крестики нолики</h1>
      <div className="text-slate-400 text-xs leading-tight flex items-center gap-3">
        <StarIcon />
        <div className="flex items-center gap-1">
          <UserIcon />2
        </div>
        <div className="flex items-center gap-1">
          <HistoryIcon />1 минута на ход
        </div>
      </div>
    </div>
  )
}
