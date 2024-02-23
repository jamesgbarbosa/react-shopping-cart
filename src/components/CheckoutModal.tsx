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

    function handleLoading() {
        dispatch(notifActions.openNotifDisplay({ status: "warning", message: "Loading..." }))
    }

    function handleSuccess(message) {
        dispatch(notifActions.openNotifDisplay({ status: "success", message: message }))
    }

    function handleCloseNotif() {
        setTimeout(() => {
            dispatch(notifActions.closeNotifDisplay())
        }, 4000)
    }

    async function onSubmit() {
        handleLoading();
        const submit = async () => {
            const submit = await fetch(`http://localhost:3000/submit`, {method: "POST"})
            await submit.json();
            handleSuccess("Successfuly submitted");
            
        }

        await submit();
        handleCloseNotif();
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