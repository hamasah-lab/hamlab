import { Menu } from '@headlessui/react'
import React from 'react'

import clsxm from '~/utils/clsxm'

interface DropdownItemProps {
  children: React.ReactNode
  className?: string
}

const DropdownItem = (props: DropdownItemProps) => {
  const { children, className } = props

  return (
    <Menu.Item
      as="div"
      className={clsxm(
        'relative flex w-full select-none items-center rounded py-2 pl-6 leading-none outline-none transition hover:bg-gray-200',
        className
      )}
    >
      {children}
    </Menu.Item>
  )
}

export default DropdownItem
