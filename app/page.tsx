import ProjectCard from "@/components/ProjectCard";
import Contact from "@/sections/Contact";
import Experiences from "@/sections/Experiences";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Nav from "@/sections/Nav";
import Projects from "@/sections/Projects";

export default function Home() {
  return (
    <>
      <main className="container flex flex-col justify-between h-screen">
        <Nav />
        <section>
          <Hero />
        </section>
        <section>
          <Experiences />
        </section>
        <section className="mb-24 md:mb-32">
          <Contact />
        </section>
        <section className="flex flex-col gap-12 lg:gap-36">
          <Projects />
        </section>
        <Footer />
      </main>
    </>
  );
}