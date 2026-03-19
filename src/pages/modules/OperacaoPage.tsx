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
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Lock, Send, ShieldAlert, FileSearch } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import useAuthStore from '@/stores/useAuthStore'
import { MOCK_INVESTIGATIONS } from '@/lib/mock'

export default function OperacaoPage() {
  const { user, currentTenantId } = useAuthStore()
  const { toast } = useToast()

  const canViewInvestigations = user?.role === 'SUPER_ADMIN' || user?.role === 'EDITOR'
  const investigations = MOCK_INVESTIGATIONS.filter((i) => i.tenantId === currentTenantId)

  const handleDenunciaSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({ title: 'Registro Efetuado', description: 'O protocolo criptografado foi gerado.' })
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title="8. Operação"
        description="Gestão de canais de relato, investigações e due diligence (Item 8.1 a 8.4)."
        breadcrumbs={[{ label: 'Início', path: '/' }, { label: 'Módulo 8' }]}
      />

      <Tabs defaultValue="denuncias" className="w-full">
        <TabsList className="bg-muted/40 p-1 rounded-lg mb-6 inline-flex h-auto items-center">
          <TabsTrigger
            value="denuncias"
            className="py-2.5 px-4 text-sm data-[state=active]:bg-background data-[state=active]:shadow-sm rounded-md transition-all"
          >
            <Lock className="w-4 h-4 mr-2" /> Canal de Relatos
          </TabsTrigger>
          {canViewInvestigations && (
            <TabsTrigger
              value="investigacoes"
              className="py-2.5 px-4 text-sm data-[state=active]:bg-background data-[state=active]:shadow-sm rounded-md transition-all"
            >
              <ShieldAlert className="w-4 h-4 mr-2 text-primary" /> Gestão de Investigações
            </TabsTrigger>
          )}
        </TabsList>

        <TabsContent value="denuncias" className="max-w-3xl mx-auto mt-2">
          <Card>
            <CardHeader className="bg-primary/5 border-b border-border/40 pb-6 rounded-t-xl">
              <CardTitle className="text-primary flex items-center gap-2">
                <Lock className="w-5 h-5" /> Canal Seguro e Sigiloso
              </CardTitle>
              <CardDescription className="text-foreground/80">
                O relato pode ser feito de forma anônima. Garantimos a proteção contra retaliações
                conforme a ISO 37301.
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleDenunciaSubmit}>
              <CardContent className="pt-6 space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Descreva detalhadamente a situação
                  </label>
                  <Textarea
                    placeholder="Inclua datas, locais, pessoas envolvidas e evidências (se houver)..."
                    className="min-h-[180px] resize-y bg-muted/20"
                    required
                  />
                </div>
              </CardContent>
              <CardFooter className="bg-muted/10 border-t border-border/40 justify-end p-4 rounded-b-xl">
                <Button type="submit" className="px-6">
                  <Send className="w-4 h-4 mr-2" /> Submeter Relato
                </Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>

        {canViewInvestigations && (
          <TabsContent value="investigacoes" className="mt-2">
            <Card>
              <CardHeader className="border-b border-border/40 pb-4 flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <FileSearch className="w-5 h-5 text-primary" /> Dossiês Investigativos
                  </CardTitle>
                  <CardDescription className="mt-1">
                    Acesso restrito à alta gestão e comitê de ética.
                  </CardDescription>
                </div>
                <Button size="sm" variant="outline">
                  Novo Dossiê
                </Button>
              </CardHeader>
              <CardContent className="p-0 overflow-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/20">
                      <TableHead className="w-[120px]">Protocolo</TableHead>
                      <TableHead>Assunto Classificado</TableHead>
                      <TableHead>Investigador Líder</TableHead>
                      <TableHead>Prazo Legal</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {investigations.map((inv) => (
                      <TableRow key={inv.id}>
                        <TableCell className="font-semibold text-primary">{inv.id}</TableCell>
                        <TableCell className="font-medium">{inv.subject}</TableCell>
                        <TableCell className="text-muted-foreground">{inv.investigator}</TableCell>
                        <TableCell className="text-muted-foreground">{inv.deadline}</TableCell>
                        <TableCell>
                          <Badge variant={inv.status === 'Concluída' ? 'success' : 'warning'}>
                            {inv.status}
                          </Badge>
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
    </div>
  )
}
