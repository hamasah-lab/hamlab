import Link from 'next/link'
import { HiChevronRight, HiCodeBracket } from 'react-icons/hi2'

import ButtonDropdown from './button-dropdown'
import ButtonDropdownItem from './button-dropdown-item'

interface MenuDropdownProps {
  title: string
  trigger: React.ReactNode
}

const MenuDropdown = (props: MenuDropdownProps) => {
  const { title, trigger } = props

  return (
    <ButtonDropdown withArrow={false} trigger={trigger} align="end">
      <div className="flex w-[350px] items-center justify-between p-4 text-sm font-semibold tracking-wide">
        <span className="text-gray-500">{title}</span>
        <button className="rounded border border-blue-200 p-1 text-xs text-blue-800 outline-none transition hover:bg-blue-200 hover:text-blue-600 focus:bg-blue-200 focus:text-blue-600 focus-visible:ring">
          Mark All As Read
        </button>
      </div>
      <div className="h-[350px] overflow-hidden md:overflow-auto">
        {[1, 2, 3, 4, 5, 56, 7, 8, 9, 0, 10].map(i => (
          <ButtonDropdownItem key={i} className="border-b border-gray-100 py-4 transition hover:bg-gray-50">
            <div className="inline-flex h-10 w-10 shrink-0 items-center rounded-full bg-purple-500 text-white">
              <HiCodeBracket className="h-5 w-full" />
            </div>
            <div className="ml-3 flex flex-1 flex-col gap-2">
              <p className="text-sm">Template update is available now</p>
              <time className="text-[10px] uppercase text-gray-500">2 hours ago</time>
            </div>
          </ButtonDropdownItem>
        ))}
      </div>
      <div className="p-4 text-center font-semibold tracking-wide">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm text-purple-700 transition hover:text-purple-500"
        >
          <span>View All</span>
          <HiChevronRight />
        </Link>
      </div>
    </ButtonDropdown>
  )
}

export default MenuDropdown
