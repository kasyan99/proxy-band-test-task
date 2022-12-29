import { useState } from "react"
import { Card } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { User } from "../models/models"
import AlbumsPage from "../pages/AlbumsPage"
import Modal from "./Modal"

type Props = {
   user: User
}

const UserCard: React.FC<Props> = ({ user }) => {
   const [isOpen, setIsOpen] = useState(false)
   const navigate = useNavigate()

   const onClose = () => {
      setIsOpen(false)
      navigate('/users')
   }

   return <Card.Body>
      <Card.Title>{user.name}</Card.Title>
      <Link className="btn btn-primary me-2" to={`/posts/${user.id}`}>Posts</Link>
      <Link className="btn btn-primary me-2" to={`albums/${user.id}`} onClick={() => setIsOpen(true)}>Albums</Link>
      <Modal isOpen={isOpen} onClose={onClose}>
         <AlbumsPage />
      </Modal>
   </Card.Body>

}

export default UserCard