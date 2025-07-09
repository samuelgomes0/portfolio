import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ThemeToggle from "@/components/ThemeToggle";
import AboutSection from "./(sections)/About";
import EducationsSection from "./(sections)/Educations";
import ProjectsSection from "./(sections)/Projects";
import SkillsSection from "./(sections)/Skills";
import WorkExperienceSection from "./(sections)/WorkExperience";

function Home() {
  return (
    <main className="mx-auto px-4 py-8 grid gap-8 max-w-3xl">
      <div className="absolute top-4 right-4 z-10">
        <ThemeToggle />
      </div>
      <Header />
      <AboutSection />
      <WorkExperienceSection />
      <EducationsSection />
      <SkillsSection />
      <ProjectsSection />
      <Footer />
    </main>
  );
}

export default Home;
