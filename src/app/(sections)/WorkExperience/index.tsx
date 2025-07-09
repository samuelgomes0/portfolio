import { TypographyH3 } from "@/components/Typography";

function WorkExperienceSection() {
  const experience = [
    {
      id: 1,
      companyName: "Byte Jr. - Empresa Júnior de Tecnologia da Informação",
      position: "Front-End Developer | React & Wordpress",
      startDate: "Maio de 2021",
      endDate: "Outubro de 2022",
      description: "PREENCHER",
      technologies: ["JavaScript", "React", "Wordpress"],
    },
    {
      id: 2,
      companyName: "Compass UOL",
      position: "Chatbot Developer | Twilio & Google Cloud Platform",
      startDate: "Outubro de 2022",
      endDate: "Presente",
      description: "PREENCHER",
      technologies: [
        "JavaScript",
        "Node.js",
        "Twilio",
        "Google Cloud Platform",
      ],
    },
    {
      id: 3,
      companyName: "iTec/FURG-Embrapii - Centro de Robótica e Ciência de Dados",
      position:
        "Front-End Team Lead | Plataforma de Tradução e Revisão Automatizada | TypeScript, React & Next.js",
      startDate: "Abril de 2025",
      endDate: "Presente",
      description: "PREENCHER",
      technologies: [
        "TypeScript",
        "React",
        "Next.js",
        "Tailwind CSS",
        "shadcn/ui",
      ],
    },
  ];

  return (
    <section>
      <TypographyH3 text="Experiência Profissional" className="font-bold" />
      <ul className="list-disc pl-5">
        {experience.map((job, index) => (
          <li key={index} className="mb-4">
            <div className="font-semibold">{job.companyName}</div>
            <div className="text-sm text-gray-600">{job.position}</div>
            <div className="text-xs text-gray-500">
              {job.startDate} - {job.endDate}
            </div>
            <p className="mt-1">{job.description}</p>
            <div className="mt-2">
              <strong>Tecnologias:</strong> {job.technologies.join(", ")}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default WorkExperienceSection;
