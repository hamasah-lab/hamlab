import { DetailedHTMLProps, TextareaHTMLAttributes } from 'react'

import clsxm from '~/utils/clsxm'

const TextAreaInput = (props: DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>) => {
  const className = clsxm(
    'mt-2 bg-custom-white-purple border border-custom-white-purple-2 text-sm rounded-[4px] block w-full p-2.5 outline-none focus:border-custom-light-purple text-custom-black',
    props.className
  )
  const propsMerge = { cols: 30, rows: 3, ...props, className }

  return <textarea {...propsMerge}>{propsMerge.children}</textarea>
}

export default TextAreaInput
