export function Header({ data }) {
  return (
    <header className="flex items-center justify-start gap-10">
      <img src={data.src} alt={data.icon_name + ' icon'} height={24} width={24} />
      <h1 className="text-3xl font-extrabold">{data.title}</h1>
    </header>
  )
}
