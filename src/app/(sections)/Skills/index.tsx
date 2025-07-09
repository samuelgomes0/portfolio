"use client";

import {
  TypographyH3,
  TypographyMuted,
  TypographySmall,
} from "@/components/Typography";
import { Badge } from "@/components/ui/badge";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import skillsItems from "./items";

function SkillsSection() {
  return (
    <section>
      <TypographyH3 text="Principais Habilidades" className="font-bold" />
      <div className="mt-2 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skillsItems.map(({ category, description, items }) => (
          <div key={category} className="space-y-2">
            <TypographySmall text={category} className="font-semibold" />
            <TypographyMuted text={description} />
            <div className="flex flex-wrap justify-center gap-2 md:justify-start">
              {items.map(({ name, tooltip }) => (
                <HoverCard key={name}>
                  <HoverCardTrigger asChild>
                    <Badge className="hover:bg-primary/80 cursor-pointer transition-colors">
                      {name}
                    </Badge>
                  </HoverCardTrigger>
                  <HoverCardContent className="max-w-xs text-sm">
                    {tooltip}
                  </HoverCardContent>
                </HoverCard>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
