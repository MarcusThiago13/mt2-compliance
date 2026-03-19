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
import { Plus } from 'lucide-react'
import useAuthStore from '@/stores/useAuthStore'
import { MOCK_RISKS } from '@/lib/mock'

interface Props {
  canEdit: boolean
}

export default function Section46Risks({ canEdit }: Props) {
  const { currentTenantId } = useAuthStore()

  // Extends existing mock risks with fields required by ISO 37301: 4.6
  const risks = MOCK_RISKS.filter((r) => r.tenantId === currentTenantId).map((r, i) => ({
    ...r,
    thirdParty: i % 2 !== 0, // Alternates to simulate third party tags
    lastEval: '15/05/2024',
    nextEval: '15/11/2024',
  }))

  return (
    <div className="space-y-4 animate-fade-in-up">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
        <div>
          <h3 className="text-lg font-medium">4.6 Avaliação de Riscos de Compliance</h3>
          <p className="text-sm text-muted-foreground">
            Gestão estruturada de riscos, incluindo parceiros terceiros e processos terceirizados.
          </p>
        </div>
        {canEdit && (
          <Button size="sm" className="shrink-0">
            <Plus className="w-4 h-4 mr-2" /> Registrar Novo Risco
          </Button>
        )}
      </div>

      <Card>
        <CardContent className="p-0 overflow-auto">
          <Table>
            <TableHeader className="bg-muted/30">
              <TableRow>
                <TableHead>Identificação / Risco</TableHead>
                <TableHead>Origem / Contexto</TableHead>
                <TableHead>Classificação</TableHead>
                <TableHead>Última Avaliação</TableHead>
                <TableHead>Próxima Avaliação</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {risks.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-6 text-muted-foreground">
                    Nenhum risco avaliado para este ambiente.
                  </TableCell>
                </TableRow>
              ) : (
                risks.map((risk) => (
                  <TableRow key={risk.id}>
                    <TableCell>
                      <div className="font-medium text-foreground">{risk.name}</div>
                      <div className="text-xs text-muted-foreground">{risk.id}</div>
                    </TableCell>
                    <TableCell>
                      {risk.thirdParty ? (
                        <Badge
                          variant="secondary"
                          className="bg-warning/10 text-warning border-warning/30 hover:bg-warning/20"
                        >
                          Risco de Terceiros / Outsourcing
                        </Badge>
                      ) : (
                        <Badge variant="outline" className="font-normal">
                          Processo Interno
                        </Badge>
                      )}
                    </TableCell>
                    <TableCell>
                      <Badge variant={risk.status === 'Crítico' ? 'destructive' : 'default'}>
                        {risk.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">{risk.lastEval}</TableCell>
                    <TableCell className="text-sm font-medium">{risk.nextEval}</TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
