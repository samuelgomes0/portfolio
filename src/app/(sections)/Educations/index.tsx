import { TypographyH3 } from "@/components/Typography";

function EducationsSection() {
  const educations = [
    {
      id: 1,
      title: "Bacharel em Sistemas de Informação",
      institution: "Universidade Federal do Rio Grande (FURG)",
      year: "2020 - 2025",
    },
  ];

  return (
    <section>
      <TypographyH3 text="Educação" className="font-bold" />
      <ul className="list-disc pl-5">
        {educations.map((education) => (
          <li key={education.id} className="mb-2">
            <strong>{education.title}</strong> - {education.institution} (
            {education.year})
          </li>
        ))}
      </ul>
    </section>
  );
}

export default EducationsSection;
