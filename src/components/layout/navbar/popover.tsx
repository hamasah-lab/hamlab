import { Popover, Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'
import { usePopper } from 'react-popper'

interface PopoverProps {
  children: React.ReactNode
  trigger: React.ReactNode
}

const CustomPopover = (props: PopoverProps) => {
  const { children, trigger } = props

  const [referenceElement, setReferenceElement] = useState()
  const [popperElement, setPopperElement] = useState()
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: 'bottom',
  })

  return (
    <Popover as="div" className="relative z-50">
      <Popover.Button ref={setReferenceElement as any} className="focus:outline-none focus:ring">
        {trigger}
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Popover.Panel
          ref={setPopperElement as any}
          style={styles.popper}
          className="mt-2 min-w-[220px] rounded bg-white p-1 shadow-md ring-1 ring-black ring-opacity-5 focus:outline-none"
          {...attributes.popper}
        >
          {children}
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default CustomPopover
