import React from 'react'

import Sidebar from '~/components/layout/sidebar'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Sidebar />
      <main>{children}</main>
    </div>
  )
}

export default DashboardLayout
