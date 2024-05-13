function SkillsBadge() {
    const skills = ["ReactJs", "NextJs", "JavaScript", "TypeScript","TailwindCSS", "Bootstrap", "Git", "Github", "Figma", "Adobe XD", "Accessibilité numérique"]
    const shuffledSkills = skills.sort(() => Math.random() - 0.5);

    return (
        <div className="flex">
            {shuffledSkills.map((skill, index) => (
                <div key={index} className="mx-2 rounded-md text-lg font-semibold bg-[#B4D0F0] text-primary-900 dark:text-[#000000] dark:bg-darkSecondary-300 px-4 py-1 cursor-default">
                    {skill}
                </div>
            ))}
        </div>
    )
}

export default SkillsBadge