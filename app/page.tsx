import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Experiences from "@/sections/Experiences";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";

export default function Home() {
  return (
    <>
      <main>
        <section className="h-[60vh]">
          <Hero />
        </section>
        <section>
          <About />
        </section>
        <section>
          <Experiences />
        </section>
        <section>
          <Projects />
        </section>
        <section>
          <Contact />
        </section>
      </main>
    </>
  );
}