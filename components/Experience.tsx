interface ExperienceProps {
  post?: string, 
  dateStart: number,
  dateEnd?: number,
  company?: string,
}

function Experience({ post, company, dateStart, dateEnd }: ExperienceProps) {
  return (
    <div className="bg-lightSecondary-300 rounded-xl p-6 sm:p-8 md:p-10">
      <div className="flex flex-col md:flex-row md:gap-6 gap-1">
        <div className="flex text-lightPrimary-700 flex-none">{dateStart} - {dateEnd ? dateEnd : "Auj."}</div>
        <div className="flex flex-col gap-3">
          <h3 className="text-lightPrimary-900 font-openSans flex-0 font-bold text-lg mb-2">{post} | {company}</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. </p>
        </div>
      </div>
    </div>
  )
}

export default Experience