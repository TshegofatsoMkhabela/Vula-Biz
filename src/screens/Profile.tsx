import { useNavigate } from 'react-router-dom'
import { useAppState } from '@/hooks/useAppState'
import { BrutalCard } from '@/components/ui/brutal-card'
import { BrutalButton } from '@/components/ui/brutal-button'
import { strings } from '@/i18n/strings'

export function Profile() {
  const navigate = useNavigate()
  const { state } = useAppState()
  const l = state.language
  const { name, businessType, dependants, challenges } = state.profile

  const getBusinessLabel = () => {
    if (!businessType) return '—'
    return strings.onboarding.businessTypes[businessType as keyof typeof strings.onboarding.businessTypes]?.[l] || '—'
  }

  const getDependantsLabel = () => {
    if (!dependants) return '—'
    return strings.onboarding.dependants[dependants as keyof typeof strings.onboarding.dependants]?.[l] || '—'
  }

  const getChallengeLabel = () => {
    if (challenges.length === 0) return '—'
    const cid = challenges[0]
    return strings.onboarding.challenges[cid as keyof typeof strings.onboarding.challenges]?.[l] || '—'
  }

  return (
    <div className="space-y-6">
      <div>
        <p className="font-display font-bold text-[11px] uppercase tracking-[0.2em] text-ink/40 mb-2">
          {strings.profile.eyebrow[l]}
        </p>
        <h1 className="font-display font-bold text-[32px] tracking-tight text-ink">
          {strings.profile.headline[l](name)}
        </h1>
      </div>

      <BrutalCard accent="bg-accent2">
        <dl className="space-y-4">
          {[
            [strings.profile.row1[l], getBusinessLabel()],
            [strings.profile.row2[l], getDependantsLabel()],
            [strings.profile.row3[l], getChallengeLabel()],
          ].map(([label, value]) => (
            <div key={label} className="flex justify-between items-baseline gap-4">
              <dt className="font-display font-bold text-[11px] uppercase tracking-widest text-ink/40">{label}</dt>
              <dd className="font-display font-bold text-[15px] text-ink text-right">{value}</dd>
            </div>
          ))}
        </dl>
      </BrutalCard>

      <p className="font-body text-[16px] text-ink/70 leading-relaxed">
        {strings.profile.body[l]}
      </p>

      <BrutalButton variant="primary" fullWidth onClick={() => navigate('/modules')}>
        {strings.profile.cta[l]}
      </BrutalButton>
    </div>
  )
}
