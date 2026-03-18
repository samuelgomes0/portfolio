'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { TypographySmall } from '@/components/Typography';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpLeftFromSquareIcon, GithubIcon, ToolCaseIcon } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const DESCRIPTION_LIMIT = 150;

interface ProjectLink {
  label: string;
  url: string;
}

interface ProjectCardProps {
  title: string;
  role: string;
  description: string;
  stack: string[];
  links: ProjectLink[];
}

function ProjectCard({ title, role, description, stack, links }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);

  const shouldTruncate = description.length > DESCRIPTION_LIMIT;
  const truncated = shouldTruncate
    ? description.slice(0, DESCRIPTION_LIMIT).trimEnd() + '…'
    : description;
  const displayedText = expanded ? description : truncated;

  return (
    <Card className="flex h-full flex-col overflow-hidden rounded-md p-4 shadow-none transition-shadow duration-200 hover:shadow-xs">
      <div className="flex grow flex-col">
        <CardHeader className="mb-2 p-0">
          <TypographySmall text={title} className="text-foreground text-base font-semibold" />
          <TypographySmall text={role} className="text-muted-foreground text-sm" />
        </CardHeader>

        <CardContent className="flex grow flex-col justify-between space-y-4 p-0">
          <div>
            <AnimatePresence initial={false}>
              <motion.p
                key={expanded ? 'expanded' : 'collapsed'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="text-muted-foreground text-sm"
              >
                {displayedText}
              </motion.p>
            </AnimatePresence>

            {shouldTruncate && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setExpanded((prev) => !prev)}
                className={cn(
                  'text-muted-foreground mt-1 h-auto px-0 py-0.5 text-xs font-medium',
                  'hover:text-foreground hover:bg-transparent',
                  'flex justify-start md:justify-start',
                )}
              >
                {expanded ? 'ver menos' : 'ver mais'}
              </Button>
            )}
          </div>

          <div className="flex flex-wrap justify-center gap-2 md:justify-start">
            {stack.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
        </CardContent>

        <div className="mt-4 flex flex-wrap justify-center gap-2 md:justify-start">
          {links.map(({ label, url }) => {
            const isExternal = url !== '#';
            return (
              <Button
                key={label}
                className="bg-foreground hover:bg-foreground/80 text-background"
                disabled={!isExternal}
                asChild={isExternal}
              >
                {isExternal ? (
                  <Link href={url} target="_blank" rel="noopener noreferrer">
                    {label === 'GitHub' && <GithubIcon className="mr-2 h-4 w-4" />}
                    {label === 'Website' && <ArrowUpLeftFromSquareIcon className="mr-2 h-4 w-4" />}
                    {label}
                  </Link>
                ) : (
                  <>
                    <ToolCaseIcon className="mr-2 h-4 w-4" />
                    {label}
                  </>
                )}
              </Button>
            );
          })}
        </div>
      </div>
    </Card>
  );
}

export default ProjectCard;
