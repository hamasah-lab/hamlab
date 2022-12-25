import '~/styles/globals.css'

import React from 'react'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
