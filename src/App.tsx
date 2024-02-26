import './App.css'
import Shop, { loader as shopItemsLoader } from './components/Shop/Shop'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainRoot from './components/MainRoot'
import Home from './components/Home'
import ShopRoot from './components/Shop/ShopRoot'
import ShopItemDetail, { loader as shopItemDetailLoader } from './components/Shop/ShopItemDetail'
import ShopEditItemDetail from './components/Shop/ShopEditItemDetail'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoot />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'shop',
        element: <ShopRoot />,
        id: "shopItems",
        loader: shopItemsLoader,
        children: [
          {
            path: ':id',
            element: <ShopItemDetail />,
            loader: shopItemDetailLoader
          },
          {
            path: ':id/edit',
            element: <ShopEditItemDetail />,
          },
        ]
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
  )
}

export default App
