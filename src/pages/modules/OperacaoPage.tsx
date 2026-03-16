import { useState } from 'react'
import { PageHeader } from '@/components/PageHeader'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import { Lock, Send, FileText } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

export default function OperacaoPage() {
  const [isAnonymous, setIsAnonymous] = useState(true)
  const { toast } = useToast()

  const handleDenunciaSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: 'Denúncia Registrada com Sucesso',
      description: 'Protocolo gerado: PRT-2024-9981. Acompanhe o status com esta chave.',
    })
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title="8. Operação"
        description="Controles operacionais, Due Diligence e Canal de Denúncias."
        breadcrumbs={[{ label: 'Início', path: '/' }, { label: 'ISO Módulo 8' }]}
      />

      <Tabs defaultValue="denuncias" className="w-full">
        <TabsList className="bg-muted/50 p-1 rounded-lg mb-6 inline-flex h-10 items-center justify-center">
          <TabsTrigger value="controles">Controles Operacionais (8.1)</TabsTrigger>
          <TabsTrigger
            value="denuncias"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            <Lock className="w-4 h-4 mr-2" /> Canal de Denúncias (8.2)
          </TabsTrigger>
        </TabsList>

        <TabsContent value="denuncias" className="max-w-3xl mx-auto">
          <Card className="border-t-4 border-t-primary shadow-md">
            <CardHeader className="bg-muted/20">
              <CardTitle className="text-2xl flex items-center gap-2">
                Canal Seguro de Denúncias
              </CardTitle>
              <CardDescription>
                Relate violações ao Código de Ética ou legislação com total segurança e garantia de
                não-retaliação.
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleDenunciaSubmit}>
              <CardContent className="space-y-6 pt-6">
                <div className="flex items-center space-x-2 bg-secondary/10 p-4 rounded-md border border-secondary/20">
                  <Switch id="anonymous" checked={isAnonymous} onCheckedChange={setIsAnonymous} />
                  <Label htmlFor="anonymous" className="font-semibold text-primary cursor-pointer">
                    Manter minha identidade anônima
                  </Label>
                </div>

                {!isAnonymous && (
                  <div className="grid grid-cols-2 gap-4 animate-fade-in-down">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome Completo</Label>
                      <Input id="name" placeholder="Seu nome" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail Corporativo</Label>
                      <Input id="email" type="email" placeholder="seu@email.com" />
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="category">Categoria do Relato</Label>
                  <select
                    id="category"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <option value="">Selecione uma categoria...</option>
                    <option value="corrupcao">Corrupção / Suborno</option>
                    <option value="assedio">Assédio Moral / Sexual</option>
                    <option value="fraude">Fraude Financeira</option>
                    <option value="dados">Vazamento de Dados</option>
                    <option value="outro">Outros</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Descrição Detalhada</Label>
                  <Textarea
                    id="description"
                    placeholder="Descreva o que ocorreu, quem está envolvido e quando aconteceu..."
                    className="min-h-[150px]"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label>Anexar Evidências (Opcional)</Label>
                  <Input type="file" className="cursor-pointer file:cursor-pointer" />
                  <p className="text-xs text-muted-foreground">
                    Formatos suportados: PDF, JPG, PNG, MP4. Max 10MB.
                  </p>
                </div>
              </CardContent>
              <CardFooter className="bg-muted/10 border-t justify-between">
                <p className="text-xs text-muted-foreground flex items-center">
                  <Lock className="w-3 h-3 mr-1" /> Seus dados são criptografados fim-a-fim.
                </p>
                <Button type="submit" size="lg">
                  <Send className="w-4 h-4 mr-2" /> Enviar Relato
                </Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>

        <TabsContent value="controles">
          <Card>
            <CardHeader>
              <CardTitle>POPs e Controles</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2">
                <Button variant="outline" className="justify-start">
                  <FileText className="w-4 h-4 mr-2" /> POP-001: Due Diligence de Fornecedores
                </Button>
                <Button variant="outline" className="justify-start">
                  <FileText className="w-4 h-4 mr-2" /> POP-002: Recebimento de Brindes
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
