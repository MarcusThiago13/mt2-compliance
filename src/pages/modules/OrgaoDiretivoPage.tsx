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

interface Member {
  id: number
  name: string
  role: string
}

export default function OrgaoDiretivoPage() {
  const { toast } = useToast()
  const [members, setMembers] = useState<Member[]>([
    { id: 1, name: 'Ana Silva', role: 'Diretora Executiva (CEO)' },
    { id: 2, name: 'Carlos Santos', role: 'Diretor Financeiro (CFO)' },
    { id: 3, name: 'Roberta Almeida', role: 'Conselheira de Administração' },
  ])
  const [newName, setNewName] = useState('')
  const [newRole, setNewRole] = useState('')

  const handleAddMember = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newName || !newRole) return

    const newMember = {
      id: Date.now(),
      name: newName,
      role: newRole,
    }
    setMembers([...members, newMember])
    setNewName('')
    setNewRole('')
    toast({
      title: 'Membro Adicionado',
      description: `${newName} foi adicionado à Alta Direção.`,
    })
  }

  const handleRemoveMember = (id: number) => {
    setMembers(members.filter((m) => m.id !== id))
    toast({
      title: 'Membro Removido',
      description: 'O registro foi removido com sucesso.',
      variant: 'destructive',
    })
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title="2. Dados do Órgão Diretivo e Alta Direção"
        description="Registro dos diretores e alta liderança da organização."
        breadcrumbs={[{ label: 'Início', path: '/' }, { label: 'Módulo 2' }]}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1 border-t-4 border-t-primary shadow-sm h-fit">
          <CardHeader>
            <CardTitle className="text-lg">Novo Integrante</CardTitle>
            <CardDescription>Adicione um novo membro ao órgão diretivo.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleAddMember} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nome Completo</Label>
                <Input
                  id="name"
                  placeholder="Ex: João da Silva"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">Cargo / Função</Label>
                <Input
                  id="role"
                  placeholder="Ex: Diretor de Operações"
                  value={newRole}
                  onChange={(e) => setNewRole(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                <Plus className="w-4 h-4 mr-2" /> Adicionar
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              Membros Registrados
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
                    <TableHead>Cargo / Função</TableHead>
                    <TableHead className="w-[100px] text-right">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {members.map((member) => (
                    <TableRow key={member.id}>
                      <TableCell className="font-medium">{member.name}</TableCell>
                      <TableCell>{member.role}</TableCell>
                      <TableCell className="text-right">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleRemoveMember(member.id)}
                          className="text-destructive hover:bg-destructive/10 hover:text-destructive"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </TableCell>
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
