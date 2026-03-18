'use client';

import { Dock, DockIcon } from '@/components/magicui/dock';
import { Button, buttonVariants } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import ScrollToTopIcon from '../ScrollToTopIcon';
import { navbarLinks, socialLinks } from './items';

function DockComponent() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      aria-label="Navegação principal"
      className="fixed bottom-4 left-1/2 z-50 flex w-[calc(100%-2rem)] -translate-x-1/2 items-center justify-center rounded-full p-2 transition-all duration-300 md:w-auto"
    >
      <TooltipProvider>
        <Dock direction="middle">
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  onClick={() => scrollToTop()}
                  variant="ghost"
                  size="icon"
                  aria-label="Voltar ao topo"
                  className="cursor-pointer rounded-full px-2"
                >
                  <ScrollToTopIcon />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Voltar ao topo</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>

          <Separator orientation="vertical" className="h-full py-2" />

          {navbarLinks.map(({ label, href, icon: Icon }) => (
            <DockIcon key={label}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={href}
                    aria-label={label}
                    className={cn(
                      buttonVariants({ variant: 'ghost', size: 'icon' }),
                      'size-12 rounded-full',
                    )}
                  >
                    <Icon className="size-4" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}

          {socialLinks.map(({ name, url, icon: Icon }) => (
            <DockIcon key={name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={url}
                    aria-label={name}
                    className={cn(
                      buttonVariants({ variant: 'ghost', size: 'icon' }),
                      'size-12 rounded-full',
                    )}
                  >
                    <Icon className="size-4" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
        </Dock>
      </TooltipProvider>
    </nav>
  );
}

export default DockComponent;
