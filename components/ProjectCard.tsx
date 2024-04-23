import projectImage from "../public/images/6cFWO7S.jpg"
import Image from "next/image";
import Icons from "./Icons"
import TechnoBadge from "./TechnoBadge"

interface ProjectCardProps {
    name: string;
    description: string;
    directLink?: string;
    githubLink?: string;
    technologies: string[];
    image: string,
    imagePosition: "left" | "right"
}

function ProjectCard({ name, description, directLink, githubLink, image, imagePosition, technologies = [] }: ProjectCardProps) {
    if (imagePosition === "left") {
        return (
            <div className="flex items-center relative flex-row-reverse xl:min-h-[500px]">
                <div className="bg-[#EFF6FF] rounded-[10px] p-11 flex flex-col gap-6 w-12/12 md:w-7/12 shadow-projectCard z-10 h-min">
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
                <div className="w-7/12 hidden md:block md:absolute left-0 top-1/2 transform -translate-y-1/2">
                    <Image
                        alt={`capture d'écran du projet intitulé ${name}`}
                        height={800}
                        width={800}
                        src={projectImage}
                        className="rounded-[10px] brightness-75"
                    />
                </div>
            </div>
        )
    } else if (imagePosition === "right") {
        return (
            <div className="flex items-center relative xl:min-h-[500px]">
                <div className="w-7/12 hidden md:block md:absolute right-0 top-1/2 transform -translate-y-1/2">
                    <Image
                        alt={`capture d'écran du projet intitulé ${name}`}
                        height={800}
                        width={800}
                        src={projectImage}
                        className="rounded-[10px] brightness-75"
                    />
                </div>
                <div className="bg-[#EFF6FF] rounded-[10px] p-11 flex flex-col gap-6 w-12/12 md:w-7/12 shadow-projectCard z-10 h-min">
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

}

export default ProjectCard