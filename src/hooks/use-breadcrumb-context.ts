import { useContext } from 'react'

import { BreadcrumbContext } from '~/contexts/breadcrumb-context'

const useBreadcrumbContext = () => {
  const context = useContext(BreadcrumbContext)

  if (!context) throw new Error('useBreadcrumbContext must be used within a BreadcrumbContextProvider')

  return context
}

export default useBreadcrumbContext
