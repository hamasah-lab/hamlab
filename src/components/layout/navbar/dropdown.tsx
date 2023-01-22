import { Menu, Transition } from '@headlessui/react'
import React from 'react'

interface DropdownProps {
  children: React.ReactNode
  trigger: React.ReactNode
}

const Dropdown = (props: DropdownProps) => {
  const { children, trigger } = props

  return (
    <Menu as="div" className="relative inline-block">
      <Menu.Button>{trigger}</Menu.Button>

      <Transition
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 min-w-[220px] origin-top-right divide-y divide-gray-100 rounded bg-white p-1 shadow-md ring-1 ring-black ring-opacity-5 focus:outline-none">
          {children}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default Dropdown
