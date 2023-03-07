import { Disclosure, Transition } from '@headlessui/react'
import type { ClassValue } from 'clsx'
import React from 'react'

import clsxm from '~/utils/clsxm'

interface CollapsibleButtonProps {
  trigger: React.ReactNode
  content: React.ReactNode
  triggerClassName?: ClassValue
  defaultOpen?: boolean
}

const CollapsibleButton = (props: CollapsibleButtonProps) => {
  const { trigger, content, triggerClassName, defaultOpen } = props

  return (
    <Disclosure defaultOpen={defaultOpen}>
      <Disclosure.Button className={clsxm(triggerClassName)}>{trigger}</Disclosure.Button>
      <Transition
        enter="transition duration-300 ease-out"
        enterFrom="transform scale-y-95 opacity-0"
        enterTo="transform scale-y-100 opacity-100"
        leave="transition duration-200 ease-out"
        leaveFrom="transform scale-y-100 opacity-100"
        leaveTo="transform scale-y-95 opacity-0"
      >
        <Disclosure.Panel>{content}</Disclosure.Panel>
      </Transition>
    </Disclosure>
  )
}

export default CollapsibleButton
