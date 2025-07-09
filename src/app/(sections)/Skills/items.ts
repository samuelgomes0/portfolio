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
    description:
      "Construção de interfaces modernas, declarativas e escaláveis.",
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
    description:
      "APIs seguras, performáticas e escaláveis com Node.js e TypeScript.",
    items: [
      {
        name: "Node.js",
        tooltip: "Ambiente de execução JavaScript no servidor.",
      },
      {
        name: "TypeScript",
        tooltip: "Tipagem estática para APIs robustas em Node.js.",
      },
      {
        name: "NestJS",
        tooltip: "Framework modular e opinativo baseado em TypeScript.",
      },
      { name: "Express.js", tooltip: "Framework minimalista para APIs HTTP." },
      { name: "Fastify", tooltip: "Framework leve e rápido para APIs Node." },
      { name: "Prisma", tooltip: "ORM moderno para bancos SQL." },
      {
        name: "PostgreSQL",
        tooltip: "Banco de dados relacional robusto e open source.",
      },
    ],
  },
  {
    category: "Chatbots & IA",
    description:
      "Desenvolvimento de fluxos conversacionais inteligentes e automações.",
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
      "Infraestrutura moderna, deploys eficientes e pipelines CI/CD.",
    items: [
      {
        name: "Google Cloud Platform",
        tooltip: "Plataforma em nuvem para apps Node distribuídos.",
      },
      { name: "Docker", tooltip: "Containerização para ambientes isolados." },
      {
        name: "CI/CD",
        tooltip: "Integração e entrega contínua para projetos Node.js.",
      },
    ],
  },
  {
    category: "Boas Práticas & Metodologias",
    description:
      "Qualidade de código, versionamento e processos ágeis de desenvolvimento.",
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
      { name: "Kanban", tooltip: "Fluxo de trabalho visual e contínuo." },
      { name: "Git", tooltip: "Versionamento distribuído de código." },
      { name: "GitHub", tooltip: "Hospedagem e colaboração em projetos Git." },
      {
        name: "Bitbucket",
        tooltip: "Hospedagem de repositórios Git com pipelines integrados.",
      },
    ],
  },
];

export default skillsItems;
