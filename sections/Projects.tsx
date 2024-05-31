import ProjectCard from "@/components/ProjectCard"
import RevealContent from "@/components/ReavealContent"
import SectionBadge from "@/components/SectionBadge"

function Projects() {
  return (
    <>
      <RevealContent>
        <>
          <SectionBadge sectionName={"Mes projets"} />
          <h2 className="text-3xl font-extrabold text-center mb-6 md:mb-10">Quelques projets personnels</h2>
        </>
      </RevealContent>
      <div className="flex flex-col gap-12 lg:gap-20">
        <ProjectCard
          name={"antoinedangleterre.com"}
          description={"Mon site personnel dédié au développement, un projet en constante évolution où je partage mes projets personnels, mon parcours, ainsi que mes informations de contact."}
          technologies={["Next JS", "React.JS", "Tailwind CSS", "Framer motion", "Responsive", "Shadcn"]}
          imageSrc={"/images/Screenshot-Antoine-Dangleterre.png"}
          imagePosition={"right"}
          githubLink={"https://github.com/adangleterre/antoinedangleterre.com"}
          directLink={"https://antoinedangleterre.com"}
        />
        <ProjectCard
          name={"La data verte"}
          description={"Un site web créé en collaboration avec un autre developpeur, ce site récupère les données d'une API custom pour afficher des statistiques et des informations sur le club de foot de l'AS Saint-Etienne."}
          technologies={["NextJS", "React.JS", "Tailwind CSS", "API", "Responsive", "Github Actions"]}
          imageSrc={"/images/Screenshot-La-data-verte.png"}
          imagePosition={"left"}
          githubLink={"https://github.com/adangleterre/la-data-verte"}
          directLink={"https://la-data-verte.vercel.app/"}
        />
        <ProjectCard
          name={"Front-end practice"}
          description={"Frontendpractice.com est un site proposant des challenges pour les développeurs front-end. L'objectif est simple : recréer des sites existants d'entreprises réelles telles que Trello, Starbucks, Shopify, Nintendo, etc."}
          technologies={["React.JS", "Tailwind CSS", "Responsive"]}
          imageSrc={"/images/Screenshot-Frontend-practice.png"}
          imagePosition={"right"}
          githubLink={"https://github.com/adangleterre/FrontEndPractice"}
        />
        <ProjectCard
          name={"Kodiz"}
          description={"Le site mon auto-entreprise avec laquelle j'ai créé et designé des sites pour des entreprises de tous horizons"}
          technologies={["Blog", "SEO", "Marketing", "Webdesign", "UX/UI", "WordPress", "Maintenance"]}
          imageSrc={"/images/Screenshot-kodiz.png"}
          imagePosition={"left"}
          directLink={"https://kodiz.fr"}
        />
      </div>
    </>
  )
}

export default Projects