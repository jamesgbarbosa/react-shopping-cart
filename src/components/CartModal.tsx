import { useContext } from "react"
import Modal from "./Modal"
import UserContext from "../store/UserContext"
import { createPortal } from "react-dom"
import CartContext from "../store/CartContext"

export default function CartModal() {
    const userContext = useContext(UserContext)
    const cartContext = useContext(CartContext)

    const items = cartContext.items;

    const totalAmount = cartContext.items.reduce((totalAmount, item) => (+item.price * +item.quantity) + totalAmount, 0)

    function onHandleClose() {
        userContext.hideCartDialog();
    }

    return createPortal(<Modal onClose={onHandleClose} isOpen={userContext.progress === 'cart'}>
        <div className="cart-modal">
            <ul className="items-list">
                {items.map(it => <li key={it.id}>
                    <div className="flex-space-between">
                        <span>{it.name}</span>
                        <span>{it.quantity}</span>
                    </div>
                </li>)}
            </ul>
            <div className="cart-footer">
                <div className="flex-space-between">
                    <div></div>
                    <div>USD {totalAmount}</div>
                </div>
                <div className="cart-modal-buttons-container">
                    <button>Close</button>
                    <button>Checkout</button>
                </div>

            </div>
        </div>
    </Modal>, document.getElementById('modal'))
}