import ShopItem from "./ShopItem"

export default function Shop() {
    let toys = [
        {
            id: "1",
            name: 'Hot Toys Iron Man Mark 4',
            price: 500,
            currency: 'USD',
            brand: "Hot Toys",
            category: "Action Figures"
        },
        {
            id: "2",
            name: 'Barbie Doll',
            price: 200,
            currency: 'USD',
            brand: "Barbie",
            category: "Action Figures"
        },
    ]

    return <div className="shop-container">
        {toys.map(it =>
            <ShopItem key={it.id} details={it} />)
        }
    </div>
}