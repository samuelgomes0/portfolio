import Header from '@/components/Header';
import AboutSection from './(sections)/About';
import ContactSection from './(sections)/Contact';
import EducationSection from './(sections)/Education';
import ProjectsSection from './(sections)/Projects';
import SkillsSection from './(sections)/Skills';
import WorkExperienceSection from './(sections)/WorkExperience';

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
