import { Button } from '~/dist/button'
import { Card, CardBody, CardFooter, CardHeader, CardText } from '~/dist/card'
import { CustomLink } from '~/dist/link'
import { SectionTitle } from '~/dist/section-title'

export const metadata = {
  title: 'Card',
}

const CardComponentPage = () => {
  return (
    <div className="flex flex-col">
      <SectionTitle
        title="Cards"
        subTitle="Cards provide a flexible and extensible content container with multiple variants and options."
      />
      <div className="flex gap-4">
        <div className="flex max-w-[50%] shrink-0 grow-0 basis-1/2 flex-col gap-8">
          <Card>
            <CardHeader title="Header" />
            <CardBody>
              <CardText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi officia tempore corporis sit consequatur
                quas.
              </CardText>
            </CardBody>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader title="Header" />
            <CardBody>
              <CardText>This is some text within a card body.</CardText>
            </CardBody>
            <CardFooter className="text-right">
              <Button>Submit</Button>
            </CardFooter>
          </Card>
        </div>
        <div className="flex max-w-[50%] shrink-0 grow-0 basis-1/2 flex-col gap-8">
          <Card>
            <CardHeader title="Header" />
            <CardBody>
              <CardText>
                Some quick example text to build on the card title and make up the bulk of the cards content.
              </CardText>
              <CustomLink href="/">Card link</CustomLink>
              <CustomLink className="ml-2" href="/">
                Another link
              </CustomLink>
            </CardBody>
          </Card>

          <Card>
            <CardHeader
              title={
                <>
                  Footer
                  <code className="ml-2">bg-gray-200</code>
                </>
              }
            />
            <CardBody>
              <CardText>This is some text within a card body.</CardText>
            </CardBody>
            <CardFooter className="bg-gray-50">Footer</CardFooter>
          </Card>
        </div>
      </div>

      <SectionTitle
        title="Card variants"
        subTitle="Basically, the card can be given a color variant."
        className="mt-12"
      />
      <div className="grid grid-cols-4 gap-8">
        <Card variant="primary">
          <CardHeader title="Primary" />
          <CardBody>
            <CardText>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, odit.</CardText>
          </CardBody>
        </Card>

        <Card variant="secondary">
          <CardHeader title="Secondary" />
          <CardBody>
            <CardText>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, facilis.</CardText>
          </CardBody>
        </Card>

        <Card variant="danger">
          <CardHeader title="Danger" />
          <CardBody>
            <CardText>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, facilis.</CardText>
          </CardBody>
        </Card>

        <Card variant="warning">
          <CardHeader title="Warning" />
          <CardBody>
            <CardText>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, facilis.</CardText>
          </CardBody>
        </Card>

        <Card variant="info">
          <CardHeader title="Info" />
          <CardBody>
            <CardText>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, facilis.</CardText>
          </CardBody>
        </Card>

        <Card variant="success">
          <CardHeader title="Success" />
          <CardBody>
            <CardText>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, facilis.</CardText>
          </CardBody>
        </Card>

        <Card variant="light">
          <CardHeader title="Light" />
          <CardBody>
            <CardText>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, facilis.</CardText>
          </CardBody>
        </Card>

        <Card variant="dark">
          <CardHeader title="Dark" />
          <CardBody>
            <CardText>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, facilis.</CardText>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

export default CardComponentPage
