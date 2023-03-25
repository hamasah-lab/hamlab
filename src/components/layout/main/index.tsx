'use client'
import React from 'react'

import { useLayoutContext } from '~/contexts/layout-context'
import useBreadcrumbContext from '~/hooks/use-breadcrumb-context'
import clsxm from '~/utils/clsxm'

import SectionHeader from './section-header'

const MainContent = ({ children }: { children: React.ReactNode }) => {
  const { isSidebarOpen } = useLayoutContext()
  const { breadcrumb } = useBreadcrumbContext()

  return (
    <main
      className={clsxm(
        'relative min-h-full w-full py-20 pr-[30px] transition-all duration-500',
        'relative min-h-full w-full py-20 pr-[30px] transition-all duration-500',
        isSidebarOpen ? 'pl-[30px] blur-sm md:pl-[280px] md:blur-none' : 'pl-[30px]'
      )}
    >
      <SectionHeader title="Dashboard" breadcrumb={breadcrumb} />
      {children}
    </main>
  )
}

export default MainContent
