'use client'

import { useEffect } from 'react'

import { Badge, BadgeLink } from '~/dist/badge'
import { Card, CardBody, CardHeader } from '~/dist/card'
import { SectionTitle } from '~/dist/section-title'
import { Text } from '~/dist/text'
import useBreadcrumbContext from '~/hooks/use-breadcrumb-context'

const AlertComponentPage = () => {
  const { setBreadcrumb, breadcrumb } = useBreadcrumbContext()

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
        text: 'Badge',
      },
    ])
  }, [setBreadcrumb])

  useEffect(() => console.log(breadcrumb), [breadcrumb])

  return (
    <div className="flex flex-col">
      <SectionTitle title="Badges" subTitle="Examples for badges, our small count and labeling component." />

      <div className="flex gap-4">
        <div className="relative flex max-w-[50%] shrink-0 grow-0 basis-1/2 flex-col gap-8">
          <Card>
            <CardHeader title="Heading" />
            <CardBody>
              <Text fontSize="5xl" className="mb-2 flex items-center font-semibold">
                Heading 1
                <Badge className="ml-3 text-2xl" variant="secondary">
                  New
                </Badge>
              </Text>
              <Text fontSize="4xl" className="mb-2 flex items-center font-semibold">
                Heading 2
                <Badge className="ml-3 text-xl" variant="secondary">
                  New
                </Badge>
              </Text>
              <Text fontSize="3xl" className="mb-2 flex items-center font-semibold">
                Heading 3
                <Badge className="ml-3 text-lg" variant="secondary">
                  New
                </Badge>
              </Text>
              <Text fontSize="2xl" className="mb-2 flex items-center font-semibold">
                Heading 4
                <Badge className="ml-3 text-base" variant="secondary">
                  New
                </Badge>
              </Text>
              <Text fontSize="xl" className="mb-2 flex items-center font-semibold">
                Heading 5
                <Badge className="ml-3 text-sm" variant="secondary">
                  New
                </Badge>
              </Text>
              <Text fontSize="lg" className="flex items-center font-semibold">
                Heading 6
                <Badge className="ml-3 text-xs" variant="secondary">
                  New
                </Badge>
              </Text>
            </CardBody>
          </Card>
          <Card>
            <CardHeader title="Variation" />
            <CardBody>
              <div className="flex flex-wrap gap-x-3 gap-y-2">
                <Badge variant="primary">Primary</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="danger">Danger</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="info">Info</Badge>
                <Badge variant="light">Light</Badge>
                <Badge variant="dark">Dark</Badge>
              </div>
            </CardBody>
          </Card>
        </div>
        <div className="relative flex max-w-[50%] shrink-0 grow-0 basis-1/2 flex-col gap-8">
          <Card>
            <CardHeader title="Link" />
            <CardBody>
              <div className="flex flex-wrap gap-x-3 gap-y-2">
                <BadgeLink variant="primary" href="/components/badge">
                  Primary
                </BadgeLink>
                <BadgeLink variant="secondary" href="/components/badge">
                  Secondary
                </BadgeLink>
                <BadgeLink variant="success" href="/components/badge">
                  Success
                </BadgeLink>
                <BadgeLink variant="danger" href="/components/badge">
                  Danger
                </BadgeLink>
                <BadgeLink variant="warning" href="/components/badge">
                  Warning
                </BadgeLink>
                <BadgeLink variant="info" href="/components/badge">
                  Info
                </BadgeLink>
                <BadgeLink variant="light" href="/components/badge">
                  Light
                </BadgeLink>
                <BadgeLink variant="dark" href="/components/badge">
                  Dark
                </BadgeLink>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default AlertComponentPage
