import { useEffect, useState } from "react";
import ShopItem from "./ShopItem"

export default function Shop() {
    const [shopItems, setShopItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        async function getItems() {
            setIsLoading(prev => true)
            let items = await fetch('http://localhost:3000/items')
            let itemJson = await items.json()
            setIsLoading(prev => false)

            setShopItems(prev => [...itemJson.items])
        }

        getItems();
    }, [])

    return <div className="shop-container">
        {isLoading ? "Loading..." : <>
            {
                shopItems.map(it =>
                    <ShopItem key={it.id} itemDetails={it} />)
            }
        </>}
    </div>
}