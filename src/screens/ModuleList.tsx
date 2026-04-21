import { useNavigate } from 'react-router-dom'
import { useAppState } from '@/hooks/useAppState'
import { cn } from '@/lib/utils'
import { BrutalCard } from '@/components/ui/brutal-card'
import { ProgressBar } from '@/components/ui/progress-bar'
import { ArrowRight, ZapOff, Handshake, Phone, Banknote, CheckCircle2 } from 'lucide-react'
import { modulesData, localizeModule } from '@/data/modules'
import { strings } from '@/i18n/strings'

const ICONS: Record<string, React.ReactNode> = {
  CashIcon: <Banknote size={24} />,
  PhoneIcon: <Phone size={24} />,
  ZapOffIcon: <ZapOff size={24} />,
  HandshakeIcon: <Handshake size={24} />
}

export function ModuleList() {
  const navigate = useNavigate()
  const { state } = useAppState()
  const l = state.language
  const challenges = state.profile.challenges || []
  
  const sortedModules = [...modulesData].sort((a, b) => {
    const aPriority = challenges.includes(a.challengeTag as any) ? 1 : 0
    const bPriority = challenges.includes(b.challengeTag as any) ? 1 : 0
    return bPriority - aPriority
  })

  // Neo-Brutalist accents: signature yellow, green, and white
  const accents = ['bg-accent', 'bg-accent2', 'bg-surface', 'bg-surface']

  return (
    <div className="space-y-6">
      <div>
        <p className="font-display font-bold text-[11px] uppercase tracking-[0.2em] text-ink/40 mb-1">
          {strings.moduleList.eyebrow[l]}
        </p>
        <h1 className="font-display font-bold text-[36px] tracking-tight text-ink leading-[1.1]">
          {strings.moduleList.headline[l](state.profile.name || 'Hustler')}
        </h1>
      </div>

      <div className="space-y-4">
        {sortedModules.map((m, i) => {
          const localized = localizeModule(m, l)
          const isPriority = i === 0 && challenges.includes(localized.challengeTag as any);
          const progress = state.modules[localized.id as keyof typeof state.modules];
          const isComplete = progress?.status === 'complete';
          const isInProgress = progress?.status === 'in-progress';

          return (
            <BrutalCard
              key={localized.id}
              accent={accents[i % accents.length]}
              className={cn(
                'cursor-pointer transition-all duration-100 active:translate-x-[2px] active:translate-y-[2px] active:shadow-neo-pressed',
                isPriority && !isComplete && 'ring-4 ring-ink ring-offset-0'
              )}
              onClick={() => navigate(`/modules/${localized.id}`)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={cn(
                    'p-3 border-2 border-ink flex-shrink-0',
                    isComplete ? 'bg-accent2 text-ink' : 'bg-surface text-ink shadow-neo-sm'
                  )}>
                    {ICONS[localized.icon]}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-display font-bold text-[18px] text-ink leading-tight block">{localized.title}</span>
                      {isComplete && <CheckCircle2 size={18} className="text-ink fill-accent2" />}
                    </div>
                    
                    {isPriority && !isComplete && (
                      <span className="inline-block bg-ink text-accent text-[10px] font-bold px-2 py-0.5 uppercase tracking-widest mt-2">
                        {strings.moduleList.recommended[l]}
                      </span>
                    )}

                    {isInProgress && !isComplete && (
                      <div className="mt-3 flex items-center gap-2">
                        <ProgressBar current={0.5} total={1} accentClass="bg-accent" />
                        <span className="text-[10px] text-ink font-bold uppercase tracking-wider">{strings.moduleList.inProgress[l]}</span>
                      </div>
                    )}
                  </div>
                </div>
                <ArrowRight size={20} className="text-ink/30" />
              </div>
            </BrutalCard>
          )
        })}
      </div>
    </div>
  )
}
