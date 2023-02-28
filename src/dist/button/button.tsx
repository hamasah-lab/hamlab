import { PropsWithChildren } from 'react'

const Button = (props: PropsWithChildren) => {
  // not yet implemented
  return <button className="bg-purple-500 text-purple-100">{props.children}</button>
}

export default Button
