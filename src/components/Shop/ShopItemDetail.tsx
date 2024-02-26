import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Link, useLoaderData, useParams } from "react-router-dom"

export default function ShopItemDetail() {
    const item = useLoaderData()

    return <div>
        {item?.id}
        <div>
            Details goes here
        </div>
        <Link to="edit">
            <label>Edit</label>
        </Link>
        {/* {item?.name} */}
    </div>
}


export async function loader({params}) {
    let res = await fetch('http://localhost:3000/items/' + params.id)
    let data = await res.json();
    return data;
}