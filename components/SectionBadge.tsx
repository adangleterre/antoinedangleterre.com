interface sectionBadgeProps {
  sectionName: string;
}

function SectionBadge({ sectionName }: sectionBadgeProps) {
  return (
    <div className="flex justify-center mb-3">
      <div className="rounded-[10px] bg-lightSecondary-300 text-primary-900 dark:text-[#E7F1FD] dark:bg-darkSecondary-300 px-3 py-1 cursor-default">
        {sectionName}
      </div>
    </div>
  )
}

export default SectionBadge