import { PageHeader } from '@/components/PageHeader'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card'
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
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Plus, Upload, Activity } from 'lucide-react'
import { MOCK_OBLIGATIONS, MOCK_RISKS, MOCK_AUDIT_LOGS } from '@/lib/mock'

export default function ContextoPage() {
  const handleExport = (format: string) => {
    console.log(`Exportando Módulo 4 em ${format}`)
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title="4. Contexto da Organização"
        description="Compreensão da organização, necessidades das partes interessadas e escopo do sistema (mt3 compliance)."
        breadcrumbs={[{ label: 'Início', path: '/' }, { label: 'ISO Módulo 4' }]}
        onExport={handleExport}
      />

      <Tabs defaultValue="contexto" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 bg-muted/50 p-1 rounded-lg h-auto">
          <TabsTrigger value="contexto" className="py-2">
            Contexto (4.1)
          </TabsTrigger>
          <TabsTrigger value="stakeholders" className="py-2">
            Partes (4.2)
          </TabsTrigger>
          <TabsTrigger value="obligations" className="py-2">
            Obrigações (4.5)
          </TabsTrigger>
          <TabsTrigger value="risks" className="py-2">
            Riscos (4.6)
          </TabsTrigger>
          <TabsTrigger value="sgc" className="py-2">
            SGC (4.4)
          </TabsTrigger>
        </TabsList>

        <TabsContent value="contexto" className="mt-6 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Modulação do SGC (Tamanho e Complexidade)</CardTitle>
              <CardDescription>
                Defina o escopo do sistema mt3 compliance com base na organização.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label>Porte da Empresa</Label>
                <Select defaultValue="media">
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pequena">Pequena (até 50 func.)</SelectItem>
                    <SelectItem value="media">Média (51 a 500 func.)</SelectItem>
                    <SelectItem value="grande">Grande (+500 func.)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Setor de Atuação</Label>
                <Input defaultValue="Tecnologia e Serviços" />
              </div>
              <div className="space-y-2">
                <Label>Nível de Risco Inerente</Label>
                <Select defaultValue="alto">
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="baixo">Baixo</SelectItem>
                    <SelectItem value="medio">Médio</SelectItem>
                    <SelectItem value="alto">Alto</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Análise SWOT / PESTEL</CardTitle>
              <CardDescription>
                Ferramenta de análise de contexto interno e externo.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Forças e Fraquezas (Interno)</Label>
                <Textarea
                  placeholder="Descreva as forças (cultura ética, etc.) e fraquezas..."
                  className="h-24"
                />
              </div>
              <div className="space-y-2">
                <Label>Oportunidades e Ameaças (Externo)</Label>
                <Textarea
                  placeholder="Descreva oportunidades e ameaças do mercado..."
                  className="h-24"
                />
              </div>
            </CardContent>
            <CardFooter className="justify-between border-t bg-muted/10 p-4">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Upload className="w-4 h-4 mr-2" /> Upload Evidência
                </Button>
                <span className="text-xs text-muted-foreground">SWOT_2024.pdf (Anexado)</span>
              </div>
              <Button size="sm">Salvar Análise</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="risks" className="mt-6 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">Matriz de Riscos de Compliance (4.6)</h3>
            <Button size="sm">
              <Plus className="w-4 h-4 mr-2" /> Novo Risco
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="col-span-1 flex flex-col items-center justify-center p-6 bg-muted/10">
              <h4 className="font-semibold mb-4 text-center">Matriz (Probabilidade x Impacto)</h4>
              <div className="grid grid-cols-5 gap-1 aspect-square w-full max-w-[250px] relative">
                <span className="absolute -left-6 top-1/2 -rotate-90 text-xs font-semibold text-muted-foreground">
                  Probabilidade
                </span>
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-semibold text-muted-foreground">
                  Impacto
                </span>
                {Array.from({ length: 25 }).map((_, i) => {
                  const x = (i % 5) + 1
                  const y = 5 - Math.floor(i / 5)
                  const score = x * y
                  let bg = 'bg-success/20'
                  if (score > 6) bg = 'bg-warning/40'
                  if (score > 12) bg = 'bg-destructive/60'
                  if (score > 19) bg = 'bg-destructive/90'

                  return (
                    <div
                      key={i}
                      className={`w-full h-full rounded-sm border border-background/50 flex items-center justify-center ${bg}`}
                    >
                      {score === 20 && <span className="text-[10px] font-bold text-white">2</span>}
                      {score === 15 && <span className="text-[10px] font-bold text-white">1</span>}
                    </div>
                  )
                })}
              </div>
            </Card>

            <Card className="col-span-1 md:col-span-2">
              <CardContent className="p-0 overflow-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Risco / Causa Raiz</TableHead>
                      <TableHead>PxI</TableHead>
                      <TableHead>Responsável</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {MOCK_RISKS.map((risk) => (
                      <TableRow key={risk.id}>
                        <TableCell className="font-medium whitespace-nowrap">{risk.id}</TableCell>
                        <TableCell>
                          <div className="font-medium">{risk.name}</div>
                          <div className="text-xs text-muted-foreground">
                            Causa: {risk.rootCause}
                          </div>
                        </TableCell>
                        <TableCell>
                          {risk.prob}x{risk.impact}
                        </TableCell>
                        <TableCell className="whitespace-nowrap">{risk.owner}</TableCell>
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
          </div>
        </TabsContent>

        <TabsContent value="obligations" className="mt-6 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">Obrigações de Compliance (4.5)</h3>
            <Button size="sm">
              <Plus className="w-4 h-4 mr-2" /> Nova Obrigação
            </Button>
          </div>
          <Card>
            <CardContent className="p-0 overflow-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Documento/Requisito</TableHead>
                    <TableHead>Tipo</TableHead>
                    <TableHead>Responsável</TableHead>
                    <TableHead>Vencimento</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {MOCK_OBLIGATIONS.map((ob, idx) => (
                    <TableRow key={idx}>
                      <TableCell className="font-medium">{ob.name}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="text-xs font-normal">
                          {ob.type}
                        </Badge>
                      </TableCell>
                      <TableCell>{ob.owner}</TableCell>
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

        <TabsContent value="sgc" className="mt-6 space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <Activity className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-medium">Sistema de Gestão Integrado e Logs (4.4)</h3>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Trilha de Auditoria (Logs Imutáveis)</CardTitle>
              <CardDescription>
                Registro automático de todas as ações relevantes no mt3 compliance.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0 overflow-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Data / Hora</TableHead>
                    <TableHead>Usuário</TableHead>
                    <TableHead>Ação</TableHead>
                    <TableHead>Detalhes</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {MOCK_AUDIT_LOGS.map((log) => (
                    <TableRow key={log.id} className="text-xs">
                      <TableCell className="whitespace-nowrap text-muted-foreground">
                        {log.date}
                      </TableCell>
                      <TableCell className="font-medium">{log.user}</TableCell>
                      <TableCell>{log.action}</TableCell>
                      <TableCell className="font-mono text-[10px]">{log.detail}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="stakeholders" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Partes Interessadas (4.2)</CardTitle>
              <CardDescription>Mapeamento de necessidades e expectativas.</CardDescription>
            </CardHeader>
            <CardContent className="p-6 text-center text-muted-foreground">
              Módulo de engajamento de Partes Interessadas pronto para expansão no mt3 compliance.
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
