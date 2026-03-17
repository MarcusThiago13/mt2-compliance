import { PageHeader } from '@/components/PageHeader'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { MOCK_POLICIES } from '@/lib/mock'
import { FileSignature, ShieldCheck, Download } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'

export default function LiderancaPage() {
  const handleExport = (format: string) => {
    console.log(`Exportando Liderança em ${format}`)
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title="5. Liderança"
        description="Políticas de compliance, comprometimento da alta direção e organograma de papéis (mt3 compliance)."
        breadcrumbs={[{ label: 'Início', path: '/' }, { label: 'ISO Módulo 5' }]}
        onExport={handleExport}
      />

      <div className="grid gap-6">
        <Card className="shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <FileSignature className="w-5 h-5 text-primary" /> Gestão de Políticas (5.2)
              </CardTitle>
              <CardDescription>
                Repositório com controle de versão, fluxos de aprovação e aceite digital.
              </CardDescription>
            </div>
            <Button size="sm">Nova Política</Button>
          </CardHeader>
          <CardContent className="p-0 overflow-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Política</TableHead>
                  <TableHead>Versão</TableHead>
                  <TableHead>Status / Fluxo</TableHead>
                  <TableHead className="w-[200px]">Ciência dos Colaboradores</TableHead>
                  <TableHead>Ref. Normativa</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {MOCK_POLICIES.map((p) => (
                  <TableRow key={p.id}>
                    <TableCell className="font-medium text-primary hover:underline cursor-pointer">
                      {p.name}
                    </TableCell>
                    <TableCell>{p.version}</TableCell>
                    <TableCell>
                      <div className="flex flex-col gap-1 items-start">
                        <Badge
                          variant="outline"
                          className={
                            p.status === 'Publicada'
                              ? 'text-success border-success'
                              : 'text-warning border-warning'
                          }
                        >
                          {p.status}
                        </Badge>
                        <span className="text-[10px] text-muted-foreground">{p.workflow}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col gap-1.5">
                        <div className="flex items-center justify-between text-xs">
                          <span>Adesão</span>
                          <span className="font-medium">{p.readConfirmation}%</span>
                        </div>
                        <Progress value={p.readConfirmation} className="h-1.5" />
                      </div>
                    </TableCell>
                    <TableCell className="text-xs text-muted-foreground">{p.reference}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="icon" title="Baixar PDF">
                        <Download className="w-4 h-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-primary" /> Papéis e Responsabilidades (5.3)
            </CardTitle>
            <CardDescription>Matriz RACI para o sistema mt3 compliance.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table className="text-xs md:text-sm">
                <TableHeader>
                  <TableRow>
                    <TableHead>Atividade</TableHead>
                    <TableHead>Alta Direção</TableHead>
                    <TableHead>Compliance Officer</TableHead>
                    <TableHead>Gestores de Área</TableHead>
                    <TableHead>Colaboradores</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Aprovação de Políticas</TableCell>
                    <TableCell>Aprovador (A)</TableCell>
                    <TableCell>Responsável (R)</TableCell>
                    <TableCell>Consultado (C)</TableCell>
                    <TableCell>Informado (I)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Gestão do Canal de Denúncias</TableCell>
                    <TableCell>Informado (I)</TableCell>
                    <TableCell>Responsável (R/A)</TableCell>
                    <TableCell>Consultado (C)</TableCell>
                    <TableCell>Informado (I)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Participação em Treinamentos</TableCell>
                    <TableCell>Responsável (R)</TableCell>
                    <TableCell>Aprovador (A)</TableCell>
                    <TableCell>Responsável (R)</TableCell>
                    <TableCell>Responsável (R)</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
