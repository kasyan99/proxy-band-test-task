import { ListGroup } from "react-bootstrap"

type Props = {
   list: Array<any>
   Card: React.FC<any>
}

const List: React.FC<Props> = ({ list, Card }) => {
   return (
      <ListGroup >
         {list?.map(item => <ListGroup.Item key={item.id}>
            <Card album={item} />
         </ListGroup.Item>)}
      </ListGroup>
   )
}

export default List