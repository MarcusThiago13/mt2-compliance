import { useState } from 'react'
import { PageHeader } from '@/components/PageHeader'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
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
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import { Badge } from '@/components/ui/badge'
import { Lock, Send, FileText, ShieldAlert } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import { MOCK_INVESTIGATIONS } from '@/lib/mock'

export default function OperacaoPage() {
  const [isAnonymous, setIsAnonymous] = useState(true)
  const { toast } = useToast()

  const handleExport = (format: string) => {
    console.log(`Exportando Operação em ${format}`)
  }

  const handleDenunciaSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: 'Denúncia Registrada com Sucesso',
      description: 'Protocolo gerado: PRT-2024-9981. Acompanhe o status com esta chave.',
    })
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title="8. Operação"
        description="Controles operacionais, Due Diligence, Canal de Denúncias e Investigações (mt3 compliance)."
        breadcrumbs={[{ label: 'Início', path: '/' }, { label: 'ISO Módulo 8' }]}
        onExport={handleExport}
      />

      <Tabs defaultValue="denuncias" className="w-full">
        <TabsList className="bg-muted/50 p-1 rounded-lg mb-6 inline-flex h-auto items-center flex-wrap gap-1">
          <TabsTrigger value="controles" className="py-2">
            Controles (8.1)
          </TabsTrigger>
          <TabsTrigger
            value="denuncias"
            className="py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            <Lock className="w-4 h-4 mr-2" /> Canal de Denúncias (8.3)
          </TabsTrigger>
          <TabsTrigger value="investigacoes" className="py-2">
            <ShieldAlert className="w-4 h-4 mr-2" /> Investigações (8.4)
          </TabsTrigger>
        </TabsList>

        <TabsContent value="denuncias" className="max-w-3xl mx-auto">
          <Card className="border-t-4 border-t-primary shadow-md">
            <CardHeader className="bg-muted/20">
              <CardTitle className="text-2xl flex items-center gap-2">
                Canal Seguro de Denúncias
              </CardTitle>
              <CardDescription>
                Relate violações ao Código de Ética. Sistema em conformidade com a LGPD para
                proteção absoluta do denunciante.
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleDenunciaSubmit}>
              <CardContent className="space-y-6 pt-6">
                <div className="flex items-center space-x-2 bg-secondary/10 p-4 rounded-md border border-secondary/20">
                  <Switch id="anonymous" checked={isAnonymous} onCheckedChange={setIsAnonymous} />
                  <Label htmlFor="anonymous" className="font-semibold text-primary cursor-pointer">
                    Garantir Anonimato Absoluto
                  </Label>
                </div>

                {!isAnonymous && (
                  <div className="grid grid-cols-2 gap-4 animate-fade-in-down">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome Completo</Label>
                      <Input id="name" placeholder="Seu nome" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail</Label>
                      <Input id="email" type="email" placeholder="seu@email.com" />
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="category">Categoria do Relato</Label>
                  <select
                    id="category"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    required
                  >
                    <option value="">Selecione uma categoria...</option>
                    <option value="corrupcao">Corrupção / Suborno</option>
                    <option value="assedio">Assédio Moral / Sexual</option>
                    <option value="fraude">Fraude Financeira</option>
                    <option value="dados">Vazamento de Dados (LGPD)</option>
                    <option value="outro">Outros</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Descrição Detalhada</Label>
                  <Textarea
                    id="description"
                    placeholder="Descreva o que ocorreu, quem está envolvido e quando aconteceu..."
                    className="min-h-[150px]"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label>Anexar Evidências (Opcional)</Label>
                  <Input type="file" className="cursor-pointer file:cursor-pointer" />
                  <p className="text-xs text-muted-foreground">
                    Formatos: PDF, JPG, PNG. Max 10MB. Metadados são removidos automaticamente.
                  </p>
                </div>
              </CardContent>
              <CardFooter className="bg-muted/10 border-t justify-between flex-wrap gap-4">
                <p className="text-xs text-muted-foreground flex items-center">
                  <Lock className="w-3 h-3 mr-1" /> Criptografia Ponta-a-Ponta
                </p>
                <Button type="submit">
                  <Send className="w-4 h-4 mr-2" /> Gerar Protocolo
                </Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>

        <TabsContent value="investigacoes">
          <Card className="border-t-4 border-t-destructive shadow-sm">
            <CardHeader className="bg-destructive/5 border-b border-destructive/10">
              <CardTitle className="flex items-center gap-2 text-destructive">
                <ShieldAlert className="w-5 h-5" /> Ambiente Restrito de Investigações (8.4)
              </CardTitle>
              <CardDescription>
                Acesso exclusivo ao Comitê de Ética / Compliance Officer (RBAC).
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0 overflow-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Protocolo / Denúncia</TableHead>
                    <TableHead>Responsável</TableHead>
                    <TableHead>Prazo Legal</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Justificativa Extensão</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {MOCK_INVESTIGATIONS.map((inv) => (
                    <TableRow key={inv.id}>
                      <TableCell>
                        <div className="font-medium text-primary">{inv.id}</div>
                        <div className="text-xs text-muted-foreground">{inv.subject}</div>
                      </TableCell>
                      <TableCell>{inv.investigator}</TableCell>
                      <TableCell className="whitespace-nowrap">{inv.deadline}</TableCell>
                      <TableCell>
                        <Badge
                          variant={inv.status === 'Concluída' ? 'secondary' : 'default'}
                          className={
                            inv.status === 'Concluída'
                              ? 'bg-success/20 text-success'
                              : 'bg-warning text-warning-foreground'
                          }
                        >
                          {inv.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-xs italic text-muted-foreground">
                        {inv.extensionReason}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="controles">
          <Card>
            <CardHeader>
              <CardTitle>Inventário de Controles e Procedimentos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2 max-w-lg">
                <Button variant="outline" className="justify-start">
                  <FileText className="w-4 h-4 mr-2" /> Checklist: Due Diligence de Terceiros
                </Button>
                <Button variant="outline" className="justify-start">
                  <FileText className="w-4 h-4 mr-2" /> POP: Concessão e Recebimento de Brindes
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
