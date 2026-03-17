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
    category: 'Front-End',
    description: 'Interfaces modernas, declarativas e escaláveis.',
    items: [
      {
        name: 'React',
        tooltip: 'Biblioteca para construção de interfaces declarativas e componentizadas.',
      },
      {
        name: 'Next.js',
        tooltip: 'Framework React com suporte a SSR, SSG e App Router.',
      },
      {
        name: 'TypeScript',
        tooltip: 'Tipagem estática para código mais seguro e manutenível.',
      },
      {
        name: 'TailwindCSS',
        tooltip: 'Estilização utilitária para interfaces consistentes e responsivas.',
      },
      {
        name: 'shadcn/ui',
        tooltip: 'Componentes acessíveis e customizáveis baseados em Radix UI.',
      },
    ],
  },
  {
    category: 'Back-End',
    description: 'APIs robustas, seguras e escaláveis com Node.js e TypeScript.',
    items: [
      {
        name: 'Node.js',
        tooltip: 'Runtime JavaScript para servidores de alta performance.',
      },
      {
        name: 'TypeScript',
        tooltip: 'Tipagem estática aplicada a APIs e serviços Node.js.',
      },
      {
        name: 'NestJS',
        tooltip: 'Framework modular com injeção de dependência e suporte a microsserviços.',
      },
      {
        name: 'Express.js',
        tooltip: 'Framework minimalista e flexível para APIs HTTP.',
      },
      {
        name: 'Fastify',
        tooltip: 'Framework de alta performance para APIs Node.js.',
      },
      {
        name: 'Prisma',
        tooltip: 'ORM type-safe para bancos de dados relacionais.',
      },
      {
        name: 'PostgreSQL',
        tooltip: 'Banco de dados relacional robusto e open source.',
      },
      {
        name: 'RabbitMQ',
        tooltip: 'Message broker para arquiteturas orientadas a eventos.',
      },
    ],
  },
  {
    category: 'AI & Machine Learning',
    description: 'Especialização em IA generativa, LLMs e visão computacional.',
    items: [
      {
        name: 'Python',
        tooltip: 'Linguagem principal para desenvolvimento de modelos e pipelines de ML.',
      },
      {
        name: 'PyTorch',
        tooltip: 'Framework de deep learning para treinamento e inferência de modelos.',
      },
      {
        name: 'LangChain',
        tooltip: 'Framework para orquestração de pipelines com LLMs.',
      },
      {
        name: 'RAG',
        tooltip: 'Retrieval-Augmented Generation para respostas contextualizadas com LLMs.',
      },
      {
        name: 'IA Generativa',
        tooltip: 'Geração de conteúdo com modelos de linguagem e difusão.',
      },
      {
        name: 'Fine-tuning',
        tooltip: 'Ajuste fino de modelos pré-treinados para domínios específicos.',
      },
      {
        name: 'Visão Computacional',
        tooltip: 'Análise e interpretação de imagens com deep learning.',
      },
    ],
  },
  {
    category: 'Chatbots & Comunicação',
    description: 'Fluxos conversacionais inteligentes e contact centers escaláveis.',
    items: [
      {
        name: 'Twilio Flex',
        tooltip: 'Contact center customizável com plugins em React.',
      },
      {
        name: 'Twilio Studio',
        tooltip: 'Editor visual de fluxos conversacionais omnichannel.',
      },
      {
        name: 'TaskRouter',
        tooltip: 'Roteamento inteligente de tarefas em contact centers.',
      },
      {
        name: 'Dialogflow CX',
        tooltip: 'Agentes conversacionais com NLU avançado e webhooks.',
      },
      {
        name: 'Google Cloud Functions',
        tooltip: 'Funções serverless para automação e integração de serviços.',
      },
    ],
  },

  {
    category: 'Cloud & DevOps',
    description: 'Infraestrutura moderna, deploys eficientes e observabilidade.',
    items: [
      {
        name: 'Google Cloud Platform',
        tooltip: 'Plataforma cloud com foco em serverless e integração com IA.',
      },
      {
        name: 'Docker',
        tooltip: 'Containerização para ambientes reproduzíveis e isolados.',
      },
      {
        name: 'CI/CD',
        tooltip: 'Pipelines de integração e entrega contínua com GitHub Actions.',
      },
      {
        name: 'OpenTelemetry',
        tooltip: 'Instrumentação para observabilidade distribuída.',
      },
      {
        name: 'Grafana',
        tooltip: 'Visualização de métricas e monitoramento de sistemas.',
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
        name: 'Clean Code',
        tooltip: 'Código legível, expressivo e de fácil manutenção.',
      },
      {
        name: 'SOLID',
        tooltip: 'Princípios de design orientado a objetos para software escalável.',
      },
      {
        name: 'Scrum',
        tooltip: 'Framework ágil para desenvolvimento iterativo e incremental.',
      },
      {
        name: 'Kanban',
        tooltip: 'Gestão visual de fluxo de trabalho contínuo.',
      },
      {
        name: 'Git',
        tooltip: 'Versionamento distribuído com fluxos como GitFlow e trunk-based.',
      },
      {
        name: 'GitHub',
        tooltip: 'Colaboração, code review e CI/CD integrados.',
      },
      {
        name: 'Bitbucket',
        tooltip: 'Repositórios Git com pipelines integrados para times corporativos.',
      },
    ],
  },
];

export default skillsItems;
