import React from 'react'

import Footer from '~/components/layout/footer'
import MainContent from '~/components/layout/main'
import { Navbar } from '~/components/layout/navbar'
import Sidebar from '~/components/layout/sidebar'
import LayoutContextProvider from '~/contexts/layout-context'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <LayoutContextProvider>
        <Navbar />
        <Sidebar />
        <MainContent>{children}</MainContent>
        <Footer />
      </LayoutContextProvider>
    </>
  )
}

export default DashboardLayout
