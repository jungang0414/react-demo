import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import DashBoard from "./pages/DashBoard";
import Layout from "./Layout/Layout";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

import Employee from "./pages/Employee";
import TaiwanNew from "./pages/TaiwanNew";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/dashboard",
        element: <DashBoard />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/employee",
        element: <Employee />,
      },
      {
        path: "/taiwannew",
        element: <TaiwanNew />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
