import './App.css'
import Shop, { shopItemsLoader } from './components/Shop/Shop'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainRoot from './components/MainRoot'
import Home from './components/Home'
import ShopRoot from './components/Shop/ShopRoot'
import ShopItemDetail from './components/Shop/ShopItemDetail'

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
        children: [
          // {
          //   index: true,
          //   element: <Shop />,
          // },
          {
            path: ':id',
            element: <ShopItemDetail />,
          }
        ]
        // loader: shopItemsLoader
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
