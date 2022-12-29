// import { Card, Container, ListGroup, Spinner } from "react-bootstrap"
// import { useParams } from "react-router-dom"
// import { useGetAlbumsQuery } from "../services/usersApi"
// import Error from "../components/Error"
// import AlbumCard from "../components/AlbumCard"

// type Props = {

// }

// const AlbumsPage: React.FC<Props> = () => {
//    const { userId } = useParams()
//    const { data: albums, isFetching, isError } = useGetAlbumsQuery(Number(userId))

//    if (isError) return <Error />

//    return (
//       <Container>
//          <Card className="px-3 py-2 mb-3">
//             <Card.Title>
//                User {userId} albums
//             </Card.Title>
//          </Card>
//          {isFetching && <Spinner animation="border" variant="primary" />}
//          {!isFetching &&
//             <ListGroup >
//                {albums?.map(album => <ListGroup.Item key={album.id}>
//                   <AlbumCard album={album} />
//                </ListGroup.Item>)}
//             </ListGroup>
//          }
//       </Container>
//    )
// }


// export default AlbumsPage



import { ListGroup } from "react-bootstrap"
import AlbumCard from "../components/AlbumCard"
import { useGetPostsQuery } from "../services/usersApi"
import Page from "../components/Page"
import { useParams } from "react-router-dom"

type Props = {

}

const AlbumsPage: React.FC<Props> = () => {
   const { userId } = useParams()
   const { data: albums, isFetching, isError } = useGetPostsQuery(Number(userId))

   return (
      <Page
         title={`User ${userId} albums`}
         isError={isError}
         isFetching={isFetching}
         list={(
            <ListGroup >
               {albums?.map(album =>
                  <ListGroup.Item key={album.id}>
                     <AlbumCard album={album} />
                  </ListGroup.Item>
               )}
            </ListGroup>
         )} />
   )
}


export default AlbumsPage