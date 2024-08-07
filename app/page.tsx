import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Experiences from "@/sections/Experiences";
import Hero from "@/sections/Hero";
import MarqueeSection from "@/sections/MarqueeSection";
import Projects from "@/sections/Projects";

export default function Home() {
  return (
    <>
      <main>
        <section className="mb-0 h-[70vh]">
          <Hero />
        </section>
        <section>
          <MarqueeSection />
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
