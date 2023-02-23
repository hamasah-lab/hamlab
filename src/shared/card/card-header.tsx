import { PropsWithChildren } from 'react'

const CardHeader = (props: PropsWithChildren) => {
  return (
    <div className="flex min-h-[70px] w-full items-center self-center border-b border-custom-white px-6 py-4 leading-7">
      {props.children}
    </div>
  )
}

export default CardHeader
