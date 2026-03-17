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
    period: '2025-2026',
    description:
      'Plataforma de legislação interativa para concursos públicos e OAB, com leis atualizadas em tempo real, grifos e anotações persistentes, além de busca inteligente.',
    stack: ['TypeScript', 'Node.js', 'NestJS', 'Prisma', 'PostgreSQL', 'Next.js'],
    links: [{ label: 'Website', url: 'https://aprovaleges.com.br/' }],
  },
  {
    title: 'CoAutoria',
    role: 'Líder de Front-end',
    period: '2025-2026',
    description:
      'Sistema automatizado para tradução e revisão de artigos científicos na área da saúde, baseado em uma arquitetura multiagente com regras personalizáveis.',
    stack: ['TypeScript', 'Next.js', 'React', 'Tailwind CSS'],
    links: [{ label: 'Em desenvolvimento', url: '#' }],
  },
  {
    title: 'Cadê Meu Pet',
    role: 'Idealizador e Desenvolvedor Full-Stack',
    period: '2024',
    description: 'App web que conecta donos de pets e comunidade para localizar animais perdidos.',
    stack: ['Vite', 'React', 'TypeScript', 'Tailwind CSS', 'Fastify', 'Prisma', 'PostgreSQL'],
    links: [{ label: 'GitHub', url: 'https://github.com/samuelgomes0/cademeupet' }],
  },
  {
    title: 'Numora',
    role: 'Idealizador e Desenvolvedor Full-Stack',
    period: 'Em desenvolvimento',
    description:
      'Plataforma SaaS para gestão financeira pessoal. Controle de despesas, planejamento e insights financeiros.',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Prisma', 'Fastify', 'PostgreSQL'],
    links: [{ label: 'GitHub', url: '#' }],
  },
];

export default projectList;
