import { useContext } from "react"
import Modal from "./Modal"
import UserContext from "../store/UserContext"
import { createPortal } from "react-dom"

export default function CartModal() {
    const userContext = useContext(UserContext)

    function onHandleClose() {
        userContext.hideCartDialog();
    }

    return createPortal(<Modal onClose={onHandleClose} isOpen={userContext.progress === 'cart'}>
        Test
    </Modal>, document.getElementById('modal'))
}