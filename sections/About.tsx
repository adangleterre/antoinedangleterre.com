"use client";

import RevealContent from "@/components/ReavealContent";
import SectionBadge from "@/components/SectionBadge";
import { motion } from "framer-motion";
import Image from "next/image";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 1 }}
    >
      <RevealContent>
        <>
          <SectionBadge sectionName="Qui suis-je ?" />
          <div className="flex flex-col md:flex-row md:gap-6">
            <div className="w-12/12 mb-6 flex justify-center md:w-5/12 md:self-start">
              <Image
                src={"/images/lightAboutPicture.png"}
                className="self-center dark:hidden"
                alt=""
                height={400}
                width={400}
              />
              <Image
                src={"/images/darkAboutPicture.png"}
                className="hidden self-center dark:block"
                alt=""
                height={400}
                width={400}
              />
            </div>
            <div className="w-12/12 md:w-7/12 xl:w-5/12">
              <h2 className="mb-6 text-3xl font-bold">A propos de moi</h2>
              <div className="flex flex-col gap-4">
                <p>
                  Bienvenue ! Je m&quot;appelle Antoine, j&quot;ai 27 ans et je
                  suis passionné par le monde du web et le développement en
                  général et cela depuis 2015.
                </p>
                <p>
                  Je travaille la plupart du temps avec React.js et j&quot;aime
                  créer des interfaces plaisantes, compréhensibles et
                  performantes pour ses utilisateurs.
                </p>
                <p>
                  Mais mon enthousiasme envers le web ne s&quot;arrête pas au
                  développement ! J&quot;ai déjà transmis mes connaissances en
                  formant des étudiants et des collègues, je fais parfois un peu
                  de SEO et de web design. Je m&quot;intéresse également à
                  l&quot;accessibilité numérique, un enjeu que je trouve bien
                  trop souvent sous-estimé par les acteurs du numérique.
                </p>
                <p>
                  Lorsque je ne suis pas devant du code, je regarde des films,
                  je pratique ou regarde du sport, et je joue aux jeux vidéo.
                </p>
              </div>
            </div>
          </div>
        </>
      </RevealContent>
    </motion.div>
  );
}

export default About;
