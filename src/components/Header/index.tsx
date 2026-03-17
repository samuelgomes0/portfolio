import Image from 'next/image';
import { TypographyH1, TypographyH2, TypographyMuted } from '../Typography';

function Header() {
  return (
    <header className="flex items-center justify-between gap-6">
      <div className="space-y-4">
        <TypographyMuted
          text="Software Engineer & Pesquisador"
          className="font-semibold uppercase"
        />
        <TypographyH1 text="Samuel Gomes" className="text-6xl font-bold" />
        <TypographyH2
          text="Full-Stack Engineer, Líder Técnico, Pesquisador e Bacharel em Sistemas de Informação. Especialista nos ecossistemas Node.js, Python e Twilio."
          className="text-muted-foreground text-lg font-normal"
        />
      </div>
      <div className="hidden h-40 w-40 shrink-0 overflow-hidden rounded-full md:block">
        <Image
          src="/samuel.jpeg"
          alt="Foto de perfil de Samuel Gomes"
          width={160}
          height={160}
          className="h-full w-full object-cover object-top"
          priority
        />
      </div>
    </header>
  );
}

export default Header;
