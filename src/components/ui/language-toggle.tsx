import { useAppState } from '@/hooks/useAppState'
import { strings } from '@/i18n/strings'
import { cn } from '@/lib/utils'

export function LanguageToggle() {
  const { state, setLanguage } = useAppState()
  const currentLang = state.language

  const toggleLanguage = () => {
    setLanguage(currentLang === 'zu' ? 'en' : 'zu')
  }

  return (
    <button
      onClick={toggleLanguage}
      className={cn(
        'font-display font-bold text-[13px] px-3 py-1.5 border-2 border-ink shadow-neo-sm transition-all active:translate-x-[1px] active:translate-y-[1px] active:shadow-none bg-surface',
        currentLang === 'zu' ? 'bg-accent2' : 'bg-accent'
      )}
    >
      {strings.lang.switch[currentLang]}
    </button>
  )
}
