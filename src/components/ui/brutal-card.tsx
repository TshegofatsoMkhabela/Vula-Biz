import { cn } from '@/lib/utils'

interface BrutalCardProps extends React.HTMLAttributes<HTMLDivElement> {
  accent?: string
}

export function BrutalCard({ className, accent, children, ...props }: BrutalCardProps) {
  return (
    <div
      className={cn(
        'border-2 border-ink p-6 shadow-neo',
        accent ? accent : 'bg-surface',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
