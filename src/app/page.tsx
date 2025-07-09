import Header from "@/components/Header";
import AboutSection from "./(sections)/About";
import EducationsSection from "./(sections)/Educations";
import WorkExperienceSection from "./(sections)/WorkExperience";

function Home() {
  return (
    <main>
      <Header />
      <AboutSection />
      <WorkExperienceSection />
      <EducationsSection />
    </main>
  );
}

export default Home;
