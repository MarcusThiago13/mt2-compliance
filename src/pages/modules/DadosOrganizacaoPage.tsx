import { PageHeader } from '@/components/PageHeader'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import OrganizationIdentification from './components/OrganizationIdentification'
import ProfileReport from './components/ProfileReport'

export default function DadosOrganizacaoPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="1. Dados da Organização"
        description="Identificação primária da entidade e relatório de perfil institucional."
        breadcrumbs={[{ label: 'Início', path: '/' }, { label: 'Módulo 1' }]}
      />

      <Tabs defaultValue="identificacao" className="w-full">
        <TabsList className="mb-6 bg-muted/30 p-1.5 rounded-xl border border-border/40 w-full justify-start overflow-x-auto flex-nowrap">
          <TabsTrigger
            value="identificacao"
            className="py-2.5 px-6 data-[state=active]:shadow-sm rounded-lg font-medium whitespace-nowrap"
          >
            Identificação Principal
          </TabsTrigger>
          <TabsTrigger
            value="perfil"
            className="py-2.5 px-6 data-[state=active]:shadow-sm rounded-lg font-medium whitespace-nowrap"
          >
            Relatório de Perfil
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="identificacao"
          className="mt-0 animate-in fade-in-50 zoom-in-95 duration-200"
        >
          <OrganizationIdentification />
        </TabsContent>
        <TabsContent value="perfil" className="mt-0 animate-in fade-in-50 zoom-in-95 duration-200">
          <ProfileReport />
        </TabsContent>
      </Tabs>
    </div>
  )
}
