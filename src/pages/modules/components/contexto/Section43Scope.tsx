import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { FileCheck, Save, Link as LinkIcon } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import { ComplianceChecklistItem } from '@/components/ComplianceChecklist'

interface Props {
  canEdit: boolean
}

export default function Section43Scope({ canEdit }: Props) {
  const { toast } = useToast()

  const handleSave = () => {
    toast({
      title: 'Escopo atualizado',
      description: 'Declaração de escopo salva como informação documentada.',
    })
  }

  return (
    <div className="space-y-6">
      <Card className="animate-fade-in-up border-t-4 border-t-primary">
        <CardHeader>
          <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
            <div>
              <CardTitle>4.3 Determinando o Escopo do SGC</CardTitle>
              <CardDescription>
                Definição formal das fronteiras e aplicabilidade do sistema de compliance.
              </CardDescription>
            </div>
            <Badge
              variant="outline"
              className="bg-success/10 text-success border-success/20 shrink-0"
            >
              <FileCheck className="w-3 h-3 mr-1" /> Informação Documentada
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label>Declaração de Escopo</Label>
            <Textarea
              disabled={!canEdit}
              className="min-h-[150px] resize-y"
              defaultValue="O Sistema de Gestão de Compliance aplica-se a todas as operações de desenvolvimento de software, consultoria e atendimento ao cliente da sede operacional e das filiais regionais. Abrange as relações com fornecedores críticos e requisitos relacionados à Lei Anticorrupção (Lei 12.846/2013) e LGPD, excluindo as operações da subsidiária independente localizada fora do território nacional, que opera sob estrutura de gestão segregada."
            />
          </div>

          <div className="bg-muted/30 p-4 rounded-lg border">
            <h4 className="text-sm font-semibold mb-3 flex items-center">
              <LinkIcon className="w-4 h-4 mr-2 text-primary" /> Referências para Determinação do
              Escopo
            </h4>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">4.1 Contexto da Organização</Badge>
              <Badge variant="secondary">4.2 Partes Interessadas</Badge>
              <Badge variant="secondary">4.5 Obrigações de Compliance</Badge>
              <Badge variant="secondary">4.6 Avaliação de Riscos</Badge>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              O escopo do sistema de gestão foi determinado e é constantemente revisto considerando
              as questões externas e internas (4.1), os requisitos priorizados das partes
              interessadas (4.2), as obrigações formais (4.5) e a matriz atual de riscos da
              organização (4.6).
            </p>
          </div>
        </CardContent>
        {canEdit && (
          <CardFooter className="justify-end border-t bg-muted/10 p-4">
            <Button onClick={handleSave}>
              <Save className="w-4 h-4 mr-2" /> Salvar Escopo
            </Button>
          </CardFooter>
        )}
      </Card>

      <div className="space-y-3">
        <h4 className="text-sm font-semibold mb-2 text-foreground">Checklist de Auditoria (4.3)</h4>
        <ComplianceChecklistItem
          clause="4.3.1"
          title="Fronteiras e Aplicabilidade"
          description="A organização determinou as fronteiras e a aplicabilidade do sistema de gestão para estabelecer o seu escopo?"
          canEdit={canEdit}
        />
        <ComplianceChecklistItem
          clause="4.3.2"
          title="Informação Documentada"
          description="O escopo está disponível e é mantido como informação documentada?"
          canEdit={canEdit}
        />
      </div>
    </div>
  )
}
