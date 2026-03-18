import { TypographyH3, TypographySmall } from '@/components/Typography';
import projectList from './items';
import ProjectCard from './ProjectCard';

function ProjectsSection() {
  return (
    <section>
      <TypographyH3 text="Projetos" className="mb-2 font-bold" />
      <TypographySmall
        text="Gosto de transformar ideias em produtos reais. Aqui estão alguns projetos que refletem meu jeito de construir aplicações web modernas e escaláveis."
        className="text-muted-foreground font-normal"
      />
      <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
        {projectList.map(({ title, role, description, stack, links }) => (
          <ProjectCard
            key={title}
            title={title}
            role={role}
            description={description}
            stack={stack}
            links={links}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
