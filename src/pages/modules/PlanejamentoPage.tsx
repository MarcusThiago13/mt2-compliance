import { PageHeader } from '@/components/PageHeader'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { MOCK_ACTION_PLANS } from '@/lib/mock'
import { Badge } from '@/components/ui/badge'

export default function PlanejamentoPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="6. Planejamento"
        description="Ações para abordar riscos, oportunidades e objetivos de compliance."
        breadcrumbs={[{ label: 'Início', path: '/' }, { label: 'ISO Módulo 6' }]}
      />

      <Card>
        <CardHeader>
          <CardTitle>Planos de Ação (6.1)</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Tarefa</TableHead>
                <TableHead>Responsável</TableHead>
                <TableHead>Prazo</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {MOCK_ACTION_PLANS.map((plan) => (
                <TableRow key={plan.id}>
                  <TableCell className="font-medium">{plan.id}</TableCell>
                  <TableCell>{plan.task}</TableCell>
                  <TableCell>{plan.owner}</TableCell>
                  <TableCell>{plan.deadline}</TableCell>
                  <TableCell>
                    <Badge
                      variant="secondary"
                      className={
                        plan.status === 'Concluído'
                          ? 'bg-success/20 text-success'
                          : plan.status === 'Atrasado'
                            ? 'bg-destructive/20 text-destructive'
                            : ''
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
