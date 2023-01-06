'use client'
import Image from 'next/image'
import { HiChevronDown, HiOutlineBell, HiOutlineMail } from 'react-icons/hi'

import { useLayoutContext } from '~/contexts/layout-context'
import clsxm from '~/utils/clsxm'

import ButtonDropdown from './button-dropdown'
import profile from './profile.png'
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
      <ul className="flex">
        <li className="relative">
          <ButtonDropdown icon={<HiOutlineMail />} />
        </li>
        <li className="relative">
          <ButtonDropdown icon={<HiOutlineBell />} />
        </li>
        <li className="relative px-4">
          <button className="inline-flex h-full items-center font-semibold text-white">
            <Image
              src={profile}
              alt="Profile"
              width={28}
              height={28}
              className="h-[28px] w-[28px] overflow-hidden rounded-full"
            />
            <p className="ml-3 mr-1 hidden lg:inline-block">Hi, Admin</p>
            <HiChevronDown />
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
