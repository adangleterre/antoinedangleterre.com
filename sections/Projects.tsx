import ProjectCard from "@/components/ProjectCard"
import SectionBadge from "@/components/SectionBadge"

function Projects() {
  return (
    <>
        <SectionBadge sectionName={"Mes projets"} />
            <h2 className="text-3xl font-extrabold text-center mb-6 md:mb-10">Quelques projets personnels</h2>
        <div className="flex flex-col gap-12 lg:gap-20">
        <ProjectCard
          name={"antoinedangleterre.com"}
          description={"Explorez mon site personnel dédié au développement, un projet en constante évolution où je partage mes créations, mes expérimentations et mon parcours dans le monde de la programmation."}
          technologies={["Next JS", "React", "Tailwind CSS", "API", "Responsive", "Shadcn"]}
          imageSrc={"/images/Screenshot-Antoine-Dangleterre.png"}
          imagePosition={"right"}
          githubLink={"https://github.com/adangleterre/antoinedangleterre.com"}
          directLink={"https://antoinedangleterre.com"}
          />
        <ProjectCard
          name={"La data verte"}
          description={"Un site web créé en collaboration avec un autre developpeur, ce site récupère les données d'une API custom pour afficher des statistiques et des informations sur le club de foot de l'AS Saint-Etienne."}
          technologies={["NextJS", "React", "Tailwind CSS", "API", "Responsive", "Github Actions"]}
          imageSrc={"/images/Screenshot-La-data-verte.png"}
          imagePosition={"left"}
          githubLink={"https://github.com/adangleterre/la-data-verte"}
          />
        <ProjectCard
          name={"Kodiz"}
          description={"Le site mon auto-entreprise avec laquelle j'ai créé et designé des sites pour des entreprises de tous horizons"}
          technologies={["Blog", "SEO", "Marketing", "Webdesign", "UX/UI", "WordPress", "Maintenance"]}
          imageSrc={"/images/Screenshot-kodiz.png"}
          imagePosition={"right"}
          directLink={"https://kodiz.fr"}
          />
          </div>
    </>
  )
}

export default Projects