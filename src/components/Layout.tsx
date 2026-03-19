import { Outlet, Navigate, useLocation } from 'react-router-dom'
import { SidebarProvider } from '@/components/ui/sidebar'
import { AppSidebar } from './AppSidebar'
import { Header } from './Header'
import useAuthStore from '@/stores/useAuthStore'

export default function Layout() {
  const { user, currentTenantId } = useAuthStore()
  const location = useLocation()

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  if (user.role === 'SUPER_ADMIN' && !currentTenantId) {
    return <Navigate to="/admin" replace />
  }

  if (!currentTenantId) {
    return <Navigate to="/login" replace />
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background font-sans text-foreground selection:bg-primary selection:text-primary-foreground">
        <AppSidebar />
        <div className="flex flex-col flex-1 w-full overflow-hidden">
          <Header />
          <main className="flex-1 overflow-auto p-4 md:p-6 lg:p-8 container max-w-7xl mx-auto">
            <Outlet />
          </main>
          <footer className="border-t py-4 text-center text-sm text-muted-foreground bg-muted/20">
            mt2 Compliance - Em conformidade com ISO 37301:2021 |{' '}
            <a href="#" className="underline hover:text-primary">
              Suporte
            </a>
          </footer>
        </div>
      </div>
    </SidebarProvider>
  )
}
