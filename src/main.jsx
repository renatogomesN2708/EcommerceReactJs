import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Home from './View/Home/Home';
import Login from './View/Login/Login';
import Products from './View/Products/Products';
import Car from './View/Car/Car';

const router = createBrowserRouter([
{
    path: "/",
    element: <Login/>,
  },
{
    path: "/home",
    element: <Home />,
  },
{
    path: "/pay",
    element: <Car />,
  },
{
    path: "/products",
    element: <Products/>,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
