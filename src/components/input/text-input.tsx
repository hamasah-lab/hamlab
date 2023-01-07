import { DetailedHTMLProps, InputHTMLAttributes } from 'react'

const TextInput = (props: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => {
  const className = `
        mt-2 
        bg-c-white-purple 
        border
        border-c-white-purple-2
        text-sm 
        rounded-[4px]
        block 
        w-full 
        p-2.5
        outline-none
        focus:border-c-light-purple
        text-c-black
        ${props.className ?? ''}
    `

  return <input type={props.type ?? 'text'} className={className} {...props} />
}

export default TextInput
