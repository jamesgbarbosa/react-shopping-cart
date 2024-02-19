import { useState } from "react"

export default function ShopItem({ details }) {
    const [itemDetails, setItemDetails] = useState(details)
    return <div className="shop-item">
        <section>
            <img className="shop-item-image" src={`http://localhost:3000/${details.image}`} />
            <p className="shop-item-title">
                {details.name}
            </p>
            <div>
                <label>{details.currency} <span className="price">{details.price}</span></label>
            </div>
        </section>
        <button>Add to cart</button>
    </div>
}