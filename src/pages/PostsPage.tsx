import { Card, Container, ListGroup, Spinner } from "react-bootstrap"
import { useParams } from "react-router-dom"
import PostCard from "../components/PostCard"
import { useGetPostsQuery } from "../services/usersApi"

type Props = {

}

const PostsPage: React.FC<Props> = () => {
   const { userId } = useParams()
   const { data: posts, isFetching, isError } = useGetPostsQuery(Number(userId))
   return (
      <Container>
         <Card className="px-3 py-2 mb-3">
            <Card.Title>
               User {userId} posts
            </Card.Title>
         </Card>
         {isFetching && <Spinner animation="border" variant="primary" />}
         {!isFetching &&
            <ListGroup >
               {posts?.map(post => <ListGroup.Item key={post.id}>
                  <PostCard post={post} />
               </ListGroup.Item>)}
            </ListGroup>
         }
      </Container>
   )
}


export default PostsPage