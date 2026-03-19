import { useState } from 'react'
import { PageHeader } from '@/components/PageHeader'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import useAuthStore from '@/stores/useAuthStore'
import { useToast } from '@/hooks/use-toast'
import { HardDrive, Users, Megaphone, FileText } from 'lucide-react'
import Section71Recursos from './components/apoio/Section71Recursos'
import Section72Competencia from './components/apoio/Section72Competencia'
import Section73Conscientizacao from './components/apoio/Section73Conscientizacao'
import Section74Comunicacao from './components/apoio/Section74Comunicacao'
import Section75InformacaoDocumentada from './components/apoio/Section75InformacaoDocumentada'

export default function ApoioPage() {
  const { user } = useAuthStore()
  const { toast } = useToast()
  const canEdit = user?.role === 'SUPER_ADMIN' || user?.role === 'EDITOR'
  const [auditMode, setAuditMode] = useState(true)
  const [activeTab, setActiveTab] = useState('7.1')

  const handleExport = (format: 'pdf' | 'excel' | 'csv') => {
    toast({
      title: 'Exportação Iniciada',
      description: `Gerando Relatório do Módulo 7 (Apoio) em ${format.toUpperCase()}...`,
    })
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title="7. Apoio"
        description="Gestão de recursos, competência, conscientização, comunicação e informação documentada (ISO 37301:2021)."
        breadcrumbs={[{ label: 'Início', path: '/' }, { label: 'Módulo 7' }]}
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
              <HardDrive className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                7.1 Recursos
              </p>
              <p className="text-2xl font-bold text-foreground">12 Ativos</p>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-none bg-warning/5 border-warning/20">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="p-3 bg-warning/15 rounded-full text-warning">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                7.2 Competência
              </p>
              <p className="text-2xl font-bold text-warning">3 Lacunas</p>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-none bg-success/5 border-success/20">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="p-3 bg-success/15 rounded-full text-success">
              <Megaphone className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                7.3 e 7.4 Comms
              </p>
              <p className="text-2xl font-bold text-success">5 Campanhas</p>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-none bg-secondary/10 border-secondary/20">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="p-3 bg-background rounded-full text-foreground shadow-sm">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                7.5 GED
              </p>
              <p className="text-2xl font-bold text-foreground">48 Docs</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 bg-muted/30 p-1.5 rounded-xl h-auto mb-6 shadow-sm border border-border/40">
          <TabsTrigger
            value="7.1"
            className="py-2.5 text-xs lg:text-sm font-medium transition-all data-[state=active]:shadow-sm rounded-lg"
          >
            7.1 Recursos
          </TabsTrigger>
          <TabsTrigger
            value="7.2"
            className="py-2.5 text-xs lg:text-sm font-medium transition-all data-[state=active]:shadow-sm rounded-lg"
          >
            7.2 Competência
          </TabsTrigger>
          <TabsTrigger
            value="7.3"
            className="py-2.5 text-xs lg:text-sm font-medium transition-all data-[state=active]:shadow-sm rounded-lg"
          >
            7.3 Conscientização
          </TabsTrigger>
          <TabsTrigger
            value="7.4"
            className="py-2.5 text-xs lg:text-sm font-medium transition-all data-[state=active]:shadow-sm rounded-lg"
          >
            7.4 Comunicação
          </TabsTrigger>
          <TabsTrigger
            value="7.5"
            className="py-2.5 text-xs lg:text-sm font-medium transition-all data-[state=active]:shadow-sm rounded-lg"
          >
            7.5 Inf. Documentada
          </TabsTrigger>
        </TabsList>

        <TabsContent value="7.1" className="mt-0 outline-none animate-in fade-in-50 duration-300">
          <Section71Recursos canEdit={canEdit} />
        </TabsContent>
        <TabsContent value="7.2" className="mt-0 outline-none animate-in fade-in-50 duration-300">
          <Section72Competencia canEdit={canEdit} />
        </TabsContent>
        <TabsContent value="7.3" className="mt-0 outline-none animate-in fade-in-50 duration-300">
          <Section73Conscientizacao canEdit={canEdit} />
        </TabsContent>
        <TabsContent value="7.4" className="mt-0 outline-none animate-in fade-in-50 duration-300">
          <Section74Comunicacao canEdit={canEdit} />
        </TabsContent>
        <TabsContent value="7.5" className="mt-0 outline-none animate-in fade-in-50 duration-300">
          <Section75InformacaoDocumentada canEdit={canEdit} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
