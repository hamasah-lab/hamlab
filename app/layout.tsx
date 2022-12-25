import '~/styles/globals.css'

import { Nunito } from '@next/font/google'
import React from 'react'

const nunito = Nunito({
  variable: '--font-nunito',
  subsets: ['latin'],
})

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="id" className={nunito.variable}>
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
