import Link from 'next/link'
import { usePathname } from 'next/navigation'

import clsxm from '~/utils/clsxm'

import { navLinkMainStyles } from './nav-link'

interface SubNavLinkProps {
  href: string
  text: string
}

const SubNavLink = (props: SubNavLinkProps) => {
  const { href, text } = props

  const pathName = usePathname()

  const isActive = pathName === href

  return (
    <Link href={href} className={clsxm(navLinkMainStyles, 'h-[35px]', isActive ? 'text-purple-700' : '')}>
      {text}
    </Link>
  )
}

export default SubNavLink
