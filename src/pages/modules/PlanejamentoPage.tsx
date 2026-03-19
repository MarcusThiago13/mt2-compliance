import { PageHeader } from '@/components/PageHeader'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Target } from 'lucide-react'
import useAuthStore from '@/stores/useAuthStore'
import { MOCK_ACTION_PLANS } from '@/lib/mock'

export default function PlanejamentoPage() {
  const { currentTenantId } = useAuthStore()
  const plans = MOCK_ACTION_PLANS.filter((p) => p.tenantId === currentTenantId)

  return (
    <div className="space-y-6">
      <PageHeader
        title="6. Planejamento"
        description="Ações para abordar riscos e oportunidades e atingir os objetivos de compliance (Item 6.1 e 6.2)."
        breadcrumbs={[{ label: 'Início', path: '/' }, { label: 'Módulo 6' }]}
      />

      <Card>
        <CardHeader className="border-b border-border/40 pb-4">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Target className="w-5 h-5 text-primary" /> Painel de Planos de Ação
          </CardTitle>
          <CardDescription>
            Acompanhamento de tarefas e prazos definidos na mitigação de riscos.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0 overflow-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/20">
                <TableHead>Tarefa / Descrição</TableHead>
                <TableHead>Responsável (Owner)</TableHead>
                <TableHead>Prazo Final</TableHead>
                <TableHead>Status da Ação</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {plans.map((plan) => (
                <TableRow key={plan.id}>
                  <TableCell className="font-medium text-foreground">{plan.task}</TableCell>
                  <TableCell className="text-muted-foreground">{plan.owner}</TableCell>
                  <TableCell className="text-muted-foreground">{plan.deadline}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        plan.status === 'Concluído'
                          ? 'success'
                          : plan.status === 'Atrasado'
                            ? 'destructive'
                            : 'warning'
                      }
                    >
                      {plan.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
