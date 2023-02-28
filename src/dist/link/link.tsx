import Link from 'next/link'
import { PropsWithChildren } from 'react'

import clsxm from '~/utils/clsxm'

export interface CustomLinkProps extends PropsWithChildren {
  href: string
  className?: string
}

const CustomLink = (props: CustomLinkProps) => {
  return (
    <Link
      href={props.href}
      className={clsxm(
        'text-purple-600 outline-none transition duration-300 focus-within:ring hover:text-custom-light-purple',
        props.className
      )}
    >
      {props.children}
    </Link>
  )
}

export default CustomLink
