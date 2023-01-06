import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

interface ButtonDropdownItemProps {
  children: React.ReactNode
}

const ButtonDropdownItem = (props: ButtonDropdownItemProps) => {
  const { children } = props

  return (
    <DropdownMenu.Item className="DropdownMenuItem relative flex h-6 select-none items-center rounded pl-6 text-sm leading-none text-violet-800 outline-none transition hover:bg-violet-500 hover:text-violet-100">
      {children}
    </DropdownMenu.Item>
  )
}

export default ButtonDropdownItem
