import { ListGroup } from "react-bootstrap"
import UserCard from "../components/UserCard"
import { useGetUsersQuery } from "../services/usersApi"
import Page from "../components/Page"

type Props = {

}

const UsersPage: React.FC<Props> = () => {

   const { data: users, isFetching, isError } = useGetUsersQuery('')

   return (
      <Page
         title="List of users"
         isError={isError}
         isFetching={isFetching}
         list={(
            <ListGroup >
               {users?.map(user =>
                  <ListGroup.Item key={user.id}>
                     <UserCard user={user} />
                  </ListGroup.Item>
               )}
            </ListGroup>
         )} />
   )
}


export default UsersPage