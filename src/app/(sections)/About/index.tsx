import { TypographyH3, TypographyMuted } from "@/components/Typography";

function AboutSection() {
  return (
    <section>
      <TypographyH3 text="Sobre mim" className="font-bold" />
      <TypographyMuted text="Software Engineer com paixão por criar soluções eficientes e modernas. Com formação em Sistemas de Informação, busco constantemente aprender e aplicar novas tecnologias para resolver problemas complexos e criar produtos de alto impacto. Atualmente, tenho focado em projetos que envolvem desde o desenvolvimento de APIs robustas até a criação de interfaces de usuário intuitivas. Inclusive, estou desenvolvendo o meu primeiro SaaS, que visa facilitar a gestão financeira pessoal." />
    </section>
  );
}

export default AboutSection;
