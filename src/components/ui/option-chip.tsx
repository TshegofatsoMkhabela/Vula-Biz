import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface OptionChipProps {
  label: string
  selected: boolean
  onClick: () => void
}

export function OptionChip({ label, selected, onClick }: OptionChipProps) {
  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={cn(
        'w-full text-left px-5 py-4 border-2 border-ink font-display font-bold text-[16px] transition-all rounded-none',
        selected
          ? 'bg-accent text-ink shadow-none translate-x-[2px] translate-y-[2px]'
          : 'bg-surface text-ink shadow-neo-sm hover:bg-accent/10'
      )}
    >
      <div className="flex items-center gap-3">
        {selected && <span className="text-ink font-bold">✓</span>}
        {label}
      </div>
    </motion.button>
  )
}
