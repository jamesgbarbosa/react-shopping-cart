import { createContext, useState } from "react";

const UserContext = createContext({
    progress: '',
    showCartDialog: () => {},
    showCheckout: () => {},
    hideCartDialog: () => {}
})

export function UserContextProvider({children}) {

    const [dialog, setDialog] = useState('')
    const userContext = {
        progress : dialog,
        showCartDialog,
        showCheckout,
        hideCartDialog
    } 

    function showCartDialog() {
        setDialog(()=> 'cart')
    }

    function showCheckout() {
        setDialog(()=> 'checkout')
    }

    function hideCartDialog() {
        setDialog(()=> '')
    }

    console.log(dialog)

    return <UserContext.Provider value={userContext}>
        {children}
    </UserContext.Provider>
}

export default UserContext;