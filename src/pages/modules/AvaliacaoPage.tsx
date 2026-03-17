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
]

export default function AvaliacaoPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="9. Avaliação"
        breadcrumbs={[{ label: 'Início', path: '/' }, { label: 'ISO Módulo 9' }]}
      />

      <Card>
        <CardHeader>
          <CardTitle>Indicadores de Auditoria (9.1)</CardTitle>
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
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Conformidades" fill="hsl(var(--success))" radius={[4, 4, 0, 0]} />
                  <Bar
                    dataKey="NaoConformidades"
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
