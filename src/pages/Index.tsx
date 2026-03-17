import { AlertTriangle, CheckCircle, ShieldAlert, BookOpen, ChevronRight } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Link } from 'react-router-dom'
import { ChartContainer } from '@/components/ui/chart'
import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from 'recharts'
import { Badge } from '@/components/ui/badge'
import useAuthStore from '@/stores/useAuthStore'
import { MOCK_NOTIFICATIONS, MOCK_NCS, MOCK_RISKS } from '@/lib/mock'

const maturityData = [{ name: 'Maturidade', value: 78, fill: 'var(--color-primary)' }]
const chartConfig = { primary: { label: 'Compliance', color: 'hsl(var(--primary))' } }

const isoModules = [
  { id: 1, name: 'Dados da Organização', progress: 100 },
  { id: 2, name: 'Órgão Diretivo', progress: 100 },
  { id: 3, name: 'Função de Compliance', progress: 85 },
  { id: 4, name: 'Contexto da Organização', progress: 100 },
  { id: 5, name: 'Liderança', progress: 85 },
  { id: 6, name: 'Planejamento', progress: 60 },
  { id: 7, name: 'Apoio', progress: 40 },
  { id: 8, name: 'Operação', progress: 75 },
  { id: 9, name: 'Avaliação', progress: 30 },
  { id: 10, name: 'Melhoria', progress: 90 },
]

export default function Index() {
  const { currentTenantId } = useAuthStore()

  const tenantNotifs = MOCK_NOTIFICATIONS.filter((n) => n.tenantId === currentTenantId)
  const tenantRisks = MOCK_RISKS.filter(
    (r) => r.tenantId === currentTenantId && r.status === 'Crítico',
  )
  const tenantNCs = MOCK_NCS.filter((n) => n.tenantId === currentTenantId)

  return (
    <div className="space-y-6 animate-fade-in-up">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-primary">Dashboard Executivo</h1>
        <p className="text-muted-foreground">Visão geral do programa mt3 compliance.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="shadow-sm border-l-4 border-l-destructive">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Riscos Críticos</CardTitle>
            <ShieldAlert className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{tenantRisks.length}</div>
            <p className="text-xs text-muted-foreground mt-1">Neste ambiente</p>
          </CardContent>
        </Card>
        <Card className="shadow-sm border-l-4 border-l-warning">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Obrigações Vencendo</CardTitle>
            <AlertTriangle className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground mt-1">Nos próximos 30 dias</p>
          </CardContent>
        </Card>
        <Card className="shadow-sm border-l-4 border-l-primary">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Não-Conformidades</CardTitle>
            <CheckCircle className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{tenantNCs.length}</div>
            <p className="text-xs text-muted-foreground mt-1">Em tratamento</p>
          </CardContent>
        </Card>
        <Card className="shadow-sm border-l-4 border-l-secondary">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Treinamentos Pendentes</CardTitle>
            <BookOpen className="h-4 w-4 text-secondary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8%</div>
            <p className="text-xs text-muted-foreground mt-1">Da força de trabalho</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-1 lg:col-span-2 shadow-sm">
          <CardHeader>
            <CardTitle>Maturidade (IMC)</CardTitle>
            <CardDescription>Índice de Maturidade de Compliance</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center">
            <div className="h-[200px] w-full">
              <ChartContainer config={chartConfig}>
                <ResponsiveContainer width="100%" height="100%">
                  <RadialBarChart
                    cx="50%"
                    cy="50%"
                    innerRadius="70%"
                    outerRadius="100%"
                    barSize={20}
                    data={maturityData}
                    startAngle={180}
                    endAngle={0}
                  >
                    <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
                    <RadialBar
                      background
                      dataKey="value"
                      cornerRadius={10}
                      fill="var(--color-primary)"
                    />
                    <text
                      x="50%"
                      y="45%"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="text-4xl font-bold fill-foreground"
                    >
                      78%
                    </text>
                  </RadialBarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1 lg:col-span-3 shadow-sm">
          <CardHeader>
            <CardTitle>Mapa de Calor de Riscos</CardTitle>
            <CardDescription>Impacto vs Probabilidade (Mód. 4.6)</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-5 gap-1 aspect-square max-w-[300px] mx-auto p-4 border rounded-lg bg-muted/10">
              {Array.from({ length: 25 }).map((_, i) => {
                const x = (i % 5) + 1
                const y = 5 - Math.floor(i / 5)
                const score = x * y
                let bg =
                  score > 19
                    ? 'bg-destructive/90'
                    : score > 12
                      ? 'bg-destructive/60'
                      : score > 6
                        ? 'bg-warning/40'
                        : 'bg-success/20'
                return (
                  <Link
                    to="/modulo/4"
                    key={i}
                    className={`w-full h-full rounded-sm border border-background/50 hover:scale-105 transition-all cursor-pointer ${bg}`}
                  />
                )
              })}
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1 lg:col-span-2 shadow-sm overflow-hidden flex flex-col">
          <CardHeader className="bg-muted/30 pb-4 border-b">
            <CardTitle className="text-lg">Central de Alertas</CardTitle>
          </CardHeader>
          <CardContent className="p-0 flex-1 overflow-auto">
            <div className="divide-y">
              {tenantNotifs.length === 0 ? (
                <div className="p-4 text-center text-sm text-muted-foreground">Nenhum alerta.</div>
              ) : (
                tenantNotifs.map((notif) => (
                  <div
                    key={notif.id}
                    className="p-4 hover:bg-muted/50 transition-colors flex items-start gap-3"
                  >
                    <div
                      className={`w-2 h-2 mt-1.5 rounded-full shrink-0 ${notif.read ? 'bg-muted' : 'bg-primary'}`}
                    />
                    <div className="flex-1">
                      <p
                        className={`text-sm ${notif.read ? 'text-muted-foreground' : 'font-medium text-foreground'}`}
                      >
                        {notif.title}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">{notif.time}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground shrink-0" />
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-xl font-semibold tracking-tight mt-8 mb-4">Progresso dos Módulos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {isoModules.map((mod) => (
          <Link key={mod.id} to={`/modulo/${mod.id}`}>
            <Card className="hover:border-primary/50 transition-colors cursor-pointer group h-full shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-semibold flex justify-between">
                  Módulo {mod.id}
                  <Badge
                    variant={mod.progress === 100 ? 'default' : 'secondary'}
                    className="text-[10px]"
                  >
                    {mod.progress}%
                  </Badge>
                </CardTitle>
                <CardDescription className="line-clamp-2 text-xs mt-1">{mod.name}</CardDescription>
              </CardHeader>
              <CardContent>
                <Progress value={mod.progress} className="h-1.5" />
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
