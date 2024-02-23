import { useEffect, useState } from "react"
import toyLogo from "../../assets/images/toy-logo.png";
// import CartContext from "../store/CartContext"
// import UserContext from "../store/UserContext"
import { useDispatch, useSelector } from "react-redux"
import { cartModalActions } from "../../store";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

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


    return <div className={styles.header}>
        <div className={styles.headerContainer}>
            <div className={styles.headerTitleContainer}>
                <img className={styles.headerTitleImage} src={toyLogo} />
                <span className={styles.headerTitle}>React Toys Shop</span>

            </div>
        </div>

        <div className="cart-container">
            <nav id="nav">
                <ul>
                    <li>
                        <NavLink className={(isActive) => { isActive ? 'active' : null}} to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="shop">Shop</NavLink>
                    </li>
                </ul>
            </nav>
            <button onClick={() => handleShowCart()} className={`${isBlink ? 'blink' : ''} cart-btn`}>Cart ({totalCount})</button>

        </div>

    </div>
}