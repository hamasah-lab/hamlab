import React from 'react'

import Footer from '~/components/layout/footer'
import MainContent from '~/components/layout/main'
import { Navbar } from '~/components/layout/navbar'
import Sidebar from '~/components/layout/sidebar'
import BreadcrumbContextProvider from '~/contexts/breadcrumb-context'
import LayoutContextProvider from '~/contexts/layout-context'

export const metadata = {
  title: {
    default: 'Dashboard',
    template: '%s | Hamlab',
  },
}

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <LayoutContextProvider>
      <BreadcrumbContextProvider>
        <Navbar />
        <Sidebar />
        <MainContent>{children}</MainContent>
        <Footer />
      </BreadcrumbContextProvider>
    </LayoutContextProvider>
  )
}

export default DashboardLayout
