interface Project {
  title: string;
  period: string;
  description: string;
  stack: string[];
  links: { label: string; url: string }[];
}

const projectList: Project[] = [
  {
    title: "Wise Commit",
    period: "2025",
    description:
      "CLI tool que sugere mensagens de commit claras e consistentes. Automatiza prefixos semânticos, integra-se ao Git e usa LLMs via Groq-SDK.",
    stack: ["Node.js", "TypeScript", "CLI", "Simple-Git", "Groq-SDK"],
    links: [
      { label: "GitHub", url: "https://github.com/samuelgomes0/wise.commit" },
    ],
  },
  {
    title: "Wise Rooms",
    period: "2024",
    description:
      "Plataforma para reserva inteligente de salas com API robusta e interface Next.js moderna.",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Zod",
      "Express",
      "Prisma",
      "PostgreSQL",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/samuelgomes0/wise.rooms" },
    ],
  },
  {
    title: "Cadê Meu Pet",
    period: "2024",
    description:
      "App web que conecta donos de pets e comunidade para localizar animais perdidos.",
    stack: [
      "Vite",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Fastify",
      "Prisma",
      "PostgreSQL",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/samuelgomes0/cademeupet" },
    ],
  },
  {
    title: "Numora",
    period: "Em desenvolvimento",
    description:
      "Plataforma SaaS para gestão financeira pessoal. Controle de despesas, planejamento e insights financeiros.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "Fastify",
      "PostgreSQL",
    ],
    links: [{ label: "GitHub", url: "#" }],
  },
];

export default projectList;
