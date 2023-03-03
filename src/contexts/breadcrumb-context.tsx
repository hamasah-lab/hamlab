'use client'
import { usePathname, useSearchParams } from 'next/navigation'
import React, { createContext, ReactNode, useEffect, useState } from 'react'

type Breadcrumb = {
  text: string
  href?: string
}[]

interface BreadcrumbContext {
  breadcrumb: Breadcrumb | undefined
  setBreadcrumb: (breadcrumb: Breadcrumb | undefined) => void
}

const BreadcrumbContext = createContext<BreadcrumbContext | undefined>(undefined)

const BreadcrumbContextProvider = ({ children }: { children: ReactNode }) => {
  const [breadcrumb, setBreadcrumb] = useState<Breadcrumb | undefined>(undefined)
  const path = usePathname()
  const params = useSearchParams()

  useEffect(() => setBreadcrumb(undefined), [path, params])

  return <BreadcrumbContext.Provider value={{ breadcrumb, setBreadcrumb }}>{children}</BreadcrumbContext.Provider>
}

export type { Breadcrumb }

export { BreadcrumbContext }

export default BreadcrumbContextProvider
