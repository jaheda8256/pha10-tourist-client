import { createBrowserRouter } from "react-router-dom";



import Home from "../page/Home/Home";
import Login from "../page/Login/Login";
import Register from "../page/Register/Register";
import Root from "../layouts/Root";
import About from "../components/About/About";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import AddTouristSpot from "../components/AddTourstSpot";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('http://localhost:5000/tourists')
        }, 
        {
          path: '/login',
          element: <Login></Login>,
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/about',
          element: <PrivateRoute>
            <About></About>
          </PrivateRoute>
        },
        {
            path: '/addTourists',
            element: <AddTouristSpot></AddTouristSpot>,
        }
        
      ]
    },
  ]);
  export default router;