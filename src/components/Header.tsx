import { useContext, useEffect, useState } from "react"
import CartContext from "../store/CartContext"

export default function Header() {
    let cartContext = useContext(CartContext)
    const [isBlink, setIsBlink] = useState(false)
   
    const totalCount = cartContext.items.reduce((totalCount, item) => {
        return totalCount + item.quantity;
    }, 0)

    useEffect(() => {
        setIsBlink(true)
        setTimeout(() => {
            setIsBlink(false);
        }, 500)
    }, [totalCount])
    

    return <div id="header">
        <div className="container">
            <div></div>
            <span className="title">React Toys Shop</span>
            <div className="cart-container">
                <button className={`${isBlink ? 'blink' : ''} cart-btn`}>Cart ({totalCount})</button>
            </div>
        </div>
    </div>
}