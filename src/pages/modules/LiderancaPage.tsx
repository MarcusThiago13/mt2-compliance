import { PageHeader } from '@/components/PageHeader'
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
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'
import { FileSignature, Download, Eye } from 'lucide-react'
import useAuthStore from '@/stores/useAuthStore'
import { MOCK_POLICIES } from '@/lib/mock'

export default function LiderancaPage() {
  const { user, currentTenantId } = useAuthStore()
  const canEdit = user?.role === 'SUPER_ADMIN' || user?.role === 'EDITOR'
  const policies = MOCK_POLICIES.filter((p) => p.tenantId === currentTenantId)

  return (
    <div className="space-y-6">
      <PageHeader
        title="5. Liderança"
        description="Evidências do comprometimento da alta direção e gestão de políticas corporativas."
        breadcrumbs={[{ label: 'Início', path: '/' }, { label: 'Módulo 5' }]}
      />

      <div className="grid gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between border-b border-border/40 pb-4">
            <div>
              <CardTitle className="flex items-center gap-2 text-lg">
                <FileSignature className="w-5 h-5 text-primary" /> Acervo de Políticas (5.2)
              </CardTitle>
              <CardDescription className="mt-1">
                Controle de versões e métricas de aceite digital por colaboradores.
              </CardDescription>
            </div>
            {canEdit && <Button size="sm">Nova Política</Button>}
          </CardHeader>
          <CardContent className="p-0 overflow-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/20">
                  <TableHead>Documento Institucional</TableHead>
                  <TableHead>Versão</TableHead>
                  <TableHead>Estado Atual</TableHead>
                  <TableHead className="w-[200px]">Adesão Registrada</TableHead>
                  <TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {policies.map((p) => (
                  <TableRow key={p.id}>
                    <TableCell className="font-semibold text-foreground">
                      {p.name}
                      <span className="block text-xs font-normal text-muted-foreground mt-0.5">
                        Ref: {p.reference}
                      </span>
                    </TableCell>
                    <TableCell className="text-muted-foreground">{p.version}</TableCell>
                    <TableCell>
                      <Badge variant={p.status === 'Publicada' ? 'success' : 'warning'}>
                        {p.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col gap-1.5">
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>Progresso</span>
                          <span className="font-medium text-foreground">{p.readConfirmation}%</span>
                        </div>
                        <Progress value={p.readConfirmation} className="h-1.5" />
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-muted-foreground hover:text-primary"
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-muted-foreground hover:text-primary"
                        >
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
