import { useState, useEffect, createContext, useContext, ReactNode } from 'react'
import type { AppState, UserProfile, ModuleId, ModuleProgress, Language } from '@/types'

const STORAGE_KEY = 'township-tool-state'

const defaultState: AppState = {
  profile: {
    name: '',
    area: '',
    businessType: null,
    dependants: null,
    challenges: [],
    socialMedia: [],
    bankingStatus: null,
  },
  modules: {
    'moola-management':       { status: 'not-started', currentStep: 0 },
    'whatsapp-hustle':        { status: 'not-started', currentStep: 0 },
    'load-shedding-survival': { status: 'not-started', currentStep: 0 },
    'stock-fam':              { status: 'not-started', currentStep: 0 },
  },
  onboardingComplete: false,
  language: 'zu',
}

interface AppStateContextType {
  state: AppState
  setLanguage: (lang: Language) => void
  updateProfile: (updates: Partial<UserProfile>) => void
  completeOnboarding: () => void
  updateModuleProgress: (id: ModuleId, progress: Partial<ModuleProgress>) => void
  resetAll: () => void
}

const AppStateContext = createContext<AppStateContextType | undefined>(undefined)

export function AppStateProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AppState>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        const parsed = JSON.parse(stored)
        return { ...defaultState, ...parsed }
      }
      return defaultState
    } catch {
      return defaultState
    }
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  }, [state])

  const setLanguage = (language: Language) => {
    setState(prev => ({ ...prev, language }))
  }

  const updateProfile = (updates: Partial<UserProfile>) => {
    setState(prev => ({ ...prev, profile: { ...prev.profile, ...updates } }))
  }

  const completeOnboarding = () => {
    setState(prev => ({ ...prev, onboardingComplete: true }))
  }

  const updateModuleProgress = (id: ModuleId, progress: Partial<ModuleProgress>) => {
    setState(prev => ({
      ...prev,
      modules: {
        ...prev.modules,
        [id]: { ...prev.modules[id], ...progress },
      },
    }))
  }

  const resetAll = () => {
    setState(defaultState)
    localStorage.removeItem(STORAGE_KEY)
  }

  return (
    <AppStateContext.Provider value={{ state, setLanguage, updateProfile, completeOnboarding, updateModuleProgress, resetAll }}>
      {children}
    </AppStateContext.Provider>
  )
}

export function useAppState() {
  const context = useContext(AppStateContext)
  if (context === undefined) {
    throw new Error('useAppState must be used within an AppStateProvider')
  }
  return context
}
