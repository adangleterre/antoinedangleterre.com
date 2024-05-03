interface ExperienceProps {
  post: string,
  dateStart: number,
  dateEnd?: number,
  company: string,
  children?: React.ReactNode,
}

function Experience({ post, company, dateStart, dateEnd, children }: ExperienceProps) {
  return (
    <>
      <div className="flex flex-col md:flex-row md:gap-6 gap-1 bg-lightSecondary-300 dark:bg-[#163E6C] shadow-lightCard dark:shadow-darkCard rounded-xl p-6 sm:p-8 md:p-10 lg:w-10/12 self-center">
        <div className="flex text-lightPrimary-700 dark:text-darkPrimary-700 flex-none">{dateStart} - {dateEnd ? dateEnd : "Auj."}</div>
        <div className="flex flex-col gap-3">
          <h3 className="text-lightPrimary-900 dark:text-darkPrimary-900 font-openSans flex-0 font-bold text-lg mb-2">{post} | {company}</h3>
          <div className="dark:text-[#BCD2EF] flex flex-col gap-3">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

export default Experience