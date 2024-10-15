import { statusColor } from "../js/const"

export function OverviewCard({ data, theme }) {
  return (
    <article className={`p-5 rounded-[4px] w-full flex flex-col justify-between gap-5 cursor-pointer ${theme["cardBackground"]} ${theme["textWhiteBlack"]} ${theme["cardHover"]}`} >
      <div className="flex justify-between items-start">
        <h3 className="text-desaturatedBlueText">{data.title}</h3>
        <img src={data.socialMediaIcon} alt={data.socialMediaName + " icon"} />
      </div>

      <div className="flex justify-between items-end">
        <span className={theme["textWhiteBlack"] + " text-xl font-bold"}>{data.count}</span>
        <div className="flex justify-center items-center gap-1">
          <img src={data.statusIcon} alt="status icon" />
          <span className={`text-sm ${statusColor[data.status]}`}>{data.statusNumber}%</span>
        </div>
      </div>
    </article>
  )
}