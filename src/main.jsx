import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from './component/Shop/Shop';
import Home from './component/Layout/Home';
import Orders from './component/Orders/Orders';
import Inventory from './component/Inventory/Inventory';
import Login from './component/Login/Login';
import cartProductsLoader from './Loaders/cartProductLoader';
import Checkout from './component/Checkout/Checkout';
import Signup from './component/Signup/Signup';
import AuthProvider from './component/AuthProvider/AuthProvider';
import PrivateRoutes from './component/routes/PrivateRoutes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Shop></Shop>
      },
      {
        path: 'orderPreview',
        element: <Orders></Orders>,
        loader: cartProductsLoader
      },
      {
        path: 'manageInventory',
        element: <Inventory></Inventory>
      },
      {
        path: 'checkout',
        element: <PrivateRoutes><Checkout></Checkout></PrivateRoutes>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signup',
        element: <Signup></Signup>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
);
