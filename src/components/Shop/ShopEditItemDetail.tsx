import { Suspense } from "react"
import { Await, useRouteLoaderData } from "react-router-dom"

export default function ShopEditItemDetail() {
    const {shopItems} = useRouteLoaderData('shopItems')

    return <Suspense fallback={<p>Loading ...</p>}>
        <Await resolve={shopItems}>
            {(loadedShopItems) =>
                <>
                    <div>
                        <h1>Detail</h1>
                        {
                            loadedShopItems.map(it =>
                                <p>{it.id}</p>
                            )
                        }
                    </div>
                </>
            }
        </Await>
    </Suspense>

}

