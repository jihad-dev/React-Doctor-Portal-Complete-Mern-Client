import React from "react";

import "./App.css";
import { RouterProvider } from "react-router-dom";

import { Toaster } from "react-hot-toast";
import { router } from "./Routes/Routes";

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
