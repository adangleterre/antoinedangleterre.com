import RevealContent from "@/components/ReavealContent";
import Image from "next/image";
import Icons from "./Icons";
import TechnoBadge from "./TechnoBadge";

type ProjectCardProps = {
  name: string;
  description: string;
  directLink?: string;
  githubLink?: string;
  technologies: string[];
  imageSrc: string;
  imagePosition: "left" | "right";
};

function ProjectCard({
  name,
  description,
  directLink,
  githubLink,
  imageSrc,
  imagePosition,
  technologies = [],
}: ProjectCardProps) {
  if (imagePosition === "left") {
    return (
      <RevealContent style="flex items-center relative flex-row-reverse xl:min-h-[500px]">
        <>
          <div className="bg-[#EFF6FF] dark:bg-[#08203E] rounded-[10px] p-11 flex flex-col gap-6 w-12/12 md:w-7/12 shadow-lightCard dark:shadow-darkCard z-10 h-min">
            <p className="font-bold text-xl">{name}</p>
            <p className="text-[#4B5563]">{description}</p>
            <div className="flex flex-wrap gap-x-2">
              {technologies.map((technology, index) => (
                <TechnoBadge key={index} sectionName={technology} />
              ))}
            </div>
            {(directLink || githubLink) && (
              <div className="flex gap-4 items-center">
                {directLink && (
                  <a href={directLink} target="_blank">
                    <Icons name="lien" size={30} />
                  </a>
                )}
                {githubLink && (
                  <a href={githubLink} target="_blank">
                    <Icons name="github" size={25} />
                  </a>
                )}
              </div>
            )}
          </div>
          <div className="w-7/12 hidden md:block md:absolute left-0 top-1/2 transform -translate-y-1/2">
            <Image
              alt={`capture d'écran du projet intitulé ${name}`}
              height={800}
              width={800}
              src={imageSrc}
              className="rounded-[10px] brightness-75"
            />
          </div>
        </>
      </RevealContent>
    );
  } else if (imagePosition === "right") {
    return (
      <RevealContent style="flex items-center relative xl:min-h-[500px]">
        <>
          <div className="w-7/12 hidden md:block md:absolute right-0 top-1/2 transform -translate-y-1/2">
            <Image
              alt={`capture d'écran du projet intitulé ${name}`}
              height={800}
              width={800}
              src={imageSrc}
              className="rounded-[10px] brightness-75"
            />
          </div>
          <div className="bg-[#EFF6FF] dark:bg-[#08203E] rounded-[10px] p-11 flex flex-col gap-6 w-12/12 md:w-7/12 shadow-lightCard dark:shadow-darkCard z-10 h-min">
            <p className="font-bold text-xl">{name}</p>
            <p className="text-[#4B5563]">{description}</p>
            <div className="flex flex-wrap gap-x-2">
              {technologies.map((technology, index) => (
                <TechnoBadge key={index} sectionName={technology} />
              ))}
            </div>
            {(directLink || githubLink) && (
              <div className="flex gap-4 items-center">
                {directLink && (
                  <a href={directLink} target="_blank">
                    <Icons name="lien" size={30} />
                  </a>
                )}
                {githubLink && (
                  <a href={githubLink} target="_blank">
                    <Icons name="github" size={25} />
                  </a>
                )}
              </div>
            )}
          </div>
        </>
      </RevealContent>
    );
  }
}

export default ProjectCard;
