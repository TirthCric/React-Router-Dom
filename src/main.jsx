import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import App from './App'
import Deshbord from './components/Deshbord'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'

const router = createBrowserRouter([

 {
  path: "/" ,
  element: <App /> ,
  children: [
    {
      path:"" ,
      element: <Home/>
    },
    {
      path:"deshboard" ,
      element: <Deshbord/>
    },
    {
      path:"home" ,
      element: <Home/>
    },
    {
      path:"login" ,
      element: <Login/>
    },
    {
      path:"signup" ,
      element: <Signup/>
    },
  ]
 }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router = {router} />
  </StrictMode>,
)
