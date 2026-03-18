import Header from '@/components/Header';
import type { Metadata } from 'next';
import AboutSection from './(sections)/About';
import ContactSection from './(sections)/Contact';
import EducationSection from './(sections)/Education';
import ProjectsSection from './(sections)/Projects';
import SkillsSection from './(sections)/Skills';
import WorkExperienceSection from './(sections)/WorkExperience';

export const metadata: Metadata = {
  title: 'Samuel Gomes | Full-Stack Engineer & Pesquisador',
  description:
    'Portfólio de Samuel Gomes, Engenheiro de Software Full-Stack com 4+ anos de experiência em TypeScript, CPaaS Twilio e arquitetura de contact center omnichannel. Especialista em sistemas escaláveis, microsserviços e liderança técnica.',
  openGraph: {
    url: 'https://samuelgomes.com',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Samuel Gomes — Full-Stack Engineer & Pesquisador',
      },
    ],
  },
};

function Home() {
  return (
    <main className="border-border bg-background/80 mx-auto my-16 grid max-w-2xl gap-8 rounded-lg border p-8 text-center shadow-lg backdrop-blur-md md:text-left">
      <Header />

      <AboutSection />

      <WorkExperienceSection />

      <EducationSection />

      <SkillsSection />

      <ProjectsSection />

      <ContactSection />
    </main>
  );
}

export default Home;
