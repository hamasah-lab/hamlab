import '~/styles/globals.css'

import { Nunito } from 'next/font/google'
import React from 'react'

const nunito = Nunito({
  variable: '--font-nunito',
  subsets: ['latin'],
})

export const metadata = {
  title: {
    default: 'Hamlab',
    template: '%s | Hamlab',
  },
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="id" className={`h-full ${nunito.variable}`}>
      <body className="h-full">{children}</body>
    </html>
  )
}

export default RootLayout
