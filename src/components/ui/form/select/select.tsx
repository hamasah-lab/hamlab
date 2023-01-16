import { Listbox, Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'
import { BsCheck } from 'react-icons/bs'
import { HiChevronUpDown } from 'react-icons/hi2'

import clsxm from '~/utils/clsxm'

import SelectItem from './item'
import { DataSelect, PropSelectInput } from './types'

const SelectInput = ({
  data,
  iconCheck = <BsCheck className="h-5 w-5 text-custom-white" />,
  item = (data, iconCheck) => (
    <SelectItem value={data} iconCheck={iconCheck}>
      {data.text}
    </SelectItem>
  ),
  placeholder = 'Chose Fruit',
  id,
  name,
  className,
  onChange,
}: PropSelectInput) => {
  const [selected, setSelected] = useState<DataSelect | undefined>()
  const onSelectChange = (value: DataSelect) => {
    setSelected(value)
    if (onChange) onChange(value)
  }

  return (
    <Listbox value={selected} onChange={onSelectChange}>
      <div className="relative mt-1">
        <Listbox.Button
          id={id}
          name={name}
          className={clsxm(
            'relative mt-1 w-full cursor-pointer rounded border border-custom-white-purple-2 bg-custom-white-purple py-2.5 pl-3 pr-10 text-left text-sm outline-none ring-0 hover:border-custom-light-purple',
            className ?? ''
          )}
        >
          <span className={clsxm('block truncate', selected ? '!text-custom-black' : 'text-gray-400')}>
            {selected?.text ?? placeholder}
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <HiChevronUpDown className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </span>
        </Listbox.Button>
        <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
          <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {data.map(e => item(e, iconCheck))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  )
}

export default SelectInput
