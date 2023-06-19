import { ReactNode, useMemo, useState } from 'react'

import Accordion from './accordion'

type PropsAccordionGroup = {
  accordion: {
    label: ReactNode
    content: ReactNode
  }[]
}

const AccordionGroup = (props: PropsAccordionGroup) => {
  const [show, setShow] = useState<number | undefined>()

  return (
    <div className="flex flex-col gap-y-2">
      {props.accordion.map(({ label, content }, index) => {
        return <Accordion key={index} id={index + 1} show={show} setShow={setShow} label={label} content={content} />
      })}
    </div>
  )
}

export default AccordionGroup
