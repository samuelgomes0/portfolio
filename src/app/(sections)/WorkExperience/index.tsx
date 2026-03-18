import { TypographyH3, TypographyMuted, TypographySmall } from '@/components/Typography';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import workExperienceItems from './items';

function WorkExperienceSection() {
  return (
    <section>
      <TypographyH3 text="Experiência Profissional" className="font-bold" />
      <Accordion type="single" collapsible className="w-full">
        {workExperienceItems.map(
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
                  <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full">
                    {imageUrl ? (
                      <Image
                        src={imageUrl}
                        alt=""
                        aria-hidden="true"
                        width={48}
                        height={48}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="bg-muted flex h-full w-full items-center justify-center rounded-full text-sm font-semibold">
                        {companyName.charAt(0).toUpperCase()}
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col space-y-1 text-left">
                    <TypographySmall
                      text={companyName}
                      className="line-clamp-1 max-w-xs font-semibold"
                    />
                    <TypographyMuted text={position} className="text-sm" />
                  </div>
                </div>
                <TypographyMuted
                  text={`${startDate} - ${endDate}`}
                  className="text:center text-right text-sm md:flex-1"
                />
              </AccordionTrigger>
              <AccordionContent className="space-y-4">
                <TypographyMuted text={description || 'Descrição pendente...'} />
                <TypographySmall text="Tecnologias:" className="font-semibold" />
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
