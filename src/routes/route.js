// routes.js
import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Profil from "../Pages/profil";

const routerConfig = [
  {
    path: "/profil/:id",
    element: (
      <>
        <Profil />
      </>
    ),
  },
];

export const router = createBrowserRouter(routerConfig);
