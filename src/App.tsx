import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import { AuthProvider } from './stores/useAuthStore'
import Layout from './components/Layout'
import Login from './pages/Login'
import SuperAdminDashboard from './pages/SuperAdminDashboard'
import Index from './pages/Index'
import NotFound from './pages/NotFound'
import PerfilOrganizacionalPage from './pages/PerfilOrganizacionalPage'

// Modules
import ContextoPage from './pages/modules/ContextoPage'
import LiderancaPage from './pages/modules/LiderancaPage'
import PlanejamentoPage from './pages/modules/PlanejamentoPage'
import ApoioPage from './pages/modules/ApoioPage'
import OperacaoPage from './pages/modules/OperacaoPage'
import AvaliacaoPage from './pages/modules/AvaliacaoPage'
import MelhoriaPage from './pages/modules/MelhoriaPage'

const App = () => (
  <AuthProvider>
    <BrowserRouter future={{ v7_startTransition: false, v7_relativeSplatPath: false }}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<SuperAdminDashboard />} />
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/perfil" element={<PerfilOrganizacionalPage />} />
            <Route path="/modulo/4" element={<ContextoPage />} />
            <Route path="/modulo/5" element={<LiderancaPage />} />
            <Route path="/modulo/6" element={<PlanejamentoPage />} />
            <Route path="/modulo/7" element={<ApoioPage />} />
            <Route path="/modulo/8" element={<OperacaoPage />} />
            <Route path="/modulo/9" element={<AvaliacaoPage />} />
            <Route path="/modulo/10" element={<MelhoriaPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TooltipProvider>
    </BrowserRouter>
  </AuthProvider>
)

export default App
