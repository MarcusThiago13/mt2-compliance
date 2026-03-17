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
import { Button } from '@/components/ui/button'
import useAuthStore from '@/stores/useAuthStore'
import { MOCK_NCS } from '@/lib/mock'

export default function MelhoriaPage() {
  const { user, currentTenantId } = useAuthStore()
  const canEdit = user?.role === 'SUPER_ADMIN' || user?.role === 'EDITOR'
  const ncs = MOCK_NCS.filter((n) => n.tenantId === currentTenantId)

  return (
    <div className="space-y-6">
      <PageHeader
        title="10. Melhoria"
        breadcrumbs={[{ label: 'Início', path: '/' }, { label: 'ISO Módulo 10' }]}
      />

      <Card>
        <CardHeader className="flex flex-row items-start justify-between">
          <div>
            <CardTitle>Não Conformidades (10.2)</CardTitle>
            <CardDescription>Ações corretivas e eficácia.</CardDescription>
          </div>
          {canEdit && <Button size="sm">Registrar NC</Button>}
        </CardHeader>
        <CardContent className="p-0 overflow-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Descrição</TableHead>
                <TableHead>Origem</TableHead>
                <TableHead>Fase</TableHead>
                {canEdit && <TableHead className="text-right">Ações</TableHead>}
              </TableRow>
            </TableHeader>
            <TableBody>
              {ncs.map((nc) => (
                <TableRow key={nc.id}>
                  <TableCell>
                    <div className="font-medium">{nc.id}</div>
                    <div className="text-xs text-muted-foreground">{nc.desc}</div>
                  </TableCell>
                  <TableCell className="text-xs">{nc.origin}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">{nc.phase}</Badge>
                  </TableCell>
                  {canEdit && (
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" className="text-primary">
                        Tratar
                      </Button>
                    </TableCell>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
