import { createBrowserRouter } from "react-router";
import Home from "../../Pages/Home";
import Apps from "../../Pages/Apps";
import MainLayouts from "../../Layouts/MainLayouts";
import Installation from "../../Pages/Installation";
import ErrorPage from "../../Pages/ErrorPage";
import ProductDetails from "../../Pages/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        Component: Home,
        loader: () => fetch('./data.json')
      },
      {
        path: "/app",
        element: <Apps></Apps>
      },
      {
        path: "/install",
        element: <Installation></Installation>
      },
      {
        path:'/product/:id',
        element: <ProductDetails></ProductDetails>
      },
    ]
  },
 

]);

export default router