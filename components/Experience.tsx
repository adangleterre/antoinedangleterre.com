import RevealContent from "@/components/ReavealContent";

type ExperienceProps = {
  post: string;
  dateStart: number;
  dateEnd?: number;
  company: string;
  children?: React.ReactNode;
};

function Experience({
  post,
  company,
  dateStart,
  dateEnd,
  children,
}: ExperienceProps) {
  return (
    <>
      <RevealContent style="flex flex-col md:flex-row md:gap-6 gap-1 bg-lightSecondary-300 dark:bg-[#163E6C] shadow-lightCard dark:shadow-darkCard rounded-xl p-6 sm:p-8 md:p-10 lg:w-10/12 self-center">
        <>
          <div className="flex flex-none text-lightPrimary-700 dark:text-darkPrimary-700">
            {dateStart} - {dateEnd ? dateEnd : "Auj."}
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="mb-2 flex font-openSans text-lg font-bold text-lightPrimary-900 dark:text-darkPrimary-900">
              {post} | {company}
            </h3>
            <div className="flex flex-col gap-6 dark:text-[#BCD2EF]">
              {children}
            </div>
          </div>
        </>
      </RevealContent>
    </>
  );
}

export default Experience;
