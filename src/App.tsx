import './App.css'
import Shop, { shopItemsLoader } from './components/Shop/Shop'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainRoot from './components/MainRoot'
import Home from './components/Home'

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
        element: <Shop />,
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
