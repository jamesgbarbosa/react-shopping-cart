import { useRouteLoaderData } from "react-router-dom"

export default function ShopEditItemDetail() {
    const shop = useRouteLoaderData('shopItems')

    return <div>
        <h1>Test</h1>
        {
            shop.map(it =>
                <p>{it.id}</p>
            )
        }
    </div>
}

