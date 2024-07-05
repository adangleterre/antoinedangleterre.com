type technoBadgeProps = {
  sectionName: string;
};

function TechnoBadge({ sectionName }: technoBadgeProps) {
  return (
    <div className="flex justify-center mb-3">
      <div className="rounded-[20px] bg-[#B4D0F0] text-primary-900 dark:text-[#E7F1FD] dark:bg-darkSecondary-300 px-4 py-1 cursor-default">
        {sectionName}
      </div>
    </div>
  );
}

export default TechnoBadge;
