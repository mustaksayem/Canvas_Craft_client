import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";

import { router } from "./routes/Routes.jsx";
import AuthContextProvider from "./Contex/AuthContextProvider.jsx";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
    <RouterProvider router={router} />
<Toaster></Toaster>
    </AuthContextProvider>
  </React.StrictMode>
);
