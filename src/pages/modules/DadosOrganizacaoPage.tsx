import { useState } from 'react'
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

export default function DadosOrganizacaoPage() {
  const { toast } = useToast()
  const [data, setData] = useState({
    nome: 'Empresa Exemplo S.A.',
    cnpj: '12.345.678/0001-90',
    endereco: 'Av. Paulista, 1000 - São Paulo, SP',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: 'Dados Salvos',
      description: 'As informações da organização foram atualizadas com sucesso.',
    })
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
            Mantenha os dados cadastrais da organização sempre atualizados.
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
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cnpj">CNPJ</Label>
              <Input
                id="cnpj"
                value={data.cnpj}
                onChange={(e) => setData({ ...data, cnpj: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="endereco">Endereço Completo</Label>
              <Input
                id="endereco"
                value={data.endereco}
                onChange={(e) => setData({ ...data, endereco: e.target.value })}
                required
              />
            </div>
          </CardContent>
          <CardFooter className="bg-muted/20 border-t flex justify-end p-4">
            <Button type="submit">
              <Save className="w-4 h-4 mr-2" /> Salvar Informações
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
