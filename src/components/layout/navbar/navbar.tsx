import SearchBar from './search-bar'

const Navbar = () => {
  return (
    <nav className="absolute left-[5px] right-0 z-[890] flex h-[70px] flex-wrap items-center justify-between bg-transparent py-2 px-4 transition-all duration-500 md:left-[250px] md:right-[5px] md:flex-nowrap">
      <SearchBar />
    </nav>
  )
}

export default Navbar
