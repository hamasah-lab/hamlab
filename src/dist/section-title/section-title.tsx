import { PropsWithChildren } from 'react'

import clsxm from '~/utils/clsxm'

interface SectionTitleProps extends Partial<PropsWithChildren> {
  title: React.ReactNode
  subTitle?: React.ReactNode
  className?: string
}

const SectionTitle = (props: SectionTitleProps) => {
  const { children, title, subTitle, className } = props

  return (
    <section className={clsxm('mb-4 mt-7', className ?? '')}>
      <h2 className="relative text-lg font-semibold before:mt-[6px] before:mr-4 before:inline-block before:h-2 before:w-7 before:rounded before:bg-custom-purple before:content-['']">
        {title}
      </h2>
      {subTitle && <p className="ml-[45px] text-sm leading-7 text-gray-500">{subTitle}</p>}
      {children ?? null}
    </section>
  )
}

export default SectionTitle
