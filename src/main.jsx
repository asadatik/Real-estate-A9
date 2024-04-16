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
          element: <HomeDtls></HomeDtls>,
          loader :   ()=>fetch('/Home.json')
      
      }
    ] 
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
