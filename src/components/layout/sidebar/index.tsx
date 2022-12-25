'use client'
import Link from 'next/link'
import { HiFire, HiPaperClip } from 'react-icons/hi'

import MenuHeader from './menu-header'
import NavLink from './nav-link'

const Sidebar = () => {
  return (
    <div className="all fixed top-0 left-0 z-[800] h-full w-[250px] overflow-hidden bg-white shadow-md outline-none transition duration-500">
      <aside>
        <div className="inline-block h-16 w-full text-center leading-[60px]">
          <Link className="font-bold uppercase tracking-wide text-black no-underline" href="/">
            Hamlab
          </Link>
        </div>
        <ul className="m-0 p-0 leading-7">
          <MenuHeader header="dashboard" />
          <li>
            <NavLink icon={HiFire} href="/" text="Dashboard" />
          </li>
          <li>
            <NavLink icon={HiPaperClip} href="/about" text="About" />
          </li>
        </ul>
      </aside>
    </div>
  )
}

export default Sidebar
