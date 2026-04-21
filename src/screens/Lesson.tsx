import { useState, useEffect } from 'react'
import { useNavigate, useParams, Navigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ProgressBar } from '@/components/ui/progress-bar'
import { BrutalCard } from '@/components/ui/brutal-card'
import { BrutalButton } from '@/components/ui/brutal-button'
import { WhatsAppCTA } from '@/components/whatsapp-cta'
import { modulesData, localizeModule } from '@/data/modules'
import { useAppState } from '@/hooks/useAppState'
import { ModuleId } from '@/types'
import { strings } from '@/i18n/strings'

export function Lesson() {
  const { moduleId } = useParams()
  const navigate = useNavigate()
  const { state, updateModuleProgress } = useAppState()
  const l = state.language
  
  const [step, setStep] = useState(1)
  const [direction, setDirection] = useState(1)

  const rawModule = modulesData.find(m => m.id === moduleId)
  const currentModule = rawModule ? localizeModule(rawModule, l) : null
  
  useEffect(() => {
    if (moduleId) {
      updateModuleProgress(moduleId as ModuleId, { status: 'in-progress', currentStep: step })
    }
  }, [moduleId, step, updateModuleProgress])

  if (!currentModule) {
    return <Navigate to="/modules" replace />
  }

  // Real step logic: total content steps + 1 for the final CTA action screen
  const TOTAL_STEPS = currentModule.steps.length
  const TOTAL_SCREENS = TOTAL_STEPS + 1
  const isCtaScreen = step === TOTAL_SCREENS

  // We read data for the current step, or the last step's actionItem if on CTA screen
  const currentStepData = currentModule.steps[Math.min(step - 1, TOTAL_STEPS - 1)]

  const nextStep = () => {
    setDirection(1)
    setStep(s => s + 1)
  }

  const prevStep = () => {
    if (step > 1) {
      setDirection(-1)
      setStep(s => s - 1)
    } else {
      navigate('/modules')
    }
  }

  const handleFinish = () => {
    updateModuleProgress(moduleId as ModuleId, { 
      status: 'complete', 
      completedAt: new Date().toISOString() 
    })
    navigate('/modules')
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0
    })
  }

  return (
    <div className="flex flex-col min-h-[85vh] overflow-x-hidden">
      {/* Header */}
      <div className="mb-8 flex-shrink-0">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={prevStep}
            className="font-display font-bold text-[14px] text-ink/50 hover:text-ink transition-colors uppercase tracking-widest"
          >
            {strings.nav.back[l]}
          </button>
          <span className="font-display font-bold text-[11px] uppercase tracking-[0.2em] text-ink/40">
            {currentModule.title}
          </span>
        </div>
        <ProgressBar current={step} total={TOTAL_SCREENS} accentClass="bg-accent" />
        <p className="font-display font-bold text-[11px] text-ink/40 mt-3 text-right uppercase tracking-widest">
           {strings.lesson.stepLabel[l](step, TOTAL_SCREENS)}
        </p>
      </div>

      {/* Lesson body - Cue Card Container */}
      <div className="flex-1 relative">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={step}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="w-full"
          >
            {!isCtaScreen ? (
              <BrutalCard accent="bg-accent" className="min-h-[300px] flex flex-col justify-center text-center">
                <h2 className="font-display font-bold text-[28px] mb-6 leading-tight text-ink">
                  {currentStepData.title}
                </h2>
                <p className="font-body text-[17px] leading-relaxed text-ink/80 max-w-[280px] mx-auto">
                  {currentStepData.content}
                </p>
              </BrutalCard>
            ) : (
              <WhatsAppCTA
                instruction={currentStepData.actionItem}
                deepLink={`https://wa.me/?text=${encodeURIComponent(currentStepData.actionItem)}`}
                onDefer={handleFinish}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Footer */}
      <div className="mt-8 flex-shrink-0 min-h-[60px]">
        {!isCtaScreen && (
          <BrutalButton fullWidth onClick={nextStep}>
            {strings.lesson.next[l]}
          </BrutalButton>
        )}
      </div>
    </div>
  )
}
