import { useEffect, useState } from "react"
import { MediaCard } from "./components/MediaCard"
import { OverviewCard } from "./components/OverviewCard"
import { Switcher } from "./components/ui/Switcher"
import { useFetch } from "./js/useFetch"
import { URL } from "./js/const"

export function App() {
  const data = useFetch(URL)
  const [lightTheme, setLightTheme] = useState(false)

  const theme = {
    appBackground: lightTheme ? "bg-WhiteBg" : "bg-veryDarkBlue md:bg-veryDarkBluePattern",
    textWhiteBlack: lightTheme ? "text-veryDarkBlueText" : "text-whiteText",
    cardBackground: lightTheme ? "bg-veryPaleBlue" : "bg-darkDesaturatedBlue",
    cardHover: lightTheme ? "hover:bg-lightGrayishBlue" : "hover:bg-darkDesaturatedBlueHover"
  }

  return (
    <>
      <article className={"xl:px-48 lg:px-20 px-5 py-9 w-[100%] flex flex-col gap-10 items-center " + theme["appBackground"]}>
        <header className="w-full font-bold md:flex md:justify-between md:items-center">
          <div>
            <h1 className={"text-2xl " + theme["textWhiteBlack"]}>Social Media Dashboard</h1>
            <span>Total Followers: 23,004</span>
          </div>
          <hr className="my-3 bg-desaturatedBlueText h-[1px] border-none md:hidden" />
          <div className="flex justify-between items-center md:gap-4">
            <span>Dark Mode</span>
            <Switcher lightTheme={lightTheme} setLightTheme={setLightTheme} />
          </div>
        </header>

        <section className="w-full grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4">
          {data?.mediaData.map((data) => (
            <MediaCard
              key={data.id}
              data={data}
              theme={theme}
            />
          ))}
        </section>

        <section className="w-full flex flex-col gap-5">
          <h2 className={"text-2xl font-bold " + theme["textWhiteBlack"]}>Overview - Today</h2>
          <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4">
            {data?.overviewData.map((data) => (
              <OverviewCard
                key={data.id}
                data={data}
                theme={theme}
              />
            ))}
          </div>
        </section>
      </article>
    </>
  )
}