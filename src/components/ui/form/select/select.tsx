import * as Select from '@radix-ui/react-select'
import React from 'react'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'

import clsxm from '~/utils/clsxm'

interface propsSelect {
  children: React.ReactNode
  icon?: React.ReactNode
  required?: boolean
  disabled?: boolean
  value?: string
  onOpenChange?(open: boolean): void
  onValueChange?(value: string): void
}

const SelectInput = ({
  children,
  className,
  placeholder,
  icon,
  required,
  disabled,
  value,
  onOpenChange,
  onValueChange,
  ...props
}: propsSelect & React.ComponentProps<typeof Select.Trigger>) => (
  <Select.Root
    onOpenChange={onOpenChange}
    onValueChange={onValueChange}
    disabled={disabled}
    value={value}
    required={required}
  >
    <Select.Trigger
      className={clsxm(
        'mt-2 flex h-[42px] w-full items-center justify-between gap-1 rounded border border-custom-white-purple-2 bg-custom-white-purple py-0 px-[15px] text-sm text-custom-black outline-none hover:border-custom-light-purple data-[placeholder]:text-custom-light-gray',
        className ?? ''
      )}
      {...props}
    >
      <Select.Value className="" placeholder={placeholder ?? 'Select Something'} />
      <Select.Icon className="text-custom-black">{icon ?? <BsChevronDown />}</Select.Icon>
    </Select.Trigger>
    <Select.Portal>
      <Select.Content className="overflow-hidden rounded-md bg-white shadow">
        <Select.ScrollUpButton className="flex h-6 cursor-default items-center justify-center bg-white text-custom-light-purple">
          <BsChevronUp />
        </Select.ScrollUpButton>
        <Select.Viewport className="p-1 ">{children}</Select.Viewport>
        <Select.ScrollDownButton className="flex h-6 items-center justify-center bg-custom-white text-custom-purple">
          <BsChevronDown />
        </Select.ScrollDownButton>
      </Select.Content>
    </Select.Portal>
  </Select.Root>
)

export default SelectInput
