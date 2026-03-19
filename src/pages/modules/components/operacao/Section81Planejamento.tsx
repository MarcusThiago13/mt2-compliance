import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
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
import { ComplianceChecklistItem } from '@/components/ComplianceChecklist'
import { MOCK_CONTROLS, MOCK_THIRDPARTY, MOCK_FAILURES } from './mockData8'

interface Props {
  canEdit: boolean
}

export default function Section81Planejamento({ canEdit }: Props) {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
        <div>
          <h3 className="text-lg font-medium text-foreground">
            8.1 Planejamento e Controle Operacional
          </h3>
          <p className="text-sm text-muted-foreground">
            Gestão de controles operacionais, due diligence de terceiros e registro de falhas.
          </p>
        </div>
        {canEdit && (
          <Button size="sm">
            <Plus className="w-4 h-4 mr-2" /> Adicionar Controle
          </Button>
        )}
      </div>

      <Tabs defaultValue="controles" className="w-full">
        <TabsList className="bg-muted/40 p-1 rounded-lg inline-flex h-auto items-center mb-4 flex-wrap">
          <TabsTrigger value="controles" className="py-2 px-4 text-sm rounded-md">
            Controles Operacionais
          </TabsTrigger>
          <TabsTrigger value="terceiros" className="py-2 px-4 text-sm rounded-md">
            Gestão de Terceiros
          </TabsTrigger>
          <TabsTrigger value="falhas" className="py-2 px-4 text-sm rounded-md">
            Registro de Falhas
          </TabsTrigger>
        </TabsList>

        <TabsContent value="controles">
          <Card>
            <CardContent className="p-0 overflow-auto">
              <Table>
                <TableHeader className="bg-muted/30">
                  <TableRow>
                    <TableHead>Controle / ID</TableHead>
                    <TableHead>Processo</TableHead>
                    <TableHead>Risco Vinculado</TableHead>
                    <TableHead>Frequência</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {MOCK_CONTROLS.map((c) => (
                    <TableRow key={c.id}>
                      <TableCell>
                        <div className="font-medium text-foreground">{c.name}</div>
                        <div className="text-xs text-muted-foreground">
                          {c.id} - {c.type}
                        </div>
                      </TableCell>
                      <TableCell className="text-sm">{c.process}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{c.risk}</Badge>
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">{c.freq}</TableCell>
                      <TableCell>
                        <Badge variant={c.status === 'Ativo' ? 'success' : 'warning'}>
                          {c.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="terceiros">
          <Card>
            <CardContent className="p-0 overflow-auto">
              <Table>
                <TableHeader className="bg-muted/30">
                  <TableRow>
                    <TableHead>Terceiro</TableHead>
                    <TableHead>Status Due Diligence</TableHead>
                    <TableHead>SLA / Contrato</TableHead>
                    <TableHead>Monitoramento</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {MOCK_THIRDPARTY.map((t) => (
                    <TableRow key={t.id}>
                      <TableCell className="font-medium">{t.name}</TableCell>
                      <TableCell>
                        <Badge variant={t.status === 'Aprovado' ? 'success' : 'secondary'}>
                          {t.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">{t.sla}</TableCell>
                      <TableCell>
                        <Badge variant={t.monitoring === 'Em Dia' ? 'outline' : 'destructive'}>
                          {t.monitoring}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="falhas">
          <Card>
            <CardContent className="p-0 overflow-auto">
              <Table>
                <TableHeader className="bg-muted/30">
                  <TableRow>
                    <TableHead>Data</TableHead>
                    <TableHead>Controle Afetado</TableHead>
                    <TableHead>Efeito Indesejado</TableHead>
                    <TableHead>Ação Imediata</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {MOCK_FAILURES.map((f) => (
                    <TableRow key={f.id}>
                      <TableCell className="text-sm font-medium">{f.date}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{f.control}</Badge>
                      </TableCell>
                      <TableCell className="text-sm">{f.effect}</TableCell>
                      <TableCell className="text-sm text-muted-foreground">{f.action}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="space-y-3 pt-4">
        <h4 className="text-sm font-semibold mb-2">Checklist de Auditoria (8.1)</h4>
        <ComplianceChecklistItem
          clause="8.1.1"
          title="Planejamento e Controle"
          description="A organização planejou, implementou e controla os processos necessários para atender às obrigações de compliance?"
          canEdit={canEdit}
        />
        <ComplianceChecklistItem
          clause="8.1.2"
          title="Processos Terceirizados"
          description="Os processos terceirizados são controlados e monitorados adequadamente quanto aos riscos de compliance?"
          canEdit={canEdit}
        />
      </div>
    </div>
  )
}
