import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Plus, Trash2 } from 'lucide-react'
import { ComplianceChecklistItem } from '@/components/ComplianceChecklist'

interface Props {
  canEdit: boolean
}

export default function Section42Parties({ canEdit }: Props) {
  const [parties, setParties] = useState([
    {
      id: 1,
      name: 'Órgãos Reguladores',
      requirements: 'Reportes anuais e conformidade normativa',
      addressed: true,
    },
    {
      id: 2,
      name: 'Colaboradores',
      requirements: 'Ambiente de trabalho seguro, treinamentos claros',
      addressed: true,
    },
    {
      id: 3,
      name: 'Fornecedores e Parceiros',
      requirements: 'Pagamentos no prazo, clareza contratual',
      addressed: false,
    },
    {
      id: 4,
      name: 'Clientes',
      requirements: 'Proteção de dados e segurança da informação',
      addressed: true,
    },
  ])

  const [newName, setNewName] = useState('')
  const [newReq, setNewReq] = useState('')

  const handleAdd = () => {
    if (!newName) return
    setParties([
      ...parties,
      { id: Date.now(), name: newName, requirements: newReq, addressed: false },
    ])
    setNewName('')
    setNewReq('')
  }

  const toggleAddressed = (id: number) => {
    if (!canEdit) return
    setParties(parties.map((p) => (p.id === id ? { ...p, addressed: !p.addressed } : p)))
  }

  const removeParty = (id: number) => {
    if (!canEdit) return
    setParties(parties.filter((p) => p.id !== id))
  }

  return (
    <div className="space-y-6">
      <Card className="animate-fade-in-up">
        <CardHeader>
          <CardTitle>4.2 Necessidades e Expectativas das Partes Interessadas</CardTitle>
          <CardDescription>
            Identificação de partes interessadas e quais de seus requisitos tornam-se obrigações de
            compliance.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {canEdit && (
            <div className="flex flex-col sm:flex-row gap-2 items-end mb-4 bg-muted/20 p-4 rounded-lg border">
              <div className="flex-1 space-y-1 w-full">
                <label className="text-xs font-medium">Nome da Parte Interessada</label>
                <Input
                  placeholder="Ex: Investidores"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                />
              </div>
              <div className="flex-[2] space-y-1 w-full">
                <label className="text-xs font-medium">Requisitos Específicos</label>
                <Input
                  placeholder="Ex: Transparência financeira e relatórios ESG"
                  value={newReq}
                  onChange={(e) => setNewReq(e.target.value)}
                />
              </div>
              <Button onClick={handleAdd} className="w-full sm:w-auto shrink-0">
                <Plus className="w-4 h-4 mr-2" /> Adicionar
              </Button>
            </div>
          )}
          <div className="rounded-md border overflow-hidden">
            <Table>
              <TableHeader className="bg-muted/30">
                <TableRow>
                  <TableHead>Parte Interessada</TableHead>
                  <TableHead>Requisitos</TableHead>
                  <TableHead className="text-center">Endereçado pelo SGC?</TableHead>
                  {canEdit && <TableHead className="w-[50px]"></TableHead>}
                </TableRow>
              </TableHeader>
              <TableBody>
                {parties.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center text-muted-foreground py-6">
                      Nenhuma parte interessada cadastrada.
                    </TableCell>
                  </TableRow>
                ) : (
                  parties.map((p) => (
                    <TableRow key={p.id}>
                      <TableCell className="font-medium">{p.name}</TableCell>
                      <TableCell>{p.requirements}</TableCell>
                      <TableCell className="text-center">
                        <Checkbox
                          checked={p.addressed}
                          onCheckedChange={() => toggleAddressed(p.id)}
                          disabled={!canEdit}
                          className="mx-auto"
                        />
                      </TableCell>
                      {canEdit && (
                        <TableCell>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeParty(p.id)}
                            className="text-destructive hover:bg-destructive/10 h-8 w-8"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </TableCell>
                      )}
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-3">
        <h4 className="text-sm font-semibold mb-2 text-foreground">Checklist de Auditoria (4.2)</h4>
        <ComplianceChecklistItem
          clause="4.2.a"
          title="Partes Interessadas Relevantes"
          description="A organização determinou as partes interessadas que são relevantes para o SGC?"
          canEdit={canEdit}
        />
        <ComplianceChecklistItem
          clause="4.2.b"
          title="Requisitos e Expectativas"
          description="Os requisitos pertinentes dessas partes interessadas foram devidamente identificados?"
          canEdit={canEdit}
        />
      </div>
    </div>
  )
}
