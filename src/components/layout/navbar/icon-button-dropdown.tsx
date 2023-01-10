import { forwardRef } from 'react'

interface ButtonDropdownProps {
  icon: React.ReactNode
}

const IconButtonDropdown = forwardRef((props: ButtonDropdownProps, ref: any) => {
  const { icon } = props

  return (
    <button
      ref={ref}
      className="relative h-full px-4 text-xl text-white outline-none transition hover:text-gray-300 focus-visible:ring"
      {...props}
    >
      {icon}
      <span className="absolute top-0.5 right-2 h-[7px] w-[7px] animate-pulse rounded-full bg-yellow-300 opacity-100"></span>
    </button>
  )
})

IconButtonDropdown.displayName = 'IconButtonDropdown'

export default IconButtonDropdown
