import { useEffect, useState } from "react";
import ShopItem from "./ShopItem"
import { useDispatch } from "react-redux";
import { notifActions } from "../store";

export default function Shop() {
    const [shopItems, setShopItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useDispatch();

    useEffect(() => {
        async function getItems() {
            dispatch(notifActions.openNotifDisplay({ status: "warning", message: "Loading..." }))
            setIsLoading(prev => true)
            let items = await fetch('http://localhost:3000/items')
            let itemJson = await items.json()
            setIsLoading(prev => false)
            dispatch(notifActions.openNotifDisplay({ status: "success", message: "Successfully loaded data" }))

            setShopItems(prev => [...itemJson.items])
        }
        setTimeout(() => {
            dispatch(notifActions.closeNotifDisplay())
        }, 4000)
        getItems();
    }, [])

    return <div className="center">
        <div className="shop-container">
            {isLoading ? "Loading..." : <>
                {
                    shopItems.map(it =>
                        <ShopItem key={it.id} itemDetails={it} />)
                }
            </>}
        </div>
    </div>
}