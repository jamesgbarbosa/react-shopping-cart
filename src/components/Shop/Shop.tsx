import { useEffect, useState } from "react";
import ShopItem from "./ShopItem"
import { useDispatch } from "react-redux";
import { notifActions } from "../../store";
import { useLoaderData, useParams } from "react-router-dom";

export default function Shop() {
    const [shopItems, setShopItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const param = useParams()

    // const shopItems = useLoaderData()

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

    return <div className="flex-center">
        <div className={`${param.id ? 'shop-container' : 'shop-container-expanded'}`}>
            {
                isLoading ? <p>Loading Data...</p> :
                    <>
                        {
                            shopItems.map(it =>
                                <ShopItem key={it.id} itemDetails={it} />)
                        }
                    </>
            }
        </div>
    </div>
}

export async function shopItemsLoader() {
    let items = await fetch('http://localhost:3000/items')
    let itemJson = await items.json()
    return itemJson.items;
}