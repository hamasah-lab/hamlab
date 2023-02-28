import { PropsWithChildren } from 'react'

import clsxm from '~/utils/clsxm'

export interface CardFooterProps extends PropsWithChildren {
  className?: string
}

const CardFooter = (props: CardFooterProps) => {
  return <div className={clsxm('border-0 bg-transparent py-4 px-6', props.className)}>{props.children}</div>
}

export default CardFooter
