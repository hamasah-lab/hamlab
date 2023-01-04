import React from 'react'

import { Navbar, NavbarBg } from '~/components/layout/navbar'
import Sidebar from '~/components/layout/sidebar'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <NavbarBg />
      <Navbar />
      <Sidebar />
      <main>{children}</main>
    </div>
  )
}

export default DashboardLayout
