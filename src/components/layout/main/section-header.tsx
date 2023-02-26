import BreadcrumbHeader from './breadcrumb-header'

interface SectionHeaderProps {
  title: string
  breadcrumb?: {
    text: string
    href?: string
  }[]
}

const SectionHeader = ({ title, breadcrumb }: SectionHeaderProps) => {
  return (
    <div className="relative -mx-[30px] -mt-[10px] mb-[30px] flex items-center justify-between border-t border-t-gray-100 bg-white p-5 px-9 shadow-sm">
      <h1 className="mt-1 mb-0 text-2xl font-bold text-gray-900">{title}</h1>
      {breadcrumb && <BreadcrumbHeader breadcrumb={breadcrumb} />}
    </div>
  )
}

export default SectionHeader
