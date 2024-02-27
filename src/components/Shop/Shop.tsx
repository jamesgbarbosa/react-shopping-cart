import { Suspense } from "react";
import { Await, defer, useLoaderData, useParams } from "react-router-dom";
import ShopItems from "./ShopItems";

export default function Shop() {
    const { shopItems } = useLoaderData()

    return <Suspense fallback={<p>Loading ...</p>}>
        <Await resolve={shopItems}>
            {(loadedShopItems) => 
                <ShopItems shopItems={loadedShopItems} />
            }
        </Await>
    </Suspense>
}

async function loadShopItems() {
    let items = await fetch('http://localhost:3000/items')
    let itemJson = await items.json()
    return itemJson.items;
}

export function loader() {
    return defer({
        shopItems: loadShopItems()
    })
}