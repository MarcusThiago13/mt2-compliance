import { useState } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import useAuthStore from '@/stores/useAuthStore'
import { MOCK_TENANTS } from '@/lib/mock'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Building2, LogOut, ShieldCheck, ChevronRight, Activity, Plus } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog'
import { useToast } from '@/hooks/use-toast'

export default function SuperAdminDashboard() {
  const { user, setTenant, logout } = useAuthStore()
  const navigate = useNavigate()
  const { toast } = useToast()

  const [showWizard, setShowWizard] = useState(false)
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    cnpj: '',
    address: '',
    orgBody: '',
    officer: '',
    sector: '',
  })

  if (!user || user.role !== 'SUPER_ADMIN') {
    return <Navigate to="/" replace />
  }

  const handleSelectTenant = (tenantId: string) => {
    setTenant(tenantId)
    navigate('/')
  }

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  const handleCreateTenant = () => {
    toast({
      title: 'Ambiente Criado',
      description: `O ambiente para ${formData.name} foi criado com sucesso.`,
    })
    setShowWizard(false)
    setStep(1)
    setFormData({ name: '', cnpj: '', address: '', orgBody: '', officer: '', sector: '' })
  }

  return (
    <div className="min-h-screen bg-background p-6 md:p-12">
      <div className="max-w-6xl mx-auto space-y-8 animate-fade-in-up">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 pb-6 border-b border-border/40">
          <div className="flex items-center gap-4">
            <div className="bg-primary/10 p-3 rounded-2xl">
              <ShieldCheck className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-foreground">Portal Master</h1>
              <p className="text-muted-foreground text-sm mt-1">
                Gerenciamento Multi-tenant (SaaS)
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button onClick={() => setShowWizard(true)} className="hidden sm:flex">
              <Plus className="w-4 h-4 mr-2" /> Novo Cliente
            </Button>
            <Button
              variant="outline"
              onClick={handleLogout}
              className="text-muted-foreground hover:text-destructive border-border/60 hover:border-destructive/30 hover:bg-destructive/10"
            >
              <LogOut className="w-4 h-4 mr-2" /> Encerrar Sessão
            </Button>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-foreground">Ambientes de Clientes Ativos</h2>
            <Button onClick={() => setShowWizard(true)} size="sm" className="sm:hidden">
              <Plus className="w-4 h-4 mr-2" /> Novo Cliente
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {MOCK_TENANTS.map((tenant) => (
              <Card
                key={tenant.id}
                className="hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all cursor-pointer group flex flex-col"
                onClick={() => handleSelectTenant(tenant.id)}
              >
                <CardHeader className="pb-4 border-b border-border/40">
                  <div className="flex justify-between items-start">
                    <div className="bg-muted/50 p-2 rounded-lg">
                      <Building2 className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex items-center gap-1 text-[10px] uppercase font-semibold tracking-wider text-success bg-success/10 px-2 py-1 rounded">
                      <Activity className="w-3 h-3" /> Online
                    </div>
                  </div>
                  <CardTitle className="text-lg mt-4 text-foreground group-hover:text-primary transition-colors">
                    {tenant.name}
                  </CardTitle>
                  <p className="text-xs text-muted-foreground font-medium mt-1">
                    CNPJ: {tenant.cnpj}
                  </p>
                </CardHeader>
                <CardContent className="pt-4 flex-1">
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center border-b border-border/40 pb-2">
                      <span className="text-muted-foreground">Setor de Atuação</span>
                      <span className="font-semibold text-foreground">{tenant.sector}</span>
                    </div>
                    <div className="flex justify-between items-center pt-1">
                      <span className="text-muted-foreground">Status SGC</span>
                      <span className="font-semibold text-success flex items-center gap-1.5">
                        Conforme
                      </span>
                    </div>
                  </div>
                </CardContent>
                <div className="p-4 bg-muted/10 border-t border-border/40 flex items-center justify-between text-sm font-medium text-primary rounded-b-xl group-hover:bg-primary/5 transition-colors">
                  Acessar Painel
                  <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Dialog open={showWizard} onOpenChange={setShowWizard}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Onboarding de Nova Organização (mt2 Compliance)</DialogTitle>
          </DialogHeader>
          <div className="py-6 min-h-[250px]">
            {step === 1 && (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
                <h3 className="text-lg font-medium border-b pb-2">1. Dados Básicos da Empresa</h3>
                <div className="space-y-3">
                  <div className="space-y-1">
                    <Label>Razão Social / Nome da Organização</Label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ex: Nova Empresa Ltda."
                    />
                  </div>
                  <div className="space-y-1">
                    <Label>CNPJ</Label>
                    <Input
                      value={formData.cnpj}
                      onChange={(e) => setFormData({ ...formData, cnpj: e.target.value })}
                      placeholder="00.000.000/0001-00"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label>Endereço Sede</Label>
                    <Input
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      placeholder="Av. Paulista, 1000 - SP"
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
                <h3 className="text-lg font-medium border-b pb-2">2. Órgão Diretivo</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Defina o principal órgão ou líder responsável pela alta direção (ex: Conselho de
                  Administração, CEO).
                </p>
                <div className="space-y-1">
                  <Label>Membros ou Composição da Liderança</Label>
                  <Input
                    value={formData.orgBody}
                    onChange={(e) => setFormData({ ...formData, orgBody: e.target.value })}
                    placeholder="Ex: Conselho Fiscal e Diretoria Executiva"
                  />
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
                <h3 className="text-lg font-medium border-b pb-2">3. Função de Compliance</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Identifique o profissional ou comitê que atuará como Responsável pelo Compliance
                  neste ambiente.
                </p>
                <div className="space-y-1">
                  <Label>Nome do Compliance Officer (ou responsável)</Label>
                  <Input
                    value={formData.officer}
                    onChange={(e) => setFormData({ ...formData, officer: e.target.value })}
                    placeholder="Ex: Mariana Silva"
                  />
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
                <h3 className="text-lg font-medium border-b pb-2">4. Perfil Operacional</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Informações primárias sobre a operação para mapeamento de riscos e escopo da ISO
                  37301.
                </p>
                <div className="space-y-1">
                  <Label>Setor de Atuação / Ramo de Negócio</Label>
                  <Input
                    value={formData.sector}
                    onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                    placeholder="Ex: Indústria Farmacêutica"
                  />
                </div>
              </div>
            )}
          </div>
          <DialogFooter className="border-t pt-4 flex items-center justify-between">
            <div className="text-sm text-muted-foreground">Passo {step} de 4</div>
            <div className="flex items-center gap-2">
              {step > 1 && (
                <Button onClick={() => setStep(step - 1)} variant="outline">
                  Voltar
                </Button>
              )}
              {step < 4 ? (
                <Button onClick={() => setStep(step + 1)}>Avançar</Button>
              ) : (
                <Button onClick={handleCreateTenant}>Finalizar Onboarding</Button>
              )}
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
