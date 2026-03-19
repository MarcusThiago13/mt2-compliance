import { PageHeader } from '@/components/PageHeader'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent } from '@/components/ui/card'
import { useToast } from '@/hooks/use-toast'
import useAuthStore from '@/stores/useAuthStore'
import { Target, CheckCircle2, AlertTriangle } from 'lucide-react'
import Section61Acoes from './components/planejamento/Section61Acoes'
import Section62Objetivos from './components/planejamento/Section62Objetivos'
import { MOCK_PLANNING_ACTIONS, MOCK_COMPLIANCE_OBJECTIVES } from '@/lib/mock'

export default function PlanejamentoPage() {
  const { user, currentTenantId } = useAuthStore()
  const { toast } = useToast()
  const canEdit = user?.role === 'SUPER_ADMIN' || user?.role === 'EDITOR'

  const tenantActions = MOCK_PLANNING_ACTIONS.filter((a) => a.tenantId === currentTenantId)
  const tenantObjectives = MOCK_COMPLIANCE_OBJECTIVES.filter((o) => o.tenantId === currentTenantId)

  const activeActions = tenantActions.filter((a) => a.status === 'Em Andamento').length
  const delayedActions = tenantActions.filter((a) => a.status === 'Atrasado').length
  const objectivesOnTrack = tenantObjectives.filter((o) => o.status === 'Em Dia').length

  const handleExport = (format: string) => {
    toast({
      title: 'Exportação Iniciada',
      description: `Gerando Relatório de Planejamento (6.1 e 6.2) em ${format.toUpperCase()}...`,
    })
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title="6. Planejamento"
        description="Ações para abordar riscos, oportunidades e atingir os objetivos mensuráveis de compliance (ISO 37301:2021)."
        breadcrumbs={[{ label: 'Início', path: '/' }, { label: 'Módulo 6' }]}
        onExport={handleExport}
      />

      {/* Strategic Planning Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="shadow-none bg-primary/5 border-primary/20">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="p-3 bg-primary/15 rounded-full text-primary">
              <Target className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Planos de Ação Ativos</p>
              <p className="text-2xl font-bold text-foreground">{activeActions}</p>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-none bg-success/5 border-success/20">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="p-3 bg-success/15 rounded-full text-success">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Objetivos em Dia</p>
              <p className="text-2xl font-bold text-success">
                {objectivesOnTrack} / {tenantObjectives.length}
              </p>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-none bg-destructive/5 border-destructive/20">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="p-3 bg-destructive/15 rounded-full text-destructive">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Prazos Críticos / Atrasados
              </p>
              <p className="text-2xl font-bold text-destructive">{delayedActions}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="6.1" className="w-full">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-2 bg-muted/30 p-1.5 rounded-xl h-auto mb-6 shadow-sm border border-border/40">
          <TabsTrigger
            value="6.1"
            className="py-2.5 text-sm font-medium transition-all data-[state=active]:shadow-sm rounded-lg"
          >
            6.1 Ações para Riscos e Oportunidades
          </TabsTrigger>
          <TabsTrigger
            value="6.2"
            className="py-2.5 text-sm font-medium transition-all data-[state=active]:shadow-sm rounded-lg"
          >
            6.2 Objetivos de Compliance
          </TabsTrigger>
        </TabsList>

        <TabsContent value="6.1" className="mt-0 outline-none animate-in fade-in-50 duration-300">
          <Section61Acoes canEdit={canEdit} />
        </TabsContent>
        <TabsContent value="6.2" className="mt-0 outline-none animate-in fade-in-50 duration-300">
          <Section62Objetivos canEdit={canEdit} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
