import { ClassValue } from 'clsx'
import { PropsWithChildren } from 'react'

import clsxm from '~/utils/clsxm'

interface CardProps extends PropsWithChildren {
  variant?: keyof typeof variants
  className?: ClassValue
}

const variants = {
  primary: 'border-t-2 border-custom-purple',
  secondary: 'border-t-2 border-purple-900',
  danger: 'border-t-2 border-red-500',
  warning: 'border-t-2 border-yellow-500',
  success: 'border-t-2 border-green-500',
  info: 'border-t-2 border-blue-500',
  light: 'border-t-2 border-gray-200',
  dark: 'border-t-2 border-gray-800',
}

const Card = (props: CardProps) => {
  const { children, className, variant } = props

  return (
    <div
      className={clsxm(
        'relative flex min-w-0 flex-col break-words rounded border-0 bg-white text-gray-500 shadow',
        variants[variant ?? 'primary'],
        className
      )}
    >
      {children}
    </div>
  )
}

export default Card
