import { useNavigate, Navigate } from 'react-router-dom'
import useAuthStore from '@/stores/useAuthStore'
import { MOCK_TENANTS } from '@/lib/mock'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Building2, LogOut, ShieldCheck, ChevronRight, Activity } from 'lucide-react'

export default function SuperAdminDashboard() {
  const { user, setTenant, logout } = useAuthStore()
  const navigate = useNavigate()

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
          <Button
            variant="outline"
            onClick={handleLogout}
            className="text-muted-foreground hover:text-destructive border-border/60 hover:border-destructive/30 hover:bg-destructive/10"
          >
            <LogOut className="w-4 h-4 mr-2" /> Encerrar Sessão
          </Button>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4 text-foreground">
            Ambientes de Clientes Ativos
          </h2>
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
    </div>
  )
}
