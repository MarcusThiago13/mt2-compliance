import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card'
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
import { Textarea } from '@/components/ui/textarea'
import { Lock, Send } from 'lucide-react'
import { ComplianceChecklistItem } from '@/components/ComplianceChecklist'
import { MOCK_CONCERNS } from './mockData8'

interface Props {
  canEdit: boolean
}

export default function Section83Preocupacoes({ canEdit }: Props) {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
        <div>
          <h3 className="text-lg font-medium text-foreground">
            8.3 Levantando Preocupações (Canal de Relatos)
          </h3>
          <p className="text-sm text-muted-foreground">
            Mecanismos seguros, anônimos e confidenciais para reporte e triagem de preocupações.
          </p>
        </div>
      </div>

      <Tabs defaultValue="novo" className="w-full">
        <TabsList className="bg-muted/40 p-1 rounded-lg inline-flex h-auto items-center mb-4 flex-wrap">
          <TabsTrigger value="novo" className="py-2 px-4 text-sm rounded-md">
            <Lock className="w-4 h-4 mr-2" /> Novo Relato
          </TabsTrigger>
          {canEdit && (
            <TabsTrigger value="triagem" className="py-2 px-4 text-sm rounded-md">
              Triagem de Relatos
            </TabsTrigger>
          )}
        </TabsList>

        <TabsContent value="novo" className="max-w-3xl">
          <Card>
            <CardHeader className="bg-primary/5 border-b border-border/40 pb-6 rounded-t-xl">
              <CardTitle className="text-primary flex items-center gap-2">
                <Lock className="w-5 h-5" /> Canal Seguro e Sigiloso
              </CardTitle>
              <CardDescription className="text-foreground/80">
                O relato pode ser feito de forma anônima. Garantimos a proteção contra retaliações.
              </CardDescription>
            </CardHeader>
            <form onSubmit={(e) => e.preventDefault()}>
              <CardContent className="pt-6 space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Descreva a situação</label>
                  <Textarea
                    placeholder="Inclua datas, locais e envolvidos..."
                    className="min-h-[150px] bg-muted/20"
                    required
                  />
                </div>
              </CardContent>
              <CardFooter className="bg-muted/10 border-t justify-end p-4 rounded-b-xl">
                <Button type="submit">
                  <Send className="w-4 h-4 mr-2" /> Submeter Relato
                </Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>

        {canEdit && (
          <TabsContent value="triagem">
            <Card>
              <CardContent className="p-0 overflow-auto">
                <Table>
                  <TableHeader className="bg-muted/30">
                    <TableRow>
                      <TableHead>Protocolo</TableHead>
                      <TableHead>Tipo</TableHead>
                      <TableHead>Gravidade</TableHead>
                      <TableHead>Área Responsável</TableHead>
                      <TableHead>Status da Triagem</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {MOCK_CONCERNS.map((c) => (
                      <TableRow key={c.id}>
                        <TableCell>
                          <div className="font-medium text-primary">{c.id}</div>
                          <div className="text-xs text-muted-foreground">{c.date}</div>
                        </TableCell>
                        <TableCell className="text-sm">{c.type}</TableCell>
                        <TableCell>
                          <Badge variant={c.severity === 'Alta' ? 'destructive' : 'warning'}>
                            {c.severity}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-sm text-muted-foreground">{c.area}</TableCell>
                        <TableCell>
                          <Badge variant="soft">{c.triage}</Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        )}
      </Tabs>

      <div className="space-y-3 pt-4">
        <h4 className="text-sm font-semibold mb-2">Checklist de Auditoria (8.3)</h4>
        <ComplianceChecklistItem
          clause="8.3.1"
          title="Mecanismo Acessível"
          description="O sistema para levantar preocupações é acessível, confidencial e permite anonimato?"
          canEdit={canEdit}
        />
        <ComplianceChecklistItem
          clause="8.3.2"
          title="Proteção contra Retaliação"
          description="Existem medidas documentadas para garantir a proteção de quem relata de boa-fé?"
          canEdit={canEdit}
        />
      </div>
    </div>
  )
}
