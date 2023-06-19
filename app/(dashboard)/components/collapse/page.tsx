'use client'

import { useEffect } from 'react'

import { Accordion, AccordionGroup } from '~/dist/accordion'
import { Card, CardBody, CardHeader } from '~/dist/card'
import { SectionTitle } from '~/dist/section-title'
import useBreadcrumbContext from '~/hooks/use-breadcrumb-context'

const CollapseComponentPage = () => {
  const { setBreadcrumb } = useBreadcrumbContext()

  useEffect(() => {
    setBreadcrumb([
      {
        href: '/',
        text: 'Dashboard',
      },
      {
        href: '/',
        text: 'General Components',
      },
      {
        text: 'Collapse',
      },
    ])
  }, [setBreadcrumb])

  return (
    <div className="flex flex-col">
      <SectionTitle title="Collapse" subTitle="An interactive component which expands/collapses a panel." />

      <div className="flex gap-4">
        <div className="relative flex max-w-[50%] shrink-0 grow-0 basis-1/2 flex-col gap-8">
          <Card>
            <CardHeader title="Simple" />
            <CardBody>
              <Accordion
                label="Simple Accordion"
                content="Pariatur do excepteur velit ut magna ea incididunt sunt sint fugiat. Exercitation sit ut velit ipsum. Veniam tempor mollit ut sit sit aliqua et est. Anim nisi ullamco commodo id magna dolor. Reprehenderit culpa mollit dolor tempor ex nostrud cupidatat laborum deserunt aliqua anim."
              />
            </CardBody>
          </Card>
        </div>
        <div className="relative flex max-w-[50%] shrink-0 grow-0 basis-1/2 flex-col gap-8">
          <Card>
            <CardHeader title="Accordion" />
            <CardBody>
              <AccordionGroup
                accordion={[
                  {
                    label: 'Simple Accordion',
                    content:
                      'Sit eiusmod Lorem pariatur nulla aute veniam id officia pariatur magna dolore fugiat commodo do. Magna quis dolore in consequat sunt irure enim consectetur ut cillum. Nulla ea excepteur qui ipsum excepteur enim eiusmod mollit cillum dolore. Officia nulla laboris deserunt ea culpa voluptate non dolor sit.',
                  },
                  {
                    label: 'Simple Accordion',
                    content:
                      'Sit eiusmod Lorem pariatur nulla aute veniam id officia pariatur magna dolore fugiat commodo do. Magna quis dolore in consequat sunt irure enim consectetur ut cillum. Nulla ea excepteur qui ipsum excepteur enim eiusmod mollit cillum dolore. Officia nulla laboris deserunt ea culpa voluptate non dolor sit.',
                  },
                  {
                    label: 'Simple Accordion',
                    content:
                      'Sit eiusmod Lorem pariatur nulla aute veniam id officia pariatur magna dolore fugiat commodo do. Magna quis dolore in consequat sunt irure enim consectetur ut cillum. Nulla ea excepteur qui ipsum excepteur enim eiusmod mollit cillum dolore. Officia nulla laboris deserunt ea culpa voluptate non dolor sit.',
                  },
                  {
                    label: 'Simple Accordion',
                    content:
                      'Sit eiusmod Lorem pariatur nulla aute veniam id officia pariatur magna dolore fugiat commodo do. Magna quis dolore in consequat sunt irure enim consectetur ut cillum. Nulla ea excepteur qui ipsum excepteur enim eiusmod mollit cillum dolore. Officia nulla laboris deserunt ea culpa voluptate non dolor sit.',
                  },
                ]}
              />
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default CollapseComponentPage
