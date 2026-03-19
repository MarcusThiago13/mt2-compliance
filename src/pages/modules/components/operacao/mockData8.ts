export const MOCK_CONTROLS = [
  {
    id: 'CTRL-01',
    name: 'Due Diligence Fornecedores',
    risk: 'RSK-001',
    process: 'Suprimentos',
    type: 'Preventivo',
    freq: 'Sob demanda',
    status: 'Ativo',
  },
  {
    id: 'CTRL-02',
    name: 'Conciliação Bancária',
    risk: 'RSK-002',
    process: 'Financeiro',
    type: 'Detectivo',
    freq: 'Mensal',
    status: 'Em Revisão',
  },
]

export const MOCK_THIRDPARTY = [
  {
    id: 'TP-01',
    name: 'Logística Express Ltda',
    status: 'Aprovado',
    sla: 'Anexo_A.pdf',
    monitoring: 'Em Dia',
  },
  {
    id: 'TP-02',
    name: 'Agência de Marketing XY',
    status: 'Pendente DD',
    sla: '-',
    monitoring: 'Atrasado',
  },
]

export const MOCK_FAILURES = [
  {
    id: 'FL-01',
    date: '10/10/2024',
    control: 'CTRL-02',
    effect: 'Pagamento duplicado',
    rootCause: 'Erro sistêmico',
    action: 'Estorno solicitado',
  },
]

export const MOCK_PROCEDURES = [
  {
    id: 'PRC-01',
    name: 'PO-01 Brindes e Hospitalidades',
    version: 'v2.0',
    owner: 'Compliance',
    validUntil: '31/12/2025',
    status: 'Vigente',
  },
  {
    id: 'PRC-02',
    name: 'PO-02 Interação com Agentes Públicos',
    version: 'v1.1',
    owner: 'Jurídico',
    validUntil: '30/06/2024',
    status: 'Expirado',
  },
]

export const MOCK_EXCEPTIONS = [
  {
    id: 'EXC-01',
    origin: 'Diretoria Comercial',
    impact: 'Médio',
    procedure: 'PO-01',
    approvals: 'Aprovado pelo CEO',
    status: 'Registrada',
  },
]

export const MOCK_CONCERNS = [
  {
    id: 'REL-24-001',
    type: 'Anônimo',
    triage: 'Em Análise',
    severity: 'Alta',
    area: 'Compliance',
    date: '20/10/2024',
  },
  {
    id: 'REL-24-002',
    type: 'Identificado',
    triage: 'Encaminhado',
    severity: 'Média',
    area: 'RH',
    date: '22/10/2024',
  },
]

export const MOCK_INVESTIGATIONS_8 = [
  {
    id: 'INV-01',
    concern: 'REL-24-001',
    scope: 'Possível fraude em licitação',
    urgency: 'Alta',
    status: 'Em Andamento',
    team: 'Comitê de Ética / Consultoria Externa',
  },
  {
    id: 'INV-02',
    concern: 'REL-24-002',
    scope: 'Assédio Moral no Departamento de Vendas',
    urgency: 'Média',
    status: 'Concluída',
    team: 'Recursos Humanos',
  },
]
