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
import { Badge } from '@/components/ui/badge'
import { Save, UserCheck, Users, Plus, Trash2 } from 'lucide-react'

export default function FuncaoCompliancePage() {
  const { toast } = useToast()
  const [officer, setOfficer] = useState({
    name: 'Juliana Costa',
    email: 'juliana.costa@empresa.com',
    phone: '(11) 98765-4321',
  })

  const [committee, setCommittee] = useState([
    { id: 1, name: 'Marcos Pereira', dept: 'Jurídico' },
    { id: 2, name: 'Sônia Freitas', dept: 'Recursos Humanos' },
  ])
  const [newCommName, setNewCommName] = useState('')
  const [newCommDept, setNewCommDept] = useState('')

  const handleSaveOfficer = (e: React.FormEvent) => {
    e.preventDefault()
    toast({ title: 'Salvo com sucesso', description: 'Dados do Compliance Officer atualizados.' })
  }

  const handleAddCommittee = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newCommName) return
    setCommittee([...committee, { id: Date.now(), name: newCommName, dept: newCommDept }])
    setNewCommName('')
    setNewCommDept('')
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title="3. Função de Compliance"
        description="Dados dos responsáveis pela Função de Compliance e Comitê."
        breadcrumbs={[{ label: 'Início', path: '/' }, { label: 'Módulo 3' }]}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-t-4 border-t-primary shadow-sm h-fit">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UserCheck className="w-5 h-5 text-primary" />
              Compliance Officer
            </CardTitle>
            <CardDescription>Responsável principal pelo programa de integridade.</CardDescription>
          </CardHeader>
          <form onSubmit={handleSaveOfficer}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="officerName">Nome Completo</Label>
                <Input
                  id="officerName"
                  value={officer.name}
                  onChange={(e) => setOfficer({ ...officer, name: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="officerEmail">E-mail Corporativo</Label>
                <Input
                  id="officerEmail"
                  type="email"
                  value={officer.email}
                  onChange={(e) => setOfficer({ ...officer, email: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="officerPhone">Telefone / Contato</Label>
                <Input
                  id="officerPhone"
                  value={officer.phone}
                  onChange={(e) => setOfficer({ ...officer, phone: e.target.value })}
                />
              </div>
            </CardContent>
            <CardFooter className="bg-muted/20 border-t justify-end p-4">
              <Button type="submit">
                <Save className="w-4 h-4 mr-2" /> Salvar
              </Button>
            </CardFooter>
          </form>
        </Card>

        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5 text-secondary" />
              Comissão de Compliance
            </CardTitle>
            <CardDescription>Membros de apoio à função de compliance.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={handleAddCommittee} className="flex items-end gap-2">
              <div className="space-y-1.5 flex-1">
                <Label className="text-xs">Nome</Label>
                <Input
                  value={newCommName}
                  onChange={(e) => setNewCommName(e.target.value)}
                  placeholder="Nome do membro"
                />
              </div>
              <div className="space-y-1.5 flex-1">
                <Label className="text-xs">Departamento</Label>
                <Input
                  value={newCommDept}
                  onChange={(e) => setNewCommDept(e.target.value)}
                  placeholder="Área"
                />
              </div>
              <Button type="submit" variant="secondary">
                <Plus className="w-4 h-4" />
              </Button>
            </form>

            <div className="space-y-3">
              <h4 className="text-sm font-medium text-muted-foreground">Membros Atuais</h4>
              {committee.length === 0 ? (
                <p className="text-sm text-muted-foreground">Nenhum membro cadastrado.</p>
              ) : (
                <div className="space-y-2">
                  {committee.map((c) => (
                    <div
                      key={c.id}
                      className="flex items-center justify-between p-3 bg-muted/30 rounded-md border"
                    >
                      <div>
                        <p className="font-medium text-sm">{c.name}</p>
                        <p className="text-xs text-muted-foreground">{c.dept}</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setCommittee(committee.filter((m) => m.id !== c.id))}
                        className="text-muted-foreground hover:text-destructive"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
