import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle2, AlertCircle, Share2 } from 'lucide-react'

export default function Sub513Governanca({ canEdit }: { canEdit: boolean }) {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="pb-4 border-b border-border/40">
          <CardTitle className="text-lg">Estrutura de Reporte e Independência</CardTitle>
          <CardDescription>
            Configuração das linhas de comunicação da Função de Compliance com a Alta Direção.
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6 space-y-6">
          <div className="flex items-start gap-4 p-5 border border-primary/20 rounded-xl bg-primary/5">
            <div className="bg-background p-2 rounded-lg shrink-0 shadow-sm border border-primary/10">
              <CheckCircle2 className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-semibold text-base text-foreground">
                  Acesso Direto ao Órgão Diretivo
                </h4>
                <Badge variant="success" className="shrink-0 text-xs px-2 py-0.5">
                  Validado ISO
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
                A Função de Compliance possui reporte primário (funcional) ao Conselho de
                Administração e reporte secundário (administrativo) à Presidência (CEO), garantindo
                total independência, autoridade e ausência de subordinação inadequada (em
                conformidade com 5.1.3).
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="border border-border/60 rounded-xl p-5 bg-card">
              <div className="flex items-center gap-2 mb-3">
                <Share2 className="w-5 h-5 text-muted-foreground" />
                <h4 className="font-medium text-sm text-foreground">
                  Matriz de Conflitos de Interesse
                </h4>
              </div>
              <div className="p-4 border rounded-lg border-dashed bg-muted/5 flex items-center gap-3">
                <div className="p-2 bg-success/10 rounded-full shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-success" />
                </div>
                <span className="text-sm text-muted-foreground leading-snug">
                  Nenhum conflito de interesse material identificado na composição atual da equipe
                  de gestão do SGC.
                </span>
              </div>
            </div>

            <div className="border border-border/60 rounded-xl p-5 bg-card">
              <div className="flex items-center gap-2 mb-3">
                <AlertCircle className="w-5 h-5 text-muted-foreground" />
                <h4 className="font-medium text-sm text-foreground">Avaliação de Autoridade</h4>
              </div>
              <div className="p-4 border rounded-lg border-dashed bg-muted/5 flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-full shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground leading-snug">
                  Atestado formal do Conselho outorgando plenos poderes investigativos e de acesso a
                  informações.
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
