import * as Select from '@radix-ui/react-select'
import React from 'react'

import clsxm from '~/utils/clsxm'

interface propsGroupItem {
  children: React.ReactNode
  labelGroup: string
}

const GroupItem = ({
  labelGroup,
  children,
  className,
  ...props
}: propsGroupItem & React.ComponentProps<typeof Select.Label>) => {
  const classNameLabel = clsxm('px-6 py-0 text-sm text-custom-light-purple', className ?? '')

  return (
    <Select.Group>
      <Select.Label className={classNameLabel} {...props}>
        {labelGroup}
      </Select.Label>
      {children}
    </Select.Group>
  )
}

export default GroupItem
