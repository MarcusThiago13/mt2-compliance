import { PageHeader } from '@/components/PageHeader'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { MOCK_NCS } from '@/lib/mock'
import { CheckSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function MelhoriaPage() {
  const handleExport = (format: string) => {
    console.log(`Exportando Melhoria em ${format}`)
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title="10. Melhoria Contínua"
        description="Não conformidades, ações corretivas e verificação de eficácia (mt3 compliance)."
        breadcrumbs={[{ label: 'Início', path: '/' }, { label: 'ISO Módulo 10' }]}
        onExport={handleExport}
      />

      <Card>
        <CardHeader className="flex flex-row items-start justify-between">
          <div>
            <CardTitle>Tratamento de Não Conformidades (10.2)</CardTitle>
            <CardDescription>
              Workflow estruturado exigindo verificação de eficácia antes do fechamento.
            </CardDescription>
          </div>
          <Button size="sm">Registrar NC</Button>
        </CardHeader>
        <CardContent className="p-0 overflow-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Código / Descrição</TableHead>
                <TableHead>Classificação</TableHead>
                <TableHead>Origem</TableHead>
                <TableHead>Fase Atual</TableHead>
                <TableHead>Verificação de Eficácia</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {MOCK_NCS.map((nc) => (
                <TableRow key={nc.id}>
                  <TableCell>
                    <div className="font-medium">{nc.id}</div>
                    <div className="text-xs text-muted-foreground">{nc.desc}</div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={
                        nc.type.includes('Não Compliance')
                          ? 'text-destructive border-destructive bg-destructive/5'
                          : 'text-warning border-warning bg-warning/5'
                      }
                    >
                      {nc.type}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-xs">{nc.origin}</TableCell>
                  <TableCell>
                    <Badge
                      variant="secondary"
                      className={nc.phase === 'Fechada' ? 'bg-success/20 text-success' : ''}
                    >
                      {nc.phase}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2 text-xs font-medium">
                      {nc.effectiveness === 'Eficácia Comprovada' ? (
                        <span className="text-success flex items-center">
                          <CheckSquare className="w-3 h-3 mr-1" /> {nc.effectiveness}
                        </span>
                      ) : (
                        <span className="text-warning">{nc.effectiveness}</span>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" className="text-primary">
                      Tratar
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
