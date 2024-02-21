import { Fragment } from 'react'
import './App.css'
import CartModal from './components/CartModal'
import Header from './components/Header'
import Shop from './components/Shop'
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
    </Fragment>
    /* </ CartContextProvider> */
    // </UserContextProvider>
  )
}

export default App
