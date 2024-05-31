import { motion } from "framer-motion";

function SkillsBadge() {
    const skills = ["React.JS", "Next.JS", "JavaScript", "TypeScript", "Tailwind CSS", "Bootstrap", "Framer motion", "Jest", "React testing" ,"Git", "Github", "Figma", "Adobe XD", "Accessibilité numérique"]
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
                delay: 1 + (0.10 * index),
            }
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
                    className="mx-2 overflow-hidden rounded-md shadow-lightButton dark:shadow-darkButton text-lg font-semibold bg-[#B4D0F0] text-primary-900 dark:text-[#000000] dark:bg-darkSecondary-300 px-4 py-1 my-3 cursor-default"
                >
                    {skill}
                </motion.div>
            ))}
        </div>
    )
}

export default SkillsBadge