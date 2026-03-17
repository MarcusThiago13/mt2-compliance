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
    rootCause: 'Falta de segregação de funções',
  },
  {
    id: 'RSK-002',
    name: 'Vazamento de Dados (LGPD)',
    prob: 3,
    impact: 4,
    owner: 'Maria Souza',
    status: 'Alto',
    rootCause: 'Sistemas legados sem criptografia',
  },
  {
    id: 'RSK-003',
    name: 'Falha em Due Diligence',
    prob: 4,
    impact: 3,
    owner: 'Carlos Dias',
    status: 'Médio',
    rootCause: 'Processo manual e desatualizado',
  },
  {
    id: 'RSK-004',
    name: 'Assédio no Ambiente de Trabalho',
    prob: 2,
    impact: 4,
    owner: 'RH',
    status: 'Alto',
    rootCause: 'Falta de treinamento contínuo',
  },
]

export const MOCK_OBLIGATIONS = [
  {
    id: 1,
    name: 'Renovação Alvará',
    type: 'Legal',
    date: '2023-11-15',
    owner: 'Jurídico',
    status: 'Vigente',
  },
  {
    id: 2,
    name: 'Reporte Anual CVM',
    type: 'Legal',
    date: '2023-10-01',
    owner: 'Financeiro',
    status: 'Expirado',
  },
  {
    id: 3,
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
    title: 'Código de Conduta 2024',
    progress: 100,
    status: 'Concluído',
    efficacy: 'Aprovado (95%)',
  },
  {
    id: 2,
    title: 'Prevenção à Lavagem de Dinheiro',
    progress: 45,
    status: 'Em Andamento',
    efficacy: 'Pendente',
  },
  {
    id: 3,
    title: 'Segurança da Informação',
    progress: 0,
    status: 'Não Iniciado',
    efficacy: 'Pendente',
  },
]

export const MOCK_POLICIES = [
  {
    id: 1,
    name: 'Política Anticorrupção',
    version: 'v2.1',
    status: 'Publicada',
    workflow: 'Aprovado',
    readConfirmation: 92,
    reference: 'ISO 37301: 5.2',
    date: '10/05/2023',
  },
  {
    id: 2,
    name: 'Política de Brindes',
    version: 'v1.0',
    status: 'Em Revisão',
    workflow: 'Pendente Assinatura',
    readConfirmation: 0,
    reference: 'ISO 37301: 5.2.1',
    date: '12/08/2023',
  },
  {
    id: 3,
    name: 'Código de Ética',
    version: 'v3.0',
    status: 'Publicada',
    workflow: 'Aprovado',
    readConfirmation: 100,
    reference: 'ISO 37301: 5.1',
    date: '01/01/2023',
  },
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
    user: 'Admin (João Silva)',
    action: 'Atualização de Risco',
    date: '2023-10-25 14:30',
    detail: 'RSK-002 Impacto alterado para 4',
  },
  {
    id: 2,
    user: 'Gestor (Maria Souza)',
    action: 'Upload de Documento',
    date: '2023-10-24 09:15',
    detail: 'Evidencia_Reuniao_SWOT.pdf adicionado',
  },
  {
    id: 3,
    user: 'Sistema',
    action: 'Alerta Automático',
    date: '2023-10-23 00:00',
    detail: 'Aviso de vencimento de Alvará enviado',
  },
]

export const MOCK_INVESTIGATIONS = [
  {
    id: 'INV-2024-01',
    subject: 'Possível fraude em compras',
    status: 'Em Andamento',
    deadline: '15/12/2024',
    extensionReason: 'Aguardando quebra de sigilo bancário',
    investigator: 'Comitê de Ética',
  },
  {
    id: 'INV-2024-02',
    subject: 'Assédio Moral no depto Comercial',
    status: 'Concluída',
    deadline: '01/11/2024',
    extensionReason: '-',
    investigator: 'Compliance Officer',
  },
]

export const MOCK_NCS = [
  {
    id: 'NC-2024-01',
    desc: 'Falha em due diligence',
    type: 'Falha de Processo (Não Conformidade)',
    origin: 'Auditoria Interna',
    phase: 'Plano de Ação',
    effectiveness: 'Pendente Verificação',
    deadline: '15/01/2025',
  },
  {
    id: 'NC-2024-02',
    desc: 'Ausência de política de brindes',
    type: 'Ausência de Controle (Não Compliance)',
    origin: 'Monitoramento',
    phase: 'Análise de Causa Raiz',
    effectiveness: 'Pendente',
    deadline: '30/11/2024',
  },
  {
    id: 'NC-2023-14',
    desc: 'Pagamento não justificado',
    type: 'Falha de Processo (Não Conformidade)',
    origin: 'Canal de Denúncia',
    phase: 'Fechada',
    effectiveness: 'Eficácia Comprovada',
    deadline: '-',
  },
]
