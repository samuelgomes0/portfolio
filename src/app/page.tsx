import Header from "@/components/Header";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import ThemeToggle from "@/components/ThemeToggle";
import AboutSection from "./(sections)/About";
import EducationSection from "./(sections)/Education";
import ProjectsSection from "./(sections)/Projects";
import SkillsSection from "./(sections)/Skills";
import WorkExperienceSection from "./(sections)/WorkExperience";

function Home() {
  return (
    <main className="mx-auto grid max-w-2xl gap-8 px-4 py-8 text-center md:text-left">
      <ScrollProgress />
      <div className="absolute top-4 right-4 z-10">
        <ThemeToggle />
      </div>
      <Header />
      <AboutSection />
      <WorkExperienceSection />
      <EducationSection />
      <SkillsSection />
      <ProjectsSection />
    </main>
  );
}

export default Home;
