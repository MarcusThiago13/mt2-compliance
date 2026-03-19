import {
  AlertTriangle,
  CheckCircle,
  ShieldAlert,
  BookOpen,
  ChevronRight,
  Activity,
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Link } from 'react-router-dom'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, CartesianGrid } from 'recharts'
import { Badge } from '@/components/ui/badge'
import useAuthStore from '@/stores/useAuthStore'
import { MOCK_NOTIFICATIONS, MOCK_NCS, MOCK_RISKS } from '@/lib/mock'

const maturityHistoryData = [
  { month: 'Jan', value: 65 },
  { month: 'Fev', value: 68 },
  { month: 'Mar', value: 72 },
  { month: 'Abr', value: 75 },
  { month: 'Mai', value: 76 },
  { month: 'Jun', value: 78 },
]
const chartConfig = { primary: { label: 'Maturidade (%)', color: 'hsl(var(--primary))' } }

const isoModules = [
  { id: 1, name: 'Dados da Organização', progress: 100 },
  { id: 2, name: 'Órgão Diretivo', progress: 100 },
  { id: 3, name: 'Função de Compliance', progress: 85 },
  { id: 4, name: 'Contexto', progress: 100 },
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
    <div className="space-y-8 animate-fade-in-up">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 pb-2 border-b border-border/40">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Visão Executiva</h1>
          <p className="text-muted-foreground mt-1">
            Acompanhamento central do programa de compliance e integridade.
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm font-medium">
          <Badge variant="soft" className="px-3 py-1 text-sm">
            <Activity className="w-4 h-4 mr-2" /> IMC Global: 78%
          </Badge>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="hover:shadow-[0_8px_24px_-4px_rgba(0,0,0,0.08)] transition-all">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Riscos Críticos
            </CardTitle>
            <div className="p-2 bg-destructive/10 rounded-md">
              <ShieldAlert className="h-4 w-4 text-destructive" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">{tenantRisks.length}</div>
            <p className="text-xs text-muted-foreground mt-1">Exigem ação imediata</p>
          </CardContent>
        </Card>
        <Card className="hover:shadow-[0_8px_24px_-4px_rgba(0,0,0,0.08)] transition-all">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Obrigações Próximas
            </CardTitle>
            <div className="p-2 bg-warning/15 rounded-md">
              <AlertTriangle className="h-4 w-4 text-warning" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">2</div>
            <p className="text-xs text-muted-foreground mt-1">Vencendo em 30 dias</p>
          </CardContent>
        </Card>
        <Card className="hover:shadow-[0_8px_24px_-4px_rgba(0,0,0,0.08)] transition-all">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Não Conformidades
            </CardTitle>
            <div className="p-2 bg-primary/10 rounded-md">
              <CheckCircle className="h-4 w-4 text-primary" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">{tenantNCs.length}</div>
            <p className="text-xs text-muted-foreground mt-1">Em fase de tratamento</p>
          </CardContent>
        </Card>
        <Card className="hover:shadow-[0_8px_24px_-4px_rgba(0,0,0,0.08)] transition-all">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Eficácia Treinamentos
            </CardTitle>
            <div className="p-2 bg-success/15 rounded-md">
              <BookOpen className="h-4 w-4 text-success" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">92%</div>
            <p className="text-xs text-muted-foreground mt-1">Média de aprovação</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-1 lg:col-span-4">
          <CardHeader>
            <CardTitle>Evolução da Maturidade</CardTitle>
            <CardDescription>
              Crescimento do Índice de Maturidade de Compliance (IMC)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[250px] w-full">
              <ChartContainer config={chartConfig}>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={maturityHistoryData}
                    margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      vertical={false}
                      stroke="hsl(var(--border))"
                    />
                    <XAxis
                      dataKey="month"
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
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="hsl(var(--primary))"
                      strokeWidth={3}
                      fillOpacity={1}
                      fill="url(#colorValue)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1 lg:col-span-3 flex flex-col">
          <CardHeader className="pb-4">
            <CardTitle>Central de Notificações</CardTitle>
            <CardDescription>Últimas movimentações no ambiente</CardDescription>
          </CardHeader>
          <CardContent className="p-0 flex-1 overflow-auto">
            <div className="divide-y divide-border/40">
              {tenantNotifs.length === 0 ? (
                <div className="p-6 text-center text-sm text-muted-foreground">
                  Nenhum alerta recente.
                </div>
              ) : (
                tenantNotifs.map((notif) => (
                  <div
                    key={notif.id}
                    className="p-4 hover:bg-muted/30 transition-colors flex items-start gap-4 cursor-pointer"
                  >
                    <div
                      className={`w-2 h-2 mt-1.5 rounded-full shrink-0 ${notif.read ? 'bg-muted-foreground/30' : 'bg-primary'}`}
                    />
                    <div className="flex-1">
                      <p
                        className={`text-sm leading-tight ${notif.read ? 'text-muted-foreground' : 'font-semibold text-foreground'}`}
                      >
                        {notif.title}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1.5 font-medium">
                        {notif.time}
                      </p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground/50 shrink-0" />
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <div>
        <h2 className="text-lg font-semibold tracking-tight mb-4 text-foreground">
          Status dos Módulos ISO 37301
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {isoModules.map((mod) => (
            <Link key={mod.id} to={`/modulo/${mod.id}`}>
              <Card className="hover:border-primary/50 hover:shadow-md transition-all cursor-pointer group h-full">
                <CardHeader className="pb-3 px-4 pt-4">
                  <CardTitle className="text-sm font-semibold flex justify-between items-center text-foreground group-hover:text-primary transition-colors">
                    Módulo {mod.id}
                    <Badge
                      variant={mod.progress === 100 ? 'soft' : 'outline'}
                      className="text-[10px] px-1.5 py-0 rounded"
                    >
                      {mod.progress}%
                    </Badge>
                  </CardTitle>
                  <CardDescription className="line-clamp-2 text-xs mt-1.5 h-8">
                    {mod.name}
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-4 pb-4">
                  <Progress value={mod.progress} className="h-1.5 bg-muted/60" />
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
