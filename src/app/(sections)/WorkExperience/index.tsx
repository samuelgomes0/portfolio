import {
  TypographyH3,
  TypographyMuted,
  TypographySmall,
} from "@/components/Typography";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface WorkExperience {
  id: number;
  companyName: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies: string[];
  imageUrl: string;
}

function WorkExperienceSection() {
  const experiences: WorkExperience[] = [
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
      position: "Twilio Chatbot Developer",
      startDate: "Out de 2022",
      endDate: "Presente",
      description:
        "Planejamento e desenvolvimento de fluxos conversacionais, contact centers e automações integrando Twilio, Dialogflow CX, Flex Plugins, APIs externas e soluções serverless no Google Cloud. Foco em soluções omnichannel robustas, escaláveis e seguras, alinhadas a estratégias de negócio.",
      technologies: [
        "JavaScript",
        "Node.js",
        "Twilio",
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

  return (
    <section>
      <TypographyH3 text="Experiência Profissional" className="font-bold" />
      <Accordion type="single" collapsible className="w-full">
        {experiences.map(
          ({
            id,
            companyName,
            position,
            startDate,
            endDate,
            description,
            technologies,
            imageUrl,
          }) => (
            <AccordionItem key={id} value={`item-${id}`}>
              <AccordionTrigger className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage
                      src={imageUrl}
                      alt={`${companyName} logo`}
                      className="object-cover"
                    />
                    <AvatarFallback>
                      {companyName.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col space-y-2 text-left">
                    <TypographySmall
                      text={companyName}
                      className="font-semibol line-clamp-1 max-w-xs"
                    />
                    <TypographyMuted text={position} className="text-sm" />
                  </div>
                </div>
                <TypographyMuted
                  text={`${startDate} - ${endDate}`}
                  className="flex-1 text-right text-sm"
                />
              </AccordionTrigger>
              <AccordionContent className="space-y-4">
                <TypographyMuted
                  text={description || "Descrição pendente..."}
                />
                <TypographySmall
                  text="Tecnologias:"
                  className="font-semibold"
                />
                <div className="mt-1.5 flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <Badge
                      key={tech}
                      className="hover:bg-primary/80 transition-colors duration-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ),
        )}
      </Accordion>
    </section>
  );
}

export default WorkExperienceSection;
