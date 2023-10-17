import { createBrowserRouter } from "react-router-dom";
import Main from "../../src/layout/Main";
import Home from "../../src/Pages/Home/Home/Home";
import Login from "../../src/Pages/Login/Login";
import Appointment from "../../src/Pages/Appointment/Appointment/Appointment";
import SignUp from "../../src/Pages/SignUp/SignUp";
import Dashboard from "../../src/Pages/Dashboard/Dashboard/Dashboard";
import PrivateRoute from "../../src/Routes/PrivateRoute/PrivateRoute";
import DashboardLayout from "../layout/DashboardLayout";
import MyAppointment from "../Pages/Dashboard/MyAppointment/MyAppointment";
import Allusers from "../Pages/Dashboard/Allusers/Allusers";
import AdminRoute from "./AdminRoute/AdminRoute";
import AddDoctor from "../Pages/Dashboard/AddDoctor/AddDoctor";
import ManageDoctors from "../Pages/Dashboard/ManageDoctors/ManageDoctors";
import Payment from "../Pages/Dashboard/Payment/Payment";
import DisplayError from "../Pages/Shered/DisplayError/DisplayError";
import About from "../Pages/About/About";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        errorElement:<DisplayError></DisplayError>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/appointment",
                element:<Appointment/>

            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/signUp",
                element:<SignUp/>
            },
          
        ],
       
      
     
    },
    {
      path:"/dashboard"  ,
      element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
      children:[
        {
            path:"/dashboard",
            element:<MyAppointment></MyAppointment>,
            errorElement:<DisplayError></DisplayError>
        },
        {
            path:"/dashboard/allusers",
            element:<AdminRoute><Allusers></Allusers></AdminRoute>
        },
        {
            path:"/dashboard/addDoctor",
            element:<AdminRoute><AddDoctor></AddDoctor></AdminRoute>
        },
        {
            path:"/dashboard/managedoctors",
            element:<AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>
        },
        {
            path:"/dashboard/payment/:id",
            element:<AdminRoute><Payment></Payment></AdminRoute>,
            loader:({params}) => fetch(`https://doctor-portal-server-mu.vercel.app/bookings/${params.id}`)
        },
      ]
    }
   
    
])