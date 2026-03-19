import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
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
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useToast } from '@/hooks/use-toast'
import { Plus, TrendingUp, BarChart3, Clock } from 'lucide-react'
import useAuthStore from '@/stores/useAuthStore'
import { MOCK_COMPLIANCE_OBJECTIVES } from '@/lib/mock'

export default function Section62Objetivos({ canEdit }: { canEdit: boolean }) {
  const { currentTenantId } = useAuthStore()
  const { toast } = useToast()
  const [isOpen, setIsOpen] = useState(false)

  const objectives = MOCK_COMPLIANCE_OBJECTIVES.filter((o) => o.tenantId === currentTenantId)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({ title: 'Objetivo Definido', description: 'Métrica SMART salva e versionada.' })
    setIsOpen(false)
  }

  return (
    <div className="space-y-4 animate-fade-in-up">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
        <div>
          <h3 className="text-lg font-medium">6.2 Objetivos de Compliance e Planejamento</h3>
          <p className="text-sm text-muted-foreground">
            Estabelecimento de objetivos mensuráveis (SMART), coerentes com a política de
            compliance.
          </p>
        </div>
        {canEdit && (
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button size="sm">
                <Plus className="w-4 h-4 mr-2" /> Novo Objetivo SMART
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Definir Objetivo de Compliance</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4 mt-2">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2 col-span-2">
                    <Label>Título / O que será feito?</Label>
                    <Input
                      placeholder="Ex: Alcançar 100% de conformidade em due diligence..."
                      required
                    />
                  </div>
                  <div className="space-y-2 col-span-2">
                    <Label>Resultado Esperado (Por que?)</Label>
                    <Textarea
                      placeholder="Justifique a importância deste objetivo..."
                      className="resize-none h-20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Categoria</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Treinamento">Treinamento</SelectItem>
                        <SelectItem value="Monitoramento">Monitoramento / Auditoria</SelectItem>
                        <SelectItem value="Controles">Controles Internos</SelectItem>
                        <SelectItem value="Cultura">Cultura e Conduta</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Prazo (Quando?)</Label>
                    <Input type="date" required />
                  </div>
                  <div className="space-y-2 col-span-2 border-t border-border/50 pt-4 mt-2">
                    <h4 className="text-sm font-semibold mb-2">Métricas de Acompanhamento</h4>
                  </div>
                  <div className="space-y-2 col-span-2">
                    <Label>Indicador Principal (Fórmula/Métrica)</Label>
                    <Input
                      placeholder="Ex: (Nº de terceiros avaliados / Nº total de terceiros) * 100"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Alvo (Meta)</Label>
                    <Input placeholder="Ex: 100%" required />
                  </div>
                  <div className="space-y-2">
                    <Label>Frequência de Medição</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Mensal">Mensal</SelectItem>
                        <SelectItem value="Trimestral">Trimestral</SelectItem>
                        <SelectItem value="Semestral">Semestral</SelectItem>
                        <SelectItem value="Anual">Anual</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <DialogFooter className="mt-4">
                  <Button type="button" variant="outline" onClick={() => setIsOpen(false)}>
                    Cancelar
                  </Button>
                  <Button type="submit">Salvar Objetivo</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        )}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {objectives.map((obj) => (
          <Card key={obj.id} className="flex flex-col group hover:shadow-md transition-shadow">
            <CardHeader className="pb-4 border-b border-border/40">
              <div className="flex justify-between items-start gap-4 mb-2">
                <Badge
                  variant="outline"
                  className="text-[10px] font-semibold text-muted-foreground uppercase"
                >
                  {obj.category}
                </Badge>
                <Badge
                  variant={
                    obj.status === 'Em Dia'
                      ? 'success'
                      : obj.status === 'Atrasado'
                        ? 'destructive'
                        : 'warning'
                  }
                  className="shrink-0"
                >
                  {obj.status}
                </Badge>
              </div>
              <CardTitle className="text-base leading-tight group-hover:text-primary transition-colors">
                {obj.title}
              </CardTitle>
              <CardDescription className="text-xs mt-1 font-medium text-foreground/70 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" /> Prazo final: {obj.targetDate}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-4 flex-1 flex flex-col justify-end space-y-4">
              <div className="flex items-center gap-3 text-sm text-muted-foreground bg-muted/30 p-2.5 rounded-lg border border-border/50">
                <BarChart3 className="w-4 h-4 text-primary shrink-0" />
                <div className="flex-1 truncate">
                  <span className="font-semibold text-foreground mr-1">{obj.currentValue}</span>
                  <span className="text-xs">
                    de {obj.targetValue} ({obj.metric})
                  </span>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-medium mb-1.5">
                  <span className="text-muted-foreground flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5" /> Progresso Geral
                  </span>
                  <span>{obj.progress}%</span>
                </div>
                <Progress value={obj.progress} className="h-2" />
              </div>
            </CardContent>
          </Card>
        ))}
        {objectives.length === 0 && (
          <div className="col-span-full p-8 text-center text-muted-foreground border border-dashed rounded-xl">
            Nenhum objetivo SMART cadastrado para o período.
          </div>
        )}
      </div>
    </div>
  )
}
