import { TypographyH3, TypographyMuted } from '@/components/Typography';

function AboutSection() {
  return (
    <section>
      <TypographyH3 text="Sobre mim" className="font-bold" />
      <div className="mt-2 space-y-2">
        <TypographyMuted text="Engenheiro de Software Full-Stack com 4+ anos de experiência na construção de sistemas escaláveis e orientados a eventos no ecossistema TypeScript. Especialista em CPaaS Twilio (Flex, Conversations API, Serverless) e arquitetura de contact center omnichannel, com histórico comprovado de liderança técnica de squads e modernização de plataformas legadas." />
        <TypographyMuted text="Foco rigoroso em Arquitetura Limpa, Observabilidade e entrega de melhorias mensuráveis em ambientes de microsserviços distribuídos. Atualmente aprofundando estudos em Machine Learning e Deep Learning, com foco em Visão Computacional." />
      </div>
    </section>
  );
}

export default AboutSection;
