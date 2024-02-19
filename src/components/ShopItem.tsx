import { useContext } from "react"
import CartContext from "../store/CartContext"

export default function ShopItem({ itemDetails }) {
    // const [itemDetails, setItemDetails] = useState(details)
    let cartContext = useContext(CartContext)
    return <div className="shop-item">
        <section>
            <img className="shop-item-image" src={`http://localhost:3000/${itemDetails.image}`} />
            <p className="shop-item-title">
                {itemDetails.name}
            </p>
            <div>
                <label>{itemDetails.currency} <span className="price">{itemDetails.price}</span></label>
            </div>
        </section>
        <button onClick={() => cartContext.addItem(itemDetails)}>Add to cart</button>
    </div>
}