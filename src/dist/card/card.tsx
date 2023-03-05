import { PropsWithChildren } from 'react'

const Card = (props: PropsWithChildren) => {
  return (
    <div className="relative flex min-w-0 flex-col break-words rounded-sm border-0 bg-white text-gray-500 shadow">
      {props.children}
    </div>
  )
}

export default Card
