import { PageHeader } from '@/components/PageHeader'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import OrganizationIdentification from './modules/components/OrganizationIdentification'
import ProfileReport from './modules/components/ProfileReport'
import OrgaoDiretivoContent from './modules/components/OrgaoDiretivoContent'
import FuncaoComplianceContent from './modules/components/FuncaoComplianceContent'

export default function PerfilOrganizacionalPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Perfil Organizacional"
        description="Dados primários da organização, mapeamento da alta direção, função de compliance e relatório de perfil."
        breadcrumbs={[{ label: 'Início', path: '/' }, { label: 'Perfil Organizacional' }]}
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
            value="diretivo"
            className="py-2.5 px-6 data-[state=active]:shadow-sm rounded-lg font-medium whitespace-nowrap"
          >
            Órgão Diretivo
          </TabsTrigger>
          <TabsTrigger
            value="compliance"
            className="py-2.5 px-6 data-[state=active]:shadow-sm rounded-lg font-medium whitespace-nowrap"
          >
            Função de Compliance
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
          className="mt-0 outline-none animate-in fade-in-50 zoom-in-95 duration-200"
        >
          <OrganizationIdentification />
        </TabsContent>
        <TabsContent
          value="diretivo"
          className="mt-0 outline-none animate-in fade-in-50 zoom-in-95 duration-200"
        >
          <OrgaoDiretivoContent />
        </TabsContent>
        <TabsContent
          value="compliance"
          className="mt-0 outline-none animate-in fade-in-50 zoom-in-95 duration-200"
        >
          <FuncaoComplianceContent />
        </TabsContent>
        <TabsContent
          value="perfil"
          className="mt-0 outline-none animate-in fade-in-50 zoom-in-95 duration-200"
        >
          <ProfileReport />
        </TabsContent>
      </Tabs>
    </div>
  )
}
