import ProjectCard from "@/components/ProjectCard";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Experiences from "@/sections/Experiences";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Nav from "@/sections/Nav";
import Projects from "@/sections/Projects";

export default function Home() {
  return (
    <>
      <main className="container flex flex-col">
        <Nav />
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
        <Footer />
      </main>
    </>
  );
}