import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuthStore from '@/stores/useAuthStore'
import { MOCK_USERS } from '@/lib/mock'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'
import { ShieldCheck, ArrowRight } from 'lucide-react'

export default function Login() {
  const [email, setEmail] = useState('admin@mt3.com')
  const [password, setPassword] = useState('123')
  const { login } = useAuthStore()
  const navigate = useNavigate()
  const { toast } = useToast()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    const user = MOCK_USERS.find((u) => u.email === email && u.password === password)

    if (user) {
      login(user as any)
      if (user.role === 'SUPER_ADMIN') {
        navigate('/admin')
      } else {
        navigate('/')
      }
    } else {
      toast({
        title: 'Credenciais inválidas',
        description: 'Verifique seu e-mail e senha e tente novamente.',
        variant: 'destructive',
      })
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background p-4">
      <div className="w-full max-w-[1000px] grid md:grid-cols-2 gap-8 items-center">
        <div className="hidden md:flex flex-col space-y-6 p-8 animate-fade-in-up">
          <div className="flex items-center gap-3">
            <div className="bg-primary p-2.5 rounded-xl">
              <ShieldCheck className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">mt3 compliance</h1>
          </div>
          <div className="space-y-4 text-muted-foreground max-w-sm">
            <p className="text-lg leading-relaxed">
              Plataforma digital premium para gestão completa do seu programa de integridade.
            </p>
            <ul className="space-y-3">
              {[
                'Alinhado à ISO 37301:2021',
                'Ambientes isolados e seguros',
                'Visão executiva em tempo real',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Card className="w-full max-w-md mx-auto shadow-2xl border-0 ring-1 ring-border/50 bg-card/80 backdrop-blur-sm animate-fade-in-up">
          <CardHeader className="text-center space-y-3 pb-8">
            <div className="md:hidden mx-auto w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-2">
              <ShieldCheck className="w-6 h-6 text-primary-foreground" />
            </div>
            <CardTitle className="text-2xl font-bold text-foreground">Acesso ao Sistema</CardTitle>
            <CardDescription className="text-sm">
              Insira suas credenciais corporativas
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleLogin}>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-xs font-semibold text-muted-foreground uppercase tracking-wider"
                >
                  E-mail Corporativo
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12"
                  placeholder="nome@empresa.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label
                    htmlFor="password"
                    className="text-xs font-semibold text-muted-foreground uppercase tracking-wider"
                  >
                    Senha
                  </Label>
                  <a href="#" className="text-xs font-medium text-primary hover:underline">
                    Esqueci a senha
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12"
                  placeholder="••••••••"
                  required
                />
              </div>
              <Button type="submit" className="w-full h-12 text-base font-medium group">
                Entrar no Sistema
                <ArrowRight className="w-4 h-4 ml-2 opacity-70 group-hover:translate-x-1 transition-transform" />
              </Button>

              <div className="text-xs text-muted-foreground p-4 bg-muted/50 rounded-lg mt-6 border border-border/50">
                <p className="font-semibold text-foreground mb-2">Ambiente de Demonstração:</p>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <span className="block font-medium">Super Admin</span>
                    <span className="text-[10px]">admin@mt3.com</span>
                  </div>
                  <div>
                    <span className="block font-medium">Gestor</span>
                    <span className="text-[10px]">editor@alpha.com</span>
                  </div>
                </div>
                <p className="mt-3 text-[10px] opacity-80">Senha universal: 123</p>
              </div>
            </CardContent>
          </form>
        </Card>
      </div>
    </div>
  )
}
