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
import { Lock, Send, ShieldAlert } from 'lucide-react'
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
    toast({ title: 'Denúncia Registrada', description: 'Protocolo gerado.' })
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title="8. Operação"
        breadcrumbs={[{ label: 'Início', path: '/' }, { label: 'ISO Módulo 8' }]}
      />

      <Tabs defaultValue="denuncias" className="w-full">
        <TabsList className="bg-muted/50 p-1 rounded-lg mb-6 inline-flex h-auto items-center flex-wrap gap-1">
          <TabsTrigger value="denuncias" className="py-2">
            <Lock className="w-4 h-4 mr-2" /> Canal de Denúncias
          </TabsTrigger>
          {canViewInvestigations && (
            <TabsTrigger value="investigacoes" className="py-2">
              <ShieldAlert className="w-4 h-4 mr-2" /> Investigações (Restrito)
            </TabsTrigger>
          )}
        </TabsList>

        <TabsContent value="denuncias" className="max-w-2xl mx-auto">
          <Card className="border-t-4 border-t-primary">
            <CardHeader>
              <CardTitle>Canal Seguro de Denúncias</CardTitle>
              <CardDescription>Garantia de anonimato e proteção ao denunciante.</CardDescription>
            </CardHeader>
            <form onSubmit={handleDenunciaSubmit}>
              <CardContent className="space-y-4">
                <Textarea
                  placeholder="Descreva o que ocorreu..."
                  className="min-h-[150px]"
                  required
                />
              </CardContent>
              <CardFooter className="bg-muted/10 border-t justify-end p-4">
                <Button type="submit">
                  <Send className="w-4 h-4 mr-2" /> Gerar Protocolo
                </Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>

        {canViewInvestigations && (
          <TabsContent value="investigacoes">
            <Card className="border-t-4 border-t-destructive">
              <CardHeader>
                <CardTitle className="text-destructive">
                  Ambiente Restrito de Investigações (8.4)
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 overflow-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Protocolo</TableHead>
                      <TableHead>Assunto</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {investigations.map((inv) => (
                      <TableRow key={inv.id}>
                        <TableCell className="font-medium text-primary">{inv.id}</TableCell>
                        <TableCell>{inv.subject}</TableCell>
                        <TableCell>
                          <Badge variant={inv.status === 'Concluída' ? 'secondary' : 'default'}>
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
