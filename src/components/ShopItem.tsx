import { useState } from "react"

export default function ShopItem({ details }) {
    const [itemDetails, setItemDetails] = useState(details)
    return <div className="shop-item">
        <h6>
            {details.name}
        </h6>
    </div>
}