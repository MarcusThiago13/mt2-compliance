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
import { Plus, BarChart3 } from 'lucide-react'

const MOCK_CAMPAIGNS = [
  {
    id: 'CMP-01',
    theme: 'Mês da Integridade',
    audience: 'Todos os Empregados',
    channel: 'E-mail + Intranet',
    status: 'Concluída',
    reach: '95%',
    feedback: 'Positivo (NPS 88)',
  },
  {
    id: 'CMP-02',
    theme: 'Tone at the Top: Mensagem do CEO',
    audience: 'Liderança',
    channel: 'Vídeo Institucional',
    status: 'Em Andamento',
    reach: '60%',
    feedback: 'Coletando',
  },
  {
    id: 'CMP-03',
    theme: 'Alerta de Fraudes Externas',
    audience: 'Fornecedores Críticos',
    channel: 'Portal do Fornecedor',
    status: 'Planejada',
    reach: '-',
    feedback: '-',
  },
]

export default function Section73Conscientizacao({ canEdit }: { canEdit: boolean }) {
  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
        <div>
          <h3 className="text-lg font-medium">7.3 Conscientização</h3>
          <p className="text-sm text-muted-foreground">
            Registro de campanhas, mensagens da liderança e engajamento da força de trabalho.
          </p>
        </div>
        {canEdit && (
          <Button size="sm" className="shrink-0">
            <Plus className="w-4 h-4 mr-2" /> Nova Campanha
          </Button>
        )}
      </div>

      <Card>
        <CardContent className="p-0 overflow-auto">
          <Table>
            <TableHeader className="bg-muted/30">
              <TableRow>
                <TableHead>Tema Central</TableHead>
                <TableHead>Público-Alvo</TableHead>
                <TableHead>Canais Utilizados</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Métricas de Alcance</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {MOCK_CAMPAIGNS.map((c) => (
                <TableRow key={c.id}>
                  <TableCell className="font-medium text-foreground">{c.theme}</TableCell>
                  <TableCell className="text-sm">{c.audience}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">{c.channel}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        c.status === 'Concluída'
                          ? 'success'
                          : c.status === 'Em Andamento'
                            ? 'warning'
                            : 'outline'
                      }
                    >
                      {c.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2 text-sm">
                      <BarChart3 className="w-4 h-4 text-primary opacity-70" />
                      <span className="font-medium">{c.reach}</span>
                      <span className="text-xs text-muted-foreground">({c.feedback})</span>
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
