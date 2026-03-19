import { Card, CardContent } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Plus, Check, Clock } from 'lucide-react'

const MOCK_COMMS = [
  {
    id: 'COM-01',
    type: 'Regulatória (Externa)',
    topic: 'Reporte Anual de PLD',
    stakeholder: 'COAF',
    date: '15/02/2024',
    status: 'Enviado',
    principle: 'Transparência e Clareza',
  },
  {
    id: 'COM-02',
    type: 'Consulta Externa',
    topic: 'Esclarecimento sobre Licitação',
    stakeholder: 'Ministério Público',
    date: '30/03/2024',
    status: 'Pendente Resposta',
    principle: 'Credibilidade',
  },
  {
    id: 'COM-03',
    type: 'Interna',
    topic: 'Atualização do Código de Conduta',
    stakeholder: 'Colaboradores',
    date: '10/01/2024',
    status: 'Enviado',
    principle: 'Acessibilidade',
  },
]

export default function Section74Comunicacao({ canEdit }: { canEdit: boolean }) {
  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
        <div>
          <h3 className="text-lg font-medium">7.4 Comunicação</h3>
          <p className="text-sm text-muted-foreground">
            Plano de comunicação interna e externa, incluindo interações com autoridades
            regulatórias.
          </p>
        </div>
        {canEdit && (
          <Button size="sm" className="shrink-0">
            <Plus className="w-4 h-4 mr-2" /> Registrar Interação
          </Button>
        )}
      </div>

      <Card>
        <CardContent className="p-0 overflow-auto">
          <Table>
            <TableHeader className="bg-muted/30">
              <TableRow>
                <TableHead>Tipo / Categoria</TableHead>
                <TableHead>Assunto / Conteúdo</TableHead>
                <TableHead>Parte Interessada</TableHead>
                <TableHead>Avaliação de Princípios</TableHead>
                <TableHead>Status / Data</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {MOCK_COMMS.map((c) => (
                <TableRow key={c.id}>
                  <TableCell>
                    <Badge
                      variant={c.type.includes('Externa') ? 'secondary' : 'outline'}
                      className="font-normal"
                    >
                      {c.type}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-medium text-foreground">{c.topic}</TableCell>
                  <TableCell className="text-sm">{c.stakeholder}</TableCell>
                  <TableCell>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Check className="w-3.5 h-3.5 text-success mr-1" /> {c.principle}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {c.status === 'Enviado' ? (
                        <Check className="w-4 h-4 text-success" />
                      ) : (
                        <Clock className="w-4 h-4 text-warning" />
                      )}
                      <div>
                        <p className="text-sm font-medium leading-none">{c.status}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{c.date}</p>
                      </div>
                    </div>
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
