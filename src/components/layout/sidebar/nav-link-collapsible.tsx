import { usePathname } from 'next/navigation'
import { ComponentType } from 'react'
import { IconType } from 'react-icons'
import { HiChevronUp } from 'react-icons/hi2'

import CollapsibleButton from '~/components/shared/collapsible-button'

import { navLinkActiveStyles, navLinkMainStyles } from './nav-link'
import SubNavLink, { SubNavLinkProps } from './sub-nav-link'

type NavLinkCollapsibleProps = {
  icon:
    | IconType
    | ComponentType<{
        size: number
        className: string
      }>
  text: string
  subNavLink: SubNavLinkProps[]
}

const NavLinkCollapsible = (props: NavLinkCollapsibleProps) => {
  const { icon: Icon, text, subNavLink } = props
  const pathName = usePathname()

  const isActive = subNavLink.some(nav => nav.href === pathName)

  return (
    <CollapsibleButton
      triggerClassName={[navLinkMainStyles, 'group', isActive ? navLinkActiveStyles : '']}
      defaultOpen={isActive}
      trigger={
        <>
          <Icon size={20} className="ml-1 mr-5" />
          <span className="w-full text-left">{text}</span>
          <HiChevronUp className="h-5 w-5 text-purple-500 transition-all duration-300 group-data-[headlessui-state=open]:rotate-180 group-data-[headlessui-state=open]:transform" />
        </>
      }
      content={
        <ul className="ml-10 flex flex-col">
          {subNavLink.map((child, key) => (
            <li key={key}>
              <SubNavLink {...child} />
            </li>
          ))}
        </ul>
      }
    />
  )
}

export default NavLinkCollapsible
