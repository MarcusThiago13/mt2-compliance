import { useState } from 'react'
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

export default function FuncaoComplianceContent() {
  const { user } = useAuthStore()
  const { toast } = useToast()
  const canEdit = user?.role === 'SUPER_ADMIN' || user?.role === 'EDITOR'

  const [officer, setOfficer] = useState({ name: 'Juliana Costa', email: 'compliance@empresa.com' })
  const [committee, setCommittee] = useState([{ id: 1, name: 'Marcos Pereira', dept: 'Jurídico' }])
  const [newCommName, setNewCommName] = useState('')

  const handleSaveOfficer = (e: React.FormEvent) => {
    e.preventDefault()
    if (canEdit) toast({ title: 'Alterações salvas com sucesso' })
  }

  const handleAddCommittee = (e: React.FormEvent) => {
    e.preventDefault()
    if (canEdit && newCommName) {
      setCommittee([...committee, { id: Date.now(), name: newCommName, dept: 'Multidisciplinar' }])
      setNewCommName('')
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-fade-in-up">
      <Card className="h-fit">
        <CardHeader className="border-b border-border/40 pb-4 mb-4">
          <CardTitle className="flex items-center gap-2 text-lg">
            <UserCheck className="w-5 h-5 text-primary" /> Responsável Principal
          </CardTitle>
          <CardDescription>Compliance Officer designado (Item 5.3.2)</CardDescription>
        </CardHeader>
        <form onSubmit={handleSaveOfficer}>
          <CardContent className="space-y-5">
            <div className="space-y-2">
              <Label className="text-xs text-muted-foreground uppercase tracking-wider">
                Nome Completo
              </Label>
              <Input
                value={officer.name}
                onChange={(e) => setOfficer({ ...officer, name: e.target.value })}
                disabled={!canEdit}
                required
              />
            </div>
            <div className="space-y-2">
              <Label className="text-xs text-muted-foreground uppercase tracking-wider">
                E-mail Corporativo
              </Label>
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
            <CardFooter className="bg-muted/20 border-t border-border/40 justify-end p-4 mt-4 rounded-b-xl">
              <Button type="submit">
                <Save className="w-4 h-4 mr-2" /> Atualizar Responsável
              </Button>
            </CardFooter>
          )}
        </form>
      </Card>

      <Card>
        <CardHeader className="border-b border-border/40 pb-4 mb-4">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Users className="w-5 h-5 text-primary" /> Comitê de Integridade
          </CardTitle>
          <CardDescription>Grupo multidisciplinar de apoio consultivo.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {canEdit && (
            <form onSubmit={handleAddCommittee} className="flex gap-3">
              <Input
                value={newCommName}
                onChange={(e) => setNewCommName(e.target.value)}
                placeholder="Nome do integrante"
                className="flex-1"
              />
              <Button type="submit" variant="secondary" className="shrink-0">
                <Plus className="w-4 h-4 mr-2" /> Adicionar
              </Button>
            </form>
          )}
          <div className="space-y-3">
            {committee.map((c) => (
              <div
                key={c.id}
                className="flex items-center justify-between p-3.5 bg-muted/30 rounded-lg border border-border/50 hover:bg-muted/50 transition-colors"
              >
                <div>
                  <p className="font-semibold text-sm text-foreground">{c.name}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{c.dept}</p>
                </div>
                {canEdit && (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setCommittee(committee.filter((m) => m.id !== c.id))}
                    className="text-muted-foreground hover:text-destructive hover:bg-destructive/10 h-8 w-8"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                )}
              </div>
            ))}
            {committee.length === 0 && (
              <p className="text-sm text-muted-foreground text-center py-4">
                Nenhum integrante associado ao comitê.
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
