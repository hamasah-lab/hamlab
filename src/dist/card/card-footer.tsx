import { PropsWithChildren } from 'react'

const CardFooter = (props: PropsWithChildren) => {
  return <div className="border-0 bg-transparent py-5 px-6">{props.children}</div>
}

export default CardFooter
