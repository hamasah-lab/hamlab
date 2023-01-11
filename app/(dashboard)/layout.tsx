import React from 'react'

import { Navbar, NavbarBg } from '~/components/layout/navbar'
import Sidebar from '~/components/layout/sidebar'
import LayoutContextProvider from '~/contexts/layout-context'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <LayoutContextProvider>
        <NavbarBg />
        <Navbar />
        <Sidebar />
        <main>{children}</main>
      </LayoutContextProvider>
    </div>
  )
}

export default DashboardLayout
