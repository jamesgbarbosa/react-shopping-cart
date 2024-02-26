import { Outlet, useParams } from "react-router-dom";
import Shop from "./Shop";

export default function ShopRoot() {
    const param = useParams()

    return <div className="flex">
        {
            param.id &&

            <section className="shop-item-detail-section">
                <Outlet />
            </section>
        }

        <Shop></Shop>
    </div>
}