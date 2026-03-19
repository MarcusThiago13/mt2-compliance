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
import { MOCK_INVESTIGATIONS_8 } from './mockData8'

interface Props {
  canEdit: boolean
}

export default function Section84Investigacao({ canEdit }: Props) {
  if (!canEdit) {
    return (
      <Card className="p-8 text-center text-muted-foreground border-dashed">
        Acesso restrito à equipe de investigação e alta direção.
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
        <div>
          <h3 className="text-lg font-medium text-foreground">8.4 Processos de Investigação</h3>
          <p className="text-sm text-muted-foreground">
            Abertura de dossiês, designação de investigadores independentes e análise de causa raiz.
          </p>
        </div>
        <Button size="sm">
          <Plus className="w-4 h-4 mr-2" /> Iniciar Investigação
        </Button>
      </div>

      <Tabs defaultValue="dossies" className="w-full">
        <TabsList className="bg-muted/40 p-1 rounded-lg inline-flex h-auto items-center mb-4">
          <TabsTrigger value="dossies" className="py-2 px-4 text-sm rounded-md">
            Dossiês Ativos
          </TabsTrigger>
        </TabsList>

        <TabsContent value="dossies">
          <Card>
            <CardContent className="p-0 overflow-auto">
              <Table>
                <TableHeader className="bg-muted/30">
                  <TableRow>
                    <TableHead>Dossiê</TableHead>
                    <TableHead>Relato de Origem</TableHead>
                    <TableHead>Escopo Investigativo</TableHead>
                    <TableHead>Equipe / Investigador</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {MOCK_INVESTIGATIONS_8.map((i) => (
                    <TableRow key={i.id}>
                      <TableCell className="font-medium text-primary">{i.id}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="font-mono text-[10px]">
                          {i.concern}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-sm">{i.scope}</TableCell>
                      <TableCell className="text-sm text-muted-foreground">{i.team}</TableCell>
                      <TableCell>
                        <Badge variant={i.status === 'Concluída' ? 'success' : 'warning'}>
                          {i.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="space-y-3 pt-4">
        <h4 className="text-sm font-semibold mb-2">Checklist de Auditoria (8.4)</h4>
        <ComplianceChecklistItem
          clause="8.4.1"
          title="Independência da Investigação"
          description="As investigações são conduzidas por profissionais independentes e sem conflito de interesse?"
          canEdit={canEdit}
        />
        <ComplianceChecklistItem
          clause="8.4.2"
          title="Processo Baseado em Evidências"
          description="As conclusões são baseadas em provas, e as ações disciplinares/corretivas foram implementadas?"
          canEdit={canEdit}
        />
      </div>
    </div>
  )
}
