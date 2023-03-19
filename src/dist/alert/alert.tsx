import { useState } from 'react'
import { IoMdClose } from 'react-icons/io'

import clsxm from '~/utils/clsxm'

export type VariantAlert = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
export interface PropsAlert {
  title?: string
  message: string
  className?: string
  dissmissable?: boolean
  variant?: VariantAlert
}
export const ColorsBadge: Record<VariantAlert, { color: string; bgColor: string }> = {
  primary: {
    color: 'text-white',
    bgColor: 'bg-violet-600',
  },
  secondary: {
    color: 'text-white',
    bgColor: 'bg-gray-700',
  },
  success: {
    color: 'text-white',
    bgColor: 'bg-green-400',
  },
  danger: {
    color: 'text-white',
    bgColor: 'bg-red-500',
  },
  warning: {
    color: 'text-white',
    bgColor: 'bg-yellow-400',
  },
  info: {
    color: 'text-white',
    bgColor: 'bg-sky-400',
  },
  light: {
    color: 'colors-custom-black',
    bgColor: 'bg-slate-300',
  },
  dark: {
    color: 'text-white',
    bgColor: 'bg-neutral-800',
  },
}

const Alert = (props: PropsAlert) => {
  const [show, setShow] = useState(true)
  const { message, className, dissmissable = false, title, variant = 'primary' } = props
  const { color, bgColor } = ColorsBadge[variant]

  return (
    <>
      {show && (
        <div className={clsxm('flex flex-col rounded-md p-4', bgColor, className ?? '')}>
          {title && <h1 className={clsxm('mb-3', color)}>{title}</h1>}
          <div className="flex">
            <p className={clsxm('flex flex-wrap', color)}>{message}</p>
            {dissmissable && <div onClick={() => setShow(false)}>{<IoMdClose />}</div>}
          </div>
        </div>
      )}
    </>
  )
}

export default Alert
