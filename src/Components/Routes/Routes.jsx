import { createBrowserRouter } from "react-router";
import Home from "../../Pages/Home";
import Apps from "../../Pages/Apps";
import MainLayouts from "../../Layouts/MainLayouts";
import Installation from "../../Pages/Installation";
import ErrorPage from "../../Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/app",
        element: <Apps></Apps>
      },
      {
        path: "/install",
        element: <Installation></Installation>
      }
    ]
  },
 

]);

export default router