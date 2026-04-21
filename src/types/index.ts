export type BusinessType =
  | 'food-catering'
  | 'hair-beauty'
  | 'spaza'
  | 'clothing'
  | 'transport'
  | 'cleaning'
  | 'building'
  | 'other'

export type Challenge =
  | 'cash-flow'
  | 'late-payment'
  | 'pricing'
  | 'load-shedding'
  | 'growth'
  | 'registration'
  | 'customers'

export type SocialMedia = 'whatsapp' | 'facebook' | 'tiktok' | 'none'

export type BankingStatus =
  | 'business-account'
  | 'personal-account'
  | 'cash-only'

export type ModuleStatus = 'not-started' | 'in-progress' | 'complete'

export type ModuleId =
  | 'moola-management'
  | 'whatsapp-hustle'
  | 'load-shedding-survival'
  | 'stock-fam'

export interface ModuleProgress {
  status: ModuleStatus
  currentStep: number
  completedAt?: string
}

export interface UserProfile {
  name: string
  area: string
  businessType: BusinessType | null
  dependants: string | null
  challenges: Challenge[]
  socialMedia: SocialMedia[]
  bankingStatus: BankingStatus | null
}

export type Language = 'zu' | 'en'

export interface AppState {
  profile: UserProfile
  modules: Record<ModuleId, ModuleProgress>
  onboardingComplete: boolean
  language: Language
}
