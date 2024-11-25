import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Product from "../pages/Product";
import Checkout from "../pages/Checkout";
import PagProduct from "../pages/pagProduct";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/compra" element={<Product />} />
        <Route path="/fechar-pedido" element={<Checkout />} />
        <Route path="/produtos" element={<PagProduct />} />
      </Routes>
    </Router>
  );
};
