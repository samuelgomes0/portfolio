import { TypographyH3, TypographyMuted, TypographySmall } from '@/components/Typography';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { GraduationCap } from 'lucide-react';
import Image from 'next/image';
import educationItems from './items';

function EducationSection() {
  return (
    <section>
      <TypographyH3 text="Educação" className="font-bold" />
      <Accordion type="single" collapsible className="w-full">
        {educationItems.map(({ id, institution, title, year, description, imageUrl }) => (
          <AccordionItem key={id} value={`education-${id}`}>
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
                    <div className="bg-muted flex h-full w-full items-center justify-center rounded-full">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                  )}
                </div>
                <div className="flex flex-col space-y-1 text-left">
                  <TypographySmall
                    text={institution}
                    className="line-clamp-1 max-w-xs font-semibold"
                  />
                  <TypographyMuted text={title} className="line-clamp-1 text-sm" />
                </div>
              </div>
              <TypographyMuted text={year} className="text-right text-sm md:flex-1" />
            </AccordionTrigger>
            <AccordionContent>
              <TypographyMuted text={description} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

export default EducationSection;
