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
          <div className="z-10 flex h-min w-full flex-col gap-6 rounded-[10px] bg-[#EFF6FF] p-11 shadow-lightCard dark:bg-[#08203E] dark:shadow-darkCard md:w-7/12">
            <p className="text-xl font-bold">{name}</p>
            <p className="text-[#4B5563]">{description}</p>
            <div className="flex flex-wrap gap-x-2">
              {technologies.map((technology, index) => (
                <TechnoBadge key={index} sectionName={technology} />
              ))}
            </div>
            {(directLink || githubLink) && (
              <div className="flex items-center gap-4">
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
          <div className="left-0 top-1/2 hidden w-7/12 -translate-y-1/2 md:absolute md:block">
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
          <div className="right-0 top-1/2 hidden w-7/12 -translate-y-1/2 md:absolute md:block">
            <Image
              alt={`capture d'écran du projet intitulé ${name}`}
              height={800}
              width={800}
              src={imageSrc}
              className="rounded-[10px] brightness-75"
            />
          </div>
          <div className="z-10 flex h-min w-full flex-col gap-6 rounded-[10px] bg-[#EFF6FF] p-11 shadow-lightCard dark:bg-[#08203E] dark:shadow-darkCard md:w-7/12">
            <p className="text-xl font-bold">{name}</p>
            <p className="text-[#4B5563]">{description}</p>
            <div className="flex flex-wrap gap-x-2">
              {technologies.map((technology, index) => (
                <TechnoBadge key={index} sectionName={technology} />
              ))}
            </div>
            {(directLink || githubLink) && (
              <div className="flex items-center gap-4">
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
