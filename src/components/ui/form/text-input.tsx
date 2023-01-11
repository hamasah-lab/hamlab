import { DetailedHTMLProps, InputHTMLAttributes } from 'react'

import clsxm from '~/utils/clsxm'

const TextInput = (props: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => {
  const className = clsxm(
    'mt-2 bg-custom-white-purple border border-custom-white-purple-2 text-sm rounded-[4px] block w-full p-2.5 outline-none focus:border-custom-light-purple text-custom-black',
    props.className
  )
  const propsMerge = { ...props, className }

  return <input type={props.type ?? 'text'} {...propsMerge} />
}

export default TextInput
