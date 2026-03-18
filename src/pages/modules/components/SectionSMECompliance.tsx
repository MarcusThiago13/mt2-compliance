import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

export default function SectionSMECompliance({ data, onChange, canEdit }: any) {
  return (
    <div className="space-y-6 pt-6 border-t">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary">VI. Porte da Empresa (PME)</h3>
          <div className="space-y-2">
            <Label>Microempresa ou empresa de pequeno porte (LC 123/2016)?</Label>
            <RadioGroup
              disabled={!canEdit}
              value={data.isSME || 'no'}
              onValueChange={(v) => onChange('isSME', v)}
              className="flex gap-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="sme-y" />
                <Label htmlFor="sme-y">Sim</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="sme-n" />
                <Label htmlFor="sme-n">Não</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="space-y-2">
            <Label>Faturamento bruto obtido no último ano (R$)</Label>
            <Input
              type="number"
              disabled={!canEdit}
              value={data.grossRevenue || ''}
              onChange={(e) => onChange('grossRevenue', Number(e.target.value))}
            />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary">VII. Histórico de Compliance</h3>
          <div className="space-y-2">
            <Label>Data de instituição do Sistema de Compliance</Label>
            <Input
              type="date"
              disabled={!canEdit}
              value={data.complianceDate || ''}
              onChange={(e) => onChange('complianceDate', e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label>Sistema Global?</Label>
            <RadioGroup
              disabled={!canEdit}
              value={data.globalSystem || 'no'}
              onValueChange={(v) => onChange('globalSystem', v)}
              className="flex gap-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="gs-y" />
                <Label htmlFor="gs-y">Sim</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="gs-n" />
                <Label htmlFor="gs-n">Não</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </div>
    </div>
  )
}
