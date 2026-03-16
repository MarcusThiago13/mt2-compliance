import { PageHeader } from '@/components/PageHeader'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import { ChartContainer } from '@/components/ui/chart'

const data = [
  { name: 'Jan', Conformidades: 40, NaoConformidades: 5 },
  { name: 'Fev', Conformidades: 30, NaoConformidades: 2 },
  { name: 'Mar', Conformidades: 20, NaoConformidades: 8 },
  { name: 'Abr', Conformidades: 27, NaoConformidades: 3 },
  { name: 'Mai', Conformidades: 18, NaoConformidades: 1 },
]

export default function AvaliacaoPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="9. Avaliação de Desempenho"
        description="Monitoramento, medição, análise e avaliação."
        breadcrumbs={[{ label: 'Início', path: '/' }, { label: 'ISO Módulo 9' }]}
      />

      <Card className="col-span-1">
        <CardHeader>
          <CardTitle>Histórico de Auditorias e Indicadores (9.1)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[350px] w-full">
            <ChartContainer
              config={{
                Conformidades: { color: 'hsl(var(--success))' },
                NaoConformidades: { color: 'hsl(var(--destructive))' },
              }}
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="hsl(var(--border))"
                  />
                  <XAxis dataKey="name" tick={{ fill: 'hsl(var(--muted-foreground))' }} />
                  <YAxis tick={{ fill: 'hsl(var(--muted-foreground))' }} />
                  <Tooltip
                    cursor={{ fill: 'transparent' }}
                    contentStyle={{ borderRadius: '8px', border: '1px solid hsl(var(--border))' }}
                  />
                  <Legend />
                  <Bar
                    dataKey="Conformidades"
                    stackId="a"
                    fill="hsl(var(--success))"
                    radius={[0, 0, 4, 4]}
                  />
                  <Bar
                    dataKey="NaoConformidades"
                    stackId="a"
                    fill="hsl(var(--destructive))"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
