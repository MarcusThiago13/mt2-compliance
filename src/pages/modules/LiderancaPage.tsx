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
import { FileSignature, ShieldCheck } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export default function LiderancaPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="5. Liderança"
        description="Políticas de compliance, comprometimento da alta direção e organograma de papéis."
        breadcrumbs={[{ label: 'Início', path: '/' }, { label: 'ISO Módulo 5' }]}
      />

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileSignature className="w-5 h-5 text-primary" /> Gestão de Políticas (5.2)
            </CardTitle>
            <CardDescription>Repositório com controle de versão e aceite digital.</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Política</TableHead>
                  <TableHead>Versão</TableHead>
                  <TableHead>Status</TableHead>
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
                      <Badge
                        variant="outline"
                        className={
                          p.status === 'Assinada'
                            ? 'text-success border-success'
                            : 'text-warning border-warning'
                        }
                      >
                        {p.status}
                      </Badge>
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
            <CardDescription>Matriz RACI de Compliance.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table className="text-xs">
                <TableHeader>
                  <TableRow>
                    <TableHead>Atividade</TableHead>
                    <TableHead>Diretoria</TableHead>
                    <TableHead>Compliance Officer</TableHead>
                    <TableHead>Gestores</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Aprovar Política</TableCell>
                    <TableCell>A/R</TableCell>
                    <TableCell>C</TableCell>
                    <TableCell>I</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Investigar Denúncia</TableCell>
                    <TableCell>I</TableCell>
                    <TableCell>A/R</TableCell>
                    <TableCell>C</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Aplicar Treinamento</TableCell>
                    <TableCell>I</TableCell>
                    <TableCell>R</TableCell>
                    <TableCell>A</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              R: Responsável, A: Aprovador, C: Consultado, I: Informado
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
