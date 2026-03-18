interface Project {
  title: string;
  role: string;
  period: string;
  description: string;
  stack: string[];
  links: { label: string; url: string }[];
}

const projectList: Project[] = [
  {
    title: 'AprovaLeges',
    role: 'Desenvolvedor Full-Stack',
    period: '2025',
    description:
      'SaaS completo para estudo de legislação brasileira com navegação hierárquica, sistema de anotações e motor de gamificação. Arquitetura de microsserviços no NestJS com domínios isolados (Gamificação, Assinaturas, Conteúdo), pipeline de eventos assíncronos via RabbitMQ para webhooks de pagamento e instrumentação com OpenTelemetry e Grafana para detecção proativa de regressões de latência.',
    stack: ['TypeScript', 'NestJS', 'RabbitMQ', 'OpenTelemetry', 'Grafana', 'PostgreSQL', 'Next.js', 'TailwindCSS'],
    links: [{ label: 'Website', url: 'https://aprovaleges.com.br/' }],
  },
  {
    title: 'CoAutoria',
    role: 'Líder de Front-End',
    period: '2025',
    description:
      'Plataforma de pesquisa em saúde que integra um pipeline de IA multi-agente para tradução e revisão de artigos científicos. Arquitetura de componentes type-safe com Next.js, Zod e shadcn/ui. Gerenciamento de estado assíncrono em tempo real para exibir o progresso dos agentes (revisão, tradução, validação) diretamente na UI.',
    stack: ['TypeScript', 'Next.js', 'Zustand', 'Zod', 'shadcn/ui', 'TailwindCSS'],
    links: [{ label: 'Em desenvolvimento', url: '#' }],
  },
  {
    title: 'Wise Rooms',
    role: 'Desenvolvedor Full-Stack (TCC)',
    period: '2024 – 2025',
    description:
      'Plataforma end-to-end para reserva de salas institucionais, substituindo processos manuais por uma solução digital centralizada. API REST tipada com Node.js/Express e Prisma ORM, atualizações em tempo real via WebSockets para feedback instantâneo de disponibilidade e interface React/TailwindCSS responsiva focada em simplicidade de UX.',
    stack: ['TypeScript', 'Node.js', 'Express', 'Prisma', 'PostgreSQL', 'React', 'TailwindCSS', 'WebSockets'],
    links: [{ label: 'GitHub', url: 'https://github.com/samuelgomes0/wise-rooms' }],
  },
  {
    title: 'Cadê Meu Pet',
    role: 'Idealizador e Desenvolvedor Full-Stack',
    period: '2024',
    description: 'App web que conecta donos de pets e comunidade para localizar animais perdidos.',
    stack: ['Vite', 'React', 'TypeScript', 'TailwindCSS', 'Fastify', 'Prisma', 'PostgreSQL'],
    links: [{ label: 'GitHub', url: 'https://github.com/samuelgomes0/cademeupet' }],
  },
];

export default projectList;
