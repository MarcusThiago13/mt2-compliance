import { useState, useEffect } from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Save, FileText } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import useAuthStore from '@/stores/useAuthStore'

import SectionMarketGovernance from './SectionMarketGovernance'
import SectionShareholding from './SectionShareholding'
import SectionWorkforce from './SectionWorkforce'
import SectionPublicSector from './SectionPublicSector'
import SectionSMECompliance from './SectionSMECompliance'

const mockTenantData: Record<string, any> = {
  'T-001': {
    marketSectors: 'Tecnologia da Informação e Serviços',
    activities: 'Desenvolvimento de software e consultoria estratégica',
    locations: 'São Paulo/SP, Rio de Janeiro/RJ e Nova York/EUA',
    stockExchange: '',
    orgStructure: 'Estrutura matricial com diretorias regionais focadas por produto.',
    internalHierarchy: 'Conselho -> CEO -> Diretores -> Gerentes -> Especialistas',
    decisionProcess: 'Decisões estratégicas aprovadas em comitê executivo quinzenal.',
    competencies: 'Definidas no regimento interno e matriz de responsabilidades.',
    needsAuth: 'no',
    convictionsHistory: 'no',
    convictionsDetails: '',
    shareholding: 'Controladora: Alpha Holdings S.A. (100%)',
    capitalComposition: [
      { partner: 'Alpha Holdings S.A.', percentage: 80 },
      { partner: 'Founders Partners LLC', percentage: 20 },
    ],
    economicGroup: 'Atuação na América Latina e América do Norte (Brasil, Chile, EUA)',
    operations: 'Aquisição da Beta Tech em 2023.',
    workforce: [
      { role: 'Diretor Executivo', quantity: 3, leader: 'Sim', type: 'Administrativo' },
      { role: 'Gerente de Projetos', quantity: 12, leader: 'Sim', type: 'Administrativo' },
      { role: 'Engenheiro de Software', quantity: 145, leader: 'Não', type: 'Operacional' },
    ],
    publicLicenses: 'Alvará de funcionamento, Licença ambiental simplificada',
    publicContracts: [
      { year: '2023', quantity: 2, value: 4500000, percent: 15 },
      { year: '2022', quantity: 1, value: 1200000, percent: 5 },
    ],
    intermediaries: 'Não utilizamos agentes intermediários para contato com poder público.',
    isSME: 'no',
    grossRevenue: 35000000,
    complianceDate: '2021-03-10',
    globalSystem: 'yes',
  },
  'T-002': {
    marketSectors: 'Saúde e Bem-estar',
    activities: 'Gestão hospitalar e clínicas de especialidades',
    locations: 'Belo Horizonte/MG, Vitória/ES',
    stockExchange: 'B3: SAUD3',
    orgStructure: 'Estrutura vertical com diretorias médicas e administrativas.',
    internalHierarchy: 'Conselho de Administração -> CEO -> Diretoria Médica -> Coordenação',
    decisionProcess: 'Decisões clínicas por comitê médico; de negócio por conselho.',
    competencies: 'Regidas por estatuto social e conselho regional de medicina.',
    needsAuth: 'yes',
    convictionsHistory: 'no',
    convictionsDetails: '',
    shareholding: 'Sociedade Anônima de Capital Aberto',
    capitalComposition: [
      { partner: 'Free Float (Mercado)', percentage: 55 },
      { partner: 'Fundadores', percentage: 45 },
    ],
    economicGroup: 'Operação exclusiva no Brasil.',
    operations: 'Joint Venture com laboratório LabMais em 2022.',
    workforce: [
      { role: 'Médico Coordenador', quantity: 15, leader: 'Sim', type: 'Operacional' },
      { role: 'Enfermeiro Padrão', quantity: 120, leader: 'Não', type: 'Operacional' },
      { role: 'Recepcionista', quantity: 40, leader: 'Não', type: 'Administrativo' },
    ],
    publicLicenses: 'Alvará Sanitário, CNES, Licença Bombeiros',
    publicContracts: [{ year: '2023', quantity: 5, value: 12000000, percent: 30 }],
    intermediaries: 'Uso de despachantes para renovação de alvarás anuais.',
    isSME: 'no',
    grossRevenue: 85000000,
    complianceDate: '2019-08-20',
    globalSystem: 'yes',
  },
}

export default function ProfileReport() {
  const { user, currentTenantId } = useAuthStore()
  const { toast } = useToast()
  const canEdit = user?.role === 'SUPER_ADMIN' || user?.role === 'EDITOR'

  const [data, setData] = useState<any>({
    marketSectors: '',
    capitalComposition: [],
    workforce: [],
    publicContracts: [],
  })

  useEffect(() => {
    const tenantData = mockTenantData[currentTenantId || '']
    if (tenantData) {
      setData(tenantData)
    } else {
      setData({ marketSectors: '', capitalComposition: [], workforce: [], publicContracts: [] })
    }
  }, [currentTenantId])

  const handleChange = (field: string, value: any) => {
    setData((prev: any) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!canEdit) return
    toast({ title: 'Relatório Salvo', description: 'O Relatório de Perfil foi salvo com sucesso.' })
  }

  return (
    <Card className="border-t-4 border-t-primary shadow-sm animate-fade-in-up">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="w-5 h-5 text-primary" />
          Relatório de Perfil
        </CardTitle>
        <CardDescription>
          Documente detalhadamente a estrutura, governança e interações com o setor público.
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-8">
          <SectionMarketGovernance data={data} onChange={handleChange} canEdit={canEdit} />
          <SectionShareholding data={data} onChange={handleChange} canEdit={canEdit} />
          <SectionWorkforce data={data} onChange={handleChange} canEdit={canEdit} />
          <SectionPublicSector data={data} onChange={handleChange} canEdit={canEdit} />
          <SectionSMECompliance data={data} onChange={handleChange} canEdit={canEdit} />
        </CardContent>
        {canEdit && (
          <CardFooter className="bg-muted/20 border-t flex justify-end p-4">
            <Button type="submit">
              <Save className="w-4 h-4 mr-2" /> Salvar Relatório
            </Button>
          </CardFooter>
        )}
      </form>
    </Card>
  )
}
