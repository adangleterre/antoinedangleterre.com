import SectionBadge from "@/components/SectionBadge"
import Image from "next/image"

function About() {
    return (
        <div>
            <SectionBadge sectionName="Qui suis-je ?" />
            <div className="flex flex-col md:flex-row md:gap-6">
                <div className="w-12/12 md:w-5/12 mb-6 flex justify-center md:self-start">
                    <Image src={"/images/lightAboutPicture.png"} className="self-center dark:hidden" alt="" height={400} width={400} />
                    <Image src={"/images/darkAboutPicture.png"} className="self-center hidden dark:block" alt="" height={400} width={400} />
                </div>
                <div className="w-12/12 md:w-7/12 xl:w-5/12">
                    <h2 className="text-3xl font-bold mb-6">A propos de moi</h2>
                    <div className="flex flex-col gap-4">
                        <p>Bienvenue ! Je m'appelle Antoine, j'ai 27 ans et je suis passionné par le monde du web et le développement en général et cela depuis 2015.</p>
                        <p>Je travaille la plupart du temps avec React.js et j'aime créer des interfaces plaisantes, compréhensibles et performantes pour ses utilisateurs.</p>
                        <p>Mais mon enthousiasme envers le web ne s'arrète pas au développement ! J'ai déjà transmis mes connaissances en formant des étudiants et des collègues, je fais parfois un peu de SEO et de web design. Je m'intéresse également à l'accessibilité numérique, un enjeu que je trouve bien trop souvent sous-estimé par les acteurs du numérique.</p>
                        <p>Quand je ne suis pas derrière mon clavier, je regarde des films, je construit des claviers méchaniques ou alors je fais un peu de sport.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About