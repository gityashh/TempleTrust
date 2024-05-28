import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'
import Admin from './components/Admin.jsx'

const router = createBrowserRouter([
  {
  path:'/',
  element: <Login/>
  },
  {
    path:'/home',
    element: <App/>
  },
  {
    path:'/signup',
    element: <Signup/>
  },
  {
    path:'/adminsign',
    element: <Admin/>
  },
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
