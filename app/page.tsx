import Hero from "@/sections/hero";
import About from "@/sections/about";
import Skills from "@/sections/skills";
import Projects from "@/sections/projects";
import CompetitiveProgramming from "@/sections/competitive-programming";
import Achievements from "@/sections/achievements";
import Timeline from "@/sections/timeline";
import Contact from "@/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <CompetitiveProgramming />
      <Achievements />
      <Timeline />
      <Contact />
    </>
  );
}
