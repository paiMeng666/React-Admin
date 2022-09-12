import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
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
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Admin />}>
          <Route path="home" element={<Home />}></Route>
          <Route path="category" element={<Category />}></Route>
          <Route path="product" element={<Product />}>
            <Route path="/product" element={<ProductHome />}></Route>
            <Route path="add" element={<AddProduct />}></Route>
            <Route path="detail" element={<ProductDetail />}></Route>
          </Route>
          <Route path="role" element={<Role />}></Route>
          <Route path="user" element={<User />}></Route>
          <Route path="charts/bar" element={<Bar />}></Route>
          <Route path="charts/line" element={<Line />}></Route>
          <Route path="charts/pie" element={<Pie />}></Route>
          <Route path="/" element={<Navigate to="home" />}></Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
