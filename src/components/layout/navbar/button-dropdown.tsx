import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

interface ButtonDropdownProps {
  children: React.ReactNode
  trigger: React.ReactNode
  align?: 'start' | 'center' | 'end'
  sideOffset?: number
  withArrow?: boolean
}

const ButtonDropdown = (props: ButtonDropdownProps) => {
  const { children, trigger, align = 'center', sideOffset = 5, withArrow = true } = props

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>{trigger}</DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="DropdownMenuContent min-w-[220px] rounded-md bg-white p-1 shadow-md"
          sideOffset={sideOffset}
          align={align}
        >
          {children}
          {withArrow ? <DropdownMenu.Arrow className="fill-white" /> : null}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>

      <style jsx global>{`
        .DropdownMenuContent {
          animation-duration: 400ms;
          animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform, opacity;
        }

        .DropdownMenuContent[data-side='top'] {
          animation-name: slideDownAndFade;
        }
        .DropdownMenuContent[data-side='right'] {
          animation-name: slideLeftAndFade;
        }
        .DropdownMenuContent[data-side='bottom'] {
          animation-name: slideUpAndFade;
        }
        .DropdownMenuContent[data-side='left'] {
          animation-name: slideRightAndFade;
        }

        @keyframes slideUpAndFade {
          from {
            opacity: 0;
            transform: translateY(2px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideRightAndFade {
          from {
            opacity: 0;
            transform: translateX(-2px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideDownAndFade {
          from {
            opacity: 0;
            transform: translateY(-2px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideLeftAndFade {
          from {
            opacity: 0;
            transform: translateX(2px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </DropdownMenu.Root>
  )
}

export default ButtonDropdown
