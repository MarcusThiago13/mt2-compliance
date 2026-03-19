import { useState, useEffect } from 'react'
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
import { FileSignature, Download, Plus, Check } from 'lucide-react'
import { MOCK_POLICIES } from '@/lib/mock'
import { useToast } from '@/hooks/use-toast'
import useAuthStore from '@/stores/useAuthStore'

export default function Section52Politica({ canEdit }: { canEdit: boolean }) {
  const { currentTenantId } = useAuthStore()
  const { toast } = useToast()
  const [policies, setPolicies] = useState(
    MOCK_POLICIES.filter((p) => p.tenantId === currentTenantId),
  )

  useEffect(() => {
    setPolicies(MOCK_POLICIES.filter((p) => p.tenantId === currentTenantId))
  }, [currentTenantId])

  const handleApprove = (id: number) => {
    if (!canEdit) return
    setPolicies(
      policies.map((p) => (p.id === id ? { ...p, status: 'Publicada', workflow: 'Aprovado' } : p)),
    )
    toast({
      title: 'Política Aprovada',
      description: 'O documento foi formalmente publicado, travado para edição e o log gerado.',
    })
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-border/40 pb-4 gap-4">
          <div>
            <CardTitle className="flex items-center gap-2 text-lg">
              <FileSignature className="w-5 h-5 text-primary" /> Ciclo de Vida da Política de
              Compliance
            </CardTitle>
            <CardDescription className="mt-1">
              Gerenciamento de versões, aprovação formal e validação estrutural conforme requisito
              5.2.
            </CardDescription>
          </div>
          {canEdit && (
            <Button size="sm" className="shrink-0">
              <Plus className="w-4 h-4 mr-2" />
              Nova Política
            </Button>
          )}
        </CardHeader>
        <CardContent className="p-0 overflow-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/20">
                <TableHead>Título e Referência Normativa</TableHead>
                <TableHead>Versão Atual</TableHead>
                <TableHead>Estrutura ISO Validada</TableHead>
                <TableHead>Status / Workflow</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {policies.map((p) => (
                <TableRow key={p.id}>
                  <TableCell className="font-semibold text-foreground align-top">
                    {p.name}
                    <span className="block text-xs font-normal text-muted-foreground mt-1">
                      Ref: {p.reference}
                    </span>
                  </TableCell>
                  <TableCell className="text-muted-foreground font-medium align-top">
                    {p.version}
                  </TableCell>
                  <TableCell className="align-top">
                    <div className="flex flex-col gap-1.5 text-[11px] text-muted-foreground font-medium">
                      <div className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-success" /> Princípios Gerais
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-success" /> Atribuição de
                        Responsabilidades
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-success" /> Fomento ao Canal de Denúncias
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="align-top">
                    <div className="flex flex-col gap-2 items-start">
                      <Badge variant={p.status === 'Publicada' ? 'success' : 'warning'}>
                        {p.status}
                      </Badge>
                      <span className="text-[10px] uppercase tracking-wider text-muted-foreground bg-muted/50 px-2 py-0.5 rounded border border-border/50">
                        WF: {p.workflow}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right align-top">
                    <div className="flex items-center justify-end gap-1">
                      {canEdit && p.status !== 'Publicada' && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleApprove(p.id)}
                          className="h-8 text-xs border-success/30 text-success hover:bg-success/10 hover:text-success"
                        >
                          Aprovar
                        </Button>
                      )}
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
              {policies.length === 0 && (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                    Nenhuma política cadastrada no sistema.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
