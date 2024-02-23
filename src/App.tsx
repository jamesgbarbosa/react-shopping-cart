import './App.css'
import Shop from './components/Shop/Shop'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainRoot from './components/MainRoot'

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
  )
}

export default App
