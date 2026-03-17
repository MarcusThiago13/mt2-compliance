import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import Layout from './components/Layout'
import Index from './pages/Index'
import NotFound from './pages/NotFound'

// Modules
import DadosOrganizacaoPage from './pages/modules/DadosOrganizacaoPage'
import OrgaoDiretivoPage from './pages/modules/OrgaoDiretivoPage'
import FuncaoCompliancePage from './pages/modules/FuncaoCompliancePage'
import ContextoPage from './pages/modules/ContextoPage'
import LiderancaPage from './pages/modules/LiderancaPage'
import PlanejamentoPage from './pages/modules/PlanejamentoPage'
import ApoioPage from './pages/modules/ApoioPage'
import OperacaoPage from './pages/modules/OperacaoPage'
import AvaliacaoPage from './pages/modules/AvaliacaoPage'
import MelhoriaPage from './pages/modules/MelhoriaPage'

const App = () => (
  <BrowserRouter future={{ v7_startTransition: false, v7_relativeSplatPath: false }}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Index />} />
          <Route path="/modulo/1" element={<DadosOrganizacaoPage />} />
          <Route path="/modulo/2" element={<OrgaoDiretivoPage />} />
          <Route path="/modulo/3" element={<FuncaoCompliancePage />} />
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
)

export default App
