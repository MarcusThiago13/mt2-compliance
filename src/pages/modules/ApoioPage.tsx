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
import { Badge } from '@/components/ui/badge'
import { PlayCircle, Download, BookOpen } from 'lucide-react'
import useAuthStore from '@/stores/useAuthStore'
import { MOCK_TRAININGS } from '@/lib/mock'

export default function ApoioPage() {
  const { currentTenantId } = useAuthStore()
  const trainings = MOCK_TRAININGS.filter((t) => t.tenantId === currentTenantId)

  return (
    <div className="space-y-6">
      <PageHeader
        title="7. Apoio (Treinamentos)"
        description="Recursos, competência, conscientização e comunicação (Item 7.1 a 7.4)."
        breadcrumbs={[{ label: 'Início', path: '/' }, { label: 'Módulo 7' }]}
      />

      <div className="flex items-center gap-2 mb-4">
        <BookOpen className="w-5 h-5 text-primary" />
        <h2 className="text-lg font-semibold text-foreground">Trilhas de Capacitação</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {trainings.map((tr) => (
          <Card
            key={tr.id}
            className="flex flex-col group hover:border-primary/40 transition-colors"
          >
            <CardHeader className="pb-4 flex-1">
              <div className="flex justify-between items-start gap-4 mb-2">
                <CardTitle className="text-base leading-tight group-hover:text-primary transition-colors">
                  {tr.title}
                </CardTitle>
                <Badge
                  variant={
                    tr.progress === 100 ? 'success' : tr.progress > 0 ? 'warning' : 'outline'
                  }
                  className="shrink-0 text-[10px]"
                >
                  {tr.status}
                </Badge>
              </div>
              <CardDescription className="text-xs">Requisito legal e normativo.</CardDescription>
            </CardHeader>
            <CardContent className="pb-6">
              <div className="flex justify-between text-xs text-muted-foreground mb-1.5 font-medium">
                <span>Progresso Geral</span>
                <span>{tr.progress}%</span>
              </div>
              <Progress value={tr.progress} className="h-1.5" />
              {tr.progress === 100 && (
                <div className="mt-3 text-xs text-success flex items-center font-medium bg-success/10 w-fit px-2 py-1 rounded">
                  {tr.efficacy}
                </div>
              )}
            </CardContent>
            <CardFooter className="pt-0 p-5 mt-auto">
              {tr.progress === 100 ? (
                <Button
                  variant="outline"
                  className="w-full text-success border-success/30 hover:bg-success/10 hover:text-success"
                >
                  <Download className="w-4 h-4 mr-2" /> Emitir Certificado
                </Button>
              ) : (
                <Button className="w-full text-sm font-medium">
                  <PlayCircle className="w-4 h-4 mr-2 opacity-80" />{' '}
                  {tr.progress > 0 ? 'Continuar Trilha' : 'Iniciar Trilha'}
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
