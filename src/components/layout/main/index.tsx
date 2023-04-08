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
        'relative min-h-full w-full pr-[30px] pt-20 transition-all duration-500',
        isSidebarOpen ? 'pl-[30px] blur-sm md:pl-[280px] md:blur-none' : 'pl-[30px]'
      )}
    >
      <section className="relative z-[1]">
        <SectionHeader breadcrumb={breadcrumb} />
        {children}
      </section>
    </main>
  )
}

export default MainContent
