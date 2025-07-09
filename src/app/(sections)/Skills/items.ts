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
    category: "Front-End",
    description: "Construção de interfaces modernas, reativas e escaláveis.",
    items: [
      {
        name: "React",
        tooltip: "Biblioteca para construção de interfaces declarativas.",
      },
      {
        name: "Next.js",
        tooltip: "Framework React para SSR, SSG e rotas otimizadas.",
      },
      {
        name: "TypeScript",
        tooltip: "Superconjunto de JavaScript com tipagem estática.",
      },
      {
        name: "TailwindCSS",
        tooltip: "Framework utilitário para estilização consistente.",
      },
      {
        name: "shadcn/ui",
        tooltip: "Componentes UI modernos baseados em Radix e Tailwind.",
      },
    ],
  },
  {
    category: "Back-End",
    description: "APIs robustas, escaláveis e seguras com foco em Node.js.",
    items: [
      {
        name: "Node.js",
        tooltip: "Ambiente de execução JavaScript no servidor.",
      },
      {
        name: "NestJS",
        tooltip: "Framework Node modular e opinativo baseado em TypeScript.",
      },
      {
        name: "Express.js",
        tooltip: "Framework minimalista para criar APIs HTTP com Node.js.",
      },
      {
        name: "Fastify",
        tooltip: "Framework Node focado em alta performance e baixo overhead.",
      },
      {
        name: "Prisma",
        tooltip: "ORM moderno para bancos SQL no ecossistema Node.",
      },
    ],
  },
  {
    category: "Chatbots & IA",
    description: "Fluxos inteligentes, contact centers e automações.",
    items: [
      {
        name: "Twilio Flex",
        tooltip: "Contact center personalizável com plugins em React.",
      },
      {
        name: "Twilio Studio",
        tooltip: "Editor visual de fluxos conversacionais.",
      },
      {
        name: "TaskRouter",
        tooltip: "Roteamento dinâmico de tarefas em contact centers.",
      },
      {
        name: "Dialogflow CX",
        tooltip: "Agentes conversacionais com webhooks em Node.js.",
      },
      {
        name: "Google Cloud Functions",
        tooltip: "Funções serverless para automação e integração.",
      },
    ],
  },
  {
    category: "Cloud & DevOps",
    description:
      "Deploys eficientes, monitoramento e pipelines CI/CD para projetos.",
    items: [
      {
        name: "Google Cloud Platform",
        tooltip: "Plataforma em nuvem para apps Node distribuídos.",
      },
      {
        name: "Docker",
        tooltip: "Containerização para ambientes isolados e replicáveis.",
      },
      {
        name: "CI/CD",
        tooltip: "Integração e entrega contínua para pipelines JavaScript.",
      },
    ],
  },
  {
    category: "Boas Práticas & Metodologias",
    description: "Padrões e processos para qualidade de código.",
    items: [
      {
        name: "Clean Code",
        tooltip: "Código legível, organizado e de fácil manutenção.",
      },
      {
        name: "SOLID",
        tooltip: "Princípios de design para software escalável.",
      },
      {
        name: "Scrum",
        tooltip: "Método ágil para desenvolvimento incremental.",
      },
      {
        name: "Kanban",
        tooltip: "Fluxo de trabalho visual e contínuo.",
      },
      {
        name: "Git",
        tooltip: "Versionamento distribuído para projetos Node.",
      },
      {
        name: "GitHub",
        tooltip: "Plataforma de hospedagem e colaboração Git.",
      },
      {
        name: "Bitbucket",
        tooltip: "Hospedagem de repositórios Git com pipelines integrados.",
      },
    ],
  },
];

export default skillsItems;
