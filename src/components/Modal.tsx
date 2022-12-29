import { Card } from "react-bootstrap"
import ReactDOM from "react-dom"
import classes from './Modal.module.css'
type Props = {
   isOpen: boolean
   onClose: () => void
   children: JSX.Element | string
}

const portal = document.getElementById('portal')


const Modal: React.FC<Props> = ({ isOpen, children, onClose }) => {
   if (!isOpen) return null
   if (!portal) return null
   return ReactDOM.createPortal(<>
      <div className={classes.modal}>
         <Card className={classes.card}>
            {children}
         </Card>
      </div>
      <div className={classes.overlay} onClick={() => onClose()}></div>
   </>,
      portal)
}

export default Modal