import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { TypographyH1, TypographyH2 } from '../Typography';

function Header() {
  return (
    <header className="flex items-center justify-between gap-6">
      <div className="space-y-2">
        <TypographyH1 text="Samuel Gomes" className="text-6xl font-bold" />
        <TypographyH2
          text="Full-Stack Engineer especializado em TypeScript, React, Next.js, Node.js e NestJS. Desenvolvo aplicações web modernas, escaláveis e crio experiências de comunicação inteligentes."
          className="text-muted-foreground text-lg font-normal"
        />
      </div>
      <Avatar className="hidden h-32 w-32 md:block">
        <AvatarImage src="/me.JPEG" className="object-cover" />
        <AvatarFallback>SG</AvatarFallback>
      </Avatar>
    </header>
  );
}

export default Header;
