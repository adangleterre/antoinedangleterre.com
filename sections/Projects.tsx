import ProjectCard from "@/components/ProjectCard"

function Projects() {
  return (
    <>
        <ProjectCard
          name={"La data verte"}
          description={"Un site web créé avec une connaissance, ce site récupère les données d'une API custom pour afficher des statistiques et des informations sur le club de foot de l'AS Saint-Etienne."}
          technologies={["Next JS", "React", "Tailwind CSS", "API", "Responsive", "Shadcn"]}
          image={""}
          imagePosition={"right"}
        />
        <ProjectCard
          name={"La data verte"}
          description={"Un site web créé avec une connaissance, ce site récupère les données d'une API custom pour afficher des statistiques et des informations sur le club de foot de l'AS Saint-Etienne."}
          technologies={["Next JS", "React", "Tailwind CSS", "API", "Responsive", "Shadcn"]}
          image={""}
          imagePosition={"left"}
        />
        <ProjectCard
          name={"La data verte"}
          description={"Un site web créé avec une connaissance, ce site récupère les données d'une API custom pour afficher des statistiques et des informations sur le club de foot de l'AS Saint-Etienne."}
          technologies={["Next JS", "React", "Tailwind CSS", "API", "Responsive", "Shadcn"]}
          image={""}
          imagePosition={"right"}
        />
    </>
  )
}

export default Projects