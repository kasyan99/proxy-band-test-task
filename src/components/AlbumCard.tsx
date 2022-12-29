import { Card } from "react-bootstrap"
import { Album } from "../models/models"

type Props = {
   album: Album
}

const AlbumCard: React.FC<Props> = ({ album }) => {
   return <Card.Body>
      <Card.Title>{album.id}. {album.title}</Card.Title>
   </Card.Body>

}

export default AlbumCard