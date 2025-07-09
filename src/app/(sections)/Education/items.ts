interface EducationItem {
  id: number;
  title: string;
  institution: string;
  year: string;
  description: string;
  imageUrl?: string;
}

const educationItems: EducationItem[] = [
  {
    id: 1,
    institution: "Universidade Federal do Rio Grande (FURG)",
    title: "Bacharel em Sistemas de Informação",
    year: "2020 - 2025",
    description:
      "Graduação focada em fundamentos de desenvolvimento de software, arquitetura de sistemas, bancos de dados e boas práticas de engenharia. Formação técnica sólida, complementada por participação em atividades de extensão e grupos de estudo.",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/C4D0BAQGaxatLTcIpPQ/company-logo_200_200/company-logo_200_200/0/1651754241689/universidade_federal_do_rio_grande___furg_logo?e=2147483647&v=beta&t=nyik0iMdo2jBq79bPMmW1I4zzV_CvYgVgeFosB98N0w",
  },
  {
    id: 2,
    institution: "Origamid",
    title: "Cursos Complementares em Front-End",
    year: "2021",
    description:
      "Cursos práticos de aprimoramento em HTML, CSS Flexbox, Web Design Responsivo e Fundamentos de React. Foco em boas práticas de UX/UI, acessibilidade e performance de interfaces web.",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/C4E0BAQFCIA41zzuT5Q/company-logo_200_200/company-logo_200_200/0/1631378610294/origamid_logo?e=2147483647&v=beta&t=Yugz1UsT-Trb2QpZjVyupRTDiNmlJnLFf2mvCguR-x0",
  },
  {
    id: 3,
    institution: "Rocketseat",
    title: "Trilhas Avançadas de ReactJS, Node.js e Next.js",
    year: "2023 - 2025",
    description:
      "Programa intensivo voltado para tecnologias modernas de desenvolvimento web. Ênfase em aplicações escaláveis com TypeScript, React, Next.js e práticas de mercado como Clean Architecture, CI/CD e integrações de APIs.",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/D4D0BAQFvlmJdF1yg6w/company-logo_200_200/B4DZep.gNrGkAM-/0/1750903426335/rocketseat_logo?e=2147483647&v=beta&t=WWb51hsBjTLOexVNKUOOeGUqOvBVzsxxlCK_xDdGpZQ",
  },
];

export default educationItems;
