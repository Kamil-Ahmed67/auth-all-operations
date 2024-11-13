import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Orders from "../components/Orders/Orders";
import PrivateRoute from "./PrivateRoute";
import Profile from "../components/Profile/Profile";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:"/",
            element:<Home/>
        },
        {
            path:"/login",
            element:<Login/>
        },
        {
            path:"/register",
            element:<Register/>
        },
        {
            path:"/orders",
            element:<PrivateRoute><Orders></Orders></PrivateRoute>
        },
        {
          path:"/profile",
          element:<PrivateRoute><Profile></Profile></PrivateRoute>
        }
      ]
    },
  ]);
  export default router;