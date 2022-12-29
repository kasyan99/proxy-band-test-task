import { Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import { User } from "../models/models"

type Props = {
   user: User
}

const UserCard: React.FC<Props> = ({ user }) => {
   return <Card.Body>
      <Card.Title>{user.name}</Card.Title>
      <Link className="btn btn-primary me-2" to={`/posts/${user.id}`}>Posts</Link>
      <Button variant="primary">Albums</Button>
   </Card.Body>

}

export default UserCard