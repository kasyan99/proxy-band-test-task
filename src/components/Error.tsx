import { Card, Container } from "react-bootstrap"

const Error: React.FC = () => {
   return <Container>
      <Card className="text-danger p-3">
         <Card.Title >Error</Card.Title>
         <Card.Text>Something went wrong...Try it later!</Card.Text>
      </Card>
   </Container>

}

export default Error