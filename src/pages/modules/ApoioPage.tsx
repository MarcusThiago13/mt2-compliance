import { PageHeader } from '@/components/PageHeader'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'
import { MOCK_TRAININGS } from '@/lib/mock'
import { PlayCircle, Download } from 'lucide-react'

export default function ApoioPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="7. Apoio"
        description="Recursos, competência, conscientização e informação documentada."
        breadcrumbs={[{ label: 'Início', path: '/' }, { label: 'ISO Módulo 7' }]}
      />

      <h2 className="text-xl font-semibold mt-6 mb-4">Portal de Treinamentos (7.2 / 7.3)</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {MOCK_TRAININGS.map((tr) => (
          <Card key={tr.id} className="flex flex-col">
            <CardHeader className="pb-2 flex-1">
              <CardTitle className="text-base line-clamp-2">{tr.title}</CardTitle>
              <CardDescription>{tr.status}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-medium">
                  <span>Progresso</span>
                  <span>{tr.progress}%</span>
                </div>
                <Progress value={tr.progress} className="h-2" />
              </div>
              {tr.progress === 100 ? (
                <Button variant="outline" className="w-full text-success border-success/50">
                  <Download className="w-4 h-4 mr-2" /> Certificado
                </Button>
              ) : (
                <Button className="w-full">
                  <PlayCircle className="w-4 h-4 mr-2" />{' '}
                  {tr.progress === 0 ? 'Iniciar' : 'Continuar'}
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
