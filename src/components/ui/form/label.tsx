import { DetailedHTMLProps, LabelHTMLAttributes } from 'react'

import clsxm from '~/utils/clsxm'

const Label = (props: DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>) => {
  const className = clsxm('text-xs text-custom-black', props.className)
  const propsMerge = { ...props, className }

  return <label {...propsMerge}>{props.children}</label>
}

export default Label
