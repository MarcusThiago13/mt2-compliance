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

export default function SectionPublicSector({ data, onChange, canEdit }: any) {
  const contracts = data.publicContracts || []

  const addContract = () => {
    onChange('publicContracts', [
      ...contracts,
      { year: new Date().getFullYear().toString(), quantity: 0, value: 0, percent: 0 },
    ])
  }

  const removeContract = (index: number) => {
    onChange(
      'publicContracts',
      contracts.filter((_: any, i: number) => i !== index),
    )
  }

  const updateContract = (index: number, field: string, value: any) => {
    const newC = [...contracts]
    newC[index] = { ...newC[index], [field]: value }
    onChange('publicContracts', newC)
  }

  return (
    <div className="space-y-6 pt-6 border-t">
      <h3 className="text-lg font-semibold text-primary">V. Interação com o Setor Público</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2 md:col-span-2">
          <Label>V.a: Autorizações, licenças e permissões / Órgãos responsáveis</Label>
          <Textarea
            disabled={!canEdit}
            value={data.publicLicenses || ''}
            onChange={(e) => onChange('publicLicenses', e.target.value)}
          />
        </div>

        <div className="space-y-2 md:col-span-2">
          <div className="flex justify-between items-center mb-2">
            <Label>V.b: Contratos com o Setor Público (Últimos 3 anos)</Label>
            {canEdit && (
              <Button type="button" variant="outline" size="sm" onClick={addContract}>
                <Plus className="w-4 h-4 mr-2" /> Adicionar Ano
              </Button>
            )}
          </div>
          <div className="border rounded-md">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-32">Ano</TableHead>
                  <TableHead>Qtd. Contratos</TableHead>
                  <TableHead>Valor (R$)</TableHead>
                  <TableHead className="w-32">% Faturamento</TableHead>
                  {canEdit && <TableHead className="w-16"></TableHead>}
                </TableRow>
              </TableHeader>
              <TableBody>
                {contracts.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center text-muted-foreground">
                      Nenhum registro adicionado.
                    </TableCell>
                  </TableRow>
                )}
                {contracts.map((item: any, i: number) => (
                  <TableRow key={i}>
                    <TableCell>
                      <Input
                        disabled={!canEdit}
                        value={item.year}
                        onChange={(e) => updateContract(i, 'year', e.target.value)}
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        type="number"
                        disabled={!canEdit}
                        value={item.quantity}
                        onChange={(e) => updateContract(i, 'quantity', Number(e.target.value))}
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        type="number"
                        disabled={!canEdit}
                        value={item.value}
                        onChange={(e) => updateContract(i, 'value', Number(e.target.value))}
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        type="number"
                        disabled={!canEdit}
                        value={item.percent}
                        onChange={(e) => updateContract(i, 'percent', Number(e.target.value))}
                      />
                    </TableCell>
                    {canEdit && (
                      <TableCell>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          onClick={() => removeContract(i)}
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
          <Label>V.c: Utilização de agentes intermediários (frequência, situações)</Label>
          <Textarea
            disabled={!canEdit}
            value={data.intermediaries || ''}
            onChange={(e) => onChange('intermediaries', e.target.value)}
          />
        </div>
      </div>
    </div>
  )
}
