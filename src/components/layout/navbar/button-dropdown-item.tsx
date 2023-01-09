import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import clsxm from '~/utils/clsxm'

interface ButtonDropdownItemProps {
  children: React.ReactNode
  className?: string
}

const ButtonDropdownItem = (props: ButtonDropdownItemProps) => {
  const { children, className } = props

  return (
    <DropdownMenu.Item
      className={clsxm(
        'relative flex w-full select-none items-center rounded py-2 pl-6 leading-none outline-none transition hover:bg-gray-200',
        className
      )}
    >
      {children}
    </DropdownMenu.Item>
  )
}

export default ButtonDropdownItem
