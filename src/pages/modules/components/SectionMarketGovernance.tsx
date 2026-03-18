import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

export default function SectionMarketGovernance({ data, onChange, canEdit }: any) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4 text-primary">
          I. Mercado & Atividades e II. Estrutura & Governança
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Setores do mercado (Brasil e Exterior)</Label>
            <Input
              disabled={!canEdit}
              value={data.marketSectors || ''}
              onChange={(e) => onChange('marketSectors', e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label>Atividades desenvolvidas</Label>
            <Input
              disabled={!canEdit}
              value={data.activities || ''}
              onChange={(e) => onChange('activities', e.target.value)}
            />
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label>Principais localidades</Label>
            <Input
              disabled={!canEdit}
              value={data.locations || ''}
              onChange={(e) => onChange('locations', e.target.value)}
            />
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label>Se empresa de capital aberto, informar bolsa de valores</Label>
            <Input
              disabled={!canEdit}
              value={data.stockExchange || ''}
              onChange={(e) => onChange('stockExchange', e.target.value)}
            />
          </div>

          <div className="space-y-2 md:col-span-2 mt-4">
            <Label>Estrutura organizacional e Hierarquia interna</Label>
            <Textarea
              disabled={!canEdit}
              value={data.orgStructure || ''}
              onChange={(e) => onChange('orgStructure', e.target.value)}
            />
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label>Processo decisório e Competências</Label>
            <Textarea
              disabled={!canEdit}
              value={data.decisionProcess || ''}
              onChange={(e) => onChange('decisionProcess', e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label>Upload Organograma</Label>
            <Input type="file" disabled={!canEdit} />
          </div>
          <div className="space-y-2">
            <Label>Upload Contrato/Estatuto Social</Label>
            <Input type="file" disabled={!canEdit} />
          </div>

          <div className="space-y-2 md:col-span-2 mt-4">
            <Label>Necessita de autorizações de outras pessoas jurídicas (matriz/grupo)?</Label>
            <RadioGroup
              disabled={!canEdit}
              value={data.needsAuth || 'no'}
              onValueChange={(v) => onChange('needsAuth', v)}
              className="flex gap-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="na-y" />
                <Label htmlFor="na-y">Sim</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="na-n" />
                <Label htmlFor="na-n">Não</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2 md:col-span-2">
            <Label>Histórico de condenações administrativas/civis (corrupção/fraude)?</Label>
            <RadioGroup
              disabled={!canEdit}
              value={data.convictionsHistory || 'no'}
              onValueChange={(v) => onChange('convictionsHistory', v)}
              className="flex gap-4 mb-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="ch-y" />
                <Label htmlFor="ch-y">Sim</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="ch-n" />
                <Label htmlFor="ch-n">Não</Label>
              </div>
            </RadioGroup>
            {data.convictionsHistory === 'yes' && (
              <Textarea
                disabled={!canEdit}
                placeholder="Detalhe as condenações..."
                value={data.convictionsDetails || ''}
                onChange={(e) => onChange('convictionsDetails', e.target.value)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
