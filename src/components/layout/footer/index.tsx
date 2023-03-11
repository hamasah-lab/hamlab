'use client'

import { useLayoutContext } from '~/contexts/layout-context'
import clsxm from '~/utils/clsxm'

const Footer = () => {
  const { isSidebarOpen } = useLayoutContext()

  return (
    <footer
      className={clsxm(
        'mt-auto flex w-full flex-col items-center border-t border-t-gray-200 py-5 pr-8 text-sm text-gray-500 transition-all duration-500 md:flex-row md:text-base',
        'pl-4 pr-4 md:pr-0',
        isSidebarOpen ? 'md:pl-[280px]' : 'md:pl-[50px]'
      )}
    >
      <span>Copyright &copy; 2023-present. </span>
      <div className="md:ml-1">
        <span>Build with ❤️ by</span>
        <a
          href="https://github.com/hamasah-lab"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-1 text-purple-500"
        >
          Hamasah Lab
        </a>
      </div>
    </footer>
  )
}

export default Footer
