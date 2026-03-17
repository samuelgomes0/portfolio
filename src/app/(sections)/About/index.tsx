import { TypographyH3, TypographyMuted } from '@/components/Typography';

function AboutSection() {
  return (
    <section>
      <TypographyH3 text="Sobre mim" className="font-bold" />
      <div className="mt-2 space-y-2">
        <TypographyMuted text="Full-Stack Engineer com mais de 5 anos de experiência nos ecossistema Node.js, Python e na plataforma Twilio, especializado no desenvolvimento e na escalabilidade de aplicações web, soluções de comunicação digital de alto volume e sistemas baseados em Inteligência Artificial." />
        <TypographyMuted text="Histórico de atuação em liderança técnica, arquitetura de sistemas distribuídos, desenvolvimento de chatbots e automações com n8n. Atualmente aprofundando estudos em Machine Learning e Deep Learning, com foco em Visão Computacional." />{' '}
      </div>
    </section>
  );
}

export default AboutSection;
