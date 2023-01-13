import * as Select from '@radix-ui/react-select'

import clsxm from '~/utils/clsxm'

const Separator = ({ className, ...props }: React.ComponentProps<typeof Select.Separator>) => {
  const classNameSeparator = clsxm('h-px m-1 my-5 bg-custom-white-purple-2', className ?? '')

  return <Select.Separator className={classNameSeparator} {...props} />
}

export default Separator
