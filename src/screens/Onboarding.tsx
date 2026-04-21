import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppState } from '@/hooks/useAppState'
import { strings } from '@/i18n/strings'
import { ProgressBar } from '@/components/ui/progress-bar'
import { BrutalButton } from '@/components/ui/brutal-button'
import { BrutalInput } from '@/components/ui/brutal-input'
import { OptionChip } from '@/components/ui/option-chip'

const TOTAL_STEPS = 7

export function Onboarding() {
  const navigate = useNavigate()
  const { state, updateProfile, completeOnboarding } = useAppState()
  const l = state.language
  
  const [step, setStep] = useState(1)

  const [name, setName] = useState('')
  const [area, setArea] = useState('')
  const [businessType, setBusinessType] = useState('')
  const [dependants, setDependants] = useState('')
  const [challenges, setChallenges] = useState<string[]>([])
  const [social, setSocial] = useState<string[]>([])
  const [banking, setBanking] = useState('')

  const [errorState, setErrorState] = useState(false)

  const toggleMulti = (
    value: string,
    current: string[],
    setter: (v: string[]) => void,
    max = 2
  ) => {
    if (errorState) setErrorState(false)
    if (current.includes(value)) {
      setter(current.filter(v => v !== value))
    } else if (current.length < max) {
      setter([...current, value])
    }
  }

  const handleFinish = () => {
    if (!canContinue()) {
      setErrorState(true)
      setTimeout(() => setErrorState(false), 500)
      return
    }
    updateProfile({
      name,
      area,
      businessType: businessType as any,
      dependants,
      challenges: challenges as any,
      socialMedia: social as any,
      bankingStatus: banking as any,
    })
    completeOnboarding()
    navigate('/profile')
  }

  const handleNext = () => {
    if (!canContinue()) {
      setErrorState(true)
      setTimeout(() => setErrorState(false), 500)
      return
    }
    setStep(s => s + 1)
  }

  const canContinue = () => {
    if (step === 1) return name.trim().length > 0
    if (step === 2) return area.trim().length > 0
    if (step === 3) return businessType !== ''
    if (step === 4) return dependants !== ''
    if (step === 5) return challenges.length > 0
    if (step === 6) return social.length > 0
    if (step === 7) return banking !== ''
    return false
  }

  return (
    <div className="flex flex-col min-h-[85vh]">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          {step > 1 ? (
            <button
              onClick={() => setStep(s => s - 1)}
              className="font-body text-[13px] text-ink/50 underline underline-offset-2"
            >
              {strings.nav.back[l]}
            </button>
          ) : <span />}
          <span className="font-body text-[12px] text-ink/40">
            {strings.nav.step[l](step, TOTAL_STEPS)}
          </span>
        </div>
        <ProgressBar current={step} total={TOTAL_STEPS} accentClass="bg-accent" />
      </div>

      {/* Questions */}
      <div className={`flex-1 space-y-4 ${errorState ? 'animate-shake' : ''}`}>

        {step === 1 && (
          <>
            <h2 className="font-display font-bold text-[24px] tracking-tight">{strings.onboarding.q1[l]}</h2>
            <BrutalInput
              placeholder={strings.onboarding.q1placeholder[l]}
              value={name}
              onChange={e => {
                setName(e.target.value)
                if (errorState) setErrorState(false)
              }}
              className={errorState ? 'border-error shadow-[2px_2px_0px_0px_theme(colors.error)]' : ''}
            />
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="font-display font-bold text-[24px] tracking-tight">{strings.onboarding.q2[l]}</h2>
            <BrutalInput
              placeholder={strings.onboarding.q2placeholder[l]}
              value={area}
              onChange={e => {
                setArea(e.target.value)
                if (errorState) setErrorState(false)
              }}
              className={errorState ? 'border-error shadow-[2px_2px_0px_0px_theme(colors.error)]' : ''}
            />
          </>
        )}

        {step === 3 && (
          <>
            <h2 className="font-display font-bold text-[24px] tracking-tight">{strings.onboarding.q3[l]}</h2>
            <div className={`space-y-3 transition-colors`}>
              {Object.entries(strings.onboarding.businessTypes).map(([value, trans]) => (
                <OptionChip
                  key={value}
                  label={trans[l]}
                  selected={businessType === value}
                  onClick={() => {
                     setBusinessType(value)
                     if (errorState) setErrorState(false)
                  }}
                />
              ))}
            </div>
          </>
        )}

        {step === 4 && (
          <>
            <h2 className="font-display font-bold text-[24px] tracking-tight">{strings.onboarding.q4[l]}</h2>
            <div className={`space-y-3 transition-colors`}>
              {Object.entries(strings.onboarding.dependants).map(([value, trans]) => (
                <OptionChip
                  key={value}
                  label={trans[l]}
                  selected={dependants === value}
                  onClick={() => {
                    setDependants(value)
                    if (errorState) setErrorState(false)
                  }}
                />
              ))}
            </div>
          </>
        )}

        {step === 5 && (
          <>
            <h2 className="font-display font-bold text-[24px] tracking-tight">{strings.onboarding.q5[l]}</h2>
            <p className="font-display font-bold text-[11px] uppercase tracking-widest text-ink/40 -mt-2">
              {strings.onboarding.q5sub[l]}
            </p>
            <div className={`space-y-3 transition-colors`}>
              {Object.entries(strings.onboarding.challenges).map(([value, trans]) => (
                <OptionChip
                  key={value}
                  label={trans[l]}
                  selected={challenges.includes(value)}
                  onClick={() => toggleMulti(value, challenges, setChallenges, 2)}
                />
              ))}
            </div>
          </>
        )}

        {step === 6 && (
          <>
            <h2 className="font-display font-bold text-[24px] tracking-tight">{strings.onboarding.q6[l]}</h2>
            <div className={`space-y-3 transition-colors`}>
              {Object.entries(strings.onboarding.social).map(([value, trans]) => (
                <OptionChip
                  key={value}
                  label={trans[l]}
                  selected={social.includes(value)}
                  onClick={() => toggleMulti(value, social, setSocial, 4)}
                />
              ))}
            </div>
          </>
        )}

        {step === 7 && (
          <>
            <h2 className="font-display font-bold text-[24px] tracking-tight">{strings.onboarding.q7[l]}</h2>
            <div className={`space-y-3 transition-colors`}>
              {Object.entries(strings.onboarding.banking).map(([value, trans]) => (
                <OptionChip
                  key={value}
                  label={trans[l]}
                  selected={banking === value}
                  onClick={() => {
                    setBanking(value)
                    if (errorState) setErrorState(false)
                  }}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Footer CTA */}
      <div className="mt-8">
        <BrutalButton
          fullWidth
          onClick={step < TOTAL_STEPS ? handleNext : handleFinish}
        >
          {step < TOTAL_STEPS ? strings.nav.continue[l] : strings.onboarding.finish[l]}
        </BrutalButton>
      </div>
    </div>
  )
}
