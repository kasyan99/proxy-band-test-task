import { Card, Container } from "react-bootstrap"
import { Link } from "react-router-dom"

const Nav: React.FC = () => {
   return (<Container className="mb-3 text-center">
      <Card>
         <Card.Body>
            <Link to={'/'} className='me-3'>Home</Link>
            <Link to={'/users'}>Users</Link>
         </Card.Body>
      </Card>
   </Container>)
}

export default Nav