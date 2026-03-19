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
        description="Compreensão estrutural, expectativas das partes interessadas e mapeamento de riscos (ISO 37301:2021)."
        breadcrumbs={[{ label: 'Início', path: '/' }, { label: 'Módulo 4' }]}
      />

      <Tabs defaultValue="4.1" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 bg-muted/30 p-1.5 rounded-xl h-auto mb-6 shadow-sm border border-border/40">
          <TabsTrigger
            value="4.1"
            className="py-2.5 text-xs lg:text-sm transition-all data-[state=active]:shadow-sm rounded-lg font-medium"
          >
            4.1 Contexto
          </TabsTrigger>
          <TabsTrigger
            value="4.2"
            className="py-2.5 text-xs lg:text-sm transition-all data-[state=active]:shadow-sm rounded-lg font-medium"
          >
            4.2 Partes Int.
          </TabsTrigger>
          <TabsTrigger
            value="4.3"
            className="py-2.5 text-xs lg:text-sm transition-all data-[state=active]:shadow-sm rounded-lg font-medium"
          >
            4.3 Escopo
          </TabsTrigger>
          <TabsTrigger
            value="4.4"
            className="py-2.5 text-xs lg:text-sm transition-all data-[state=active]:shadow-sm rounded-lg font-medium"
          >
            4.4 Sistema
          </TabsTrigger>
          <TabsTrigger
            value="4.5"
            className="py-2.5 text-xs lg:text-sm transition-all data-[state=active]:shadow-sm rounded-lg font-medium"
          >
            4.5 Obrigações
          </TabsTrigger>
          <TabsTrigger
            value="4.6"
            className="py-2.5 text-xs lg:text-sm transition-all data-[state=active]:shadow-sm rounded-lg font-medium"
          >
            4.6 Riscos
          </TabsTrigger>
        </TabsList>

        <TabsContent
          value="4.1"
          className="mt-0 outline-none animate-in fade-in-50 zoom-in-95 duration-200"
        >
          <Section41Context canEdit={canEdit} />
        </TabsContent>
        <TabsContent
          value="4.2"
          className="mt-0 outline-none animate-in fade-in-50 zoom-in-95 duration-200"
        >
          <Section42Parties canEdit={canEdit} />
        </TabsContent>
        <TabsContent
          value="4.3"
          className="mt-0 outline-none animate-in fade-in-50 zoom-in-95 duration-200"
        >
          <Section43Scope canEdit={canEdit} />
        </TabsContent>
        <TabsContent
          value="4.4"
          className="mt-0 outline-none animate-in fade-in-50 zoom-in-95 duration-200"
        >
          <Section44System canEdit={canEdit} />
        </TabsContent>
        <TabsContent
          value="4.5"
          className="mt-0 outline-none animate-in fade-in-50 zoom-in-95 duration-200"
        >
          <Section45Obligations canEdit={canEdit} />
        </TabsContent>
        <TabsContent
          value="4.6"
          className="mt-0 outline-none animate-in fade-in-50 zoom-in-95 duration-200"
        >
          <Section46Risks canEdit={canEdit} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
