'use client'
import { useLayoutContext } from '~/contexts/layout-context'
import clsxm from '~/utils/clsxm'

import SearchBar from './search-bar'
import SidebarToggle from './sidebar-toggle'

const Navbar = () => {
  const { isSidebarOpen } = useLayoutContext()

  return (
    <nav
      className={clsxm(
        'absolute  right-0 z-[890] flex h-[70px] flex-wrap items-center justify-between bg-transparent py-2 px-4 transition-all duration-500 md:right-[5px] md:flex-nowrap',
        isSidebarOpen ? 'left-0' : 'left-[5px] md:left-[250px]'
      )}
    >
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
