import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './View/Home/Home';
import Products from './View/Products/Products';
import Pay from './View/Pay/Pay';

const router = createBrowserRouter([
{
    path: "/home",
    element: <Home />,
  },
{
    path: "/login",
    element: <Login />,
  },
{
    path: "/pay",
    element: <Pay />,
  },
{
    path: "/products",
    element: <Products />,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
