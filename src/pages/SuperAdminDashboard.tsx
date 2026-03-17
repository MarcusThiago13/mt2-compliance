import { useNavigate, Navigate } from 'react-router-dom'
import useAuthStore from '@/stores/useAuthStore'
import { MOCK_TENANTS } from '@/lib/mock'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Building2, LogOut, ShieldCheck } from 'lucide-react'

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
    <div className="min-h-screen bg-muted/10 p-6 md:p-12">
      <div className="max-w-5xl mx-auto space-y-8 animate-fade-in-up">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-foreground">
                Portal Super Admin
              </h1>
              <p className="text-muted-foreground">Gerenciamento Multi-tenant (mt3 compliance)</p>
            </div>
          </div>
          <Button
            variant="outline"
            onClick={handleLogout}
            className="text-destructive border-destructive/30 hover:bg-destructive/10"
          >
            <LogOut className="w-4 h-4 mr-2" /> Encerrar Sessão
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {MOCK_TENANTS.map((tenant) => (
            <Card key={tenant.id} className="hover:shadow-md transition-shadow flex flex-col">
              <CardHeader className="pb-4 border-b">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Building2 className="w-5 h-5 text-muted-foreground" />
                  {tenant.name}
                </CardTitle>
                <CardDescription>CNPJ: {tenant.cnpj}</CardDescription>
              </CardHeader>
              <CardContent className="pt-4 flex-1">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Setor:</span>
                    <span className="font-medium">{tenant.sector}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Status do SGC:</span>
                    <span className="font-medium text-success">Ativo</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-0 bg-muted/10 p-4 mt-auto">
                <Button className="w-full" onClick={() => handleSelectTenant(tenant.id)}>
                  Acessar Ambiente
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
