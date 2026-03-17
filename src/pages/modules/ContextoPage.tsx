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
import { Textarea } from '@/components/ui/textarea'
import { Plus, Upload, Activity } from 'lucide-react'
import useAuthStore from '@/stores/useAuthStore'
import { MOCK_OBLIGATIONS, MOCK_RISKS, MOCK_AUDIT_LOGS } from '@/lib/mock'

export default function ContextoPage() {
  const { user, currentTenantId } = useAuthStore()
  const canEdit = user?.role === 'SUPER_ADMIN' || user?.role === 'EDITOR'

  const risks = MOCK_RISKS.filter((r) => r.tenantId === currentTenantId)
  const obligations = MOCK_OBLIGATIONS.filter((o) => o.tenantId === currentTenantId)
  const logs = MOCK_AUDIT_LOGS.filter((l) => l.tenantId === currentTenantId)

  return (
    <div className="space-y-6">
      <PageHeader
        title="4. Contexto da Organização"
        breadcrumbs={[{ label: 'Início', path: '/' }, { label: 'ISO Módulo 4' }]}
      />

      <Tabs defaultValue="risks" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-muted/50 p-1 rounded-lg h-auto">
          <TabsTrigger value="risks" className="py-2">
            Riscos (4.6)
          </TabsTrigger>
          <TabsTrigger value="obligations" className="py-2">
            Obrigações (4.5)
          </TabsTrigger>
          <TabsTrigger value="contexto" className="py-2">
            Contexto (4.1)
          </TabsTrigger>
          <TabsTrigger value="sgc" className="py-2">
            Auditoria (4.4)
          </TabsTrigger>
        </TabsList>

        <TabsContent value="risks" className="mt-6 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">Matriz de Riscos de Compliance</h3>
            {canEdit && (
              <Button size="sm">
                <Plus className="w-4 h-4 mr-2" /> Novo Risco
              </Button>
            )}
          </div>
          <Card>
            <CardContent className="p-0 overflow-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Risco</TableHead>
                    <TableHead>Responsável</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {risks.map((risk) => (
                    <TableRow key={risk.id}>
                      <TableCell className="font-medium">{risk.id}</TableCell>
                      <TableCell>
                        <div className="font-medium">{risk.name}</div>
                      </TableCell>
                      <TableCell>{risk.owner}</TableCell>
                      <TableCell>
                        <Badge variant={risk.status === 'Crítico' ? 'destructive' : 'default'}>
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
            <h3 className="text-lg font-medium">Obrigações de Compliance</h3>
            {canEdit && (
              <Button size="sm">
                <Plus className="w-4 h-4 mr-2" /> Nova Obrigação
              </Button>
            )}
          </div>
          <Card>
            <CardContent className="p-0 overflow-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Documento</TableHead>
                    <TableHead>Vencimento</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {obligations.map((ob) => (
                    <TableRow key={ob.id}>
                      <TableCell className="font-medium">{ob.name}</TableCell>
                      <TableCell>{ob.date}</TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={
                            ob.status === 'Vigente'
                              ? 'text-success border-success'
                              : 'text-destructive border-destructive'
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

        <TabsContent value="contexto" className="mt-6 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Análise SWOT</CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Forças e Fraquezas</Label>
                <Textarea disabled={!canEdit} />
              </div>
              <div className="space-y-2">
                <Label>Oportunidades e Ameaças</Label>
                <Textarea disabled={!canEdit} />
              </div>
            </CardContent>
            {canEdit && (
              <CardFooter className="justify-between border-t bg-muted/10 p-4">
                <Button variant="outline" size="sm">
                  <Upload className="w-4 h-4 mr-2" /> Anexar
                </Button>
                <Button size="sm">Salvar</Button>
              </CardFooter>
            )}
          </Card>
        </TabsContent>

        <TabsContent value="sgc" className="mt-6 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Trilha de Auditoria do Tenant</CardTitle>
            </CardHeader>
            <CardContent className="p-0 overflow-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Data</TableHead>
                    <TableHead>Usuário</TableHead>
                    <TableHead>Ação</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {logs.map((log) => (
                    <TableRow key={log.id} className="text-xs">
                      <TableCell className="text-muted-foreground">{log.date}</TableCell>
                      <TableCell className="font-medium">{log.user}</TableCell>
                      <TableCell>
                        {log.action} - {log.detail}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
