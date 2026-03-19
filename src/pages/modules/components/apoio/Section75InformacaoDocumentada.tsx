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
import { FileText, ShieldAlert, History, UploadCloud, Lock } from 'lucide-react'

export default function Section75InformacaoDocumentada({ canEdit }: { canEdit: boolean }) {
  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
        <div>
          <h3 className="text-lg font-medium">7.5 Informação Documentada (GED)</h3>
          <p className="text-sm text-muted-foreground">
            Sistema de Gestão Eletrônica de Documentos, ciclo de aprovação e controle de
            privilégios.
          </p>
        </div>
        {canEdit && (
          <Button size="sm" className="shrink-0">
            <UploadCloud className="w-4 h-4 mr-2" /> Novo Documento
          </Button>
        )}
      </div>

      <Tabs defaultValue="biblioteca" className="w-full">
        <TabsList className="bg-muted/40 p-1 rounded-lg mb-4 inline-flex h-auto items-center">
          <TabsTrigger value="biblioteca" className="py-2 px-4 text-sm rounded-md transition-all">
            7.5.1 Biblioteca Central
          </TabsTrigger>
          <TabsTrigger value="ciclo" className="py-2 px-4 text-sm rounded-md transition-all">
            7.5.2 Ciclo e Versionamento
          </TabsTrigger>
          <TabsTrigger value="controle" className="py-2 px-4 text-sm rounded-md transition-all">
            7.5.3 Controle e Privilégios
          </TabsTrigger>
        </TabsList>

        <TabsContent value="biblioteca">
          <Card>
            <CardContent className="p-0 overflow-auto">
              <Table>
                <TableHeader className="bg-muted/30">
                  <TableRow>
                    <TableHead>Título do Documento</TableHead>
                    <TableHead>Requisito ISO</TableHead>
                    <TableHead>Versão Atual</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium flex items-center gap-2">
                      <FileText className="w-4 h-4 text-primary" /> Política Anticorrupção
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      5.2 Política de Compliance
                    </TableCell>
                    <TableCell>v2.1</TableCell>
                    <TableCell>
                      <Badge variant="success">Vigente</Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="link" size="sm">
                        Visualizar
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium flex items-center gap-2">
                      <FileText className="w-4 h-4 text-primary" /> Matriz de Riscos 2024
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      4.6 Avaliação de Riscos
                    </TableCell>
                    <TableCell>v1.0</TableCell>
                    <TableCell>
                      <Badge variant="warning">Em Revisão</Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="link" size="sm">
                        Visualizar
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ciclo">
          <Card>
            <CardContent className="p-0 overflow-auto">
              <Table>
                <TableHeader className="bg-muted/30">
                  <TableRow>
                    <TableHead>Documento</TableHead>
                    <TableHead>Histórico de Alterações</TableHead>
                    <TableHead>Fluxo de Aprovação</TableHead>
                    <TableHead>Data Criação/Atualização</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Política Anticorrupção</TableCell>
                    <TableCell>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <History className="w-3.5 h-3.5 mr-1" /> De v2.0 para v2.1 (Ajuste Lei X)
                      </div>
                    </TableCell>
                    <TableCell className="text-sm">Aprovado pelo Comitê Diretivo</TableCell>
                    <TableCell className="text-sm text-muted-foreground">15/01/2024</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Matriz de Riscos 2024</TableCell>
                    <TableCell>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <History className="w-3.5 h-3.5 mr-1" /> Criação Inicial v1.0
                      </div>
                    </TableCell>
                    <TableCell className="text-sm text-warning font-medium">
                      Pendente Aprovação CEO
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">10/05/2024</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="controle">
          <Card>
            <CardContent className="p-0 overflow-auto">
              <Table>
                <TableHeader className="bg-muted/30">
                  <TableRow>
                    <TableHead>Documento / Artefato</TableHead>
                    <TableHead>Proteção Legal (Privilege)</TableHead>
                    <TableHead>Permissão de Acesso</TableHead>
                    <TableHead>Regra de Retenção</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Dossiê Investigação INV-01</TableCell>
                    <TableCell>
                      <Badge
                        variant="destructive"
                        className="flex w-fit items-center gap-1 bg-destructive/10 text-destructive border-transparent hover:bg-destructive/20"
                      >
                        <ShieldAlert className="w-3 h-3" /> Privilégio Legal
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm flex items-center gap-1.5">
                      <Lock className="w-3.5 h-3.5" /> Restrito (Comitê/Jurídico)
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      5 Anos após conclusão
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Código de Conduta</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="font-normal text-muted-foreground">
                        Não Aplicável
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm text-success">Público</TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      Até substituição
                    </TableCell>
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
