import { PageHeader } from '@/components/PageHeader'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import OrganizationIdentification from './components/OrganizationIdentification'
import ProfileReport from './components/ProfileReport'

export default function DadosOrganizacaoPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="1. Dados da Organização"
        description="Registro e identificação primária da entidade."
        breadcrumbs={[{ label: 'Início', path: '/' }, { label: 'Módulo 1' }]}
      />

      <Tabs defaultValue="identificacao" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="identificacao">Identificação Principal</TabsTrigger>
          <TabsTrigger value="perfil">Relatório de Perfil</TabsTrigger>
        </TabsList>
        <TabsContent value="identificacao" className="mt-0">
          <OrganizationIdentification />
        </TabsContent>
        <TabsContent value="perfil" className="mt-0">
          <ProfileReport />
        </TabsContent>
      </Tabs>
    </div>
  )
}
