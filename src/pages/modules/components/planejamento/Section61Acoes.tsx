import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useToast } from '@/hooks/use-toast'
import { Plus, Target, CheckSquare } from 'lucide-react'
import useAuthStore from '@/stores/useAuthStore'
import { MOCK_PLANNING_ACTIONS, MOCK_RISKS } from '@/lib/mock'

export default function Section61Acoes({ canEdit }: { canEdit: boolean }) {
  const { currentTenantId } = useAuthStore()
  const { toast } = useToast()
  const [isOpen, setIsOpen] = useState(false)

  const actions = MOCK_PLANNING_ACTIONS.filter((a) => a.tenantId === currentTenantId)
  const risks = MOCK_RISKS.filter((r) => r.tenantId === currentTenantId)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({ title: 'Ação Registrada', description: 'O plano de ação foi criado com sucesso.' })
    setIsOpen(false)
  }

  return (
    <div className="space-y-4 animate-fade-in-up">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
        <div>
          <h3 className="text-lg font-medium">6.1 Ações para Abordar Riscos e Oportunidades</h3>
          <p className="text-sm text-muted-foreground">
            Integração das ações do sistema de compliance aos processos de negócios da organização.
          </p>
        </div>
        {canEdit && (
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button size="sm">
                <Plus className="w-4 h-4 mr-2" /> Nova Ação
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Registrar Plano de Ação</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4 mt-2">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2 col-span-2">
                    <Label>Título da Ação</Label>
                    <Input placeholder="Ex: Revisar procedimento de compras..." required />
                  </div>
                  <div className="space-y-2">
                    <Label>Origem (Importar Risco / Oportunidade)</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione..." />
                      </SelectTrigger>
                      <SelectContent>
                        {risks.map((r) => (
                          <SelectItem key={r.id} value={r.id}>
                            {r.id} - {r.name}
                          </SelectItem>
                        ))}
                        <SelectItem value="opt-1">OP-01 - Nova Parceria Comercial</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Tipo de Ação</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Preventiva">Preventiva</SelectItem>
                        <SelectItem value="Corretiva">Corretiva</SelectItem>
                        <SelectItem value="Mitigatória">Mitigatória</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Responsável Principal</Label>
                    <Input placeholder="Nome ou Setor" required />
                  </div>
                  <div className="space-y-2">
                    <Label>Prazo de Conclusão</Label>
                    <Input type="date" required />
                  </div>
                  <div className="space-y-2 col-span-2">
                    <Label className="mb-2 block">Integração aos Processos de Negócio</Label>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="rounded border-input text-primary" />
                        Requer alteração em Controles
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="rounded border-input text-primary" />
                        Requer novo Treinamento
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="rounded border-input text-primary" />
                        Atualização de Políticas
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="rounded border-input text-primary" />
                        Comunicação Externa
                      </label>
                    </div>
                  </div>
                </div>
                <DialogFooter className="mt-4">
                  <Button type="button" variant="outline" onClick={() => setIsOpen(false)}>
                    Cancelar
                  </Button>
                  <Button type="submit">Salvar Ação</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        )}
      </div>

      <Card>
        <CardContent className="p-0 overflow-auto">
          <Table>
            <TableHeader className="bg-muted/30">
              <TableRow>
                <TableHead>Descrição da Ação</TableHead>
                <TableHead>Origem</TableHead>
                <TableHead>Responsável</TableHead>
                <TableHead>Prazo</TableHead>
                <TableHead>Progresso</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {actions.map((act) => (
                <TableRow key={act.id}>
                  <TableCell>
                    <div className="font-medium text-foreground">{act.title}</div>
                    <div className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                      <Target className="w-3 h-3" /> {act.type} • {act.id}
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground text-sm">{act.origin}</TableCell>
                  <TableCell className="text-sm font-medium">{act.owner}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">{act.deadline}</TableCell>
                  <TableCell className="w-[120px]">
                    <div className="flex items-center gap-2 text-xs">
                      <Progress value={act.progress} className="h-1.5 flex-1" />
                      <span className="font-medium">{act.progress}%</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        act.status === 'Concluído'
                          ? 'success'
                          : act.status === 'Atrasado'
                            ? 'destructive'
                            : 'warning'
                      }
                    >
                      {act.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
              {actions.length === 0 && (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                    Nenhuma ação de planejamento registrada.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
