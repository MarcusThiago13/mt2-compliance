import { useState, useEffect } from 'react'
import { PageHeader } from '@/components/PageHeader'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'
import { Save, Building } from 'lucide-react'
import useAuthStore from '@/stores/useAuthStore'
import { MOCK_TENANTS } from '@/lib/mock'

export default function DadosOrganizacaoPage() {
  const { user, currentTenantId } = useAuthStore()
  const { toast } = useToast()

  const canEdit = user?.role === 'SUPER_ADMIN' || user?.role === 'EDITOR'
  const tenantData = MOCK_TENANTS.find((t) => t.id === currentTenantId)

  const [data, setData] = useState({
    nome: tenantData?.name || '',
    cnpj: tenantData?.cnpj || '',
    endereco: 'Endereço Sede - Brasil',
  })

  useEffect(() => {
    if (tenantData) {
      setData((prev) => ({ ...prev, nome: tenantData.name, cnpj: tenantData.cnpj }))
    }
  }, [tenantData])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!canEdit) return
    toast({ title: 'Dados Salvos', description: 'Informações da organização atualizadas.' })
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title="1. Dados da Organização"
        description="Registro e identificação primária da entidade."
        breadcrumbs={[{ label: 'Início', path: '/' }, { label: 'Módulo 1' }]}
      />

      <Card className="max-w-2xl border-t-4 border-t-primary shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building className="w-5 h-5 text-primary" />
            Identificação Principal
          </CardTitle>
          <CardDescription>
            {canEdit
              ? 'Mantenha os dados cadastrais da organização atualizados.'
              : 'Visualização dos dados da organização.'}
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="nome">Razão Social / Nome da Organização</Label>
              <Input
                id="nome"
                value={data.nome}
                onChange={(e) => setData({ ...data, nome: e.target.value })}
                disabled={!canEdit}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cnpj">CNPJ</Label>
              <Input
                id="cnpj"
                value={data.cnpj}
                onChange={(e) => setData({ ...data, cnpj: e.target.value })}
                disabled={!canEdit}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="endereco">Endereço Completo</Label>
              <Input
                id="endereco"
                value={data.endereco}
                onChange={(e) => setData({ ...data, endereco: e.target.value })}
                disabled={!canEdit}
                required
              />
            </div>
          </CardContent>
          {canEdit && (
            <CardFooter className="bg-muted/20 border-t flex justify-end p-4">
              <Button type="submit">
                <Save className="w-4 h-4 mr-2" /> Salvar Informações
              </Button>
            </CardFooter>
          )}
        </form>
      </Card>
    </div>
  )
}
