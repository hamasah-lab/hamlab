import Link from 'next/link'
import React from 'react'
import { HiChevronRight } from 'react-icons/hi2'

import Dropdown from './dropdown'

interface MenuDropdownProps {
  title: string
  trigger: React.ReactNode
  children: React.ReactNode
  viewAll?: string
}

const MenuDropdown = (props: MenuDropdownProps) => {
  const { title, trigger, children, viewAll = '/' } = props

  return (
    <Dropdown withArrow={false} trigger={trigger} align="end">
      <div className="flex w-[350px] items-center justify-between p-4 text-sm font-semibold tracking-wide">
        <span className="text-gray-500">{title}</span>
        <button className="rounded border border-blue-200 p-1 text-xs text-blue-800 outline-none transition hover:bg-blue-200 hover:text-blue-600 focus:bg-blue-200 focus:text-blue-600 focus-visible:ring">
          Mark All As Read
        </button>
      </div>
      <div className="h-[350px] overflow-hidden md:overflow-auto">{children}</div>
      <div className="p-4 text-center font-semibold tracking-wide">
        <Link
          href={viewAll}
          className="inline-flex items-center gap-1 text-sm text-purple-700 transition hover:text-purple-500"
        >
          <span>View All</span>
          <HiChevronRight />
        </Link>
      </div>
    </Dropdown>
  )
}

export default MenuDropdown
