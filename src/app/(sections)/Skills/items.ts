interface SkillItem {
  category: string;
  description: string;
  items: {
    name: string;
    tooltip: string;
  }[];
}

const skillsItems: SkillItem[] = [
  {
    category: 'Core & Back-End',
    description: 'APIs robustas, microsserviços e arquitetura orientada a eventos.',
    items: [
      {
        name: 'TypeScript',
        tooltip: 'Tipagem estática para código seguro e manutenível em toda a stack.',
      },
      {
        name: 'Node.js',
        tooltip: 'Runtime JavaScript para servidores de alta performance.',
      },
      {
        name: 'NestJS',
        tooltip: 'Framework modular com injeção de dependência e suporte a microsserviços.',
      },
      {
        name: 'Python / FastAPI',
        tooltip: 'APIs assíncronas de alta performance com tipagem via Pydantic.',
      },
      {
        name: 'Arquitetura Hexagonal',
        tooltip: 'Isolamento de domínio com ports & adapters para sistemas testáveis.',
      },
      {
        name: 'DDD',
        tooltip: 'Domain-Driven Design para modelagem de sistemas complexos.',
      },
      {
        name: 'Event-Driven',
        tooltip: 'Arquitetura orientada a eventos com mensageria assíncrona.',
      },
      {
        name: 'RabbitMQ',
        tooltip: 'Message broker para pipelines de eventos confiáveis e desacoplados.',
      },
      {
        name: 'Redis',
        tooltip: 'Cache em memória para redução de latência e gerenciamento de sessões.',
      },
    ],
  },
  {
    category: 'CPaaS & IA Conversacional',
    description: 'Contact centers omnichannel e fluxos conversacionais escaláveis.',
    items: [
      {
        name: 'Twilio Flex',
        tooltip: 'Contact center customizável com plugins de produção em React.',
      },
      {
        name: 'Conversations API',
        tooltip: 'Mensageria assíncrona omnichannel (WhatsApp, Webchat, SMS).',
      },
      {
        name: 'Twilio Serverless',
        tooltip: 'Functions Node.js como middleware seguro entre chatbot e sistemas internos.',
      },
      {
        name: 'TaskRouter',
        tooltip: 'Roteamento inteligente de tickets em tempo real para agentes.',
      },
      {
        name: 'Twilio Studio',
        tooltip: 'Editor visual de fluxos conversacionais omnichannel.',
      },
      {
        name: 'Dialogflow CX',
        tooltip: 'Agentes conversacionais com NLU avançado, webhooks e retenção de contexto.',
      },
      {
        name: 'Event Streams',
        tooltip: 'Streaming de eventos Twilio para observabilidade e auditoria de canais.',
      },
    ],
  },
  {
    category: 'Front-End',
    description: 'Interfaces modernas, acessíveis e orientadas a performance.',
    items: [
      {
        name: 'React',
        tooltip: 'Biblioteca para construção de interfaces declarativas e componentizadas.',
      },
      {
        name: 'Next.js',
        tooltip: 'Framework React com App Router, SSR, SSG e otimizações de Core Web Vitals.',
      },
      {
        name: 'Zustand / Redux',
        tooltip: 'Gerenciamento de estado leve e previsível para aplicações React.',
      },
      {
        name: 'TailwindCSS',
        tooltip: 'Estilização utilitária para interfaces consistentes e responsivas.',
      },
      {
        name: 'shadcn/ui',
        tooltip: 'Componentes acessíveis e customizáveis baseados em Radix UI.',
      },
      {
        name: 'WCAG 2.1',
        tooltip: 'Conformidade com diretrizes de acessibilidade para web.',
      },
      {
        name: 'Micro-frontends',
        tooltip: 'Decomposição de interfaces em domínios independentes e escaláveis.',
      },
    ],
  },
  {
    category: 'Bancos de Dados',
    description: 'Modelagem eficiente, queries otimizadas e múltiplos paradigmas.',
    items: [
      {
        name: 'PostgreSQL',
        tooltip: 'Banco relacional robusto com suporte a queries complexas e transações ACID.',
      },
      {
        name: 'MySQL',
        tooltip: 'Banco relacional amplamente adotado em sistemas corporativos.',
      },
      {
        name: 'MongoDB',
        tooltip: 'Banco orientado a documentos para dados flexíveis e semi-estruturados.',
      },
      {
        name: 'Prisma ORM',
        tooltip: 'ORM type-safe para bancos relacionais com migrations e query builder.',
      },
    ],
  },
  {
    category: 'Cloud & DevOps',
    description: 'Infraestrutura moderna, deploys eficientes e observabilidade.',
    items: [
      {
        name: 'GCP',
        tooltip: 'Google Cloud Platform: Cloud Functions, Cloud Run e integração com IA.',
      },
      {
        name: 'AWS',
        tooltip: 'Amazon Web Services para infraestrutura em nuvem escalável.',
      },
      {
        name: 'Docker',
        tooltip: 'Containerização para ambientes reproduzíveis e isolados.',
      },
      {
        name: 'Kubernetes',
        tooltip: 'Orquestração de containers para deploy e escalonamento automatizados.',
      },
      {
        name: 'CI/CD',
        tooltip: 'Pipelines de integração e entrega contínua com GitHub Actions e Jenkins.',
      },
      {
        name: 'Terraform',
        tooltip: 'Infraestrutura como código para provisionamento declarativo de recursos.',
      },
      {
        name: 'OpenTelemetry',
        tooltip: 'Instrumentação para rastreamento distribuído e observabilidade.',
      },
      {
        name: 'Grafana / Prometheus',
        tooltip: 'Visualização de métricas e alertas para detecção proativa de regressões.',
      },
    ],
  },
  {
    category: 'Boas Práticas & Metodologias',
    description: 'Qualidade de código, arquitetura sustentável e processos ágeis.',
    items: [
      {
        name: 'Clean Architecture',
        tooltip: 'Separação de responsabilidades para sistemas maintíveis e testáveis.',
      },
      {
        name: 'SOLID',
        tooltip: 'Princípios de design orientado a objetos para software escalável.',
      },
      {
        name: 'Observabilidade',
        tooltip: 'Rastreamento distribuído, métricas e logs para diagnóstico de sistemas.',
      },
      {
        name: 'Scrum',
        tooltip: 'Framework ágil para desenvolvimento iterativo com entregas incrementais.',
      },
      {
        name: 'Code Review',
        tooltip: 'Revisão sistemática de código para redução de débito técnico.',
      },
      {
        name: 'Git',
        tooltip: 'Versionamento distribuído com GitFlow e trunk-based development.',
      },
    ],
  },
];

export default skillsItems;
