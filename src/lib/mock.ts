export const MOCK_TENANTS = [
  { id: 'T-001', name: 'Empresa Alpha S.A.', cnpj: '11.111.111/0001-11', sector: 'Tecnologia' },
  { id: 'T-002', name: 'Beta Solutions Ltda.', cnpj: '22.222.222/0001-22', sector: 'Saúde' },
]

export const MOCK_USERS = [
  {
    id: 'u1',
    name: 'Admin Plataforma',
    email: 'admin@mt3.com',
    password: '123',
    role: 'SUPER_ADMIN',
  },
  {
    id: 'u2',
    name: 'Gestor Alpha',
    email: 'editor@alpha.com',
    password: '123',
    role: 'EDITOR',
    tenantId: 'T-001',
  },
  {
    id: 'u3',
    name: 'Auditor Alpha',
    email: 'viewer@alpha.com',
    password: '123',
    role: 'VIEWER',
    tenantId: 'T-001',
  },
  {
    id: 'u4',
    name: 'Gestor Beta',
    email: 'editor@beta.com',
    password: '123',
    role: 'EDITOR',
    tenantId: 'T-002',
  },
]

export const MOCK_NOTIFICATIONS = [
  { id: 1, tenantId: 'T-001', title: 'Nova política publicada', time: 'Há 2 horas', read: false },
  { id: 2, tenantId: 'T-001', title: 'Treinamento pendente: LGPD', time: 'Há 1 dia', read: false },
  { id: 3, tenantId: 'T-002', title: 'Risco crítico atualizado', time: 'Há 2 dias', read: true },
]

export const MOCK_RISKS = [
  {
    id: 'RSK-001',
    tenantId: 'T-001',
    name: 'Corrupção em Licitações',
    prob: 2,
    impact: 5,
    owner: 'João Silva',
    status: 'Crítico',
    rootCause: 'Falta de segregação',
  },
  {
    id: 'RSK-002',
    tenantId: 'T-001',
    name: 'Vazamento de Dados (LGPD)',
    prob: 3,
    impact: 4,
    owner: 'Maria Souza',
    status: 'Alto',
    rootCause: 'Sistemas legados',
  },
  {
    id: 'RSK-003',
    tenantId: 'T-002',
    name: 'Falha em Due Diligence',
    prob: 4,
    impact: 3,
    owner: 'Carlos Dias',
    status: 'Médio',
    rootCause: 'Processo manual',
  },
]

export const MOCK_OBLIGATIONS = [
  {
    id: 1,
    tenantId: 'T-001',
    name: 'Renovação Alvará',
    type: 'Legal',
    date: '2024-11-15',
    owner: 'Jurídico',
    status: 'Vigente',
  },
  {
    id: 2,
    tenantId: 'T-001',
    name: 'Reporte Anual',
    type: 'Legal',
    date: '2023-10-01',
    owner: 'Financeiro',
    status: 'Expirado',
  },
  {
    id: 3,
    tenantId: 'T-002',
    name: 'Auditoria ISO 37301',
    type: 'Voluntária',
    date: '2024-01-20',
    owner: 'Compliance',
    status: 'Pendente',
  },
]

export const MOCK_TRAININGS = [
  {
    id: 1,
    tenantId: 'T-001',
    title: 'Código de Conduta 2024',
    progress: 100,
    status: 'Concluído',
    efficacy: 'Aprovado (95%)',
  },
  {
    id: 2,
    tenantId: 'T-001',
    title: 'PLD',
    progress: 45,
    status: 'Em Andamento',
    efficacy: 'Pendente',
  },
  {
    id: 3,
    tenantId: 'T-002',
    title: 'Segurança da Informação',
    progress: 0,
    status: 'Não Iniciado',
    efficacy: 'Pendente',
  },
]

export const MOCK_POLICIES = [
  {
    id: 1,
    tenantId: 'T-001',
    name: 'Política Anticorrupção',
    version: 'v2.1',
    status: 'Publicada',
    workflow: 'Aprovado',
    readConfirmation: 92,
    reference: 'ISO 37301: 5.2',
  },
  {
    id: 2,
    tenantId: 'T-002',
    name: 'Política de Brindes',
    version: 'v1.0',
    status: 'Em Revisão',
    workflow: 'Pendente',
    readConfirmation: 0,
    reference: 'ISO 37301: 5.2.1',
  },
]

export const MOCK_ACTION_PLANS = [
  {
    id: 'PA-01',
    tenantId: 'T-001',
    task: 'Revisar matriz',
    owner: 'Compliance',
    deadline: '30/11/2024',
    status: 'Em Progresso',
  },
  {
    id: 'PA-02',
    tenantId: 'T-002',
    task: 'Canal de denúncias',
    owner: 'TI',
    deadline: '15/12/2024',
    status: 'Atrasado',
  },
]

export const MOCK_AUDIT_LOGS = [
  {
    id: 1,
    tenantId: 'T-001',
    user: 'Admin',
    action: 'Atualização Risco',
    date: '2024-10-25',
    detail: 'RSK-001 alterado',
  },
  {
    id: 2,
    tenantId: 'T-002',
    user: 'Sistema',
    action: 'Alerta',
    date: '2024-10-23',
    detail: 'Aviso enviado',
  },
]

export const MOCK_INVESTIGATIONS = [
  {
    id: 'INV-01',
    tenantId: 'T-001',
    subject: 'Possível fraude',
    status: 'Em Andamento',
    deadline: '15/12/2024',
    extensionReason: 'Aguardando dados',
    investigator: 'Comitê',
  },
  {
    id: 'INV-02',
    tenantId: 'T-002',
    subject: 'Assédio Moral',
    status: 'Concluída',
    deadline: '01/11/2024',
    extensionReason: '-',
    investigator: 'Compliance Officer',
  },
]

export const MOCK_NCS = [
  {
    id: 'NC-01',
    tenantId: 'T-001',
    desc: 'Falha em due diligence',
    type: 'Não Conformidade',
    origin: 'Auditoria',
    phase: 'Plano de Ação',
    effectiveness: 'Pendente Verificação',
  },
  {
    id: 'NC-02',
    tenantId: 'T-002',
    desc: 'Ausência de política',
    type: 'Não Compliance',
    origin: 'Monitoramento',
    phase: 'Análise de Causa Raiz',
    effectiveness: 'Pendente',
  },
]

export const MOCK_PLANNING_ACTIONS = [
  {
    id: 'ACT-001',
    tenantId: 'T-001',
    title: 'Implementar novo software de screening',
    type: 'Mitigatória',
    priority: 'Alta',
    owner: 'TI',
    deadline: '30/12/2024',
    status: 'Em Andamento',
    progress: 45,
    origin: 'RSK-001',
  },
  {
    id: 'ACT-002',
    tenantId: 'T-001',
    title: 'Revisar matriz de risco anual',
    type: 'Preventiva',
    priority: 'Média',
    owner: 'Compliance',
    deadline: '15/11/2024',
    status: 'Atrasado',
    progress: 10,
    origin: 'Auditoria Interna',
  },
  {
    id: 'ACT-003',
    tenantId: 'T-002',
    title: 'Atualizar Política de Brindes',
    type: 'Corretiva',
    priority: 'Alta',
    owner: 'Jurídico',
    deadline: '01/10/2024',
    status: 'Concluído',
    progress: 100,
    origin: 'RSK-003',
  },
]

export const MOCK_COMPLIANCE_OBJECTIVES = [
  {
    id: 'OBJ-001',
    tenantId: 'T-001',
    title: 'Treinar 100% da liderança em Anticorrupção',
    category: 'Treinamento',
    targetDate: '01/10/2024',
    progress: 92,
    status: 'Em Dia',
    metric: '% de líderes treinados',
    targetValue: '100%',
    currentValue: '92%',
  },
  {
    id: 'OBJ-002',
    tenantId: 'T-001',
    title: 'Reduzir tempo de investigação de relatos',
    category: 'Operacional',
    targetDate: '31/12/2024',
    progress: 50,
    status: 'Atenção',
    metric: 'Dias úteis médios',
    targetValue: '< 30 dias',
    currentValue: '45 dias',
  },
  {
    id: 'OBJ-003',
    tenantId: 'T-002',
    title: 'Cobertura total em Due Diligence',
    category: 'Controles',
    targetDate: '30/11/2024',
    progress: 75,
    status: 'Em Dia',
    metric: '% de Cobertura',
    targetValue: '100%',
    currentValue: '75%',
  },
]
