import { createBrowserRouter } from "react-router-dom"

import {Home} from './pages/home'
import {Admin} from './pages/admin'
import {Networks} from './pages/networks'
import {Login} from './pages/login'
import { Private } from "./routes/private"
import { ErrorPage } from "./pages/error"


const router = createBrowserRouter([
  {
    path:'/',
    element: <Home></Home>
  },
  {
    path: '/login',
    element: <Login/>    
  },
  {
    path: '/admin',
    element: <Private><Admin/></Private>
  },
  {
    path: '/Networks', //admin/social
    element: <Networks/>    
  },
  {
    path:"*",
    element:<ErrorPage/>
  }
])

export {router};