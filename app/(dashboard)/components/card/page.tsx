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
      <SectionTitle title="Cards" />

      <div className="flex gap-4">
        <div className="relative flex max-w-[50%] shrink-0 grow-0 basis-1/2 flex-col gap-8">
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
        <div className="relative flex max-w-[50%] shrink-0 grow-0 basis-1/2 flex-col gap-8">
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
            <CardFooter className="bg-gray-200">Footer</CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default CardComponentPage
