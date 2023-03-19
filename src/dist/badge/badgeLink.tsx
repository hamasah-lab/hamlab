import Link, { LinkProps } from 'next/link'
import { ReactNode } from 'react'

import clsxm from '~/utils/clsxm'

import { ColorsBadge, VariantBadge } from './type'

export type PropsBadge = {
  children: ReactNode
  variant?: VariantBadge
  className?: string
} & LinkProps

const BadgeLink = (props: PropsBadge) => {
  const { children, variant = 'primary', className, ...link } = props
  const { color, bgColor } = ColorsBadge[variant]

  return (
    <Link {...link}>
      <div
        className={clsxm(
          `inline-block w-min whitespace-nowrap rounded-full px-3 py-[3px] text-xs font-semibold transition-all duration-300 hover:opacity-80`,
          color,
          bgColor,
          className ?? ''
        )}
      >
        {children}
      </div>
    </Link>
  )
}

export default BadgeLink
