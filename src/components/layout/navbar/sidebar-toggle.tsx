'use client'
import { HiMenu } from 'react-icons/hi'

import { useLayoutContext } from '~/contexts/layout-context'

const SidebarToggle = () => {
  const { sidebarOpenToggle } = useLayoutContext()

  return (
    <button
      onClick={sidebarOpenToggle}
      type="button"
      className="h-full px-4 text-xl text-white transition-all duration-500 hover:text-gray-300 focus-visible:outline-none focus-visible:ring"
    >
      <HiMenu />
    </button>
  )
}

export default SidebarToggle
