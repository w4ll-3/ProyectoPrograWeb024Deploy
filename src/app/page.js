import { personalData } from "../../utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import axios from "axios";
import Blog from "./components/homepage/blog";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";

async function getData() {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BLOGS_API}?username=${personalData.devUsername}`
    );

    const data = response.data;

    const filtered = data
      .filter((item) => item?.cover_image)
      .sort(() => Math.random() - 0.5);

    return filtered;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}

export default async function Home() {
  const blogs = await getData();

  return (
    <>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Blog blogs={blogs} />
      <ContactSection />
    </>
  );
}
