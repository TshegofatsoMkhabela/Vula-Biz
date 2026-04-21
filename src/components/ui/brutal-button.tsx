import { motion, HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'

interface BrutalButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: 'primary' | 'whatsapp' | 'ghost'
  fullWidth?: boolean
}

export function BrutalButton({
  variant = 'primary',
  fullWidth = false,
  className,
  children,
  ...props
}: BrutalButtonProps) {
  const variants = {
    primary: 'bg-accent text-ink border-2 border-ink shadow-neo',
    whatsapp: 'bg-wa text-white border-2 border-ink shadow-neo',
    ghost: 'bg-transparent text-ink border-2 border-ink shadow-neo',
  }

  return (
    <motion.button
      whileTap={{ x: 4, y: 4, boxShadow: '1px 1px 0px 0px #000' }}
      transition={{ duration: 0.1 }}
      className={cn(
        'font-display font-bold text-[15px] px-6 py-3 cursor-pointer select-none transition-colors rounded-none',
        variants[variant],
        fullWidth && 'w-full',
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  )
}
