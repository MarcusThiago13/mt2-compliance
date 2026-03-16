export const MOCK_NOTIFICATIONS = [
  { id: 1, title: 'Nova política publicada', time: 'Há 2 horas', read: false },
  { id: 2, title: 'Treinamento pendente: LGPD', time: 'Há 1 dia', read: false },
  { id: 3, title: 'Risco crítico atualizado', time: 'Há 2 dias', read: true },
]

export const MOCK_RISKS = [
  {
    id: 'RSK-001',
    name: 'Corrupção em Licitações',
    prob: 2,
    impact: 5,
    owner: 'João Silva',
    status: 'Crítico',
  },
  {
    id: 'RSK-002',
    name: 'Vazamento de Dados (LGPD)',
    prob: 3,
    impact: 4,
    owner: 'Maria Souza',
    status: 'Alto',
  },
  {
    id: 'RSK-003',
    name: 'Falha em Due Diligence',
    prob: 4,
    impact: 3,
    owner: 'Carlos Dias',
    status: 'Médio',
  },
  {
    id: 'RSK-004',
    name: 'Assédio no Ambiente de Trabalho',
    prob: 2,
    impact: 4,
    owner: 'RH',
    status: 'Alto',
  },
]

export const MOCK_OBLIGATIONS = [
  { id: 1, name: 'Renovação Alvará', date: '2023-11-15', status: 'Vigente' },
  { id: 2, name: 'Reporte Anual CVM', date: '2023-10-01', status: 'Expirado' },
  { id: 3, name: 'Auditoria ISO 37301', date: '2024-01-20', status: 'Pendente' },
]

export const MOCK_TRAININGS = [
  { id: 1, title: 'Código de Conduta 2024', progress: 100, status: 'Concluído' },
  { id: 2, title: 'Prevenção à Lavagem de Dinheiro', progress: 45, status: 'Em Andamento' },
  { id: 3, title: 'Segurança da Informação', progress: 0, status: 'Não Iniciado' },
]

export const MOCK_POLICIES = [
  {
    id: 1,
    name: 'Política Anticorrupção',
    version: 'v2.1',
    status: 'Assinada',
    date: '10/05/2023',
  },
  {
    id: 2,
    name: 'Política de Brindes',
    version: 'v1.0',
    status: 'Pendente Assinatura',
    date: '12/08/2023',
  },
  { id: 3, name: 'Código de Ética', version: 'v3.0', status: 'Assinada', date: '01/01/2023' },
]

export const MOCK_ACTION_PLANS = [
  {
    id: 'PA-01',
    task: 'Revisar matriz de riscos',
    owner: 'Compliance',
    deadline: '30/11/2023',
    status: 'Em Progresso',
  },
  {
    id: 'PA-02',
    task: 'Implementar novo canal de denúncias',
    owner: 'TI',
    deadline: '15/12/2023',
    status: 'Atrasado',
  },
  {
    id: 'PA-03',
    task: 'Treinamento de alta gestão',
    owner: 'RH',
    deadline: '10/10/2023',
    status: 'Concluído',
  },
]

export const MOCK_AUDIT_LOGS = [
  {
    id: 1,
    user: 'Admin',
    action: 'Update Risk',
    date: '2023-10-25 14:30',
    detail: 'RSK-002 Impact changed to 4',
  },
  {
    id: 2,
    user: 'J. Silva',
    action: 'Upload Document',
    date: '2023-10-24 09:15',
    detail: 'Uploaded Evidencia_Reuniao.pdf',
  },
  {
    id: 3,
    user: 'System',
    action: 'Auto Alert',
    date: '2023-10-23 00:00',
    detail: 'Alvará expiration warning sent',
  },
]
