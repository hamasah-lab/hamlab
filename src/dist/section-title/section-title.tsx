import { PropsWithChildren } from 'react'

interface SectionTitleProps extends Partial<PropsWithChildren> {
  title: React.ReactNode
  subTitle?: React.ReactNode
}

const SectionTitle = ({ children, title }: SectionTitleProps) => {
  return (
    <section>
      <h2 className="relative mt-7 mb-6 text-lg font-semibold before:mt-[6px] before:mr-4 before:inline-block before:h-2 before:w-7 before:rounded before:bg-custom-purple before:content-['']">
        {title}
      </h2>
      {children ?? null}
    </section>
  )
}

export default SectionTitle
