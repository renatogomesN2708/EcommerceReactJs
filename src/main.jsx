import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Login from './View/Login/Login';
import Home from './View/Home/Home';
import Products from './View/Products/Products';
import Car from './View/Car/Car';
import { PRODUCTS_MOCK } from "./mock/Products.mock"

const router = createBrowserRouter([
{
    path: "/login",
    element: <Login/>,
  },
{
    path: "/home",
    element: <Home data={PRODUCTS_MOCK} />,
  },
{
  path: "/products/:productId",
  element: <Products data={PRODUCTS_MOCK} /> 
  },
{
    path: "/car/:carId",
    element: <Car data={PRODUCTS_MOCK} />,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
