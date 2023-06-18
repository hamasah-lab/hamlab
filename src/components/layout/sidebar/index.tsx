'use client'
import Link from 'next/link'
import { useRef } from 'react'
import { HiAcademicCap, HiFire, HiPaperClip } from 'react-icons/hi'
import { TbRectangleFilled } from 'react-icons/tb'
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
  const generalComponent = [
    {
      href: '/components/alert',
      text: 'Alert',
    },
    {
      href: '/components/badge',
      text: 'Badge',
    },
    {
      href: '/components/breadcrumb',
      text: 'Breadcrumb',
    },
    {
      href: '/components/buttons',
      text: 'Buttons',
    },
    {
      href: '/components/card',
      text: 'Card',
    },
    {
      href: '/components/carousel',
      text: 'Carousel',
    },
    {
      href: '/components/collapse',
      text: 'Collapse',
    },
    {
      href: '/components/dropdown',
      text: 'Dropdown',
    },
    {
      href: '/components/form',
      text: 'Form',
    },
    {
      href: '/components/list-group',
      text: 'List Group',
    },
    {
      href: '/components/media-object',
      text: 'Media Object',
    },
    {
      href: '/components/modal',
      text: 'Modal',
    },
    {
      href: '/components/nav',
      text: 'Nav',
    },
    {
      href: '/components/navbar',
      text: 'Navbar',
    },
    {
      href: '/components/pagination',
      text: 'Pagination',
    },
    {
      href: '/components/popover',
      text: 'Popover',
    },
    {
      href: '/components/progress',
      text: 'Progress',
    },
    {
      href: '/components/table',
      text: 'Table',
    },
    {
      href: '/components/tooltip',
      text: 'Tooltip',
    },
    {
      href: '/components/typography',
      text: 'Typography',
    },
  ]

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
            <NavLink icon={TbRectangleFilled} href="/blank" text="Blank Page" />
          </li>
          <li>
            <NavLinkCollapsible icon={HiAcademicCap} text="General Component" subNavLink={generalComponent} />
          </li>
        </ul>
      </aside>
    </div>
  )
}

export default Sidebar
