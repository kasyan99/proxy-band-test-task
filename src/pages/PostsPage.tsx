import { ListGroup } from "react-bootstrap"
import PostCard from "../components/PostCard"
import { useGetPostsQuery } from "../services/usersApi"
import Page from "../components/Page"
import { useParams } from "react-router-dom"

type Props = {

}

const PostsPage: React.FC<Props> = () => {
   const { userId } = useParams()
   const { data: posts, isFetching, isError } = useGetPostsQuery(Number(userId))

   return (
      <Page
         title={`User ${userId} posts`}
         isError={isError}
         isFetching={isFetching}
         list={(
            <ListGroup >
               {posts?.map(post =>
                  <ListGroup.Item key={post.id}>
                     <PostCard post={post} />
                  </ListGroup.Item>
               )}
            </ListGroup>
         )} />
   )
}


export default PostsPage