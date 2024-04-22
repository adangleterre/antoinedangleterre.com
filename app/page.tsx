import Contact from "@/sections/Contact";
import Experiences from "@/sections/Experiences";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Nav from "@/sections/Nav";

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
        <Footer />
      </main>
    </>
  );
}