import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'

export default function Sub512Cultura({ canEdit }: { canEdit: boolean }) {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Métricas de Cultura de Compliance</CardTitle>
          <CardDescription>
            Indicadores chave e resultados de pesquisas de percepção.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-4 border rounded-xl bg-background shadow-sm space-y-5">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-foreground">
                  Percepção de Comprometimento da Liderança (Tone at the Top)
                </span>
                <span className="text-sm font-bold text-success">88%</span>
              </div>
              <Progress value={88} className="h-2" />
              <p className="text-xs text-muted-foreground mt-1.5 font-medium">
                Meta: 85% | Última pesquisa: Out/2023
              </p>
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-foreground">
                  Segurança em Relatar Desvios (Ambiente sem Retaliação)
                </span>
                <span className="text-sm font-bold text-warning">72%</span>
              </div>
              <Progress value={72} className="h-2 [&>div]:bg-warning" />
              <p className="text-xs text-muted-foreground mt-1.5 font-medium">
                Meta: 80% | Ação de melhoria em andamento
              </p>
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-foreground">
                  Adesão aos Treinamentos Culturais (Onboarding e Reciclagens)
                </span>
                <span className="text-sm font-bold text-primary">95%</span>
              </div>
              <Progress value={95} className="h-2" />
              <p className="text-xs text-muted-foreground mt-1.5 font-medium">
                Meta: 90% | Ciclo 2024
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Promoção de Valores e Comunicações</CardTitle>
          <CardDescription>
            Ações contínuas de conscientização dos valores corporativos.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              {
                title: 'Campanha Institucional "Fale a Verdade"',
                channel: 'Intranet e E-mail Corporativo',
                reach: '100% da base ativa',
                date: 'Fev/2024',
              },
              {
                title: 'Workshop de Liderança Ética para Gestores',
                channel: 'Treinamento Presencial',
                reach: '45 Líderes (C-Level e Diretores)',
                date: 'Mar/2024',
              },
            ].map((action, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 p-4 border rounded-xl bg-muted/10 hover:bg-muted/30 transition-colors"
              >
                <div>
                  <h4 className="font-semibold text-sm text-foreground">{action.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1 font-medium">
                    Canal: {action.channel} • Data de Execução: {action.date}
                  </p>
                </div>
                <Badge variant="soft" className="w-fit text-xs font-medium px-2.5 py-1">
                  Alcance: {action.reach}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
