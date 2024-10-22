import React from "react";
import { createBrowserRouter } from "react-router-dom";
import DetailPostPage from "./pages/DetailPostPage";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
    {
        path: "/home",
        element: <HomePage />
    },
    {
        path: "/detail/:id",
        element: <DetailPostPage />,
    },
]);

export default router;
