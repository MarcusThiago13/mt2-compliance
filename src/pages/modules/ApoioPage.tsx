import { PageHeader } from '@/components/PageHeader'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { MOCK_TRAININGS } from '@/lib/mock'
import { PlayCircle, Download, CheckCircle, HelpCircle } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export default function ApoioPage() {
  const handleExport = (format: string) => {
    console.log(`Exportando Apoio em ${format}`)
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title="7. Apoio"
        description="Recursos, competência, conscientização e informação documentada do mt3 compliance."
        breadcrumbs={[{ label: 'Início', path: '/' }, { label: 'ISO Módulo 7' }]}
        onExport={handleExport}
      />

      <Tabs defaultValue="treinamentos" className="w-full">
        <TabsList className="bg-muted/50 p-1 rounded-lg">
          <TabsTrigger value="treinamentos">Competência e Treinamentos (7.2)</TabsTrigger>
          <TabsTrigger value="conscientizacao">Conscientização (7.3)</TabsTrigger>
          <TabsTrigger value="recursos">Recursos (7.1)</TabsTrigger>
        </TabsList>

        <TabsContent value="treinamentos" className="mt-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Portal de Treinamentos</h2>
            <Button variant="outline" size="sm">
              Ver Cronograma Completo
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {MOCK_TRAININGS.map((tr) => (
              <Card key={tr.id} className="flex flex-col">
                <CardHeader className="pb-2 flex-1">
                  <CardTitle className="text-base line-clamp-2">{tr.title}</CardTitle>
                  <CardDescription className="flex justify-between items-center mt-1">
                    <span>{tr.status}</span>
                    {tr.progress === 100 && (
                      <Badge variant="secondary" className="bg-success/10 text-success text-[10px]">
                        Eficácia: {tr.efficacy}
                      </Badge>
                    )}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-medium">
                      <span>Progresso</span>
                      <span>{tr.progress}%</span>
                    </div>
                    <Progress value={tr.progress} className="h-2" />
                  </div>
                </CardContent>
                <CardFooter className="pt-0 border-t bg-muted/10 p-4 mt-auto gap-2">
                  {tr.progress === 100 ? (
                    <Button
                      variant="outline"
                      className="w-full text-success border-success/50"
                      size="sm"
                    >
                      <Download className="w-4 h-4 mr-2" /> Certificado
                    </Button>
                  ) : (
                    <Button className="w-full" size="sm">
                      <PlayCircle className="w-4 h-4 mr-2" />{' '}
                      {tr.progress === 0 ? 'Iniciar' : 'Continuar'}
                    </Button>
                  )}
                  {tr.progress === 100 && tr.efficacy === 'Pendente' && (
                    <Button size="sm" variant="default" className="w-full">
                      <CheckCircle className="w-4 h-4 mr-2" /> Avaliação (Quiz)
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="conscientizacao" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Pesquisas de Percepção (Culture Survey)</CardTitle>
              <CardDescription>
                Ferramentas para medir a absorção da cultura de compliance.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between p-4 border rounded-lg bg-muted/20">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Pesquisa de Cultura Ética 2024</h4>
                    <p className="text-sm text-muted-foreground">
                      Disponível para toda a organização até 30/11/2024.
                    </p>
                  </div>
                </div>
                <Button>Responder Pesquisa</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="recursos" className="mt-6">
          <Card>
            <CardContent className="p-6 text-center text-muted-foreground">
              Gestão de orçamentos e recursos dedicados ao programa mt3 compliance.
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
