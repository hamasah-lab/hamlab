import Link from 'next/link'
import { CgFormatSlash } from 'react-icons/cg'

interface BreadcrumbHeaderProps {
  breadcrumb: {
    text: string
    href?: string
  }[]
}

const BreadcrumbHeader = ({ breadcrumb }: BreadcrumbHeaderProps) => (
  <div className="flex items-center gap-x-1">
    {breadcrumb.map((item, index) => (
      <>
        {item.href ? (
          <Link key={index} href={item.href} className="text-xs text-custom-purple hover:underline">
            {item.text}
          </Link>
        ) : (
          <span className="text-xs text-gray-500">{item.text}</span>
        )}
        {breadcrumb[index + 1] != null && <CgFormatSlash size={17} className="text-gray-500 " />}
      </>
    ))}
  </div>
)

export default BreadcrumbHeader
