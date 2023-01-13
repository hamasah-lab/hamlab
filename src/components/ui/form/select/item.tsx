import * as Select from '@radix-ui/react-select'
import { forwardRef } from 'react'
import { BsCheck } from 'react-icons/bs'

import clsxm from '~/utils/clsxm'

const Item = forwardRef<HTMLDivElement, React.ComponentProps<typeof Select.Item>>(
  ({ className, children, ...props }, forwardedRef) => {
    const classNameItem = clsxm(
      `
            text-sm 
            text-custom-black 
            rounded-sm 
            cursor-pointer 
            flex 
            items-center 
            h-6 
            py-5 
            px-6 
            relative 
            select-none 
            data-[disabled]:text-custom-white-purple-2 
            data-[disabled]:pointer-events-none 
            data-[highlighted]:outline-none 
            data-[highlighted]:bg-custom-light-gray-2
            data-[state=checked]:bg-custom-light-purple
            data-[state=checked]:text-white
        `,
      className
    )

    return (
      <Select.Item className={classNameItem} {...props} ref={forwardedRef}>
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className="absolute left-0 inline-flex w-6 items-center justify-center">
          <BsCheck />
        </Select.ItemIndicator>
      </Select.Item>
    )
  }
)

Item.displayName = 'Item'

export default Item
