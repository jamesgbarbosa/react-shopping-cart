import { useDispatch, useSelector } from "react-redux";
import { cartActions, cartModalActions } from "../store";
import Modal from "./Modal";
import { createPortal } from "react-dom";

export default function CheckoutModal() {
    const cartModalSelector = useSelector((state) => state.cartModal.progress)
    const dispatch = useDispatch();

    function onHandleClose() {
        dispatch(cartModalActions.hideCartDialog())
    }

    function onSubmit() {
        dispatch(cartActions.clearCart())
        dispatch(cartModalActions.hideCartDialog())
    }

    return createPortal(<Modal onClose={onHandleClose} isOpen={cartModalSelector == 'checkout'}>
        <div className="checkout-modal">
            <h3>Checkout</h3>   
            <div className="cart-footer">
                <div className="cart-modal-buttons-container">
                    <button className="cart-modal-button" onClick={() => onHandleClose()}>Close</button>
                    <button className="cart-modal-button checkout" onClick={() => onSubmit()}>Submit</button>
                </div>
            </div>
        </div>
    </Modal>, document.getElementById("modal"))
}