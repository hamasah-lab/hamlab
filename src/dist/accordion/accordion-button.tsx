import { Disclosure } from '@headlessui/react'
import { PropsWithChildren } from 'react'
import { HiOutlineChevronDown } from 'react-icons/hi'

import clsxm from '~/utils/clsxm'

export type IconProps = {
  isOpen: boolean
}

export type PropsAccordionButton = {
  isOpen: boolean
  className?: string
  useIcon?: boolean
  icon?: (props: IconProps) => JSX.Element
} & PropsWithChildren

const AccordionButton = (props: PropsAccordionButton) => {
  const {
    children,
    className,
    isOpen,
    useIcon = false,
    icon: Icon = ({ isOpen }) => <HiOutlineChevronDown className={clsxm(isOpen ? '' : undefined)} />,
  } = props

  return (
    <Disclosure.Button
      className={clsxm(
        className,
        'flex w-full justify-between rounded-md bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'
      )}
    >
      {children}
      {useIcon && <Icon isOpen={isOpen} />}
    </Disclosure.Button>
  )
}

export default AccordionButton
