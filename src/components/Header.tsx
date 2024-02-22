import { useContext, useEffect, useState } from "react"
import toyLogo from "../assets/images/toy-logo.png";
// import CartContext from "../store/CartContext"
// import UserContext from "../store/UserContext"
import { useDispatch, useSelector } from "react-redux"
import { cartModalActions } from "../store";

export default function Header() {
    // let cartContext = useContext(CartContext)
    // let userContext = useContext(UserContext)
    const dispatch = useDispatch();
    let cartItemSelector = useSelector((state) => state.cart.items)

    const [isBlink, setIsBlink] = useState(false)

    const totalCount = cartItemSelector.reduce((totalCount, item) => {
        return totalCount + item.quantity;
    }, 0)

    useEffect(() => {
        if (totalCount > 0) {
            setIsBlink(true)
            setTimeout(() => {
                setIsBlink(false);
            }, 500)
        }
    }, [totalCount])

    function handleShowCart() {
        dispatch(cartModalActions.showCartDialog())
        // userContext.showCartDialog();
    }


    return <div id="header">
        <div className="container">
            <div className="header-title-container">
                <img className="header-title-image" src={toyLogo} />
                <span className="header-title">React Toys Shop</span>
            </div>


        </div>
        <div className="cart-container">
            <button onClick={() => handleShowCart()} className={`${isBlink ? 'blink' : ''} cart-btn`}>Cart ({totalCount})</button>

        </div>

    </div>
}