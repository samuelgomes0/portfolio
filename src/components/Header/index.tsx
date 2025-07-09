import Image from "next/image";
import { TypographyH1, TypographyH2 } from "../Typography";

function Header() {
  return (
    <header className="flex gap-2 justify-between items-center mt-12">
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
      <div className="h-32 w-32 overflow-hidden rounded-full flex-shrink-0">
        <Image
          src="/me.JPEG"
          alt="Samuel Gomes"
          width={128}
          height={128}
          className="w-full h-full object-cover"
        />
      </div>
    </header>
  );
}

export default Header;
