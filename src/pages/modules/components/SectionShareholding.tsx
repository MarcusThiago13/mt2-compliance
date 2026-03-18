import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Plus, Trash } from 'lucide-react'

export default function SectionShareholding({ data, onChange, canEdit }: any) {
  const capComp = data.capitalComposition || []

  const addPartner = () => {
    onChange('capitalComposition', [...capComp, { partner: '', percentage: 0 }])
  }

  const removePartner = (index: number) => {
    onChange(
      'capitalComposition',
      capComp.filter((_: any, i: number) => i !== index),
    )
  }

  const updatePartner = (index: number, field: string, value: any) => {
    const newComp = [...capComp]
    newComp[index] = { ...newComp[index], [field]: value }
    onChange('capitalComposition', newComp)
  }

  return (
    <div className="space-y-6 pt-6 border-t">
      <h3 className="text-lg font-semibold text-primary">
        III. Participações Societárias & Operações
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2 md:col-span-2">
          <Label>Participações societárias (Controladora, Controlada, Coligada, Consorciada)</Label>
          <Textarea
            disabled={!canEdit}
            value={data.shareholding || ''}
            onChange={(e) => onChange('shareholding', e.target.value)}
          />
        </div>

        <div className="space-y-2 md:col-span-2">
          <div className="flex justify-between items-center mb-2">
            <Label>Composição do capital social</Label>
            {canEdit && (
              <Button type="button" variant="outline" size="sm" onClick={addPartner}>
                <Plus className="w-4 h-4 mr-2" /> Adicionar Sócio
              </Button>
            )}
          </div>
          <div className="border rounded-md">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Sócio/Acionista</TableHead>
                  <TableHead className="w-32">Percentual (%)</TableHead>
                  {canEdit && <TableHead className="w-16"></TableHead>}
                </TableRow>
              </TableHeader>
              <TableBody>
                {capComp.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={3} className="text-center text-muted-foreground">
                      Nenhum sócio adicionado.
                    </TableCell>
                  </TableRow>
                )}
                {capComp.map((item: any, i: number) => (
                  <TableRow key={i}>
                    <TableCell>
                      <Input
                        disabled={!canEdit}
                        value={item.partner}
                        onChange={(e) => updatePartner(i, 'partner', e.target.value)}
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        type="number"
                        disabled={!canEdit}
                        value={item.percentage}
                        onChange={(e) => updatePartner(i, 'percentage', Number(e.target.value))}
                      />
                    </TableCell>
                    {canEdit && (
                      <TableCell>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          onClick={() => removePartner(i)}
                        >
                          <Trash className="w-4 h-4 text-destructive" />
                        </Button>
                      </TableCell>
                    )}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label>Grupo econômico (países de atuação, etc.)</Label>
          <Textarea
            disabled={!canEdit}
            value={data.economicGroup || ''}
            onChange={(e) => onChange('economicGroup', e.target.value)}
          />
        </div>
        <div className="space-y-2 md:col-span-2">
          <Label>Upload Organograma do Grupo</Label>
          <Input type="file" disabled={!canEdit} />
        </div>
        <div className="space-y-2 md:col-span-2">
          <Label>
            Operações (Fusão, Aquisição, Incorporação, Joint Venture, Consórcios, Parcerias e
            Associações)
          </Label>
          <Textarea
            disabled={!canEdit}
            value={data.operations || ''}
            onChange={(e) => onChange('operations', e.target.value)}
          />
        </div>
      </div>
    </div>
  )
}
