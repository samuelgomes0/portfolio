import { TypographyH2, TypographyMuted } from '@/components/Typography';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import contactItems from './items';

function ContactSection() {
  return (
    <section className="my-12 flex flex-col items-center justify-center text-center">
      <TypographyH2 text="Entre em Contato" className="text-4xl font-bold" />
      <div className="mt-2 space-y-2">
        <TypographyMuted
          text="Estou sempre aberto a boas conversas, novas oportunidades e projetos desafiadores. Se quiser falar sobre uma vaga, colaboração ou até mesmo uma ideia que possamos construir juntos, sinta-se à vontade para entrar em contato."
          className="text-lg"
        />
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {contactItems.map(({ name, href, icon: Icon, external }) => (
          <Button key={name} asChild variant="outline">
            <Link
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
            >
              <Icon aria-hidden="true" />
              {name}
            </Link>
          </Button>
        ))}
      </div>
    </section>
  );
}

export default ContactSection;
