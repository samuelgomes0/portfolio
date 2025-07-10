import Header from "@/components/Header";
import { BlurFade } from "@/components/magicui/blur-fade";
import AboutSection from "./(sections)/About";
import ContactSection from "./(sections)/Contact";
import EducationSection from "./(sections)/Education";
import ProjectsSection from "./(sections)/Projects";
import SkillsSection from "./(sections)/Skills";
import WorkExperienceSection from "./(sections)/WorkExperience";

function Home() {
  return (
    <main className="mx-auto my-16 grid max-w-2xl gap-8 px-4 text-center md:text-left">
      <BlurFade duration={0.5} delay={0} inView>
        <Header />
      </BlurFade>

      <BlurFade duration={0.5} delay={0.05} inView>
        <AboutSection />
      </BlurFade>

      <BlurFade duration={0.5} delay={0.1} inView>
        <WorkExperienceSection />
      </BlurFade>

      <BlurFade duration={0.5} delay={0.15} inView>
        <EducationSection />
      </BlurFade>

      <BlurFade duration={0.5} delay={0.2} inView>
        <SkillsSection />
      </BlurFade>

      <BlurFade duration={0.5} delay={0.25} inView>
        <ProjectsSection />
      </BlurFade>

      <BlurFade duration={0.5} delay={0.3} inView>
        <ContactSection />
      </BlurFade>
    </main>
  );
}

export default Home;
