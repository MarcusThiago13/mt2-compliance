import { PageHeader } from '@/components/PageHeader'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
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
import { Plus } from 'lucide-react'
import { MOCK_OBLIGATIONS, MOCK_RISKS } from '@/lib/mock'

export default function ContextoPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="4. Contexto da Organização"
        description="Compreensão da organização, necessidades das partes interessadas e escopo do sistema."
        breadcrumbs={[{ label: 'Início', path: '/' }, { label: 'ISO Módulo 4' }]}
        onExport={() => alert('Exportando Módulo 4')}
      />

      <Tabs defaultValue="risks" className="w-full">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 bg-muted/50 p-1 rounded-lg">
          <TabsTrigger value="swot">Análise SWOT/PESTEL</TabsTrigger>
          <TabsTrigger value="stakeholders">Partes Interessadas</TabsTrigger>
          <TabsTrigger value="obligations">Obrigações</TabsTrigger>
          <TabsTrigger value="risks">Avaliação de Riscos</TabsTrigger>
        </TabsList>

        <TabsContent value="risks" className="mt-6 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">Matriz de Riscos de Compliance (4.6)</h3>
            <Button size="sm">
              <Plus className="w-4 h-4 mr-2" /> Novo Risco
            </Button>
          </div>
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Descrição do Risco</TableHead>
                    <TableHead>Probabilidade</TableHead>
                    <TableHead>Impacto</TableHead>
                    <TableHead>Responsável</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {MOCK_RISKS.map((risk) => (
                    <TableRow key={risk.id}>
                      <TableCell className="font-medium">{risk.id}</TableCell>
                      <TableCell>{risk.name}</TableCell>
                      <TableCell>{risk.prob}</TableCell>
                      <TableCell>{risk.impact}</TableCell>
                      <TableCell>{risk.owner}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            risk.status === 'Crítico'
                              ? 'destructive'
                              : risk.status === 'Alto'
                                ? 'default'
                                : 'secondary'
                          }
                          className={
                            risk.status === 'Alto'
                              ? 'bg-warning hover:bg-warning/80 text-warning-foreground'
                              : ''
                          }
                        >
                          {risk.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="obligations" className="mt-6 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">Obrigações de Compliance (4.2)</h3>
            <Button size="sm">
              <Plus className="w-4 h-4 mr-2" /> Nova Obrigação
            </Button>
          </div>
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Documento/Requisito</TableHead>
                    <TableHead>Data de Vencimento</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {MOCK_OBLIGATIONS.map((ob, idx) => (
                    <TableRow key={idx}>
                      <TableCell className="font-medium">{ob.name}</TableCell>
                      <TableCell>{ob.date}</TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={
                            ob.status === 'Vigente'
                              ? 'text-success border-success'
                              : ob.status === 'Expirado'
                                ? 'text-destructive border-destructive'
                                : 'text-warning border-warning'
                          }
                        >
                          {ob.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="swot" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Matriz SWOT</CardTitle>
              <CardDescription>Ferramenta editável de análise de contexto (4.1)</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-success/10 rounded-md border border-success/20 min-h-[150px]">
                <h4 className="font-bold text-success mb-2">Forças (Strengths)</h4>
                <ul className="list-disc pl-4 text-sm space-y-1">
                  <li>Cultura ética estabelecida</li>
                  <li>Apoio da alta direção</li>
                </ul>
              </div>
              <div className="p-4 bg-destructive/10 rounded-md border border-destructive/20 min-h-[150px]">
                <h4 className="font-bold text-destructive mb-2">Fraquezas (Weaknesses)</h4>
                <ul className="list-disc pl-4 text-sm space-y-1">
                  <li>Sistemas legados descentralizados</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="stakeholders" className="mt-6">
          <Card>
            <CardContent className="p-6 text-center text-muted-foreground">
              Módulo de Partes Interessadas em construção.
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
