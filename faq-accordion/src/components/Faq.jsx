import { useState } from "react"

export function Faq ({ data }) {
  const [openState, setOpenState] = useState(false)
  const handleClick = () => {
    setOpenState(!openState)
  }
  return (
    <>
      <article className={`flex flex-col items-center ${openState ? "gap-4" : "gap-0"}`}>
        <div className="flex justify-between items-center w-full cursor-pointer hover:text-pink" onClick={handleClick}>
          <h2 className="font-bold">{data.question}</h2>
          <img src={openState ? "/assets/images/icon-minus.svg" : "/assets/images/icon-plus.svg"} alt="open state icon" />
        </div>
        <p className={`${openState ? "h-max" : "h-0"} overflow-hidden text-grayish-purple`}>{data.answer}</p>
      </article>
      <hr />
    </>
  )
}
