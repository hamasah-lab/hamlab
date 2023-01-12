'use client'
import React from 'react'

import { useLayoutContext } from '~/contexts/layout-context'
import clsxm from '~/utils/clsxm'

const MainContent = ({ children }: { children: React.ReactNode }) => {
  const { isSidebarOpen } = useLayoutContext()

  return (
    <main
      className={clsxm(
        'relative h-full w-full pr-[30px] pt-20 transition-all duration-500',
        isSidebarOpen ? 'pl-[30px]' : 'pl-[280px]'
      )}
    >
      {children}
    </main>
  )
}

export default MainContent
