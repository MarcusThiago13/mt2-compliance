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
import { PlayCircle, Download } from 'lucide-react'
import useAuthStore from '@/stores/useAuthStore'
import { MOCK_TRAININGS } from '@/lib/mock'

export default function ApoioPage() {
  const { currentTenantId } = useAuthStore()
  const trainings = MOCK_TRAININGS.filter((t) => t.tenantId === currentTenantId)

  return (
    <div className="space-y-6">
      <PageHeader
        title="7. Apoio (Treinamentos)"
        breadcrumbs={[{ label: 'Início', path: '/' }, { label: 'ISO Módulo 7' }]}
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {trainings.map((tr) => (
          <Card key={tr.id} className="flex flex-col">
            <CardHeader className="pb-2 flex-1">
              <CardTitle className="text-base line-clamp-2">{tr.title}</CardTitle>
              <CardDescription className="mt-1">{tr.status}</CardDescription>
            </CardHeader>
            <CardContent>
              <Progress value={tr.progress} className="h-2" />
            </CardContent>
            <CardFooter className="pt-0 border-t bg-muted/10 p-4 mt-auto">
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
                  <PlayCircle className="w-4 h-4 mr-2" /> Iniciar / Continuar
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
