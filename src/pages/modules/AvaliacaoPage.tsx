import { PageHeader } from '@/components/PageHeader'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from '@/components/ui/chart'
import { Activity } from 'lucide-react'

const data = [
  { name: 'Trimestre 1', Conformidades: 40, NaoConformidades: 5 },
  { name: 'Trimestre 2', Conformidades: 35, NaoConformidades: 3 },
  { name: 'Trimestre 3', Conformidades: 45, NaoConformidades: 2 },
  { name: 'Trimestre 4', Conformidades: 50, NaoConformidades: 1 },
]

export default function AvaliacaoPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="9. Avaliação de Desempenho"
        description="Monitoramento, medição, análise e auditoria interna (Item 9.1 a 9.3)."
        breadcrumbs={[{ label: 'Início', path: '/' }, { label: 'Módulo 9' }]}
      />

      <Card>
        <CardHeader className="border-b border-border/40 pb-4 mb-4">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Activity className="w-5 h-5 text-primary" /> Resultados de Auditoria e Inspeção
          </CardTitle>
          <CardDescription>
            Consolidado de achados (Conformidades vs. Não Conformidades) ao longo do ano.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[400px] w-full mt-4">
            <ChartContainer
              config={{
                Conformidades: { color: 'hsl(var(--success))', label: 'Conformidades' },
                NaoConformidades: { color: 'hsl(var(--destructive))', label: 'Não Conformidades' },
              }}
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="hsl(var(--border))"
                  />
                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                    dy={10}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <ChartLegend content={<ChartLegendContent />} verticalAlign="top" />
                  <Bar
                    dataKey="Conformidades"
                    fill="hsl(var(--success))"
                    radius={[4, 4, 0, 0]}
                    maxBarSize={50}
                  />
                  <Bar
                    dataKey="NaoConformidades"
                    fill="hsl(var(--destructive))"
                    radius={[4, 4, 0, 0]}
                    maxBarSize={50}
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
