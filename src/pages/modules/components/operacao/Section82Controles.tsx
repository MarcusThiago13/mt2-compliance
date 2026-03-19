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
import { MOCK_PROCEDURES, MOCK_EXCEPTIONS } from './mockData8'

interface Props {
  canEdit: boolean
}

export default function Section82Controles({ canEdit }: Props) {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
        <div>
          <h3 className="text-lg font-medium text-foreground">
            8.2 Estabelecendo Controles e Procedimentos
          </h3>
          <p className="text-sm text-muted-foreground">
            Políticas, matriz de alçadas, segregação de funções e gestão de exceções operacionais.
          </p>
        </div>
        {canEdit && (
          <Button size="sm">
            <Plus className="w-4 h-4 mr-2" /> Novo Procedimento
          </Button>
        )}
      </div>

      <Tabs defaultValue="procedimentos" className="w-full">
        <TabsList className="bg-muted/40 p-1 rounded-lg inline-flex h-auto items-center mb-4 flex-wrap">
          <TabsTrigger value="procedimentos" className="py-2 px-4 text-sm rounded-md">
            Procedimentos
          </TabsTrigger>
          <TabsTrigger value="excecoes" className="py-2 px-4 text-sm rounded-md">
            Log de Exceções
          </TabsTrigger>
        </TabsList>

        <TabsContent value="procedimentos">
          <Card>
            <CardContent className="p-0 overflow-auto">
              <Table>
                <TableHeader className="bg-muted/30">
                  <TableRow>
                    <TableHead>Procedimento</TableHead>
                    <TableHead>Versão</TableHead>
                    <TableHead>Responsável</TableHead>
                    <TableHead>Validade</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {MOCK_PROCEDURES.map((p) => (
                    <TableRow key={p.id}>
                      <TableCell>
                        <div className="font-medium text-foreground">{p.name}</div>
                        <div className="text-xs text-muted-foreground">{p.id}</div>
                      </TableCell>
                      <TableCell className="text-sm">{p.version}</TableCell>
                      <TableCell className="text-sm text-muted-foreground">{p.owner}</TableCell>
                      <TableCell className="text-sm">{p.validUntil}</TableCell>
                      <TableCell>
                        <Badge variant={p.status === 'Vigente' ? 'success' : 'destructive'}>
                          {p.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="excecoes">
          <Card>
            <CardContent className="p-0 overflow-auto">
              <Table>
                <TableHeader className="bg-muted/30">
                  <TableRow>
                    <TableHead>Origem / Solicitante</TableHead>
                    <TableHead>Procedimento Afetado</TableHead>
                    <TableHead>Impacto</TableHead>
                    <TableHead>Aprovação Extraordinária</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {MOCK_EXCEPTIONS.map((e) => (
                    <TableRow key={e.id}>
                      <TableCell>
                        <div className="font-medium">{e.origin}</div>
                        <div className="text-xs text-muted-foreground">{e.id}</div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{e.procedure}</Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant={e.impact === 'Alto' ? 'destructive' : 'warning'}>
                          {e.impact}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-sm">{e.approvals}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="space-y-3 pt-4">
        <h4 className="text-sm font-semibold mb-2">Checklist de Auditoria (8.2)</h4>
        <ComplianceChecklistItem
          clause="8.2.1"
          title="Controles Eficazes"
          description="A organização estabeleceu controles operacionais e procedimentos claros para gerenciar suas obrigações?"
          canEdit={canEdit}
        />
      </div>
    </div>
  )
}
