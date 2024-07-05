type technoBadgeProps = {
  sectionName: string;
};

function TechnoBadge({ sectionName }: technoBadgeProps) {
  return (
    <div className="mb-3 flex justify-center">
      <div className="text-primary-900 cursor-default rounded-[20px] bg-[#B4D0F0] px-4 py-1 dark:bg-darkSecondary-300 dark:text-[#E7F1FD]">
        {sectionName}
      </div>
    </div>
  );
}

export default TechnoBadge;
