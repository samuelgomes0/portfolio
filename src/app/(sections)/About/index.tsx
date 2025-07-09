import { TypographyH3, TypographyMuted } from "@/components/Typography";

function AboutSection() {
  return (
    <section>
      <TypographyH3 text="Sobre mim" className="font-bold" />
      <div className="space-y-2">
        <TypographyMuted text="Atualmente atuo na Compass UOL, desenvolvendo soluções de IA conversacional e comunicação digital para o setor de saúde, com foco em fluxos de atendimento inteligentes, contact centers escaláveis e integrações robustas usando Twilio e Google Cloud Platform." />
        <TypographyMuted text="Também lidero o Front-End em um projeto que cria uma plataforma de tradução e revisão automatizada de textos científicos, aplicando IA para garantir qualidade técnica e eficiência na produção de artigos." />
        <TypographyMuted text="Paralelamente, sou idealizador do Numora, uma plataforma SaaS de gestão financeira pessoal, criada para ajudar pessoas a entenderem e planejarem melhor sua vida financeira." />
      </div>
    </section>
  );
}

export default AboutSection;
