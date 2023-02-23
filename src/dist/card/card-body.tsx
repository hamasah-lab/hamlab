import { PropsWithChildren } from 'react'

const CardBody = (props: PropsWithChildren) => {
  return <div className="flex-auto bg-transparent py-5 px-6">{props.children}</div>
}

export default CardBody
