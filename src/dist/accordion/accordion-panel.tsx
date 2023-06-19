import { Disclosure, Transition } from '@headlessui/react'
import { memo, PropsWithChildren, useEffect } from 'react'
import { useToggle } from 'react-use'

import clsxm from '~/utils/clsxm'

export type PropsAccordionPanel = {
  className?: string
  show?: boolean
} & PropsWithChildren

const AccordionPanel = (props: PropsAccordionPanel) => {
  const { children, className, show } = props
  const [isShow, toggle] = useToggle(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      toggle(show)
    }, 200)

    return () => clearTimeout(timeout)
  }, [show, toggle])

  return (
    <Transition
      show={show !== undefined ? isShow : undefined}
      enter="transition duration-500 ease-out"
      enterFrom="transform opacity-0"
      enterTo="transform opacity-100"
      leave="transition duration-500 ease-out"
      leaveFrom="transform opacity-100"
      leaveTo="transform opacity-0"
    >
      <Disclosure.Panel className={clsxm('px-4 py-3 text-sm text-gray-500', className)}>{children}</Disclosure.Panel>
    </Transition>
  )
}

const Memo = memo(AccordionPanel, (prev, next) => prev.show !== next.show)

export default Memo
