import { Header } from "./ui/Header"
import { Faq } from "./Faq"
import { header_data, faq_data } from "../js/const"

export function Card() {
  return (
    <article className="w-[90%] max-w-[520px] bg-white p-5 rounded-xl flex flex-col gap-5 font-work-sans">
      <Header data={header_data} />
      <div className="flex flex-col gap-5">
        {
          faq_data.map((data) => (
            <Faq key={data.id} data={data} />
          ))
        }
      </div>
    </article>
  )
}
