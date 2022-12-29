import { useState } from "react"
import { Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import { User } from "../models/models"
import AlbumsPage from "../pages/AlbumsPage"
import Modal from "./Modal"

type Props = {
   user: User
}

const UserCard: React.FC<Props> = ({ user }) => {
   const [isOpen, setIsOpen] = useState(false)

   return <Card.Body>
      <Card.Title className="mb-3">{user.name}</Card.Title>
      <Link className="btn btn-primary me-2" to={`/posts/${user.id}`}>Posts</Link>
      <Button onClick={() => setIsOpen(true)}>Albums</Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
         <AlbumsPage userId={user.id} />
      </Modal>
   </Card.Body>

}

export default UserCard