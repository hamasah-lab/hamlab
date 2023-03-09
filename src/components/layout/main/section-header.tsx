'use client'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import { Breadcrumb } from '~/contexts/breadcrumb-context'

import BreadcrumbHeader from './breadcrumb-header'

interface SectionHeaderProps {
  title?: string
  breadcrumb?: Breadcrumb
}

const SectionHeader = ({ title, breadcrumb }: SectionHeaderProps) => {
  const pathname = usePathname()
  const [sectionHeader, setSectionHeader] = useState('')

  useEffect(() => {
    const pathnames = pathname.split('/')
    const lastPathname = pathnames[pathnames.length - 1]
    const sectionHeader = lastPathname === '' ? 'Dashboard' : lastPathname

    // make first letter uppercase
    setSectionHeader(sectionHeader.charAt(0).toUpperCase() + sectionHeader.slice(1))
  }, [pathname])

  return (
    <div className="relative -mx-[30px] -mt-[10px] flex items-center justify-between border-t border-t-gray-100 bg-white px-9 pb-5 pt-6 shadow-sm">
      <h1 className="mb-0 text-2xl font-bold text-gray-900">{title ?? sectionHeader}</h1>
      {breadcrumb && <BreadcrumbHeader breadcrumb={breadcrumb} />}
    </div>
  )
}

export default SectionHeader
