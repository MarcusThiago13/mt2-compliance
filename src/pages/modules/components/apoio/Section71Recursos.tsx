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
import { Plus, Paperclip, CheckCircle2, AlertTriangle } from 'lucide-react'

const MOCK_RESOURCES = [
  {
    id: 'REC-01',
    type: 'Financeiro',
    desc: 'Orçamento Anual Compliance',
    purpose: 'Custeio de softwares, treinamentos e auditorias',
    unit: 'Diretoria Executiva',
    availability: 'Aprovado',
    sufficiency: 'Suficiente',
    evidence: 'Ata de Aprovação 2024',
  },
  {
    id: 'REC-02',
    type: 'Humano',
    desc: 'Equipe de Investigação',
    purpose: 'Condução de relatos do canal de denúncias',
    unit: 'Compliance',
    availability: 'Parcial',
    sufficiency: 'Insuficiente (1 vaga aberta)',
    evidence: 'Requisição RH-445',
  },
  {
    id: 'REC-03',
    type: 'Tecnológico',
    desc: 'Sistema de Due Diligence',
    purpose: 'Automação de background check',
    unit: 'TI / Compliance',
    availability: 'Implementado',
    sufficiency: 'Suficiente',
    evidence: 'Contrato Fornecedor XYZ',
  },
]

export default function Section71Recursos({ canEdit }: { canEdit: boolean }) {
  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
        <div>
          <h3 className="text-lg font-medium">7.1 Gestão de Recursos</h3>
          <p className="text-sm text-muted-foreground">
            Monitoramento de recursos financeiros, humanos e tecnológicos para a função de
            compliance.
          </p>
        </div>
        {canEdit && (
          <Button size="sm" className="shrink-0">
            <Plus className="w-4 h-4 mr-2" /> Novo Recurso
          </Button>
        )}
      </div>

      <Card>
        <CardContent className="p-0 overflow-auto">
          <Table>
            <TableHeader className="bg-muted/30">
              <TableRow>
                <TableHead>Identificação / Tipo</TableHead>
                <TableHead>Propósito (ISO 37301)</TableHead>
                <TableHead>Unidade</TableHead>
                <TableHead>Avaliação de Suficiência</TableHead>
                <TableHead>Evidência (GED)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {MOCK_RESOURCES.map((r) => (
                <TableRow key={r.id}>
                  <TableCell>
                    <div className="font-medium text-foreground">{r.desc}</div>
                    <Badge variant="outline" className="mt-1 text-[10px] uppercase">
                      {r.type}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground max-w-[200px] truncate">
                    {r.purpose}
                  </TableCell>
                  <TableCell className="text-sm">{r.unit}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Badge
                        variant={
                          r.availability === 'Aprovado' || r.availability === 'Implementado'
                            ? 'success'
                            : 'warning'
                        }
                      >
                        {r.availability}
                      </Badge>
                      {r.sufficiency.includes('Insuficiente') ? (
                        <AlertTriangle className="w-4 h-4 text-warning" />
                      ) : (
                        <CheckCircle2 className="w-4 h-4 text-success" />
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{r.sufficiency}</p>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm" className="h-8 text-xs text-primary">
                      <Paperclip className="w-3.5 h-3.5 mr-1.5" />
                      {r.evidence}
                    </Button>
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
