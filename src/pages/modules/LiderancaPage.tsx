import { PageHeader } from '@/components/PageHeader'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent } from '@/components/ui/card'
import useAuthStore from '@/stores/useAuthStore'
import { useToast } from '@/hooks/use-toast'
import { CheckCircle2, AlertTriangle, FileText } from 'lucide-react'
import Section51Lideranca from './components/lideranca/Section51Lideranca'
import Section52Politica from './components/lideranca/Section52Politica'
import Section53Papeis from './components/lideranca/Section53Papeis'

export default function LiderancaPage() {
  const { user } = useAuthStore()
  const { toast } = useToast()
  const canEdit = user?.role === 'SUPER_ADMIN' || user?.role === 'EDITOR'

  const handleExport = (format: string) => {
    toast({
      title: 'Exportação Iniciada',
      description: `Gerando Relatório de Aderência à Cláusula 5 em ${format.toUpperCase()}...`,
    })
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title="5. Liderança"
        description="Evidências do comprometimento da alta direção, política de compliance e atribuição de responsabilidades (ISO 37301:2021)."
        breadcrumbs={[{ label: 'Início', path: '/' }, { label: 'Módulo 5' }]}
        onExport={handleExport}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-success/5 border-success/20 shadow-none">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="p-3 bg-success/15 rounded-full text-success">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Status de Aderência</p>
              <p className="text-2xl font-bold text-success">Conforme</p>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-none">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="p-3 bg-primary/10 rounded-full text-primary">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Evidências Vinculadas</p>
              <p className="text-2xl font-bold text-foreground">14</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-warning/5 border-warning/20 shadow-none">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="p-3 bg-warning/15 rounded-full text-warning">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Ações Pendentes</p>
              <p className="text-2xl font-bold text-warning">2</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="5.1" className="w-full">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 bg-muted/30 p-1.5 rounded-xl h-auto mb-6 shadow-sm border border-border/40">
          <TabsTrigger
            value="5.1"
            className="py-2.5 text-xs lg:text-sm font-medium transition-all data-[state=active]:shadow-sm rounded-lg"
          >
            5.1 Liderança e Comprometimento
          </TabsTrigger>
          <TabsTrigger
            value="5.2"
            className="py-2.5 text-xs lg:text-sm font-medium transition-all data-[state=active]:shadow-sm rounded-lg"
          >
            5.2 Política de Compliance
          </TabsTrigger>
          <TabsTrigger
            value="5.3"
            className="py-2.5 text-xs lg:text-sm font-medium transition-all data-[state=active]:shadow-sm rounded-lg"
          >
            5.3 Papéis e Responsabilidades
          </TabsTrigger>
        </TabsList>

        <TabsContent value="5.1" className="mt-0 outline-none animate-in fade-in-50 duration-300">
          <Section51Lideranca canEdit={canEdit} />
        </TabsContent>
        <TabsContent value="5.2" className="mt-0 outline-none animate-in fade-in-50 duration-300">
          <Section52Politica canEdit={canEdit} />
        </TabsContent>
        <TabsContent value="5.3" className="mt-0 outline-none animate-in fade-in-50 duration-300">
          <Section53Papeis canEdit={canEdit} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
