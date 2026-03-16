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

export default function MelhoriaPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="10. Melhoria"
        description="Não conformidades, ações corretivas e melhoria contínua."
        breadcrumbs={[{ label: 'Início', path: '/' }, { label: 'ISO Módulo 10' }]}
      />

      <Card>
        <CardHeader>
          <CardTitle>Tratamento de Não-Conformidades (10.1)</CardTitle>
          <CardDescription>
            Acompanhamento de NCs abertas em auditorias ou denúncias confirmadas.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Código</TableHead>
                <TableHead>Descrição Sumária</TableHead>
                <TableHead>Origem</TableHead>
                <TableHead>Fase Atual</TableHead>
                <TableHead>Prazo Eficácia</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">NC-2024-01</TableCell>
                <TableCell>Falha em due diligence de terceiro estratégico.</TableCell>
                <TableCell>Auditoria Interna</TableCell>
                <TableCell>
                  <Badge className="bg-warning hover:bg-warning/80">Plano de Ação</Badge>
                </TableCell>
                <TableCell>15/01/2025</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">NC-2024-02</TableCell>
                <TableCell>Assinatura faltante em política vigente.</TableCell>
                <TableCell>Monitoramento</TableCell>
                <TableCell>
                  <Badge variant="outline" className="text-primary border-primary">
                    Análise de Causa Raiz
                  </Badge>
                </TableCell>
                <TableCell>30/11/2024</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">NC-2023-14</TableCell>
                <TableCell>Pagamento não justificado via caixa pequeno.</TableCell>
                <TableCell>Canal de Denúncia</TableCell>
                <TableCell>
                  <Badge className="bg-success hover:bg-success/80">
                    Eficácia Comprovada (Fechada)
                  </Badge>
                </TableCell>
                <TableCell>-</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
