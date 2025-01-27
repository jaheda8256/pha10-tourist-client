import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/Router.jsx'
import FirebaseProvider from './FirebaseProvider/FirebaseProvider.jsx'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 
  <FirebaseProvider>
  <RouterProvider router={router}></RouterProvider>
  </FirebaseProvider>
  <ToastContainer></ToastContainer>
  </React.StrictMode>,
)
