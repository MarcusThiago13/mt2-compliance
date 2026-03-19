import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Sub511OrgaoDiretivo from './Sub511OrgaoDiretivo'
import Sub512Cultura from './Sub512Cultura'
import Sub513Governanca from './Sub513Governanca'

export default function Section51Lideranca({ canEdit }: { canEdit: boolean }) {
  return (
    <Tabs defaultValue="5.1.1" className="w-full">
      <TabsList className="bg-muted/40 p-1 rounded-lg mb-6 inline-flex h-auto items-center flex-wrap">
        <TabsTrigger
          value="5.1.1"
          className="py-2 px-4 text-sm data-[state=active]:bg-background data-[state=active]:shadow-sm rounded-md transition-all"
        >
          5.1.1 Órgão Diretivo e Alta Direção
        </TabsTrigger>
        <TabsTrigger
          value="5.1.2"
          className="py-2 px-4 text-sm data-[state=active]:bg-background data-[state=active]:shadow-sm rounded-md transition-all"
        >
          5.1.2 Cultura de Compliance
        </TabsTrigger>
        <TabsTrigger
          value="5.1.3"
          className="py-2 px-4 text-sm data-[state=active]:bg-background data-[state=active]:shadow-sm rounded-md transition-all"
        >
          5.1.3 Governança de Compliance
        </TabsTrigger>
      </TabsList>

      <TabsContent value="5.1.1" className="mt-0">
        <Sub511OrgaoDiretivo canEdit={canEdit} />
      </TabsContent>
      <TabsContent value="5.1.2" className="mt-0">
        <Sub512Cultura canEdit={canEdit} />
      </TabsContent>
      <TabsContent value="5.1.3" className="mt-0">
        <Sub513Governanca canEdit={canEdit} />
      </TabsContent>
    </Tabs>
  )
}
