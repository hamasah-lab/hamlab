'use client'
import Image from 'next/image'
import Link from 'next/link'
import { HiArrowRightOnRectangle, HiChevronDown, HiOutlineBolt, HiOutlineUser, HiOutlineWrench } from 'react-icons/hi2'

import { useLayoutContext } from '~/contexts/layout-context'
import clsxm from '~/utils/clsxm'

import ButtonDropdown from './button-dropdown'
import ButtonDropdownItem from './button-dropdown-item'
import MessagesMenu from './messages-menu'
import NotificationsMenu from './notifications-menu'
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
          <MessagesMenu />
        </li>
        <li className="relative">
          <NotificationsMenu />
        </li>
        <li className="relative px-4">
          <ButtonDropdown
            withArrow={false}
            trigger={
              <button className="inline-flex h-full items-center font-semibold text-white focus-visible:outline-none">
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
            }
          >
            <p className="p-4 text-[10px] font-semibold uppercase leading-none tracking-wide">Logged in 5 mins ago</p>
            <ButtonDropdownItem>
              <Link
                href="/"
                className="inline-flex w-full appearance-none items-center gap-2 text-base font-light tracking-wide"
              >
                <HiOutlineUser />
                <span>Profile</span>
              </Link>
            </ButtonDropdownItem>
            <ButtonDropdownItem>
              <Link
                href="/"
                className="inline-flex w-full appearance-none items-center gap-2 text-base font-light tracking-wide"
              >
                <HiOutlineBolt />
                <span>Activities</span>
              </Link>
            </ButtonDropdownItem>
            <ButtonDropdownItem>
              <Link
                href="/"
                className="inline-flex w-full appearance-none items-center gap-2 text-base font-light tracking-wide"
              >
                <HiOutlineWrench />
                <span>Settings</span>
              </Link>
            </ButtonDropdownItem>
            <ButtonDropdownItem className="hover:bg-red-200">
              <button className="inline-flex w-full appearance-none items-center gap-2 text-base font-semibold tracking-wide text-red-600">
                <HiArrowRightOnRectangle />
                <span>Logout</span>
              </button>
            </ButtonDropdownItem>
          </ButtonDropdown>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
