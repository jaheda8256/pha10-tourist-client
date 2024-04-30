import { createBrowserRouter } from "react-router-dom";



import Home from "../page/Home/Home";
import Login from "../page/Login/Login";
import Register from "../page/Register/Register";
import Root from "../layouts/Root";
import About from "../components/About/About";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import AddTouristSpot from "../components/AddTourstSpot";
import AllTouristsSpot from "../page/AllTouristsSpot/AllTouristsSpot";
import Details from "../page/Details/Details";
import MyList from "../components/MyList/MyList";
import Update from "../page/Update/Update";


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
            path: '/details/:id',
            element: <Details></Details>,  
            loader: ({params}) => fetch(`http://localhost:5000/tourists/${params.id}`)
        },
        {
            path: '/addTourists',
            element: <PrivateRoute>
                <AddTouristSpot></AddTouristSpot>
            </PrivateRoute>,
        },
        {
            path: '/allTourists',
            element: <AllTouristsSpot></AllTouristsSpot>,
            loader: () => fetch('http://localhost:5000/tourists')
        },

        {
            path: '/myList',
            element:<PrivateRoute>
              <MyList></MyList>
            </PrivateRoute>,
            loader: () => fetch('http://localhost:5000/tourists')
        },
        {
          path: '/update/:id',
          element:<PrivateRoute>
             <Update></Update>
          </PrivateRoute>,
           loader: ({params}) => fetch(`http://localhost:5000/tourists/${params.id}`)
        }
        
      ]
    },
  ]);
  export default router;