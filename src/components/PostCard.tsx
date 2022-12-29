import { Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import { Post, User } from "../models/models"

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