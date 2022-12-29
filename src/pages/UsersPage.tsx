import { Card, ListGroup, Spinner } from "react-bootstrap"
import UserCard from "../components/UserCard"
import { useGetUsersQuery } from "../services/usersApi"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


type Props = {

}

const UsersPage: React.FC<Props> = () => {

   const { data: users, isFetching, isError } = useGetUsersQuery('')
   if (isError) {
      return <div>Something went wrong! Try again later!</div>
   }

   return (
      <Container>
         <Card className="px-3 py-2 mb-3">
            <Card.Title>
               List of Users
            </Card.Title>
         </Card>
         {isFetching && <Spinner animation="border" variant="primary" />}
         {!isFetching &&
            <ListGroup >
               {users?.map(user => <ListGroup.Item>
                  <UserCard user={user} />
               </ListGroup.Item>)}
            </ListGroup>
         }
      </Container>
   )
}


export default UsersPage