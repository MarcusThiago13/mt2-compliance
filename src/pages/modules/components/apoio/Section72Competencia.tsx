import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent } from '@/components/ui/card'
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
import { Search, RefreshCw } from 'lucide-react'

export default function Section72Competencia({ canEdit }: { canEdit: boolean }) {
  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
        <div>
          <h3 className="text-lg font-medium">7.2 Competência e Processo de Emprego</h3>
          <p className="text-sm text-muted-foreground">
            Mapeamento de competências, due diligence no recrutamento e histórico de capacitações.
          </p>
        </div>
      </div>

      <Tabs defaultValue="geral" className="w-full">
        <TabsList className="bg-muted/40 p-1 rounded-lg mb-4 inline-flex h-auto items-center">
          <TabsTrigger value="geral" className="py-2 px-4 text-sm rounded-md transition-all">
            7.2.1 Geral (Mapeamento)
          </TabsTrigger>
          <TabsTrigger value="recrutamento" className="py-2 px-4 text-sm rounded-md transition-all">
            7.2.2 Recrutamento (Due Diligence)
          </TabsTrigger>
          <TabsTrigger value="treinamento" className="py-2 px-4 text-sm rounded-md transition-all">
            7.2.3 Treinamentos (Retreinamento)
          </TabsTrigger>
        </TabsList>

        <TabsContent value="geral">
          <Card>
            <CardContent className="p-0 overflow-auto">
              <Table>
                <TableHeader className="bg-muted/30">
                  <TableRow>
                    <TableHead>Função / Cargo</TableHead>
                    <TableHead>Competências Chave Exigidas</TableHead>
                    <TableHead>Status de Preenchimento</TableHead>
                    <TableHead>Plano de Ação (Lacunas)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Gerente Financeiro</TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      PLD/FT, Anti-suborno, Código de Conduta
                    </TableCell>
                    <TableCell>
                      <Badge variant="success">Adequado</Badge>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Diretor Comercial</TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      Pol. Brindes, Relacionamento Público
                    </TableCell>
                    <TableCell>
                      <Badge variant="warning">Lacuna Identificada</Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="link" size="sm" className="h-auto p-0">
                        Atribuir Trilha
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="recrutamento">
          <Card>
            <CardContent className="p-0 overflow-auto">
              <Table>
                <TableHeader className="bg-muted/30">
                  <TableRow>
                    <TableHead>Candidato / Posição</TableHead>
                    <TableHead>Background Check</TableHead>
                    <TableHead>Conflito de Interesses</TableHead>
                    <TableHead>Parecer Compliance</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">Carlos A.</div>
                      <div className="text-xs text-muted-foreground">Head Suprimentos</div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="success">Limpo</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="success">Sem Conflito</Badge>
                    </TableCell>
                    <TableCell className="text-sm text-success font-medium">
                      Aprovado para Contratação
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="icon">
                        <Search className="w-4 h-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">Fernanda M.</div>
                      <div className="text-xs text-muted-foreground">Gerente de Licitações</div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="warning">Aviso PEP</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">Em Análise</Badge>
                    </TableCell>
                    <TableCell className="text-sm text-warning font-medium">
                      Restrição Preventiva
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="icon">
                        <Search className="w-4 h-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="treinamento">
          <Card>
            <CardContent className="p-0 overflow-auto">
              <Table>
                <TableHeader className="bg-muted/30">
                  <TableRow>
                    <TableHead>Trilha / Sessão</TableHead>
                    <TableHead>Cobertura</TableHead>
                    <TableHead>Gatilho de Retreinamento</TableHead>
                    <TableHead>Avaliação Eficácia</TableHead>
                    {canEdit && <TableHead></TableHead>}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Integração Compliance</TableCell>
                    <TableCell className="text-sm">98% Concluído</TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      Nova contratação (Auto)
                    </TableCell>
                    <TableCell>
                      <Badge variant="soft">92% Aprovação</Badge>
                    </TableCell>
                    {canEdit && (
                      <TableCell>
                        <Button variant="outline" size="sm">
                          <RefreshCw className="w-3.5 h-3.5 mr-2" /> Forçar Gatilho
                        </Button>
                      </TableCell>
                    )}
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Atualização Anticorrupção</TableCell>
                    <TableCell className="text-sm">45% Concluído</TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      Mudança Regulatória (Manual)
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">Pendente</Badge>
                    </TableCell>
                    {canEdit && (
                      <TableCell>
                        <Button variant="outline" size="sm">
                          <RefreshCw className="w-3.5 h-3.5 mr-2" /> Forçar Gatilho
                        </Button>
                      </TableCell>
                    )}
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
