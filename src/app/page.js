import AboutSection from "./components/homepage/about";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Skills from "./components/homepage/skills";
import Projects from "./components/homepage/projects";
import Education from "./components/homepage/education";


export default async function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
    </>
  );
}
