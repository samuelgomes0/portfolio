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
    id: 1,
    companyName: 'Byte Jr. - Empresa Júnior de Tecnologia da Informação',
    position: 'Front-End Developer',
    startDate: 'Mai de 2021',
    endDate: 'Out de 2022',
    description:
      'Criação de sistemas web, landing pages e sites institucionais com React e WordPress. Aplicação de Scrum e boas práticas de performance, acessibilidade e SEO.',
    technologies: ['JavaScript', 'React', 'Wordpress'],
    imageUrl:
      'https://media.licdn.com/dms/image/v2/C4D0BAQFJTN_KKfQi5Q/company-logo_200_200/company-logo_200_200/0/1635511777649/bytejr_logo?e=2147483647&v=beta&t=TdZrpD7nHrne50Ok2crAgL31F7Mpe1x4xNDlGeuduj8',
  },
  {
    id: 2,
    companyName: 'AI/R - Compass UOL',
    position: 'Full-Stack Engineer',
    startDate: 'Out de 2022',
    endDate: 'Presente',
    description:
      'Ao longo de 4 anos, evoluí de Desenvolvedor de Chatbot Júnior a Engenheiro Full-Stack Pleno focado em soluções de comunicação de alta escala. Atuei com o ecossistema Twilio para grandes clientes de Tecnologia, Varejo e Saúde. No estágio mais recente, fui responsável pelo planejamento e desenvolvimento de chatbots, contact centers e plugins customizados para o Twilio Flex com React, integrados ao Google Cloud Platform (Dialogflow CX, Cloud Functions), com foco em escalabilidade, confiabilidade e redução de atritos nas jornadas digitais de pacientes.',
    technologies: [
      'TypeScript',
      'Node.js',
      'React',
      'Twilio',
      'Dialogflow CX',
      'Google Cloud Platform',
      'Docker',
    ],
    imageUrl:
      'https://media.licdn.com/dms/image/v2/D4D0BAQH_-lKPWQgV_w/company-logo_200_200/company-logo_200_200/0/1726599335867/airevolutiongroup_logo?e=1775088000&v=beta&t=Db90SRxGNMe2VUDKlh-_H1bk6f2GQjEahiKeG7GyddQ',
  },
  {
    id: 3,
    companyName: 'iTec/FURG-Embrapii - Centro de Robótica e Ciência de Dados',
    position: 'Front-End Tech Lead',
    startDate: 'Abr de 2025',
    endDate: 'Presente',
    description:
      'Liderança técnica do Front-End em uma plataforma de IA multiagente para tradução e revisão de artigos científicos na área da saúde. Responsável pela arquitetura, definição de padrões de código e estratégias de testes baseadas em Clean Code e SOLID. Entregamos uma interface moderna e responsiva com Next.js, React e TypeScript, acelerando o desenvolvimento por meio de componentes modulares com TailwindCSS e shadcn/ui, além de fortalecer a maturidade técnica do time via code reviews e pair programming.',
    technologies: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'shadcn/ui'],
    imageUrl:
      'https://media.licdn.com/dms/image/v2/D4D0BAQGo04vyG7_IIA/company-logo_200_200/company-logo_200_200/0/1723813186085/unidade_furg_embrapii_centro_de_robotica_e_ciencia_de_dados_logo?e=2147483647&v=beta&t=LwsFVeDs0QkUOgYjokbRzKWMUE0dS0jCjvxkR-it3sQ',
  },
].reverse();

export default workExperienceItems;
