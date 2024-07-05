import { motion } from "framer-motion";

function SkillsBadge() {
  const skills = [
    "React.JS",
    "Next.JS",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "Bootstrap",
    "Framer motion",
    "Jest",
    "React testing",
    "Git",
    "Github",
    "Figma",
    "Adobe XD",
    "Accessibilité numérique",
  ];
  const shuffledSkills = skills.sort(() => Math.random() - 0.5);

  const animationVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 1 + 0.1 * index,
      },
    }),
  };

  return (
    <div className="flex overflow-hidden">
      {shuffledSkills.map((skill, index) => (
        <motion.div
          key={index}
          variants={animationVariants}
          initial="initial"
          animate="animate"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          custom={index}
          className="text-primary-900 mx-2 my-3 cursor-default overflow-hidden rounded-md bg-[#B4D0F0] px-4 py-1 text-lg font-semibold shadow-lightButton dark:bg-darkSecondary-300 dark:text-[#000000] dark:shadow-darkButton"
        >
          {skill}
        </motion.div>
      ))}
    </div>
  );
}

export default SkillsBadge;
