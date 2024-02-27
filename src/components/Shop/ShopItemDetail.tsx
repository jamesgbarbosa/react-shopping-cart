import { Suspense } from "react"
import { Await, Link, defer, useLoaderData, useParams } from "react-router-dom"

export default function ShopItemDetail() {
    const { shopItem } = useLoaderData()

    return <Suspense fallback={<p>Loading detail...</p>}>
        <Await resolve={shopItem}>
            {loadedShopItem => <>
                <div>
                    {loadedShopItem?.id}
                    <div>
                        Details goes here
                    </div>
                    <Link to="edit">
                        <label>Edit</label>
                    </Link>
                    {/* {item?.name} */}
                </div>
            </>}
        </Await>
    </Suspense>
}

async function shopItemLoader(id) {
    let res = await fetch('http://localhost:3000/items/' + id)
    let data = await res.json();
    return data;
}

export function loader({ params }) {
    return defer({
        shopItem: shopItemLoader(params.id)
    })
}