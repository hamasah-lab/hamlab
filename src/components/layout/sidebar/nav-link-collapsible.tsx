import { usePathname } from 'next/navigation'
import { HiChevronDown } from 'react-icons/hi'

import CollapsibleButton from '~/components/shared/collapsible-button'

import { navLinkActiveStyles, navLinkMainStyles } from './nav-link'
import SubNavLink from './sub-nav-link'

const navs = [
  {
    href: '/',
    text: 'Dashboard',
  },
  {
    href: '/test',
    text: 'test',
  },
]

interface NavLinkCollapsibleProps {
  icon: any
  text: string
}

const NavLinkCollapsible = (props: NavLinkCollapsibleProps) => {
  const { icon: Icon, text } = props
  const pathName = usePathname()

  const isActive = navs.some(nav => nav.href === pathName)

  return (
    <CollapsibleButton
      triggerClassName={[navLinkMainStyles, isActive ? navLinkActiveStyles : '']}
      trigger={
        <>
          <Icon size={20} className="mr-5 ml-1" />
          <span className="w-full text-left">{text}</span>
          <HiChevronDown size={20} className="ml-auto" />
        </>
      }
      content={
        <ul className="ml-10 flex flex-col">
          {navs.map(nav => (
            <li key={nav.href}>
              <SubNavLink href={nav.href} text={nav.text} />
            </li>
          ))}
        </ul>
      }
    />
  )
}

export default NavLinkCollapsible
