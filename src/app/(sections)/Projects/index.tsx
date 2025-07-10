"use client";

import {
  TypographyH3,
  TypographyMuted,
  TypographySmall,
} from "@/components/Typography";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GithubIcon } from "lucide-react";
import Link from "next/link";
import projectList from "./items";

function ProjectsSection() {
  return (
    <section>
      <TypographyH3 text="Projetos Pessoais" className="mb-2 font-bold" />
      <TypographySmall
        text="Gosto de transformar ideias em produtos reais. Aqui estão alguns projetos que refletem meu jeito de construir aplicações web modernas e escaláveis."
        className="text-muted-foreground font-normal"
      />
      <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
        {projectList.map(({ title, period, description, stack, links }) => (
          <Card
            key={title}
            className="flex h-full flex-col overflow-hidden rounded-md p-4 shadow-none transition-shadow duration-200 hover:shadow-xs"
          >
            {/* Image Banner */}
            {/* <div className="relative h-40 w-full">
                <Image src={image} alt={title} fill className="object-cover" />
              </div> */}

            <div className="flex flex-grow flex-col">
              <CardHeader className="mb-2 p-0">
                <CardTitle className="text-base">{title}</CardTitle>
                <TypographySmall
                  text={period}
                  className="text-muted-foreground text-xs"
                />
              </CardHeader>

              <CardContent className="flex flex-grow flex-col justify-between space-y-4 p-0">
                <TypographyMuted text={description} />
                <div className="flex flex-wrap justify-center gap-2 md:justify-start">
                  {stack.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              </CardContent>

              <div className="mt-4 flex flex-wrap justify-center gap-2 md:justify-start">
                {links.map(({ label, url }) => (
                  <Button
                    key={label}
                    className="bg-foreground hover:bg-foreground/80 text-background"
                    asChild
                  >
                    <Link href={url} target="_blank" rel="noopener noreferrer">
                      {label === "GitHub" && (
                        <GithubIcon className="mr-2 h-4 w-4" />
                      )}
                      {label}
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
