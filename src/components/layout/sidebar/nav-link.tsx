'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import clsxm from '~/utils/clsxm'

interface NavLinkProps {
  href: string
  icon?: any
  text: string
}

export const navLinkMainStyles =
  'relative flex h-[50px] w-full items-center px-5 text-sm font-medium tracking-wide text-gray-500 no-underline transition duration-200 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-opacity-50'
export const navLinkActiveStyles =
  "text-purple-700 before:absolute before:left-0 before:top-[50%] before:h-[25px] before:w-1 before:-translate-y-1/2 before:transform before:bg-purple-500 before:content-['']"

const NavLink = (props: NavLinkProps) => {
  const { href, icon: Icon, text } = props
  const pathName = usePathname()

  const isActive = pathName === href

  return (
    <Link href={href} className={clsxm(navLinkMainStyles, isActive ? navLinkActiveStyles : '')}>
      {Icon ? <Icon size={20} className="mr-5 ml-1" /> : null}
      <span className="w-full">{text}</span>
    </Link>
  )
}

export default NavLink
