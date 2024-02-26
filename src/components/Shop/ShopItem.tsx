// import { useContext } from "react"
// import CartContext from "../store/CartContext"
import { useDispatch } from "react-redux"
import { cartActions } from "../../store"
import { useState } from "react";
import styles from "./ShopItem.module.css";
import { NavLink, useParams } from "react-router-dom";

export default function ShopItem({ itemDetails }) {
    // const [itemDetails, setItemDetails] = useState(details)
    // let cartContext = useContext(CartContext)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const dispatch = useDispatch();
    const param = useParams()

    function handleAddItem(item) {
        dispatch(cartActions.addItem({ item }))
    }

    function updateImageIndex() {
        setCurrentImageIndex((prev) => itemDetails.image?.length > 1 ? 1 : 0)
    }

    return <NavLink to={itemDetails.id}>
        <div className={`${styles.shopItem} ${param.id == itemDetails.id ? `${styles.active}` : ''}`}>
            <section onMouseOver={() => updateImageIndex()} onMouseOut={() => setCurrentImageIndex((prev) => 0)}>
                <img className={styles.shopItemImage} src={`http://localhost:3000/${itemDetails.image[currentImageIndex]}`} />
                <div className={styles.shopItemTitle}>
                    {itemDetails.name}
                </div>
            </section>
            <div className={`${styles.shopItemDesc} flex-space-between`}>
                <div>
                    <label>{itemDetails.currency} <span className="price">{itemDetails.price}</span></label>
                </div>
                <button className={styles.addToCart} onClick={() => handleAddItem(itemDetails)}>Add to cart</button>
            </div>
        </div>
    </NavLink>
}