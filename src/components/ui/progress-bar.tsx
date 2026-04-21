import { cn } from '@/lib/utils'

interface ProgressBarProps {
  current: number
  total: number
  accentClass?: string
}

export function ProgressBar({ current, total, accentClass = 'bg-accent' }: ProgressBarProps) {
  const percentage = Math.min(Math.max((current / total) * 100, 0), 100)
  
  return (
    <div className="w-full h-4 border-2 border-ink bg-surface shadow-neo-sm overflow-hidden rounded-none">
      <div 
        className={cn('h-full transition-all duration-300 border-r-2 border-ink', accentClass)}
        style={{ width: `${percentage}%` }}
      />
    </div>
  )
}
