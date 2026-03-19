import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Save, Activity } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import useAuthStore from '@/stores/useAuthStore'
import { MOCK_AUDIT_LOGS } from '@/lib/mock'

interface Props {
  canEdit: boolean
}

export default function Section44System({ canEdit }: Props) {
  const { toast } = useToast()
  const { currentTenantId } = useAuthStore()
  const logs = MOCK_AUDIT_LOGS.filter((l) => l.tenantId === currentTenantId)

  const handleSave = () => {
    toast({
      title: 'Sistema atualizado',
      description: 'Os alinhamentos do SGC foram salvos com sucesso.',
    })
  }

  return (
    <div className="space-y-6 animate-fade-in-up">
      <Card>
        <CardHeader>
          <CardTitle>4.4 Sistema de Gestão de Compliance</CardTitle>
          <CardDescription>
            Estabelecimento, implementação, manutenção e melhoria contínua do SGC e seu alinhamento.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid lg:grid-cols-3 gap-6">
          <div className="space-y-2">
            <Label>Valores da Organização</Label>
            <Textarea
              disabled={!canEdit}
              className="min-h-[120px]"
              defaultValue="Transparência em todas as relações, integridade inegociável nos negócios, respeito humano e foco na sustentabilidade a longo prazo."
            />
          </div>
          <div className="space-y-2">
            <Label>Objetivos de Compliance</Label>
            <Textarea
              disabled={!canEdit}
              className="min-h-[120px]"
              defaultValue="Zerar incidentes de não conformidade com impacto legal, manter 100% dos colaboradores treinados anualmente e assegurar conformidade contínua."
            />
          </div>
          <div className="space-y-2">
            <Label>Estratégia Corporativa</Label>
            <Textarea
              disabled={!canEdit}
              className="min-h-[120px]"
              defaultValue="Expansão contínua para novos mercados internacionais mantendo a adesão estrita às leis locais e diretrizes de mitigação de riscos."
            />
          </div>
        </CardContent>
        {canEdit && (
          <CardFooter className="justify-end border-t bg-muted/10 p-4">
            <Button onClick={handleSave}>
              <Save className="w-4 h-4 mr-2" /> Salvar Estratégia
            </Button>
          </CardFooter>
        )}
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Activity className="w-5 h-5 text-primary" /> Trilha de Melhoria Contínua (SGC)
          </CardTitle>
          <CardDescription>
            Registro de ações de melhoria sistêmica, auditorias e atualizações processuais do
            sistema.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0 overflow-auto">
          <Table>
            <TableHeader className="bg-muted/30">
              <TableRow>
                <TableHead>Data</TableHead>
                <TableHead>Usuário</TableHead>
                <TableHead>Ação / Melhoria Implementada</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {logs.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={3} className="text-center text-muted-foreground py-6">
                    Nenhum registro encontrado.
                  </TableCell>
                </TableRow>
              ) : (
                logs.map((log) => (
                  <TableRow key={log.id} className="text-sm">
                    <TableCell className="text-muted-foreground w-32 whitespace-nowrap">
                      {log.date}
                    </TableCell>
                    <TableCell className="font-medium w-40">{log.user}</TableCell>
                    <TableCell>
                      <span className="font-semibold text-foreground">{log.action}</span> -{' '}
                      <span className="text-muted-foreground">{log.detail}</span>
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
