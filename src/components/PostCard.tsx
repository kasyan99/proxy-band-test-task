import { Card } from "react-bootstrap"
import { Post } from "../models/models"

type Props = {
   post: Post
}

const UserCard: React.FC<Props> = ({ post }) => {
   return <Card.Body>
      <Card.Title>{post.title}</Card.Title>
      <Card.Text>{post.body}</Card.Text>
   </Card.Body>

}

export default UserCard