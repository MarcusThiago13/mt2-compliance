import { useState } from 'react'
import { PageHeader } from '@/components/PageHeader'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import useAuthStore from '@/stores/useAuthStore'
import { useToast } from '@/hooks/use-toast'
import { Settings, ShieldAlert, AlertTriangle, FileSearch } from 'lucide-react'

import Section81Planejamento from './components/operacao/Section81Planejamento'
import Section82Controles from './components/operacao/Section82Controles'
import Section83Preocupacoes from './components/operacao/Section83Preocupacoes'
import Section84Investigacao from './components/operacao/Section84Investigacao'

export default function OperacaoPage() {
  const { user } = useAuthStore()
  const { toast } = useToast()
  const canEdit = user?.role === 'SUPER_ADMIN' || user?.role === 'EDITOR'
  const [auditMode, setAuditMode] = useState(true)

  const handleExport = (format: string) => {
    toast({
      title: 'Exportação Iniciada',
      description: `Gerando Relatório do Módulo 8 (Operação) em ${format.toUpperCase()}...`,
    })
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title="8. Operação"
        description="Planejamento e controle operacional, procedimentos, canal de relatos e investigações (ISO 37301:2021)."
        breadcrumbs={[{ label: 'Início', path: '/' }, { label: 'Módulo 8' }]}
        onExport={handleExport}
      />

      <div className="flex justify-between items-center bg-muted/20 p-3 rounded-lg border border-border/50 -mt-2">
        <div className="flex items-center gap-3">
          <Switch id="audit-mode" checked={auditMode} onCheckedChange={setAuditMode} />
          <Label htmlFor="audit-mode" className="text-sm font-medium cursor-pointer">
            Modo Auditor Ativo{' '}
            <span className="text-muted-foreground font-normal">(Navegação Sequencial ISO)</span>
          </Label>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="shadow-none bg-primary/5 border-primary/20">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="p-3 bg-primary/15 rounded-full text-primary">
              <Settings className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                8.1 Controles
              </p>
              <p className="text-2xl font-bold text-foreground">24 Ativos</p>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-none bg-warning/5 border-warning/20">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="p-3 bg-warning/15 rounded-full text-warning">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                8.2 Exceções
              </p>
              <p className="text-2xl font-bold text-warning">3 Abertas</p>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-none bg-destructive/5 border-destructive/20">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="p-3 bg-destructive/15 rounded-full text-destructive">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                8.3 Preocupações
              </p>
              <p className="text-2xl font-bold text-destructive">5 Relatos</p>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-none bg-secondary/10 border-secondary/20">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="p-3 bg-background rounded-full text-foreground shadow-sm">
              <FileSearch className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                8.4 Investigações
              </p>
              <p className="text-2xl font-bold text-foreground">2 em Curso</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="8.1" className="w-full">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 bg-muted/30 p-1.5 rounded-xl h-auto mb-6 shadow-sm border border-border/40">
          <TabsTrigger value="8.1" className="py-2.5 text-xs lg:text-sm font-medium rounded-lg">
            8.1 Planejamento Operacional
          </TabsTrigger>
          <TabsTrigger value="8.2" className="py-2.5 text-xs lg:text-sm font-medium rounded-lg">
            8.2 Controles e Procedimentos
          </TabsTrigger>
          <TabsTrigger value="8.3" className="py-2.5 text-xs lg:text-sm font-medium rounded-lg">
            8.3 Preocupações (Relatos)
          </TabsTrigger>
          <TabsTrigger value="8.4" className="py-2.5 text-xs lg:text-sm font-medium rounded-lg">
            8.4 Processo de Investigação
          </TabsTrigger>
        </TabsList>

        <TabsContent value="8.1" className="mt-0 outline-none animate-in fade-in-50 duration-300">
          <Section81Planejamento canEdit={canEdit} />
        </TabsContent>
        <TabsContent value="8.2" className="mt-0 outline-none animate-in fade-in-50 duration-300">
          <Section82Controles canEdit={canEdit} />
        </TabsContent>
        <TabsContent value="8.3" className="mt-0 outline-none animate-in fade-in-50 duration-300">
          <Section83Preocupacoes canEdit={canEdit} />
        </TabsContent>
        <TabsContent value="8.4" className="mt-0 outline-none animate-in fade-in-50 duration-300">
          <Section84Investigacao canEdit={canEdit} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
