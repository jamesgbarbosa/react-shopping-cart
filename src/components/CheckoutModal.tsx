import { useDispatch, useSelector } from "react-redux";
import { cartActions, cartModalActions, notifActions, submitCart } from "../store";
import Modal from "./UI/Modal";
import { createPortal } from "react-dom";
import { useRef, useState } from "react";

export default function CheckoutModal() {
    const cartModalSelector = useSelector((state) => state.cartModal.progress)
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    })
    const formRef = useRef();

    const dispatch = useDispatch();

    function onHandleClose() {
        dispatch(cartModalActions.hideCartDialog())
    }

    async function onSubmit() {
        setFormData( prev => ({}))
        formRef.current.reset();
        dispatch(submitCart({ ...formData}))
    }

    function handleOnChangeInput(event, controlName) {
        let value = event.target.value;
        setFormData( prev => {
            return {...prev, [controlName]: value}
        })
    }

    return createPortal(<Modal onClose={onHandleClose} isOpen={cartModalSelector == 'checkout'}>
        <div className="checkout-modal">
            <form ref={formRef}>
                <div className="cart-header">
                    <h3>Checkout</h3>
                </div>
                <section className="checkout-form">
                    <div className="form-control">
                        <label>Name: </label>
                        <input onChange={(e) => handleOnChangeInput(e, 'name')} type="text" id="name" name="name" value={formData?.name} required></input>
                    </div>
                    <div className="form-control">
                        <label>Email: </label>
                        <input onChange={(e) => handleOnChangeInput(e, 'email')} type="text" id="email" name="email" value={formData?.email}></input>
                    </div>
                </section>
            </form>
            <div className="cart-footer">
                <div className="cart-modal-buttons-container">
                    <button className="cart-modal-button" onClick={() => onHandleClose()}>Close</button>
                    <button className="cart-modal-button checkout" onClick={() => onSubmit()}>Submit</button>
                </div>
            </div>
        </div>
    </Modal>, document.getElementById("modal"))
}