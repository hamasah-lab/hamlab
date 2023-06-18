'use client'

import { useEffect } from 'react'

import useBreadcrumbContext from '~/hooks/use-breadcrumb-context'

const BlankPage = () => {
  const { setBreadcrumb } = useBreadcrumbContext()

  useEffect(() => {
    setBreadcrumb([
      {
        href: '/',
        text: 'Dashboard',
      },
      {
        text: 'Blank Page',
      },
    ])
  }, [setBreadcrumb])

  return <div className="flex flex-col"></div>
}

export default BlankPage
