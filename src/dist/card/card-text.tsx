import { PropsWithChildren } from 'react'

const CardText = (props: PropsWithChildren) => {
  return <p className="mb-4 font-medium leading-7">{props.children}</p>
}

export default CardText
