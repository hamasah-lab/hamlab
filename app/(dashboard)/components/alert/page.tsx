'use client'

import { useEffect } from 'react'
import { MdOutlineLightbulb } from 'react-icons/md'

import { Alert } from '~/dist/alert'
import { Card, CardBody, CardHeader } from '~/dist/card'
import { SectionTitle } from '~/dist/section-title'
import useBreadcrumbContext from '~/hooks/use-breadcrumb-context'

const AlertComponentPage = () => {
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
        text: 'Alert',
      },
    ])
  }, [setBreadcrumb])

  return (
    <div className="flex flex-col">
      <SectionTitle
        title="Alert"
        subTitle="Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages."
      />

      <div className="flex gap-4">
        <div className="relative flex max-w-[50%] shrink-0 grow-0 basis-1/2 flex-col gap-8">
          <Card>
            <CardHeader title="Default" />
            <CardBody>
              <div className="flex flex-col gap-y-4">
                <Alert message="This is a primary alert." />
                <Alert message="This is a secondary alert." variant="secondary" />
                <Alert message="This is a success alert." variant="success" />
                <Alert message="This is a danger alert." variant="danger" />
                <Alert message="This is a warning alert." variant="warning" />
                <Alert message="This is a info alert." variant="info" />
                <Alert message="This is a light alert." variant="light" />
                <Alert message="This is a dark alert." variant="dark" />
              </div>
            </CardBody>
          </Card>
          <Card>
            <CardHeader title="Icon" />
            <CardBody>
              <div className="flex flex-col gap-y-4">
                <Alert message="This is a primary alert." Icon={MdOutlineLightbulb} />
                <Alert message="This is a secondary alert." variant="secondary" Icon={MdOutlineLightbulb} />
                <Alert message="This is a success alert." variant="success" Icon={MdOutlineLightbulb} />
                <Alert message="This is a danger alert." variant="danger" Icon={MdOutlineLightbulb} />
                <Alert message="This is a warning alert." variant="warning" Icon={MdOutlineLightbulb} />
                <Alert message="This is a info alert." variant="info" Icon={MdOutlineLightbulb} />
                <Alert message="This is a light alert." variant="light" Icon={MdOutlineLightbulb} />
                <Alert message="This is a dark alert." variant="dark" Icon={MdOutlineLightbulb} />
              </div>
            </CardBody>
          </Card>
          <Card>
            <CardHeader title="Dismissable" />
            <CardBody>
              <div className="flex flex-col gap-y-4">
                <Alert message="This is a primary alert." dissmissable={true} />
                <Alert message="This is a secondary alert." variant="secondary" dissmissable={true} />
                <Alert message="This is a success alert." variant="success" dissmissable={true} />
                <Alert message="This is a danger alert." variant="danger" dissmissable={true} />
                <Alert message="This is a warning alert." variant="warning" dissmissable={true} />
                <Alert message="This is a info alert." variant="info" dissmissable={true} />
                <Alert message="This is a light alert." variant="light" dissmissable={true} />
                <Alert message="This is a dark alert." variant="dark" dissmissable={true} />
              </div>
            </CardBody>
          </Card>
        </div>
        <div className="relative flex max-w-[50%] shrink-0 grow-0 basis-1/2 flex-col gap-8">
          <Card>
            <CardHeader title="Title" />
            <CardBody>
              <div className="flex flex-col gap-y-4">
                <Alert message="This is a primary alert." title="Primary" />
                <Alert message="This is a secondary alert." variant="secondary" title="Secondary" />
                <Alert message="This is a success alert." variant="success" title="Success" />
                <Alert message="This is a danger alert." variant="danger" title="Danger" />
                <Alert message="This is a warning alert." variant="warning" title="Warning" />
                <Alert message="This is a info alert." variant="info" title="Info" />
                <Alert message="This is a light alert." variant="light" title="Light" />
                <Alert message="This is a dark alert." variant="dark" title="Dark" />
              </div>
            </CardBody>
          </Card>
          <Card>
            <CardHeader title="Title with Icon" />
            <CardBody>
              <div className="flex flex-col gap-y-4">
                <Alert message="This is a primary alert." title="Primary" Icon={MdOutlineLightbulb} />
                <Alert
                  message="This is a secondary alert."
                  variant="secondary"
                  title="Secondary"
                  Icon={MdOutlineLightbulb}
                />
                <Alert message="This is a success alert." variant="success" title="Success" Icon={MdOutlineLightbulb} />
                <Alert message="This is a danger alert." variant="danger" title="Danger" Icon={MdOutlineLightbulb} />
                <Alert message="This is a warning alert." variant="warning" title="Warning" Icon={MdOutlineLightbulb} />
                <Alert message="This is a info alert." variant="info" title="Info" Icon={MdOutlineLightbulb} />
                <Alert message="This is a light alert." variant="light" title="Light" Icon={MdOutlineLightbulb} />
                <Alert message="This is a dark alert." variant="dark" title="Dark" Icon={MdOutlineLightbulb} />
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default AlertComponentPage
