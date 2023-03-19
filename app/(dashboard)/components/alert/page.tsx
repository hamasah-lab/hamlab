'use client'

import { useEffect } from 'react'

import { SectionTitle } from '~/dist/section-title'
import useBreadcrumbContext from '~/hooks/use-breadcrumb-context'

const AlertComponentPage = () => {
  const { setBreadcrumb } = useBreadcrumbContext()

  useEffect(() => {
    setBreadcrumb([
      {
        href: '/',
        text: 'Dashboard',
      },
      {
        href: '/',
        text: 'General Components',
      },
      {
        text: 'Alert',
      },
    ])
  }, [setBreadcrumb])

  return (
    <div className="flex flex-col">
      <SectionTitle
        title="Alert"
        subTitle="Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages."
      />

      <div className="flex gap-4">
        <div className="relative flex max-w-[50%] shrink-0 grow-0 basis-1/2 flex-col gap-8"></div>
        <div className="relative flex max-w-[50%] shrink-0 grow-0 basis-1/2 flex-col gap-8"></div>
      </div>
    </div>
  )
}

export default AlertComponentPage
