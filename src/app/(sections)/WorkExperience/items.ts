interface workExperienceItem {
  id: number;
  companyName: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies: string[];
  imageUrl: string;
}

const workExperienceItems: workExperienceItem[] = [
  {
    id: 3,
    companyName: 'iTec / FURG-Embrapii',
    position: 'Líder Técnico de Front-End (Pesquisador)',
    startDate: 'Abr de 2025',
    endDate: 'Presente',
    description:
      'Liderança técnica da squad de Front-End no projeto CoAutoria, definindo padrões de arquitetura e garantindo qualidade de código por meio de code reviews sistemáticos, reduzindo o acúmulo de débito técnico. Projetei uma interface modular em Next.js integrada a um pipeline de IA multi-agente, desacoplando as camadas de UI da lógica de processamento de linguagem natural e viabilizando o escalonamento independente de cada camada. Conduzi melhorias de Core Web Vitals, entregando uma aplicação de alta performance totalmente aderente ao WCAG 2.1, com ganhos mensuráveis em acessibilidade e SEO.',
    technologies: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'shadcn/ui', 'Zustand', 'Zod'],
    imageUrl:
      'https://media.licdn.com/dms/image/v2/D4D0BAQGo04vyG7_IIA/company-logo_200_200/company-logo_200_200/0/1723813186085/unidade_furg_embrapii_centro_de_robotica_e_ciencia_de_dados_logo?e=2147483647&v=beta&t=LwsFVeDs0QkUOgYjokbRzKWMUE0dS0jCjvxkR-it3sQ',
  },
  {
    id: 2,
    companyName: 'Compass UOL (AI/R)',
    position: 'Desenvolvedor Full-Stack & Especialista em IA Conversacional',
    startDate: 'Out de 2022',
    endDate: 'Presente',
    description:
      'Desenvolvi plugins de produção para o Twilio Flex em React, customizando fluxos de trabalho dos agentes para atendimento omnichannel (Chat/WhatsApp) e configurando regras de roteamento no TaskRouter para otimizar a distribuição de tickets em tempo real. Construí e mantive fluxos conversacionais assíncronos com Twilio Conversations API e Dialogflow CX, garantindo retenção de contexto entre interações de múltiplos turnos. Desenvolvi Twilio Serverless Functions como middleware seguro entre a camada de chatbot e sistemas internos. Liderei a migração de canais legados para uma arquitetura moderna baseada em chat, eliminando handoffs manuais e reduzindo o tempo de espera dos usuários.',
    technologies: [
      'TypeScript',
      'Node.js',
      'React',
      'Twilio Flex',
      'Twilio Conversations API',
      'Twilio Serverless',
      'TaskRouter',
      'Dialogflow CX',
      'Google Cloud Platform',
      'Docker',
    ],
    imageUrl:
      'https://media.licdn.com/dms/image/v2/D4D0BAQH_-lKPWQgV_w/company-logo_200_200/company-logo_200_200/0/1726599335867/airevolutiongroup_logo?e=1775088000&v=beta&t=Db90SRxGNMe2VUDKlh-_H1bk6f2GQjEahiKeG7GyddQ',
  },
  {
    id: 1,
    companyName: 'Byte Jr. – Empresa Júnior de TI',
    position: 'Desenvolvedor Front-End',
    startDate: 'Mai de 2021',
    endDate: 'Out de 2022',
    description:
      'Entreguei aplicações web responsivas e de alta performance, incluindo sites institucionais, com foco em boas práticas de SEO, otimização de performance e conformidade com acessibilidade WCAG. Colaborei em squads multidisciplinares com metodologia Scrum, contribuindo com planejamento de sprints, ciclos de code review e entrega pontual de funcionalidades alinhadas às demandas de design e backend.',
    technologies: ['JavaScript', 'React', 'WordPress', 'Scrum'],
    imageUrl:
      'https://media.licdn.com/dms/image/v2/C4D0BAQFJTN_KKfQi5Q/company-logo_200_200/company-logo_200_200/0/1635511777649/bytejr_logo?e=2147483647&v=beta&t=TdZrpD7nHrne50Ok2crAgL31F7Mpe1x4xNDlGeuduj8',
  },
];

export default workExperienceItems;
