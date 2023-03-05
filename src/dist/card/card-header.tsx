import { PropsWithChildren } from 'react'

import clsxm from '~/utils/clsxm'

export interface CardHeaderProps extends PropsWithChildren {
  className?: string
  title: React.ReactNode
}

const CardHeader = (props: CardHeaderProps) => {
  return (
    <div
      className={clsxm(
        'flex min-h-[70px] w-full items-center self-center border-b border-custom-white px-6 py-4 leading-7',
        props.className
      )}
    >
      <h4 className="text-lg font-semibold">{props.title}</h4>
      {props.children}
    </div>
  )
}

export default CardHeader
