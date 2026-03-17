import { useState } from 'react'
import { PageHeader } from '@/components/PageHeader'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
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

export default function OrgaoDiretivoPage() {
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
    <div className="space-y-6">
      <PageHeader
        title="2. Órgão Diretivo"
        description="Registro dos diretores e alta liderança da organização."
        breadcrumbs={[{ label: 'Início', path: '/' }, { label: 'Módulo 2' }]}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {canEdit && (
          <Card className="lg:col-span-1 border-t-4 border-t-primary shadow-sm h-fit">
            <CardHeader>
              <CardTitle className="text-lg">Novo Integrante</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleAddMember} className="space-y-4">
                <div className="space-y-2">
                  <Label>Nome Completo</Label>
                  <Input value={newName} onChange={(e) => setNewName(e.target.value)} required />
                </div>
                <div className="space-y-2">
                  <Label>Cargo / Função</Label>
                  <Input value={newRole} onChange={(e) => setNewRole(e.target.value)} required />
                </div>
                <Button type="submit" className="w-full">
                  <Plus className="w-4 h-4 mr-2" /> Adicionar
                </Button>
              </form>
            </CardContent>
          </Card>
        )}

        <Card className={`${canEdit ? 'lg:col-span-2' : 'lg:col-span-3'} shadow-sm`}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" /> Membros Registrados
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            {members.length === 0 ? (
              <div className="p-8 text-center text-muted-foreground">Nenhum membro registrado.</div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nome</TableHead>
                    <TableHead>Cargo</TableHead>
                    {canEdit && <TableHead className="text-right">Ações</TableHead>}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {members.map((m) => (
                    <TableRow key={m.id}>
                      <TableCell className="font-medium">{m.name}</TableCell>
                      <TableCell>{m.role}</TableCell>
                      {canEdit && (
                        <TableCell className="text-right">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleRemoveMember(m.id)}
                            className="text-destructive hover:bg-destructive/10"
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
    </div>
  )
}
