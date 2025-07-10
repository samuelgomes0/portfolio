"use client";

import { TypographyH2, TypographyH3 } from "@/components/Typography";
import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardTrigger } from "@/components/ui/hover-card";
import Link from "next/link";
import contactItems from "./items";

function ContactSection() {
  return (
    <section className="my-12 flex flex-col items-center justify-center text-center">
      <TypographyH2 text="Entre em Contato" className="text-4xl font-bold" />
      <div className="mt-2 space-y-2">
        <TypographyH3
          text="Estou sempre aberto a boas conversas, novas oportunidades e projetos desafiadores. Se quiser falar sobre uma vaga, colaboração ou até mesmo uma ideia que possamos construir juntos, sinta-se à vontade para entrar em contato."
          className="text-muted-foreground text-lg font-normal"
        />
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {contactItems.map(({ name, href, icon: Icon, external }) => (
          <HoverCard key={name}>
            <HoverCardTrigger asChild>
              <Button asChild variant="outline">
                <Link
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                >
                  <Icon />
                  {name}
                </Link>
              </Button>
            </HoverCardTrigger>
          </HoverCard>
        ))}
      </div>
    </section>
  );
}

export default ContactSection;
