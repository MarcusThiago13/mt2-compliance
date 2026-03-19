import { Download, ChevronRight, FileText, Table as TableIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

interface PageHeaderProps {
  title: string
  description?: string
  breadcrumbs: { label: string; path?: string }[]
  onExport?: (format: 'pdf' | 'excel' | 'csv') => void
}

export function PageHeader({ title, description, breadcrumbs, onExport }: PageHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4 animate-fade-in-up border-b border-border/40 pb-4">
      <div className="space-y-1">
        <nav className="flex items-center text-xs font-medium text-muted-foreground mb-3">
          {breadcrumbs.map((crumb, index) => (
            <div key={index} className="flex items-center">
              {index > 0 && <ChevronRight className="w-3.5 h-3.5 mx-1.5 opacity-50" />}
              {crumb.path ? (
                <Link to={crumb.path} className="hover:text-primary transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-foreground">{crumb.label}</span>
              )}
            </div>
          ))}
        </nav>
        <h1 className="text-3xl font-bold text-foreground tracking-tight">{title}</h1>
        {description && <p className="text-sm text-muted-foreground max-w-3xl">{description}</p>}
      </div>
      {onExport && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="shrink-0 bg-background">
              <Download className="w-4 h-4 mr-2 text-primary" />
              Exportar Relatório
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem onClick={() => onExport('pdf')} className="cursor-pointer py-2">
              <FileText className="w-4 h-4 mr-2 text-muted-foreground" /> Exportar em PDF
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onExport('excel')} className="cursor-pointer py-2">
              <TableIcon className="w-4 h-4 mr-2 text-success" /> Exportar em Excel
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onExport('csv')} className="cursor-pointer py-2">
              <TableIcon className="w-4 h-4 mr-2 text-muted-foreground" /> Exportar em CSV
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  )
}
