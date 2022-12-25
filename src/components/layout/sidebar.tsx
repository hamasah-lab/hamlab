import Link from 'next/link'

const Sidebar = () => {
  return (
    <div className="all fixed top-0 left-0 z-[800] h-full w-[250px] overflow-hidden bg-white shadow-md outline-none transition duration-500">
      <aside className="">
        <div className="inline-block h-16 w-full text-center leading-[60px]">
          <Link className="font-bold uppercase tracking-wide text-black no-underline" href="/">
            Hamlab
          </Link>
        </div>
      </aside>
    </div>
  )
}

export default Sidebar
