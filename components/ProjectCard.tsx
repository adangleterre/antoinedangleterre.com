import Icons from "./Icons"
import TechnoBadge from "./TechnoBadge"

interface ProjectCardProps {
    name: string;
    description: string;
    directLink?: string;
    githubLink?: string;
    technologies: string[]; // Ajout de la prop pour les technologies
}

function ProjectCard({ name, description, directLink, githubLink, technologies = [] }: ProjectCardProps) {
    return (
        <div>
            <div className="bg-[#EFF6FF] rounded-[10px] p-11 flex flex-col gap-6 w-7/12">
                <p className="font-bold text-xl">{name}</p>
                <p className="text-[#4B5563]">{description}</p>
                <div className="flex flex-wrap gap-x-2">
                    {technologies.map((technology, index) => (
                        <TechnoBadge key={index} sectionName={technology} />
                    ))}
                </div>
                {(directLink || githubLink) &&
                    <div className="flex gap-4 items-center">
                        {directLink &&
                            <a href={directLink}>
                                <Icons name="lien" size={30} />
                            </a>
                        }
                        {githubLink &&
                            <a href={githubLink}>
                                <Icons name="github" size={25} />
                            </a>
                        }
                    </div>
                }
            </div>
        </div>
    )
}

export default ProjectCard