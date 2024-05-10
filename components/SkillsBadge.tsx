type SkillsProps = {
    skills: string[];
}

function SkillsBadge({ skills = [] }: SkillsProps) {
    return (
        <>
            {skills.map((skill, index) => (
                <div key={index}>
                    {skill}
                </div>
            ))}
        </>
    )
}

export default SkillsBadge