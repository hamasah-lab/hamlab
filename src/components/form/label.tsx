import { DetailedHTMLProps, LabelHTMLAttributes } from 'react'

const Label = (props: DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>) => {
  const className = `
        text-xs 
        text-c-black
        ${props.className ?? ''}
    `
  const propsMerge = { ...props, className }

  return <label {...propsMerge}>{props.children}</label>
}

export default Label
