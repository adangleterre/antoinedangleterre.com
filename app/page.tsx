import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Nav from "@/sections/Nav";
import Socials from "@/sections/Socials";

export default function Home() {
  return (
    <>
      <main className="container flex flex-col justify-between h-screen">
        <Nav />
        <section>
          <Hero />
        </section>
        <Footer />
      </main>
    </>
  );
}