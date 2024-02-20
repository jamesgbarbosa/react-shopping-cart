import { createContext, useReducer } from "react";

const CartContext = createContext({
    items: [],
    addItem: (item) => {},
    removeItem: (id) => {}
});

function cartReducer(state, action) {
    const items = [...state.items]

    if (action.type == 'ADD_ITEM') {
        let existingItemIndex = state.items.findIndex((it) => it.id == action.item.id)

        if (existingItemIndex > -1) {
            const existingItem = state.items[existingItemIndex]

            let updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity + 1
            }

            items[existingItemIndex] = updatedItem;
            
        } else {
            items.push({...action.item, quantity: 1})
        }

        return {...state, items: items}
    }

    if (action.type == 'REMOVE_ITEM') {
        let existingItemIndex = state.items.findIndex((it) => it.id == action.item.id)

        let existingItem = state.items[existingItemIndex]

        if (existingItem.quantity === 1) {
            items.splice(existingItemIndex, 1)

        } else {
            let updatedItem = {...existingItem, quantity: existingItem.quantity - 1}

            items[existingItemIndex] = updatedItem;

        }

        return {...state, items: items}
        

    }
    return state;
}

export function CartContextProvider({ children }) {
    const [cart, dispatchCartAction] = useReducer(cartReducer, {
        items: []
    })

    function addItem(item) {
        dispatchCartAction({type: "ADD_ITEM", item})
    }

    function removeItem(item) {
        dispatchCartAction({type: "REMOVE_ITEM", id: item.id})
    }

    const cartContext = {
        items: cart.items,
        addItem,
        removeItem
    }

    console.log(cartContext.items)

    return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
}

export default CartContext;