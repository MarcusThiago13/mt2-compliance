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
import { FileSignature, ShieldCheck, Download } from 'lucide-react'
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
        breadcrumbs={[{ label: 'Início', path: '/' }, { label: 'ISO Módulo 5' }]}
      />

      <div className="grid gap-6">
        <Card className="shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <FileSignature className="w-5 h-5 text-primary" /> Gestão de Políticas (5.2)
              </CardTitle>
              <CardDescription>
                Repositório com controle de versão e aceite digital.
              </CardDescription>
            </div>
            {canEdit && <Button size="sm">Nova Política</Button>}
          </CardHeader>
          <CardContent className="p-0 overflow-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Política</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Adesão</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {policies.map((p) => (
                  <TableRow key={p.id}>
                    <TableCell className="font-medium text-primary hover:underline cursor-pointer">
                      {p.name}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={
                          p.status === 'Publicada'
                            ? 'text-success border-success'
                            : 'text-warning border-warning'
                        }
                      >
                        {p.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2 text-xs w-32">
                        <Progress value={p.readConfirmation} className="h-1.5 flex-1" />
                        <span>{p.readConfirmation}%</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="icon">
                        <Download className="w-4 h-4" />
                      </Button>
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
