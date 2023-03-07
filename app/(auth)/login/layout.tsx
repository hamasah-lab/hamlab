import { PropsWithChildren } from 'react'

export const metadata = {
  title: 'Login',
}

const LoginLayout = (props: PropsWithChildren) => {
  return <>{props.children}</>
}

export default LoginLayout
