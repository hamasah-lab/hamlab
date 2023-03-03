import { Breadcrumb } from '~/contexts/breadcrumb-context'

import BreadcrumbHeader from './breadcrumb-header'

interface SectionHeaderProps {
  title: string
  breadcrumb?: Breadcrumb
}

const SectionHeader = ({ title, breadcrumb }: SectionHeaderProps) => {
  return (
    <div className="relative -mx-[30px] -mt-[10px] mb-[30px] flex items-center justify-between border-t border-t-gray-100 bg-white px-9 pb-5 pt-6 shadow-sm">
      <h1 className="mb-0 text-2xl font-bold text-gray-900">{title}</h1>
      {breadcrumb && <BreadcrumbHeader breadcrumb={breadcrumb} />}
    </div>
  )
}

export default SectionHeader
