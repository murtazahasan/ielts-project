import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Contact, About, Home, Courses, Ilets } from "./components/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "courses",
        element: <Courses />,
      },
      {
        path: "contact",
        element: <Contact />,
      },

      {
        path: "/courses/Ielts",
        element: <Ilets />,
      },

      // // sub-courses ( sat )
      // {
      //   path: "",
      //   element: < />,
      // },
      // {
      //   path: "",
      //   element: < />,
      // },
      // {
      //   path: "",
      //   element: < />,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
