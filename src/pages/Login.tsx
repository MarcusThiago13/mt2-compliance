import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuthStore from '@/stores/useAuthStore'
import { MOCK_USERS } from '@/lib/mock'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'
import { ShieldCheck } from 'lucide-react'

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
    <div className="min-h-screen flex items-center justify-center bg-muted/30 p-4">
      <Card className="w-full max-w-md shadow-lg border-t-4 border-t-primary animate-fade-in-up">
        <CardHeader className="text-center space-y-2">
          <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
            <ShieldCheck className="w-6 h-6 text-primary" />
          </div>
          <CardTitle className="text-2xl">mt3 compliance</CardTitle>
          <CardDescription>Acesse o ambiente seguro de gestão</CardDescription>
        </CardHeader>
        <form onSubmit={handleLogin}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">E-mail Corporativo</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="text-xs text-muted-foreground p-3 bg-muted rounded-md mt-4">
              <p className="font-semibold mb-1">Contas de Teste:</p>
              <ul className="space-y-1">
                <li>admin@mt3.com (Super Admin)</li>
                <li>editor@alpha.com (Editor - Alpha)</li>
                <li>viewer@alpha.com (Viewer - Alpha)</li>
              </ul>
              <p className="mt-1">Senha: 123</p>
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">
              Entrar no Sistema
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
