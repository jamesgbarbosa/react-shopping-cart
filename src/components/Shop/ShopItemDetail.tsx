import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

export default function ShopItemDetail() {
    const param = useParams()
    const shopItemsSelector = useSelector((state) => state.shop.items)
    const item = shopItemsSelector.find(it => it.id == param.id)

    return <div>
        {item?.name}
    </div>
}