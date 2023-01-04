'use client'
import Link from 'next/link'
import { HiAcademicCap, HiFire, HiPaperClip } from 'react-icons/hi'

import { useLayoutContext } from '~/contexts/layout-context'
import clsxm from '~/utils/clsxm'

import MenuHeader from './menu-header'
import NavLink from './nav-link'
import NavLinkCollapsible from './nav-link-collapsible'

const Sidebar = () => {
  const { isSidebarOpen } = useLayoutContext()

  return (
    <div
      className={clsxm(
        'all fixed top-0 z-[800] h-full w-[250px] overflow-hidden bg-white shadow-md outline-none transition-all duration-500',
        isSidebarOpen ? '-left-[250px]' : 'left-0'
      )}
    >
      <aside>
        <div className="inline-block h-16 w-full text-center leading-[60px]">
          <Link className="font-bold uppercase tracking-wide text-black no-underline" href="/">
            Hamlab
          </Link>
        </div>
        <ul className="leading-7">
          <MenuHeader header="dashboard" />
          <li>
            <NavLink icon={HiFire} href="/" text="Dashboard" />
          </li>
          <li>
            <NavLink icon={HiPaperClip} href="/about" text="About" />
          </li>
          <li>
            <NavLinkCollapsible icon={HiAcademicCap} text="Abstract" />
          </li>
        </ul>
      </aside>
    </div>
  )
}

export default Sidebar
