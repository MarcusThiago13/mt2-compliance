import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Plus, Trash } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export default function SectionWorkforce({ data, onChange, canEdit }: any) {
  const workforce = data.workforce || []

  const addRole = () => {
    onChange('workforce', [
      ...workforce,
      { role: '', quantity: 0, leader: 'Não', type: 'Administrativo' },
    ])
  }

  const removeRole = (index: number) => {
    onChange(
      'workforce',
      workforce.filter((_: any, i: number) => i !== index),
    )
  }

  const updateRole = (index: number, field: string, value: any) => {
    const newWf = [...workforce]
    newWf[index] = { ...newWf[index], [field]: value }
    onChange('workforce', newWf)
  }

  const totalQty = workforce.reduce(
    (acc: number, item: any) => acc + (Number(item.quantity) || 0),
    0,
  )

  return (
    <div className="space-y-6 pt-6 border-t">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold text-primary">IV. Mapeamento de Recursos Humanos</h3>
        {canEdit && (
          <Button type="button" variant="outline" size="sm" onClick={addRole}>
            <Plus className="w-4 h-4 mr-2" /> Adicionar Cargo
          </Button>
        )}
      </div>
      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Cargo/Perfil</TableHead>
              <TableHead className="w-32">Quantidade</TableHead>
              <TableHead className="w-40">Dirigente?</TableHead>
              <TableHead className="w-48">Tipo</TableHead>
              {canEdit && <TableHead className="w-16"></TableHead>}
            </TableRow>
          </TableHeader>
          <TableBody>
            {workforce.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} className="text-center text-muted-foreground">
                  Nenhum cargo adicionado.
                </TableCell>
              </TableRow>
            )}
            {workforce.map((item: any, i: number) => (
              <TableRow key={i}>
                <TableCell>
                  <Input
                    disabled={!canEdit}
                    value={item.role}
                    onChange={(e) => updateRole(i, 'role', e.target.value)}
                  />
                </TableCell>
                <TableCell>
                  <Input
                    type="number"
                    disabled={!canEdit}
                    value={item.quantity}
                    onChange={(e) => updateRole(i, 'quantity', Number(e.target.value))}
                  />
                </TableCell>
                <TableCell>
                  <Select
                    disabled={!canEdit}
                    value={item.leader}
                    onValueChange={(v) => updateRole(i, 'leader', v)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Sim">Sim</SelectItem>
                      <SelectItem value="Não">Não</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell>
                  <Select
                    disabled={!canEdit}
                    value={item.type}
                    onValueChange={(v) => updateRole(i, 'type', v)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Administrativo">Administrativo</SelectItem>
                      <SelectItem value="Operacional">Operacional</SelectItem>
                      <SelectItem value="Estagiários">Estagiários</SelectItem>
                      <SelectItem value="Terceirizados">Terceirizados</SelectItem>
                      <SelectItem value="Outros">Outros</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                {canEdit && (
                  <TableCell>
                    <Button type="button" variant="ghost" size="icon" onClick={() => removeRole(i)}>
                      <Trash className="w-4 h-4 text-destructive" />
                    </Button>
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell className="font-bold">Total</TableCell>
              <TableCell className="font-bold">{totalQty}</TableCell>
              <TableCell colSpan={canEdit ? 3 : 2}></TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  )
}
