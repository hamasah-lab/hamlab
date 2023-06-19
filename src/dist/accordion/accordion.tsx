import { Disclosure } from '@headlessui/react'
import { ReactNode } from 'react'

import AccordionButton from './accordion-button'
import AccordionPanel from './accordion-panel'

type ButtonComponent = (props: Pick<PropsAccordion, 'label'> & { isOpen: boolean }) => JSX.Element
type PanelComponent = (props: Pick<PropsAccordion, 'content'> & { show?: boolean }) => JSX.Element

export type PropsAccordion = {
  label: ReactNode
  content: ReactNode
  id?: number
  show?: number
  setShow?: (active: number | undefined) => void
  button?: ButtonComponent
  panel?: PanelComponent
}

const Accordion = (props: PropsAccordion) => {
  const {
    label,
    content,
    id,
    show,
    setShow,
    button: Button = ({ label, isOpen }) => <AccordionButton isOpen={isOpen}>{label}</AccordionButton>,
    panel: Panel = ({ content, show }) => <AccordionPanel show={show}>{content}</AccordionPanel>,
  } = props

  return (
    <Disclosure>
      {({ open }) => (
        <>
          <div onClick={id !== undefined && setShow ? () => setShow(show === id ? undefined : id) : undefined}>
            <Button label={label} isOpen={id !== undefined ? show === id : open} />
          </div>
          <Panel content={content} show={id !== undefined ? show === id : undefined} />
        </>
      )}
    </Disclosure>
  )
}

export default Accordion
