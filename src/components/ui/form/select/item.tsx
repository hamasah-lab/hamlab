import { Listbox } from '@headlessui/react'
import { PropsWithChildren } from 'react'

import clsxm from '~/utils/clsxm'

import { PropSelectItem } from './types'

const SelectItem = ({ value, children, iconCheck, className }: PropSelectItem & PropsWithChildren) => (
  <Listbox.Option
    className={({ active, selected }) =>
      clsxm(
        'relative cursor-pointer select-none py-2 pl-5 pr-4',
        className ?? '',
        selected ? 'bg-custom-purple text-custom-white' : active ? 'bg-custom-light-gray-2' : 'text-custom-black'
      )
    }
    value={value}
  >
    {({ selected }) => (
      <div className="flex w-full items-center justify-start gap-2">
        <div className={clsxm(selected ? '' : 'invisible')}>{iconCheck}</div>
        <span className={clsxm('block truncate', selected ? 'font-medium' : 'font-normal')}>{children}</span>
      </div>
    )}
  </Listbox.Option>
)

export default SelectItem
