import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/actualhome/Home";
import Login from "../Pages/Login/Login";
import SingUp from "../Pages/singup/SingUp";







const router = createBrowserRouter([
     {
         path : "/",
         element : <MainLayout></MainLayout>,

         children : [
             {
                 path : "/",
                 element : <Home></Home>
             },
             {
                path: "/login",
                element: <Login></Login>
             },
             {
                path:"/signUp",
                element: <SingUp></SingUp>
             }
         ]
     }
])


export default router;