import { Bell, Search, User, LogOut, ArrowLeftRight, Settings } from 'lucide-react'
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
    <header className="sticky top-0 z-30 flex h-16 w-full items-center gap-4 border-b border-border/40 bg-background/95 px-4 md:px-6 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
      <SidebarTrigger className="md:hidden" />

      <div className="hidden md:flex flex-col">
        <span className="text-sm font-semibold text-foreground">{currentTenant?.name}</span>
        <span className="text-[10px] text-muted-foreground uppercase tracking-wider flex items-center gap-1.5 mt-0.5">
          <div className="w-1.5 h-1.5 rounded-full bg-success"></div>
          Ambiente Isolado
        </span>
      </div>

      <div className="flex flex-1 items-center gap-3 md:ml-auto md:gap-4 lg:gap-6 justify-end">
        {isSuperAdmin && (
          <Button
            variant="outline"
            size="sm"
            onClick={handleSwitchTenant}
            className="hidden sm:flex h-9 border-border/60 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeftRight className="w-4 h-4 mr-2 opacity-70" /> Trocar Cliente
          </Button>
        )}

        <form className="hidden sm:flex flex-1 sm:flex-initial max-w-sm">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar evidências, módulos..."
              className="pl-9 w-full bg-muted/40 border-border/40 focus-visible:bg-background focus-visible:ring-primary/30 h-9 rounded-full text-sm"
            />
          </div>
        </form>

        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="relative text-muted-foreground hover:text-foreground rounded-full h-9 w-9"
              >
                <Bell className="h-5 w-5" />
                <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-destructive border-2 border-background"></span>
                <span className="sr-only">Notificações</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80 p-0 overflow-hidden">
              <div className="bg-muted/30 px-4 py-3 border-b border-border/40">
                <span className="text-sm font-semibold">Central de Alertas</span>
              </div>
              <div className="py-2">
                <DropdownMenuItem className="flex flex-col items-start gap-1 p-3 px-4 cursor-pointer focus:bg-muted/50">
                  <div className="flex items-center gap-2 w-full">
                    <span className="w-2 h-2 rounded-full bg-warning shrink-0"></span>
                    <span className="font-medium text-sm text-foreground">Ação Pendente</span>
                  </div>
                  <span className="text-xs text-muted-foreground pl-4">
                    Verifique o módulo de riscos no planejamento.
                  </span>
                </DropdownMenuItem>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full h-9 w-9 bg-primary/10 hover:bg-primary/20 border-border/40"
              >
                <span className="text-sm font-medium text-primary">{user?.name.charAt(0)}</span>
                <span className="sr-only">Menu do Usuário</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64 p-2">
              <div className="flex items-center justify-start gap-3 p-2">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
                  {user?.name.charAt(0)}
                </div>
                <div className="flex flex-col space-y-0.5">
                  <p className="text-sm font-medium leading-none text-foreground">{user?.name}</p>
                  <p className="text-xs text-muted-foreground">{user?.email}</p>
                </div>
              </div>
              <div className="px-2 pb-2 pt-1">
                <Badge variant="soft" className="text-[10px] w-auto inline-flex">
                  {user?.role}
                </Badge>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer py-2.5">
                <Settings className="w-4 h-4 mr-2 text-muted-foreground" /> Configurações
              </DropdownMenuItem>
              {isSuperAdmin && (
                <>
                  <DropdownMenuItem
                    onClick={handleSwitchTenant}
                    className="cursor-pointer py-2.5 sm:hidden"
                  >
                    <ArrowLeftRight className="w-4 h-4 mr-2 text-muted-foreground" /> Painel Super
                    Admin
                  </DropdownMenuItem>
                </>
              )}
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={handleLogout}
                className="cursor-pointer text-destructive focus:bg-destructive/10 focus:text-destructive py-2.5"
              >
                <LogOut className="w-4 h-4 mr-2" /> Encerrar Sessão
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
