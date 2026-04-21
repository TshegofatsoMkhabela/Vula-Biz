import { BrutalButton } from '@/components/ui/brutal-button'
import { BrutalCard } from '@/components/ui/brutal-card'
import { useAppState } from '@/hooks/useAppState'
import { strings } from '@/i18n/strings'

interface WhatsAppCTAProps {
  instruction: string
  deepLink: string
  onDefer: () => void
}

export function WhatsAppCTA({ instruction, deepLink, onDefer }: WhatsAppCTAProps) {
  const { state } = useAppState()
  const l = state.language

  return (
    <div className="space-y-3 mt-4">
      <BrutalCard className="border-2 border-ink shadow-[4px_4px_0px_0px_#25D366]">
        <p className="font-display font-bold text-[11px] uppercase tracking-widest text-ink/40 mb-3">
          {strings.cta.header[l]}
        </p>
        <div className="max-h-[45vh] overflow-y-auto pr-1">
          <p className="font-body text-[14px] leading-relaxed text-ink whitespace-pre-line">
            {instruction}
          </p>
        </div>
      </BrutalCard>
      <BrutalButton
        variant="whatsapp"
        fullWidth
        onClick={() => window.open(deepLink, '_blank')}
      >
        {strings.cta.openWa[l]}
      </BrutalButton>
      <button
        onClick={onDefer}
        className="w-full text-center font-body text-[13px] text-ink/50 underline underline-offset-2 py-2"
      >
        {strings.cta.defer[l]}
      </button>
    </div>
  )
}
