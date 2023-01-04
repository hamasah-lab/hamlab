import { HiMenu } from 'react-icons/hi'

const SidebarToggle = () => {
  return (
    <button
      type="button"
      className="h-full px-4 text-xl text-white transition-all duration-500 focus-within:outline-none focus-within:ring"
    >
      <HiMenu />
    </button>
  )
}

export default SidebarToggle
