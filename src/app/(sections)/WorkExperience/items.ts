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
    companyName: "Byte Jr. - Empresa Júnior de Tecnologia da Informação",
    position: "Front-End Developer",
    startDate: "Mai de 2021",
    endDate: "Out de 2022",
    description:
      "Criação de sistemas web, landing pages e sites institucionais com React e WordPress. Aplicação de Scrum e boas práticas de performance, acessibilidade e SEO.",
    technologies: ["JavaScript", "React", "Wordpress"],
    imageUrl:
      "https://media.licdn.com/dms/image/v2/C4D0BAQFJTN_KKfQi5Q/company-logo_200_200/company-logo_200_200/0/1635511777649/bytejr_logo?e=2147483647&v=beta&t=TdZrpD7nHrne50Ok2crAgL31F7Mpe1x4xNDlGeuduj8",
  },
  {
    id: 2,
    companyName: "Compass UOL",
    position: "Twilio Chatbot Engineer",
    startDate: "Out de 2022",
    endDate: "Presente",
    description:
      "Planejamento e desenvolvimento de fluxos conversacionais, contact centers e automações integrando Twilio, Dialogflow CX, Flex Plugins, APIs externas e soluções serverless no Google Cloud. Foco em soluções omnichannel robustas, escaláveis e seguras, alinhadas a estratégias de negócio.",
    technologies: [
      "Twilio",
      "JavaScript",
      "Node.js",
      "React",
      "Dialogflow CX",
      "Google Cloud Platform",
    ],
    imageUrl:
      "https://media.licdn.com/dms/image/v2/D4D0BAQFd2rOF6ddv6w/company-logo_200_200/company-logo_200_200/0/1737984027931/compass_uol_logo?e=2147483647&v=beta&t=D6esV5jvhBHpAogtuPnJlM5QsixDedKlsqlSSkRVYHk",
  },
  {
    id: 3,
    companyName: "iTec/FURG-Embrapii - Centro de Robótica e Ciência de Dados",
    position: "Front-End Team Lead",
    startDate: "Abr de 2025",
    endDate: "Presente",
    description:
      "Liderança técnica do time de Front-End em projeto de IA para tradução de artigos acadêmicos. Definição de boas práticas, validação robusta de dados e criação de interface moderna e acessível com TypeScript, Next.js e TailwindCSS.",
    technologies: [
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "shadcn/ui",
    ],
    imageUrl:
      "https://media.licdn.com/dms/image/v2/D4D0BAQGo04vyG7_IIA/company-logo_200_200/company-logo_200_200/0/1723813186085/unidade_furg_embrapii_centro_de_robotica_e_ciencia_de_dados_logo?e=2147483647&v=beta&t=LwsFVeDs0QkUOgYjokbRzKWMUE0dS0jCjvxkR-it3sQ",
  },
].reverse();

export default workExperienceItems;
