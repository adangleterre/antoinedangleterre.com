type sectionBadgeProps = {
  sectionName: string;
};

function SectionBadge({ sectionName }: sectionBadgeProps) {
  return (
    <div className="mb-3 flex justify-center">
      <div className="text-primary-900 cursor-default rounded-[10px] bg-lightSecondary-300 px-3 py-1 dark:bg-darkSecondary-300 dark:text-[#E7F1FD]">
        {sectionName}
      </div>
    </div>
  );
}

export default SectionBadge;
