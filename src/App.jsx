import { useState } from 'react'
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import DefaultRoute from "./Guards/DefaultRoute";
import UserLayout from "./Layout/UserLayout";
import AdminLayout from "./Layout/AdminLayout";
import UserDashboard from "./Pages/UserLayout/UserDashboard";
import MyBooking from "./Pages/UserLayout/MyBooking";
import UserEvent from "./Pages/UserLayout/UserEvent";
import Profile from "./Pages/UserLayout/Profile";
import AdminDashboard from "./Pages/AdminLayout/AdminDashboard";
import AdminEvent from "./Pages/AdminLayout/AdminEvent";
import Booking from "./Pages/AdminLayout/Booking";
import AuthGuard from "./Guards/AuthGuard";

function App() {
  const router = createBrowserRouter([
    { 
      path: "/login", 
      element: <AuthGuard requiredAuth={false} ><Login /></AuthGuard> 
    },
    { 
      path: "/register", 
      element: <Register /> 
    },
    { 
      path: "/", 
      element: <DefaultRoute /> 
    },

    // User routes
    {
      path: "user",
      element: <AuthGuard requiredAuth={true} allowedRoles={["USER"]}><UserLayout /></AuthGuard>,
      children: [
        { path: "UserDashboard", element: <UserDashboard /> },
        { path: "MyBooking", element: <MyBooking /> },
        { path: "UserEvent", element: <UserEvent /> },
        { path: "profile", element: <Profile /> }
      ]
    },

    // Admin routes
    {
      path: "admin",
      element: <AuthGuard requiredAuth={true} allowedRoles={["ADMIN"]}><AdminLayout /></AuthGuard>,
      children: [
        { path: "AdminDashboard", element: <AdminDashboard /> },
        { path: "Booking", element: <Booking /> },
        { path: "AdminEvent", element: <AdminEvent /> }
      ]
    }
  ]);

  

  return <RouterProvider router={router} />;
  
}

export default App;
