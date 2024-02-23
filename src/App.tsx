import { Fragment } from 'react'
import './App.css'
import CartModal from './components/CartModal'
import Header from './components/Header'
import Shop from './components/Shop/Shop'
import CheckoutModal from './components/CheckoutModal'
import Notif from './components/UI/Notif'
import { useSelector } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainRoot from './components/MainRoot'
// import { CartContextProvider } from './store/CartContext'
// import { UserContextProvider } from './store/UserContext'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoot />,
    children: [
      {
        index: true,
        element: <Shop />
      }
    ]
  },
  {
    path: "home",
    element: <Shop />
  }
])

function App() {


  return (
    <RouterProvider router={router}></RouterProvider>
    // <UserContextProvider>
    //   <CartContextProvider>
    // <Fragment>
    //   <Notif status={notifSelector.status} isHidden={!notifSelector.isOpen} message={notifSelector.message} />
    //   <Header />
    //   <Shop />
    //   <CartModal />
    //   <CheckoutModal />
    // </Fragment>
    /* </ CartContextProvider> */
    // </UserContextProvider>
  )
}

export default App
