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
import { Badge } from '@/components/ui/badge'
import useAuthStore from '@/stores/useAuthStore'
import { MOCK_ACTION_PLANS } from '@/lib/mock'

export default function PlanejamentoPage() {
  const { currentTenantId } = useAuthStore()
  const plans = MOCK_ACTION_PLANS.filter((p) => p.tenantId === currentTenantId)

  return (
    <div className="space-y-6">
      <PageHeader
        title="6. Planejamento"
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
                <TableHead>Tarefa</TableHead>
                <TableHead>Responsável</TableHead>
                <TableHead>Prazo</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {plans.map((plan) => (
                <TableRow key={plan.id}>
                  <TableCell>{plan.task}</TableCell>
                  <TableCell>{plan.owner}</TableCell>
                  <TableCell>{plan.deadline}</TableCell>
                  <TableCell>
                    <Badge
                      variant="secondary"
                      className={plan.status === 'Concluído' ? 'bg-success/20 text-success' : ''}
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
