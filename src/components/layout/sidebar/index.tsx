'use client'
import Link from 'next/link'
import { useRef } from 'react'
import { HiAcademicCap, HiFire, HiPaperClip } from 'react-icons/hi'
import { createBreakpoint, useClickAway } from 'react-use'

import { useLayoutContext } from '~/contexts/layout-context'
import clsxm from '~/utils/clsxm'

import MenuHeader from './menu-header'
import NavLink from './nav-link'
import NavLinkCollapsible from './nav-link-collapsible'

const useBreakpoint = createBreakpoint({ xl: 1280, l: 768, s: 350 })

const Sidebar = () => {
  const { isSidebarOpen, sidebarOpenToggle } = useLayoutContext()
  const breakpoint = useBreakpoint()
  const sidebarRef = useRef(null)

  useClickAway(
    sidebarRef,
    () => {
      if (breakpoint === 's' && isSidebarOpen) {
        sidebarOpenToggle()
      }
    },
    ['click']
  )

  return (
    <div
      ref={sidebarRef}
      className={clsxm(
        'fixed top-0 z-[891] h-full w-[250px] overflow-hidden bg-white shadow-md outline-none transition-all duration-500 md:z-[800]',
        isSidebarOpen ? 'left-0' : '-left-[250px]'
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
