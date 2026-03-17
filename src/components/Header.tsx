import { Bell, Search, User } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from '@/components/ui/dropdown-menu'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { Badge } from '@/components/ui/badge'

export function Header() {
  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center gap-4 border-b bg-background/95 px-4 md:px-6 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <SidebarTrigger className="md:hidden" />

      <div className="flex flex-1 items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <form className="ml-auto flex-1 sm:flex-initial">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar no mt3 compliance..."
              className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px] bg-muted/50 focus-visible:bg-background"
            />
          </div>
        </form>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <Badge className="absolute -top-1 -right-1 h-4 w-4 flex items-center justify-center p-0 bg-destructive text-[10px]">
                3
              </Badge>
              <span className="sr-only">Notificações</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuLabel>Alertas de Compliance</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="flex flex-col items-start gap-1 p-3 cursor-pointer">
              <span className="font-medium text-sm">Renovação Alvará Expirada</span>
              <span className="text-xs text-muted-foreground">
                Obrigação Módulo 4.5 venceu ontem.
              </span>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex flex-col items-start gap-1 p-3 cursor-pointer">
              <span className="font-medium text-sm">Treinamento Pendente</span>
              <span className="text-xs text-muted-foreground">
                3 colaboradores não concluíram LGPD (Módulo 7).
              </span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-center w-full justify-center text-primary text-sm cursor-pointer">
              Ver todas as notificações
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full border shadow-sm">
              <User className="h-5 w-5" />
              <span className="sr-only">Menu do Usuário</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Meu Perfil</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">Configurações</DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger className="cursor-pointer">
                Alternar Papel (RBAC)
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuItem className="cursor-pointer">Administrador</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">Gestor de Compliance</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">Gerente / Diretor</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">Colaborador</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">Auditor</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer text-destructive">Sair</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
