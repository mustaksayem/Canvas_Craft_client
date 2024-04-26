import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import Error from "../pages/Error";
import Home from "../pages/Home";
import AllCrafts from "../pages/AllCrafts";
import AddCraftItem from "../pages/AddCraftItem";
import MyArtCraftList from "../pages/MyArtCraftList";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ProtectedRoute from "../utilitis/ProtectedRoute";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout></Mainlayout>,
      errorElement: <Error></Error>,
  
      children: [
        {
          path: "/",
          element:<Home></Home> ,
         
        },
        {
            path: "/allcrafts",
            element:<AllCrafts></AllCrafts> ,
            loader: () => fetch('http://localhost:5000/add')
           
          },
          {
            path: "/addcraftitem",
            element:<ProtectedRoute>
<AddCraftItem></AddCraftItem>
            </ProtectedRoute>
             ,
           
          },
          {
            path: "/myartcraftlist",
            element:<MyArtCraftList></MyArtCraftList> ,
           
          },
          {
            path: "/login",
            element:<LoginPage></LoginPage> ,
           
          },
          {
            path: "/registration",
            element:<RegisterPage></RegisterPage> ,
           
          },
        
      ],
    },
  ]);