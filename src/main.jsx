import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './Component/ErrorPage/ErrorPage';
import Root from './Root/Root';
import Home from './Pages/Home/Home';
import HomeDtls from './Pages/HomeDtls/HomeDtls';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './Provider/AuthProvider';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import PrivetRoute from './PrivetRoute/PrivetRoute';
import Updated from './Pages/Updated/Updated';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />, 
    children :[
      {
        path: "/",
        element: <Home></Home> 

      },
        
      {         
          path: '/SingleHome/:id',
          element:   <PrivetRoute> <HomeDtls></HomeDtls></PrivetRoute>,   
          loader :   ()=>fetch('/Home.json')
      },
      {
        path:"/login",
        element:  <Login></Login>
    },
    {
        path:"/register",
        element:   <Register></Register>
    },
    {
      path: "updated",
      element:      <PrivetRoute>
                     <Updated></Updated> 
                   </PrivetRoute>
    }
    ] 
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 

    <AuthProvider>
    <HelmetProvider>
      <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProvider>
    
  </React.StrictMode>,
)
