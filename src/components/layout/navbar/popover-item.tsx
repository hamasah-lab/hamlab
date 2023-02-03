import React from 'react'

import clsxm from '~/utils/clsxm'

interface PopoverItemProps {
  children: React.ReactNode
  className?: string
}

const PopoverItem = (props: PopoverItemProps) => {
  const { children, className } = props

  return (
    <div
      className={clsxm(
        'relative flex w-full select-none items-center rounded py-2 pl-6 leading-none outline-none transition hover:bg-gray-200',
        className
      )}
    >
      {children}
    </div>
  )
}

export default PopoverItem
