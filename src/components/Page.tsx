import { Card, Spinner } from "react-bootstrap"
import Container from 'react-bootstrap/Container'
import Error from "../components/Error"

type Props = {
   list: JSX.Element | string
   isFetching: boolean
   isError: boolean
   title: string
}

const Page: React.FC<Props> = ({ list, isFetching, isError, title }) => {

   if (isError) return <Error />

   return (
      <Container style={{ position: 'relative' }}>
         <Card className="px-3 py-2 mb-3">
            <Card.Title className="text-center">
               {title}
            </Card.Title>
         </Card>
         {isFetching && <Spinner animation="border" variant="primary" />}
         {!isFetching && list}
      </Container>
   )
}


export default Page