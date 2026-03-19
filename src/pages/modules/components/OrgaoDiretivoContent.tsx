import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { useToast } from '@/hooks/use-toast'
import { Plus, Trash2, Users } from 'lucide-react'
import useAuthStore from '@/stores/useAuthStore'

interface Member {
  id: number
  name: string
  role: string
}

export default function OrgaoDiretivoContent() {
  const { user } = useAuthStore()
  const { toast } = useToast()
  const canEdit = user?.role === 'SUPER_ADMIN' || user?.role === 'EDITOR'

  const [members, setMembers] = useState<Member[]>([
    { id: 1, name: 'Ana Silva', role: 'Diretora Executiva (CEO)' },
    { id: 2, name: 'Carlos Santos', role: 'Diretor Financeiro (CFO)' },
  ])
  const [newName, setNewName] = useState('')
  const [newRole, setNewRole] = useState('')

  const handleAddMember = (e: React.FormEvent) => {
    e.preventDefault()
    if (!canEdit || !newName || !newRole) return
    setMembers([...members, { id: Date.now(), name: newName, role: newRole }])
    setNewName('')
    setNewRole('')
    toast({ title: 'Membro Adicionado', description: `${newName} incluído com sucesso.` })
  }

  const handleRemoveMember = (id: number) => {
    if (!canEdit) return
    setMembers(members.filter((m) => m.id !== id))
    toast({ title: 'Removido', variant: 'destructive' })
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fade-in-up">
      {canEdit && (
        <Card className="lg:col-span-1 h-fit">
          <CardHeader className="pb-4">
            <CardTitle className="text-base">Incluir Novo Membro</CardTitle>
            <CardDescription>Adicione diretores ao escopo da ISO.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleAddMember} className="space-y-5">
              <div className="space-y-2">
                <Label className="text-xs text-muted-foreground uppercase tracking-wider">
                  Nome Completo
                </Label>
                <Input
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  required
                  placeholder="Ex: João Silva"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-xs text-muted-foreground uppercase tracking-wider">
                  Cargo / Função
                </Label>
                <Input
                  value={newRole}
                  onChange={(e) => setNewRole(e.target.value)}
                  required
                  placeholder="Ex: Diretor de Risco"
                />
              </div>
              <Button type="submit" className="w-full">
                <Plus className="w-4 h-4 mr-2" /> Registrar Membro
              </Button>
            </form>
          </CardContent>
        </Card>
      )}

      <Card className={`${canEdit ? 'lg:col-span-2' : 'lg:col-span-3'}`}>
        <CardHeader className="border-b border-border/40 pb-4">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Users className="w-5 h-5 text-primary" /> Liderança Registrada
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          {members.length === 0 ? (
            <div className="p-12 text-center text-sm text-muted-foreground">
              Nenhum membro registrado no sistema.
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/20">
                  <TableHead>Identificação do Membro</TableHead>
                  <TableHead>Função Organizacional</TableHead>
                  {canEdit && <TableHead className="text-right">Ações</TableHead>}
                </TableRow>
              </TableHeader>
              <TableBody>
                {members.map((m) => (
                  <TableRow key={m.id}>
                    <TableCell className="font-medium text-foreground">{m.name}</TableCell>
                    <TableCell className="text-muted-foreground">{m.role}</TableCell>
                    {canEdit && (
                      <TableCell className="text-right">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleRemoveMember(m.id)}
                          className="text-muted-foreground hover:text-destructive hover:bg-destructive/10 h-8 w-8"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </TableCell>
                    )}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
