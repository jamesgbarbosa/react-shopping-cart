import { useContext } from "react"
import CartContext from "../store/CartContext"

export default function ShopItem({ itemDetails }) {
    // const [itemDetails, setItemDetails] = useState(details)
    let cartContext = useContext(CartContext)
    return <div className="shop-item">
        <section>
            <img className="shop-item-image" src={`http://localhost:3000/${itemDetails.image}`} />
            <div className="shop-item-title">
                {itemDetails.name}
            </div>

        </section>
        <div className="flex-space-between">
            <div>
                <label>{itemDetails.currency} <span className="price">{itemDetails.price}</span></label>
            </div>
            <button className="add-to-cart" onClick={() => cartContext.addItem(itemDetails)}>Add to cart</button>
        </div>
    </div>
}