import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { Link, useLocation } from 'react-router-dom'
import {
  LayoutDashboard,
  Building2,
  Users,
  UserCog,
  Globe,
  Award,
  Target,
  LifeBuoy,
  Briefcase,
  Activity,
  TrendingUp,
  ShieldCheck,
} from 'lucide-react'
import useAuthStore from '@/stores/useAuthStore'
import { MOCK_TENANTS } from '@/lib/mock'

const navItems = [
  { title: 'Dashboard Executivo', icon: LayoutDashboard, url: '/' },
  { title: '1. Dados da Organização', icon: Building2, url: '/modulo/1' },
  { title: '2. Dados do Órgão Diretivo', icon: Users, url: '/modulo/2' },
  { title: '3. Função de Compliance', icon: UserCog, url: '/modulo/3' },
  { title: '4. Contexto da Organização', icon: Globe, url: '/modulo/4' },
  { title: '5. Liderança', icon: Award, url: '/modulo/5' },
  { title: '6. Planejamento', icon: Target, url: '/modulo/6' },
  { title: '7. Apoio', icon: LifeBuoy, url: '/modulo/7' },
  { title: '8. Operação', icon: Briefcase, url: '/modulo/8' },
  { title: '9. Avaliação de Desempenho', icon: Activity, url: '/modulo/9' },
  { title: '10. Melhoria', icon: TrendingUp, url: '/modulo/10' },
]

export function AppSidebar() {
  const location = useLocation()
  const { currentTenantId } = useAuthStore()
  const currentTenant = MOCK_TENANTS.find((t) => t.id === currentTenantId)

  return (
    <Sidebar variant="sidebar" collapsible="icon" className="border-r-0 shadow-lg">
      <SidebarHeader className="p-4 bg-sidebar">
        <div className="flex items-center gap-3 overflow-hidden px-1 py-2">
          <div className="bg-primary/20 p-1.5 rounded-lg shrink-0">
            <ShieldCheck className="w-6 h-6 text-primary" />
          </div>
          <div className="flex flex-col truncate">
            <span className="font-semibold text-sm leading-tight tracking-tight text-sidebar-foreground truncate">
              {currentTenant?.name || 'mt3 compliance'}
            </span>
            <span className="text-[11px] text-sidebar-foreground/60 font-medium uppercase tracking-wider mt-0.5">
              ISO 37301
            </span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent className="bg-sidebar px-2">
        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/50 text-[10px] tracking-widest uppercase mb-2 px-2">
            Navegação Principal
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-1.5">
              {navItems.map((item) => {
                const isActive = location.pathname === item.url
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      tooltip={item.title}
                      className={`h-10 rounded-md transition-all ${
                        isActive
                          ? 'bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground shadow-sm'
                          : 'text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-foreground'
                      }`}
                    >
                      <Link to={item.url}>
                        <item.icon
                          className={`w-4 h-4 ${isActive ? 'opacity-100' : 'opacity-70'}`}
                        />
                        <span className="font-medium">{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4 text-xs text-sidebar-foreground/40 bg-sidebar">
        <div className="group-data-[collapsible=icon]:hidden px-2">
          <p>© 2024 mt3 compliance</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
