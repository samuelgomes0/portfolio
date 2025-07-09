import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TypographyH1, TypographyH2 } from "../Typography";

function Header() {
  return (
    <header className="flex gap-6 justify-between mt-12">
      <div className="space-y-2">
        <TypographyH1
          text="Oi, sou o Samuel 👋"
          className="text-6xl font-bold"
        />
        <TypographyH2
          text="Software Engineer especializado em TypeScript, Next.js, Node.js e Twilio. Desenvolvo aplicações web modernas, escaláveis e crio experiências de comunicação inteligentes."
          className="text-xl font-normal"
        />
      </div>
      <Avatar className="h-32 w-32 hidden md:block">
        <AvatarImage src="/me.JPEG" className="object-cover" />
        <AvatarFallback>SG</AvatarFallback>
      </Avatar>
    </header>
  );
}

export default Header;
