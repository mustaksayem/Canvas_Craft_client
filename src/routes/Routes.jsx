import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import Error from "../pages/Error";
import Home from "../pages/Home";
import AllCrafts from "../pages/AllCrafts";
import AddCraftItem from "../pages/AddCraftItem";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ProtectedRoute from "../utilitis/ProtectedRoute";
import MyCrafts from "../pages/MyCrafts";
import CraftsDetails from "../pages/CraftsDetails";
import Update from "../pages/Update";
import ArtCraftSection from "../pages/ArtCraftSection";
import CategoryDetails from "../pages/CategoryDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    errorElement: <Error />,

    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/allcrafts",
        element: <AllCrafts />,
        loader: () => fetch("https://canvas-crafts-hub-server.vercel.app/add")
      },
      {
        path: "/artCraft/:subcategory_Name",
        element: <ArtCraftSection></ArtCraftSection>,
      },
      
      {
        path: "/addcraftitem",
        element: (
          <ProtectedRoute>
            <AddCraftItem />
          </ProtectedRoute>
        )
      },

      {
        path: "/mycrafts",
        element: (
          <ProtectedRoute>
            <MyCrafts />
          </ProtectedRoute>
        )
      },
      {
        path: "/carftsDetails/:id",
        element: <CraftsDetails />
      },
      {
        path: "/categoryDetails/:id",
        element: <CategoryDetails />
      },
      {
        path: "/update/:id",
        element: (
          <ProtectedRoute>
            <Update />
          </ProtectedRoute>
        )
      },

      {
        path: "/login",
        element: <LoginPage />
      },
      {
        path: "/registration",
        element: <RegisterPage />
      }
    ]
  }
]);
