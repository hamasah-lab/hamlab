import * as Collapsible from '@radix-ui/react-collapsible'
import { ClassValue } from 'clsx'
import React, { useState } from 'react'

import clsxm from '~/utils/clsxm'

interface CollapsibleButtonProps {
  trigger: React.ReactNode
  content: React.ReactNode
  triggerClassName?: ClassValue
}

const CollapsibleButton = (props: CollapsibleButtonProps) => {
  const { trigger, content, triggerClassName } = props
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Collapsible.Root open={isOpen} onOpenChange={setIsOpen}>
      <Collapsible.Trigger className={clsxm(triggerClassName)}>{trigger}</Collapsible.Trigger>
      <Collapsible.Content className="collapsible_content">{content}</Collapsible.Content>

      <style jsx global>{`
        .collapsible_content {
          overflow: hidden;
        }
        .collapsible_content[data-state='open'] {
          animation: slideDown 200ms ease-out;
        }
        .collapsible_content[data-state='closed'] {
          animation: slideUp 200ms ease-out;
        }

        @keyframes slideDown {
          from {
            height: 0;
          }
          to {
            height: var(--radix-collapsible-content-height);
          }
        }

        @keyframes slideUp {
          from {
            height: var(--radix-collapsible-content-height);
          }
          to {
            height: 0;
          }
        }
      `}</style>
    </Collapsible.Root>
  )
}

export default CollapsibleButton
