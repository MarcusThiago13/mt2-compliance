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
import { Button } from '@/components/ui/button'
import { Users, FileSearch } from 'lucide-react'

const rolesData = [
  {
    level: '5.3.1 Órgão Diretivo e Alta Direção',
    role: 'Conselho de Adm. e CEO',
    responsibilities:
      'Aprovação da Política de Compliance, garantia de recursos, suporte ao Compliance Officer e revisão crítica do SGC.',
    evidence: 'Atas de Reunião, Regimento Interno',
  },
  {
    level: '5.3.2 Função de Compliance',
    role: 'Compliance Officer (e Equipe)',
    responsibilities:
      'Gestão diária do programa, assessoria às áreas, monitoramento contínuo e reporte direto de desempenho à Alta Direção.',
    evidence: 'Termo de Nomeação, Job Description',
  },
  {
    level: '5.3.3 Gestão Organizacional',
    role: 'Diretores Executivos e Gerentes',
    responsibilities:
      'Assegurar que a equipe de sua unidade cumpra as normativas e identificar tempestivamente os riscos operacionais associados.',
    evidence: 'Metas de Desempenho, Avaliação Anual',
  },
  {
    level: '5.3.4 Empregados (Nível Geral)',
    role: 'Todos os Colaboradores e Terceiros',
    responsibilities:
      'Conhecer e cumprir a política, participar de capacitações obrigatórias e relatar preocupações através do canal seguro.',
    evidence: 'Termos de Ciência, Listas de Presença',
  },
]

export default function Section53Papeis({ canEdit }: { canEdit: boolean }) {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="border-b border-border/40 pb-4">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Users className="w-5 h-5 text-primary" /> Matriz de Responsabilidades do SGC
          </CardTitle>
          <CardDescription>
            Visão consolidada das atribuições e autoridades em todos os níveis e hierarquias
            organizacionais.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0 overflow-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/20">
                <TableHead className="w-[240px]">Nível Hierárquico (Norma ISO)</TableHead>
                <TableHead className="w-[200px]">Designação / Papel</TableHead>
                <TableHead>Responsabilidades Chave Mapeadas</TableHead>
                <TableHead className="w-[220px]">Evidência Documental Central</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rolesData.map((r, i) => (
                <TableRow key={i}>
                  <TableCell className="font-semibold text-primary/90">{r.level}</TableCell>
                  <TableCell className="font-medium text-foreground">{r.role}</TableCell>
                  <TableCell className="text-muted-foreground text-sm leading-relaxed pr-6">
                    {r.responsibilities}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className="text-xs text-muted-foreground font-medium bg-background whitespace-nowrap"
                    >
                      <FileSearch className="w-3.5 h-3.5 mr-1.5 opacity-70" />
                      {r.evidence}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {canEdit && (
        <div className="flex justify-end pt-2">
          <Button variant="outline" className="border-primary/40 text-primary hover:bg-primary/5">
            Editar Matriz de Papéis
          </Button>
        </div>
      )}
    </div>
  )
}
