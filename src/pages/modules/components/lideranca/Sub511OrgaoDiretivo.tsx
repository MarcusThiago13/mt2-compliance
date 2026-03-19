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
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'

const deliberations = [
  {
    id: 'DEL-01',
    type: 'Aprovação',
    issuer: 'Conselho de Adm.',
    date: '10/01/2024',
    decision: 'Aprovação do Orçamento de Compliance 2024',
    status: 'Implementado',
  },
  {
    id: 'DEL-02',
    type: 'Validação',
    issuer: 'Comitê de Ética',
    date: '05/02/2024',
    decision: 'Validação do Código de Conduta v2',
    status: 'Pendente',
  },
]

export default function Sub511OrgaoDiretivo({ canEdit }: { canEdit: boolean }) {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="pb-3 border-b border-border/40">
          <CardTitle className="text-lg">Compromissos e Deliberações</CardTitle>
          <CardDescription>
            Ações formais e aprovações do Órgão Diretivo e Alta Direção.
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-4 px-6 pb-6">
          <Accordion type="single" collapsible defaultValue="delib">
            <AccordionItem value="delib" className="border-b-0">
              <AccordionTrigger className="hover:no-underline py-2 font-medium text-primary">
                Registros de Deliberações Formais
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                <div className="flex justify-end mb-3">
                  {canEdit && (
                    <Button size="sm">
                      <Plus className="w-4 h-4 mr-2" />
                      Nova Deliberação
                    </Button>
                  )}
                </div>
                <div className="border rounded-md overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-muted/20">
                        <TableHead>ID</TableHead>
                        <TableHead>Tipo</TableHead>
                        <TableHead>Emissor (Órgão)</TableHead>
                        <TableHead>Decisão</TableHead>
                        <TableHead>Data</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {deliberations.map((d) => (
                        <TableRow key={d.id}>
                          <TableCell className="font-semibold text-primary">{d.id}</TableCell>
                          <TableCell>{d.type}</TableCell>
                          <TableCell className="text-muted-foreground">{d.issuer}</TableCell>
                          <TableCell className="font-medium">{d.decision}</TableCell>
                          <TableCell className="text-muted-foreground">{d.date}</TableCell>
                          <TableCell>
                            <Badge variant={d.status === 'Implementado' ? 'success' : 'warning'}>
                              {d.status}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3 border-b border-border/40">
          <CardTitle className="text-lg">Alocação de Recursos</CardTitle>
          <CardDescription>
            Evidências de recursos disponibilizados e infraestrutura de apoio.
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 border border-border/60 rounded-xl bg-muted/10 hover:border-primary/30 transition-colors">
              <h4 className="font-semibold text-sm mb-1.5 text-muted-foreground uppercase tracking-wider">
                Orçamento Aprovado 2024
              </h4>
              <p className="text-3xl font-bold text-foreground mb-2">R$ 450.000</p>
              <div className="inline-flex items-center gap-1.5 text-xs text-success font-medium bg-success/10 px-2 py-1 rounded">
                <div className="w-1.5 h-1.5 rounded-full bg-success"></div>
                Suficiente (Validado em Jan/24)
              </div>
            </div>
            <div className="p-5 border border-border/60 rounded-xl bg-muted/10 hover:border-primary/30 transition-colors">
              <h4 className="font-semibold text-sm mb-1.5 text-muted-foreground uppercase tracking-wider">
                Equipe Dedicada
              </h4>
              <p className="text-3xl font-bold text-foreground mb-2">3 Profissionais</p>
              <div className="inline-flex items-center gap-1.5 text-xs text-muted-foreground font-medium bg-muted px-2 py-1 rounded border border-border/60">
                1 Compliance Officer, 2 Analistas
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
