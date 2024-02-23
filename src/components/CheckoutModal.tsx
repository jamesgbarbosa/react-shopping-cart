import { useDispatch, useSelector } from "react-redux";
import { cartActions, cartModalActions, notifActions } from "../store";
import Modal from "./Modal";
import { createPortal } from "react-dom";

export default function CheckoutModal() {
    const cartModalSelector = useSelector((state) => state.cartModal.progress)
    const dispatch = useDispatch();

    function onHandleClose() {
        dispatch(cartModalActions.hideCartDialog())
    }

    async function onSubmit() {
        dispatch(notifActions.openNotifDisplay({ status: "warning", message: "Loading..." }))
        dispatch(cartModalActions.hideCartDialog())

        const response = await fetch(`http://localhost:3000/submit`, { method: "POST" });

        if (!response.ok) {
            dispatch(notifActions.openNotifDisplay({ status: "error", message: "Error submitting" }))
        } else {
            dispatch(notifActions.openNotifDisplay({ status: "success", message: "Successfully Submitted!" }))
            dispatch(cartActions.clearCart())
        }

        setTimeout(() => {
            dispatch(notifActions.closeNotifDisplay())
        }, 4000)
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