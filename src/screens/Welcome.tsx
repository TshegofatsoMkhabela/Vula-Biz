import { useNavigate } from 'react-router-dom'
import { BrutalButton } from '@/components/ui/brutal-button'
import { useAppState } from '@/hooks/useAppState'
import { strings } from '@/i18n/strings'

export function Welcome() {
  const navigate = useNavigate()
  const { state } = useAppState()
  const l = state.language

  return (
    <div className="flex flex-col justify-between min-h-[85vh] py-6">
      <div>
        <p className="font-display font-bold text-[11px] uppercase tracking-[0.2em] text-ink/40 mb-10">
          {strings.welcome.eyebrow[l]}
        </p>
        <h1 className="font-display font-bold text-[48px] leading-[1.05] mb-6 tracking-tight text-ink">
          {strings.welcome.headline[l]}
        </h1>
        <p className="font-body text-[17px] text-ink/70 leading-relaxed max-w-[300px]">
          {strings.welcome.sub[l]}
        </p>
      </div>

      <div className="space-y-4">
        <BrutalButton variant="primary" fullWidth onClick={() => navigate('/onboarding')}>
          {strings.welcome.cta[l]}
        </BrutalButton>
        <p className="text-center font-body text-[12px] text-ink/40 uppercase tracking-widest font-bold">
          {strings.welcome.noSignup[l]}
        </p>
      </div>
    </div>
  )
}
