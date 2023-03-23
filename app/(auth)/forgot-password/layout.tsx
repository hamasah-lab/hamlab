import { PropsWithChildren } from 'react'
import appleTouchIcon from 'src/assets/favicon/apple-touch-icon.png'
import favicon16Icon from 'src/assets/favicon/favicon-16x16.png'
import favicon32Icon from 'src/assets/favicon/favicon-32x32.png'

export const metadata = {
  title: 'Forgot Password',
  icons: [
    { rel: 'apple-touch-icon', url: appleTouchIcon.src, type: 'images/png', sizes: '180x180' },
    { rel: 'icon', url: favicon32Icon.src, type: 'images/png', sizes: '32x32' },
    { rel: 'icon', url: favicon16Icon.src, type: 'images/png', sizes: '16x16' },
  ],
}

const ForgotPasswordLayout = (props: PropsWithChildren) => {
  return <>{props.children}</>
}

export default ForgotPasswordLayout
