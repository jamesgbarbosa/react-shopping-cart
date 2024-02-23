import { Fragment } from 'react'
import './App.css'
import CartModal from './components/CartModal'
import Header from './components/Header'
import Shop from './components/Shop'
import CheckoutModal from './components/CheckoutModal'
// import { CartContextProvider } from './store/CartContext'
// import { UserContextProvider } from './store/UserContext'

function App() {
  return (
    // <UserContextProvider>
    //   <CartContextProvider>
    <Fragment>
      <Header />
      <Shop />
      <CartModal />
      <CheckoutModal />
    </Fragment>
    /* </ CartContextProvider> */
    // </UserContextProvider>
  )
}

export default App
