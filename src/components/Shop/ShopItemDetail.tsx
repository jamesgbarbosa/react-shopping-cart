import { useParams } from "react-router-dom"

export default function ShopItemDetail() {
    const param = useParams()
    return <div>
        {param.id}
    </div>
}