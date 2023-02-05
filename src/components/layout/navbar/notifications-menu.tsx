import { HiCodeBracket, HiOutlineBell } from 'react-icons/hi2'

import PopoverIcon from './icon-button-popover'
import MenuPopover from './menu-popover'
import PopoverItem from './popover-item'

const NotificationsMenu = () => {
  return (
    <MenuPopover title="Notifications" trigger={<PopoverIcon icon={<HiOutlineBell />} />}>
      {Array.from({ length: 5 }).map((_, i) => {
        return (
          <PopoverItem key={i} className="border-b border-gray-100 py-4 transition hover:bg-gray-50">
            <div className="inline-flex h-10 w-10 shrink-0 items-center rounded-full bg-purple-500 text-white">
              <HiCodeBracket className="h-5 w-full" />
            </div>
            <div className="ml-3 flex flex-1 flex-col gap-2">
              <p className="text-sm">Template update is available now</p>
              <time className="text-[10px] uppercase text-gray-500">2 hours ago</time>
            </div>
          </PopoverItem>
        )
      })}
    </MenuPopover>
  )
}

export default NotificationsMenu
