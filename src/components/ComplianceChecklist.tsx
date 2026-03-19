import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Paperclip, CheckCircle2, XCircle, AlertCircle, HelpCircle } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'

interface Props {
  clause: string
  title: string
  description: string
  canEdit: boolean
}

export function ComplianceChecklistItem({ clause, title, description, canEdit }: Props) {
  const [status, setStatus] = useState('Não Avaliado')
  const [evidence, setEvidence] = useState('')

  const getStatusIcon = () => {
    switch (status) {
      case 'Conforme':
        return <CheckCircle2 className="w-4 h-4 text-success" />
      case 'Não Conforme':
        return <XCircle className="w-4 h-4 text-destructive" />
      case 'Observação':
        return <AlertCircle className="w-4 h-4 text-warning" />
      default:
        return <HelpCircle className="w-4 h-4 text-muted-foreground" />
    }
  }

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border border-border/50 rounded-lg bg-card gap-4 hover:shadow-sm transition-all">
      <div className="flex-1 space-y-1">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-[10px] font-mono bg-muted/50">
            {clause}
          </Badge>
          <h4 className="text-sm font-semibold text-foreground">{title}</h4>
        </div>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
      <div className="flex flex-wrap items-center gap-2 shrink-0 w-full sm:w-auto">
        <DropdownMenu>
          <DropdownMenuTrigger asChild disabled={!canEdit}>
            <Button variant="outline" size="sm" className="w-[145px] justify-start bg-background">
              {getStatusIcon()}
              <span className="ml-2 truncate">{status}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setStatus('Conforme')}>
              <CheckCircle2 className="w-4 h-4 text-success mr-2" /> Conforme
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setStatus('Não Conforme')}>
              <XCircle className="w-4 h-4 text-destructive mr-2" /> Não Conforme
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setStatus('Observação')}>
              <AlertCircle className="w-4 h-4 text-warning mr-2" /> Observação
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setStatus('Não Avaliado')}>
              <HelpCircle className="w-4 h-4 text-muted-foreground mr-2" /> Não Avaliado
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button
          variant={evidence ? 'secondary' : 'outline'}
          size="sm"
          onClick={() => setEvidence(evidence ? '' : 'Evidencia_Anexa.pdf')}
          disabled={!canEdit}
          className={cn(evidence && 'text-primary border-primary/20 bg-primary/5')}
        >
          <Paperclip className="w-4 h-4 mr-2" />
          {evidence ? '1 Anexo' : 'Evidência'}
        </Button>
      </div>
    </div>
  )
}
