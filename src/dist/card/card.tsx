import { PropsWithChildren } from 'react'

const Card = (props: PropsWithChildren) => {
  return <div className="relative flex flex-col break-words rounded-sm border-0 bg-white shadow">{props.children}</div>
}

export default Card
