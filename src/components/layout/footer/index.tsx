'use client'

import { useLayoutContext } from '~/contexts/layout-context'
import clsxm from '~/utils/clsxm'

const Footer = () => {
  const { isSidebarOpen } = useLayoutContext()

  return (
    <footer
      className={clsxm(
        'mt-10 inline-flex w-full border-t border-t-gray-200 py-5 pr-8 text-gray-500 transition-all duration-500',
        isSidebarOpen ? 'pl-[50px]' : 'pl-[280px]'
      )}
    >
      Copyright &copy; 2023-present. Build with ❤️ by
      <a
        href="https://github.com/hamasah-lab"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-1 text-purple-500"
      >
        Hamasah Lab
      </a>
    </footer>
  )
}

export default Footer
