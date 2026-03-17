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

const navItems = [
  { title: 'Dashboard Principal', icon: LayoutDashboard, url: '/' },
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

  return (
    <Sidebar variant="sidebar" collapsible="icon">
      <SidebarHeader className="p-4 border-b border-sidebar-border">
        <div className="flex items-center gap-2 overflow-hidden px-2">
          <ShieldCheck className="w-8 h-8 text-sidebar-primary shrink-0" />
          <div className="flex flex-col truncate">
            <span className="font-bold text-lg leading-tight tracking-tight text-primary">
              mt3 compliance
            </span>
            <span className="text-xs text-sidebar-foreground/70 truncate">ISO 37301:2021</span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navegação</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={location.pathname === item.url}
                    tooltip={item.title}
                  >
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4 text-xs text-sidebar-foreground/50 border-t border-sidebar-border">
        <div className="group-data-[collapsible=icon]:hidden">
          <p>© 2024 mt3 compliance</p>
          <p>Excelência em Gestão</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
