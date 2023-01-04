interface ButtonDropdownProps {
  icon: React.ReactNode
}

const ButtonDropdown = (props: ButtonDropdownProps) => {
  const { icon } = props

  return (
    <button className="relative h-full px-4 text-xl text-white transition hover:text-gray-300">
      {icon}
      <span className="absolute top-0.5 right-2 h-[7px] w-[7px] animate-pulse rounded-full bg-yellow-300 opacity-100"></span>
    </button>
  )
}

export default ButtonDropdown
