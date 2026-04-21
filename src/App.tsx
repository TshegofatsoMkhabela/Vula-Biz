import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAppState } from '@/hooks/useAppState'

import { Welcome }    from '@/screens/Welcome'
import { Onboarding } from '@/screens/Onboarding'
import { Profile }    from '@/screens/Profile'
import { ModuleList } from '@/screens/ModuleList'
import { Lesson }     from '@/screens/Lesson'
import { LanguageToggle } from '@/components/ui/language-toggle'

export default function App() {
  const { state } = useAppState()

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-paper">
        <div className="max-w-[480px] mx-auto px-5 py-8">
          <div className="flex justify-end mb-6">
            <LanguageToggle />
          </div>
          <Routes>
            <Route path="/"              element={<Welcome />} />
            <Route path="/onboarding"    element={<Onboarding />} />
            <Route path="/profile"       element={<Profile />} />
            <Route
              path="/modules"
              element={
                state.onboardingComplete
                  ? <ModuleList />
                  : <Navigate to="/" replace />
              }
            />
            <Route path="/modules/:moduleId" element={<Lesson />} />
            <Route path="*"              element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}
