import { TypographyH1, TypographyH2 } from "../Typography";

function Header() {
  return (
    <header>
      <TypographyH1 text="Oi, eu sou o Samuel 👋" className="text-5xl" />
      <TypographyH2
        text="Software Engineer especializado em TypeScript, Next.js e Node.js. Construo aplicações web modernas, escaláveis e experiências de comunicação inteligentes com Twilio."
        className="text-xl font-normal"
      />
    </header>
  );
}

export default Header;
