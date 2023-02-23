import { Card, CardBody, CardFooter, CardHeader } from '~/dist/card'

const CardComponentPage = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <h1>Card Header</h1>
        </CardHeader>
        <CardBody>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi officia tempore corporis sit consequatur quas.
          </p>
        </CardBody>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  )
}

export default CardComponentPage
