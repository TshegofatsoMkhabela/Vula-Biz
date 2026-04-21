import { cn } from '@/lib/utils'

export function BrutalInput({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        'w-full border-2 border-ink rounded-none bg-surface px-4 py-3 shadow-neo-sm',
        'font-body text-[15px] placeholder:text-ink/30',
        'focus:outline-none focus:shadow-none focus:translate-x-[2px] focus:translate-y-[2px] transition-all',
        className
      )}
      {...props}
    />
  )
}
