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
import { Save, UserCheck, Users, Plus, Trash2 } from 'lucide-react'
import useAuthStore from '@/stores/useAuthStore'

export default function FuncaoCompliancePage() {
  const { user } = useAuthStore()
  const { toast } = useToast()
  const canEdit = user?.role === 'SUPER_ADMIN' || user?.role === 'EDITOR'

  const [officer, setOfficer] = useState({ name: 'Juliana Costa', email: 'compliance@empresa.com' })
  const [committee, setCommittee] = useState([{ id: 1, name: 'Marcos Pereira', dept: 'Jurídico' }])
  const [newCommName, setNewCommName] = useState('')

  const handleSaveOfficer = (e: React.FormEvent) => {
    e.preventDefault()
    if (canEdit) toast({ title: 'Salvo com sucesso' })
  }

  const handleAddCommittee = (e: React.FormEvent) => {
    e.preventDefault()
    if (canEdit && newCommName) {
      setCommittee([...committee, { id: Date.now(), name: newCommName, dept: 'Geral' }])
      setNewCommName('')
    }
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title="3. Função de Compliance"
        breadcrumbs={[{ label: 'Início', path: '/' }, { label: 'Módulo 3' }]}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-t-4 border-t-primary shadow-sm h-fit">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UserCheck className="w-5 h-5 text-primary" /> Compliance Officer
            </CardTitle>
            <CardDescription>Responsável principal pelo programa.</CardDescription>
          </CardHeader>
          <form onSubmit={handleSaveOfficer}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Nome Completo</Label>
                <Input
                  value={officer.name}
                  onChange={(e) => setOfficer({ ...officer, name: e.target.value })}
                  disabled={!canEdit}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label>E-mail Corporativo</Label>
                <Input
                  type="email"
                  value={officer.email}
                  onChange={(e) => setOfficer({ ...officer, email: e.target.value })}
                  disabled={!canEdit}
                  required
                />
              </div>
            </CardContent>
            {canEdit && (
              <CardFooter className="bg-muted/20 border-t justify-end p-4">
                <Button type="submit">
                  <Save className="w-4 h-4 mr-2" /> Salvar
                </Button>
              </CardFooter>
            )}
          </form>
        </Card>

        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5 text-secondary" /> Comissão de Compliance
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {canEdit && (
              <form onSubmit={handleAddCommittee} className="flex gap-2">
                <Input
                  value={newCommName}
                  onChange={(e) => setNewCommName(e.target.value)}
                  placeholder="Nome do membro"
                />
                <Button type="submit" variant="secondary">
                  <Plus className="w-4 h-4" />
                </Button>
              </form>
            )}
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
                  {canEdit && (
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setCommittee(committee.filter((m) => m.id !== c.id))}
                      className="text-destructive"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
