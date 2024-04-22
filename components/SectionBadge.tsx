interface badgeProps {
  sectionName: string;
}

function SectionBadge({ sectionName }: badgeProps) {
  return (
    <div className="flex justify-center mb-3">
      <div className="rounded-[10px] bg-lightSecondary-300 text-primary-900 dark:text-[#E7F1FD] dark:bg-darkSecondary-300 px-3 py-1">
        {sectionName}
      </div>
    </div>
  )
}

export default SectionBadge