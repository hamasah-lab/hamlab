import { Transition } from '@headlessui/react'
import { useState } from 'react'
import { IconType } from 'react-icons'
import { IoMdClose } from 'react-icons/io'

import clsxm from '~/utils/clsxm'

import { Text } from '../text'

export type VariantAlert = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
export interface PropsAlert {
  title?: string
  message: string
  className?: string
  dissmissable?: boolean
  variant?: VariantAlert
  Icon?: IconType | 'success' | 'danger' | 'warning' | 'info'
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
  const [isShowing, setIsShowing] = useState(true)
  const { message, className, dissmissable = false, title, variant = 'primary', Icon } = props
  const { color, bgColor } = ColorsBadge[variant]

  return (
    <Transition show={isShowing} leave="transition-opacity duration-300" leaveFrom="opacity-100" leaveTo="opacity-0">
      <div className={clsxm('flex rounded-md px-5 py-4', title ? '' : 'items-center', bgColor, className ?? '')}>
        {Icon && typeof Icon != 'string' && (
          <Icon className={clsxm(title ? 'mt-0.5 mr-4 h-7 w-7' : 'mb-0.5 mr-3 h-5 w-5', color)} />
        )}
        <div className="flex w-full flex-col">
          {title && (
            <Text fontSize="lg" className={clsxm('mb-2 font-bold', color)}>
              {title}
            </Text>
          )}
          <div className="flex justify-between">
            <Text fontSize="sm" className={clsxm('flex flex-wrap font-normal', color)}>
              {message}
            </Text>
            {dissmissable && (
              <div onClick={() => setIsShowing(false)}>
                {
                  <IoMdClose
                    className={clsxm(
                      'h-5 w-5 cursor-pointer opacity-90 outline-none transition-opacity duration-200 hover:opacity-60 active:scale-125 active:duration-75',
                      color
                    )}
                  />
                }
              </div>
            )}
          </div>
        </div>
      </div>
    </Transition>
  )
}

export default Alert
