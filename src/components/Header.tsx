import { Bell, Search, User, LogOut, ArrowLeftRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { Badge } from '@/components/ui/badge'
import useAuthStore from '@/stores/useAuthStore'
import { MOCK_TENANTS } from '@/lib/mock'

export function Header() {
  const { user, currentTenantId, setTenant, logout } = useAuthStore()
  const navigate = useNavigate()

  const currentTenant = MOCK_TENANTS.find((t) => t.id === currentTenantId)
  const isSuperAdmin = user?.role === 'SUPER_ADMIN'

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  const handleSwitchTenant = () => {
    setTenant(null)
    navigate('/admin')
  }

  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center gap-4 border-b bg-background/95 px-4 md:px-6 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <SidebarTrigger className="md:hidden" />

      <div className="hidden md:flex flex-col">
        <span className="text-sm font-semibold text-primary">{currentTenant?.name}</span>
        <span className="text-[10px] text-muted-foreground uppercase tracking-wider bg-muted px-1.5 py-0.5 rounded w-fit">
          Ambiente Isolado
        </span>
      </div>

      <div className="flex flex-1 items-center gap-4 md:ml-auto md:gap-2 lg:gap-4 justify-end">
        {isSuperAdmin && (
          <Button
            variant="outline"
            size="sm"
            onClick={handleSwitchTenant}
            className="hidden sm:flex"
          >
            <ArrowLeftRight className="w-4 h-4 mr-2" /> Trocar Cliente
          </Button>
        )}

        <form className="hidden sm:flex flex-1 sm:flex-initial">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar no compliance..."
              className="pl-8 sm:w-[200px] lg:w-[300px] bg-muted/50 focus-visible:bg-background h-9"
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
            <DropdownMenuLabel>Alertas do {currentTenant?.name}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="flex flex-col items-start gap-1 p-3 cursor-pointer">
              <span className="font-medium text-sm">Ação Pendente</span>
              <span className="text-xs text-muted-foreground">Verifique o módulo de riscos.</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full border shadow-sm bg-primary/5"
            >
              <User className="h-5 w-5 text-primary" />
              <span className="sr-only">Menu do Usuário</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">{user?.name}</p>
                <p className="text-xs leading-none text-muted-foreground">{user?.email}</p>
                <Badge variant="secondary" className="mt-2 w-fit text-[10px]">
                  {user?.role}
                </Badge>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            {isSuperAdmin && (
              <>
                <DropdownMenuItem onClick={handleSwitchTenant} className="cursor-pointer sm:hidden">
                  <ArrowLeftRight className="w-4 h-4 mr-2" /> Painel Super Admin
                </DropdownMenuItem>
                <DropdownMenuSeparator className="sm:hidden" />
              </>
            )}
            <DropdownMenuItem
              onClick={handleLogout}
              className="cursor-pointer text-destructive focus:bg-destructive/10 focus:text-destructive"
            >
              <LogOut className="w-4 h-4 mr-2" /> Sair
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
