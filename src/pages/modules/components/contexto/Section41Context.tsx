import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Save } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import { ComplianceChecklistItem } from '@/components/ComplianceChecklist'

interface Props {
  canEdit: boolean
}

export default function Section41Context({ canEdit }: Props) {
  const { toast } = useToast()

  const handleSave = () => {
    toast({
      title: 'Contexto atualizado',
      description: 'As informações da seção 4.1 foram salvas.',
    })
  }

  return (
    <div className="space-y-6">
      <Card className="animate-fade-in-up">
        <CardHeader>
          <CardTitle>4.1 Compreendendo a Organização e seu Contexto</CardTitle>
          <CardDescription>
            Questões internas e externas, modelos de negócios, relações com terceiros, contexto
            regulatório e cultura de compliance.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label>Modelo de Negócio e Relações com Terceiros</Label>
            <Textarea
              disabled={!canEdit}
              className="min-h-[120px]"
              defaultValue="Operação principal baseada em desenvolvimento de software com infraestrutura em nuvem terceirizada. Principais terceiros incluem provedores AWS e consultores externos."
            />
          </div>
          <div className="space-y-2">
            <Label>Contexto Regulatório/Legal e Econômico</Label>
            <Textarea
              disabled={!canEdit}
              className="min-h-[120px]"
              defaultValue="Sujeito a regulamentações locais (Lei Anticorrupção, LGPD) e normas internacionais, devido à presença de clientes no exterior."
            />
          </div>
          <div className="space-y-2">
            <Label>Aspectos Ambientais, Culturais e Sociais</Label>
            <Textarea
              disabled={!canEdit}
              className="min-h-[120px]"
              defaultValue="Forte foco em metas ESG, sustentabilidade de data centers e diversidade no ambiente de trabalho."
            />
          </div>
          <div className="space-y-2">
            <Label>Estruturas Internas e Cultura de Compliance</Label>
            <Textarea
              disabled={!canEdit}
              className="min-h-[120px]"
              defaultValue="Cultura de conformidade estabelecida pelo board, com canal de denúncias ativo e código de conduta amplamente divulgado."
            />
          </div>
        </CardContent>
        {canEdit && (
          <CardFooter className="justify-end border-t bg-muted/10 p-4">
            <Button onClick={handleSave}>
              <Save className="w-4 h-4 mr-2" /> Salvar Alterações
            </Button>
          </CardFooter>
        )}
      </Card>

      <div className="space-y-3">
        <h4 className="text-sm font-semibold mb-2 text-foreground">Checklist de Auditoria (4.1)</h4>
        <ComplianceChecklistItem
          clause="4.1.a"
          title="Identificação de Questões"
          description="A organização determinou questões externas e internas relevantes para o seu propósito e que afetam o SGC?"
          canEdit={canEdit}
        />
        <ComplianceChecklistItem
          clause="4.1.b"
          title="Monitoramento e Revisão"
          description="A organização monitora e analisa criticamente as informações sobre essas questões externas e internas periodicamente?"
          canEdit={canEdit}
        />
      </div>
    </div>
  )
}
