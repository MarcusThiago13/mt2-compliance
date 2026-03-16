import { Download, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

interface PageHeaderProps {
  title: string
  description?: string
  breadcrumbs: { label: string; path?: string }[]
  onExport?: () => void
}

export function PageHeader({ title, description, breadcrumbs, onExport }: PageHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4 animate-fade-in-up">
      <div>
        <nav className="flex items-center text-sm text-muted-foreground mb-2">
          {breadcrumbs.map((crumb, index) => (
            <div key={index} className="flex items-center">
              {index > 0 && <ChevronRight className="w-4 h-4 mx-1" />}
              {crumb.path ? (
                <Link to={crumb.path} className="hover:text-primary transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-foreground font-medium">{crumb.label}</span>
              )}
            </div>
          ))}
        </nav>
        <h1 className="text-3xl font-bold text-primary tracking-tight">{title}</h1>
        {description && <p className="text-muted-foreground mt-1">{description}</p>}
      </div>
      {onExport && (
        <Button variant="outline" onClick={onExport} className="shrink-0 shadow-sm">
          <Download className="w-4 h-4 mr-2" />
          Exportar Relatório
        </Button>
      )}
    </div>
  )
}
