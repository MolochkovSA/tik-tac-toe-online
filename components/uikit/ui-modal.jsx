import clsx from 'clsx'

/**
 *
 * @param {{
 * widht: 'md' | 'full'
 * }} props
 * @returns
 */
export function UiModal({ widht = 'md' }) {
  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur py-10">
      <div
        className={clsx(
          'bg-white rounded-lg min-h-[320px]',
          { md: 'max-w-[640px] w-full mx-auto', full: 'mx-5' }[widht]
        )}
      ></div>
      <button></button>
    </div>
  )
}
