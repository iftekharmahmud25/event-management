import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/actualhome/Home";
import Login from "../Pages/Login/Login";
import SingUp from "../Pages/singup/SingUp";
import CardDetails from "../Pages/CardDetails/CardDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";


const router = createBrowserRouter([
     {
         path : "/",
         element : <MainLayout></MainLayout>,
         errorElement:<ErrorPage></ErrorPage>,

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
             },
             {  
                path: "/services/:id",
                element: <CardDetails></CardDetails>,
                loader : ()=> fetch('/services.json')
             }
         ]
     }
])


export default router;