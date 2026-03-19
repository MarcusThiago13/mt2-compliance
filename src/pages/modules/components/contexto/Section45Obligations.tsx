import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Plus, FileCheck, History } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import useAuthStore from '@/stores/useAuthStore'
import { MOCK_OBLIGATIONS } from '@/lib/mock'

interface Props {
  canEdit: boolean
}

export default function Section45Obligations({ canEdit }: Props) {
  const { currentTenantId } = useAuthStore()
  // Include mock obligations based on the tenant
  const [obligations] = useState(MOCK_OBLIGATIONS.filter((o) => o.tenantId === currentTenantId))

  return (
    <div className="space-y-4 animate-fade-in-up">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
        <div>
          <h3 className="text-lg font-medium">4.5 Obrigações de Compliance</h3>
          <p className="text-sm text-muted-foreground">
            Identificação, avaliação e manutenção de informações documentadas sobre obrigações.
          </p>
        </div>
        {canEdit && (
          <Button size="sm" className="shrink-0">
            <Plus className="w-4 h-4 mr-2" /> Nova Obrigação
          </Button>
        )}
      </div>

      <Card>
        <CardContent className="p-0 overflow-auto">
          <Table>
            <TableHeader className="bg-muted/30">
              <TableRow>
                <TableHead>Obrigação</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Responsável</TableHead>
                <TableHead>Status Doc.</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {obligations.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-6 text-muted-foreground">
                    Nenhuma obrigação registrada.
                  </TableCell>
                </TableRow>
              ) : (
                obligations.map((ob) => (
                  <TableRow key={ob.id}>
                    <TableCell className="font-medium">{ob.name}</TableCell>
                    <TableCell>
                      <Badge variant="secondary" className="font-normal">
                        {ob.type}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm">{ob.owner}</TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className="bg-success/10 text-success border-success/20"
                      >
                        <FileCheck className="w-3 h-3 mr-1" /> Informação Documentada
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <History className="w-4 h-4 mr-2" /> Histórico
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Histórico de Alterações - {ob.name}</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4 mt-4">
                            <div className="flex justify-between items-center border-b pb-3">
                              <div>
                                <p className="text-sm font-medium">Modificado e Revisado</p>
                                <p className="text-xs text-muted-foreground mt-0.5">
                                  Por Administrador SGC - Atualização baseada em nova lei
                                </p>
                              </div>
                              <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded">
                                {ob.date}
                              </span>
                            </div>
                            <div className="flex justify-between items-center border-b pb-3">
                              <div>
                                <p className="text-sm font-medium">Identificado e Criado</p>
                                <p className="text-xs text-muted-foreground mt-0.5">
                                  Sistema / Avaliação Inicial
                                </p>
                              </div>
                              <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded">
                                10/01/2023
                              </span>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
