// import { useContext } from "react"
import Modal from "./Modal"
// import UserContext from "../store/UserContext"
import { createPortal } from "react-dom"
// import CartContext from "../store/CartContext"
import { useDispatch, useSelector } from "react-redux"
import { cartModalActions } from "../store"

export default function CartModal() {
    // const userContext = useContext(UserContext)
    // const cartContext = useContext(CartContext)
    // const items = cartContext.items;

    const dispatch = useDispatch();
    const cartItemSelector = useSelector((state) => state.cart.items)
    const cartModalSelector = useSelector((state) => state.cartModal)

    const totalAmount = cartItemSelector.reduce((totalAmount, item) => (+item.price * +item.quantity) + totalAmount, 0)

    function onHandleClose() {
        // userContext.hideCartDialog();
        dispatch(cartModalActions.hideCartDialog())
    }

    let cartBreakdown = <>
        <section className="cart-breakdown">
            <ul className="items-list">
                <div className="flex-space-between">
                    <span className="items-list-header">Item</span>
                    <span className="items-list-header">Quantity</span>
                </div>
            </ul>
            <ul className="items-list">
                {cartItemSelector.map(it => <li key={it.id}>
                    <div className="flex-space-between">
                        <span className="items-list-name">{it.name}</span>
                        <span>{it.quantity}</span>
                    </div>
                </li>)}
            </ul>
        </section>
        <div className="cart-footer">
            <hr></hr>
            <div className="flex-space-between">
                <div></div>
                <div>USD {totalAmount}</div>
            </div>
            <div className="cart-modal-buttons-container">
                <button className="cart-modal-button" onClick={() => onHandleClose()}>Close</button>
                <button className="cart-modal-button checkout">Checkout</button>
            </div>
        </div>
    </>

    return createPortal(<Modal onClose={onHandleClose} isOpen={cartModalSelector.progress === 'cart'}>
        <h3>Shopping Cart</h3>

        <div className="cart-modal">
            {cartItemSelector?.length == 0 ?
                <>
                    <div className="center">
                        Cart is empty
                    </div>
                    <div className="cart-footer">
                        <div className="cart-modal-buttons-container">
                            <button className="cart-modal-button" onClick={() => onHandleClose()}>Close</button>
                        </div>
                    </div>
                </>
                : cartBreakdown}
        </div>
    </Modal>, document.getElementById('modal'))
}