import { configureStore, createSlice } from "@reduxjs/toolkit"

const cartInitialState = {
    items: []
}

const cartModalInitialState = {
    progress: ''
}

const cartReducer = createSlice({
    name: 'cart',
    initialState: cartInitialState,
    reducers: {
        addItem(state, action) {
            const items = [...state.items]

            let existingItemIndex = state.items.findIndex((it) => it.id == action.payload.item.id)

            if (existingItemIndex > -1) {
                const existingItem = state.items[existingItemIndex]

                let updatedItem = {
                    ...existingItem,
                    quantity: existingItem.quantity + 1
                }

                items[existingItemIndex] = updatedItem;

            } else {
                items.push({ ...action.payload.item, quantity: 1 })
            }

            state.items = items;
        },
        removeItem(state, action) { 
            const items = [...state.items]

            let existingItemIndex = state.items.findIndex((it) => it.id == action.payload.item.id)

            let existingItem = state.items[existingItemIndex]
    
            if (existingItem.quantity === 1) {
                items.splice(existingItemIndex, 1)
    
            } else {
                let updatedItem = {...existingItem, quantity: existingItem.quantity - 1}
    
                items[existingItemIndex] = updatedItem;
    
            }

            state.items = items;
        }
    }
})

const cartModalReducer = createSlice({
    name: 'cartModal',
    initialState: cartModalInitialState,
    reducers: {
        showCartDialog(state) {
            state.progress = 'cart'
        },
        hideCartDialog(state) {
            state.progress = ''
        },
        showCheckout(state) {
            state.progress = 'checkout'
        }
    }
})

const store = configureStore({
    reducer: {cart: cartReducer.reducer, cartModal: cartModalReducer.reducer}
})

export const cartActions = cartReducer.actions;
export const cartModalActions = cartModalReducer.actions;

export default store;