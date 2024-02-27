import { useParams } from "react-router-dom"
import ShopItem from "./ShopItem"

export default function ShopItems({ shopItems }) {
    const param = useParams()

    return <div className="flex-center">
        <div className={`${param.id ? 'shop-container' : 'shop-container-expanded'}`}>
            {
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