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
import { TrendingUp, Plus } from 'lucide-react'
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
        description="Tratamento de não conformidades, ações corretivas e melhoria contínua (Item 10.1 e 10.2)."
        breadcrumbs={[{ label: 'Início', path: '/' }, { label: 'Módulo 10' }]}
      />

      <Card>
        <CardHeader className="flex flex-row items-center justify-between border-b border-border/40 pb-4">
          <div>
            <CardTitle className="flex items-center gap-2 text-lg">
              <TrendingUp className="w-5 h-5 text-primary" /> Registro de Não Conformidades (RNC)
            </CardTitle>
            <CardDescription className="mt-1">
              Avaliação de causas raízes e eficácia das ações implementadas.
            </CardDescription>
          </div>
          {canEdit && (
            <Button size="sm">
              <Plus className="w-4 h-4 mr-2" />
              Emitir RNC
            </Button>
          )}
        </CardHeader>
        <CardContent className="p-0 overflow-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/20">
                <TableHead>Identificação do Desvio</TableHead>
                <TableHead>Origem do Apontamento</TableHead>
                <TableHead>Fase Atual</TableHead>
                <TableHead>Status de Eficácia</TableHead>
                {canEdit && <TableHead className="text-right">Ações</TableHead>}
              </TableRow>
            </TableHeader>
            <TableBody>
              {ncs.map((nc) => (
                <TableRow key={nc.id}>
                  <TableCell>
                    <div className="font-semibold text-primary">{nc.id}</div>
                    <div className="text-sm text-foreground mt-0.5">{nc.desc}</div>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{nc.origin}</TableCell>
                  <TableCell>
                    <Badge variant="soft" className="uppercase tracking-wider text-[10px]">
                      {nc.phase}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <span className="text-xs font-medium text-muted-foreground">
                      {nc.effectiveness}
                    </span>
                  </TableCell>
                  {canEdit && (
                    <TableCell className="text-right">
                      <Button variant="outline" size="sm" className="h-8 text-xs">
                        Analisar
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
