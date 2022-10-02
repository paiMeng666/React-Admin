import {
  Navigate,
  useRoutes,
} from "react-router-dom";
import "./App.css";
import Login from "./pages/login/login";
import Admin from "./pages/admin/admin";
import NotFound from "./pages/notFound/notFound";
import Home from "./pages/home/home";
import Category from "./pages/category/category";
import Product from "./pages/product/product";
import Role from "./pages/role/role";
import User from "./pages/user/user";
import Bar from "./pages/charts/bar";
import Line from "./pages/charts/line";
import Pie from "./pages/charts/pie";
import AddProduct from "./pages/product/addProduct";
import ProductDetail from "./pages/product/productDetail";
import ProductHome from "./pages/product/productHome";
function App() {
  const element = useRoutes([
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "/",
      element: <Admin />,
      children: [
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "category",
          element: <Category />,
        },
        {
          path: "product",
          element: <Product />,
          children: [
            {
              path: "/product",
              element: <ProductHome />,
            },
            {
              path: "add",
              element: <AddProduct />,
            },
            {
              path: "detail",
              element: <ProductDetail />,
            },
          ],
        },
        {
          path: "role",
          element: <Role />,
        },
        {
          path: "user",
          element: <User />,
        },
        {
          path: "charts/line",
          element: <Line />,
        },
        {
          path: "charts/bar",
          element: <Bar />,
        },
        {
          path: "charts/pie",
          element: <Pie />,
        },
        {
          path: "/",
          element: <Navigate to="home" />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return <div style={{ height: "100%" }}>{element}</div>;
}

export default App;
