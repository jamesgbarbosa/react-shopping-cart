import { useContext } from "react"
import CartContext from "../store/CartContext"

export default function Header() {
    let cartContext = useContext(CartContext)

    const totalCount = cartContext.items.reduce((totalCount, item) => {
        return totalCount + item.quantity;
    }, 0)

    return <div id="header">
        <div className="container">
            <div></div>
            <span className="title">React Toys Shop</span>
            <div className="cart-container">
                <button>Cart ({totalCount})</button>
            </div>
        </div>
    </div>
}