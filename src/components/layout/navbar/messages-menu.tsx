import { HiOutlineEnvelope, HiUser } from 'react-icons/hi2'

import PopoverIcon from './icon-button-popover'
import MenuPopover from './menu-popover'
import PopoverItem from './popover-item'

const MessagesMenu = () => {
  return (
    <MenuPopover title="Messages" trigger={<PopoverIcon icon={<HiOutlineEnvelope />} />}>
      {Array.from({ length: 5 }).map((_, i) => {
        return (
          <PopoverItem key={i} className="items-start border-b border-gray-100 py-4 transition hover:bg-gray-50">
            <div className="inline-flex h-10 w-10 shrink-0 items-center rounded-full bg-teal-500 text-white">
              <HiUser className="h-7 w-full" />
            </div>
            <div className="ml-3 flex flex-1 flex-col">
              <b className="text-sm text-gray-500">Si Paling Admin</b>
              <p className="mt-2 mb-4 text-sm">Deadline besok.</p>
              <time className="text-[10px] uppercase text-gray-500">7 hours ago</time>
            </div>
          </PopoverItem>
        )
      })}
    </MenuPopover>
  )
}

export default MessagesMenu
