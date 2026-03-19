import { PageHeader } from '@/components/PageHeader'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import useAuthStore from '@/stores/useAuthStore'
import Section41Context from './components/contexto/Section41Context'
import Section42Parties from './components/contexto/Section42Parties'
import Section43Scope from './components/contexto/Section43Scope'
import Section44System from './components/contexto/Section44System'
import Section45Obligations from './components/contexto/Section45Obligations'
import Section46Risks from './components/contexto/Section46Risks'

export default function ContextoPage() {
  const { user } = useAuthStore()
  const canEdit = user?.role === 'SUPER_ADMIN' || user?.role === 'EDITOR'

  return (
    <div className="space-y-6">
      <PageHeader
        title="4. Contexto da Organização"
        description="Alinhamento estrutural baseado na ISO 37301:2021 para gestão de compliance."
        breadcrumbs={[{ label: 'Início', path: '/' }, { label: 'ISO Módulo 4' }]}
      />

      <Tabs defaultValue="4.1" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 bg-muted/50 p-1 rounded-lg h-auto mb-2 shadow-sm">
          <TabsTrigger value="4.1" className="py-2.5 text-xs lg:text-sm transition-all">
            4.1 Contexto
          </TabsTrigger>
          <TabsTrigger value="4.2" className="py-2.5 text-xs lg:text-sm transition-all">
            4.2 Partes Int.
          </TabsTrigger>
          <TabsTrigger value="4.3" className="py-2.5 text-xs lg:text-sm transition-all">
            4.3 Escopo
          </TabsTrigger>
          <TabsTrigger value="4.4" className="py-2.5 text-xs lg:text-sm transition-all">
            4.4 Sistema
          </TabsTrigger>
          <TabsTrigger value="4.5" className="py-2.5 text-xs lg:text-sm transition-all">
            4.5 Obrigações
          </TabsTrigger>
          <TabsTrigger value="4.6" className="py-2.5 text-xs lg:text-sm transition-all">
            4.6 Riscos
          </TabsTrigger>
        </TabsList>

        <TabsContent value="4.1" className="mt-4 outline-none">
          <Section41Context canEdit={canEdit} />
        </TabsContent>
        <TabsContent value="4.2" className="mt-4 outline-none">
          <Section42Parties canEdit={canEdit} />
        </TabsContent>
        <TabsContent value="4.3" className="mt-4 outline-none">
          <Section43Scope canEdit={canEdit} />
        </TabsContent>
        <TabsContent value="4.4" className="mt-4 outline-none">
          <Section44System canEdit={canEdit} />
        </TabsContent>
        <TabsContent value="4.5" className="mt-4 outline-none">
          <Section45Obligations canEdit={canEdit} />
        </TabsContent>
        <TabsContent value="4.6" className="mt-4 outline-none">
          <Section46Risks canEdit={canEdit} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
