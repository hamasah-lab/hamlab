import { ReactNode } from 'react'

import clsxm from '~/utils/clsxm'

import { ColorsBadge, VariantBadge } from './type'

export interface PropsBadge {
  children: ReactNode
  variant?: VariantBadge
  className?: string
  hover?: boolean
}

const Badge = (props: PropsBadge) => {
  const { children, variant = 'primary', className, hover = true } = props
  const { color, bgColor } = ColorsBadge[variant]

  return (
    <div
      className={clsxm(
        'inline-block w-min whitespace-nowrap rounded-full px-3 py-[3px] text-xs font-semibold',
        color,
        bgColor,
        hover ? 'transition-all duration-300 hover:opacity-80' : '',
        className ?? ''
      )}
    >
      {children}
    </div>
  )
}

export default Badge
