import SearchBar from './search-bar'
import SidebarToggle from './sidebar-toggle'

const Navbar = () => {
  return (
    <nav className="absolute left-[5px] right-0 z-[890] flex h-[70px] flex-wrap items-center justify-between bg-transparent py-2 px-4 transition-all duration-500 md:left-[250px] md:right-[5px] md:flex-nowrap">
      <form className="mr-auto flex flex-wrap items-center">
        <ul className="mr-3 flex">
          <li>
            <SidebarToggle />
          </li>
        </ul>
        <SearchBar />
      </form>
    </nav>
  )
}

export default Navbar
