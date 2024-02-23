import { Fragment } from 'react'
import './App.css'
import CartModal from './components/CartModal'
import Header from './components/Header'
import Shop from './components/Shop'
import CheckoutModal from './components/CheckoutModal'
import Notif from './components/Notif'
import { useSelector } from 'react-redux'
// import { CartContextProvider } from './store/CartContext'
// import { UserContextProvider } from './store/UserContext'
function App() {
  
  const notifSelector = useSelector((state) => state.notif)

  return (
    // <UserContextProvider>
    //   <CartContextProvider>
    <Fragment>
      <Notif status={notifSelector.status} isHidden={!notifSelector.isOpen} message={notifSelector.message} />
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
