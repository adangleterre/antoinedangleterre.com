interface badgeProps {
    sectionName: string;
}

function Badge({ sectionName }: badgeProps) {
  return (
    <div className="rounded-[10px] bg-lightSecondary-300 px-3 py-1 flex self-center text-sm text-primary-900 dark:text-[#E7F1FD] dark:bg-darkSecondary-300">
        {sectionName}
    </div>
  )
}

export default Badge