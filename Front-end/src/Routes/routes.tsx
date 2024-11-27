import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Product from "../pages/Product";
import Checkout from "../pages/Checkout";
import PagProduct from "../pages/pagProduct";
import Admin from "../pages/Admin"; // tela de adminstrador
import AdminCategoryRegistration from "../pages/AdminCategoryRegistration"; // Tela de cadastro de categorias (Admin)
import AdminProductRegistration from "../pages/AdminProductRegistration"; // Tela de cadastro de produtos (Admin)
import UserPurchases from "../pages/UserPurchases"; // Tela de compras para usuários autenticados

// Rota privada para usuários autenticados
function PrivateRoute() {
  // Altere 'token' para outro nome menos óbvio (exemplo: 'session_key')
  const sessionKey = localStorage.getItem('session_key');

  if (sessionKey) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
}

// Rota privada para administradores
function PrivateRouteAdmin() {
  // Altere 'IsAdmin' para um nome menos óbvio (exemplo: 'admin_session')
  const adminSession = localStorage.getItem('admin_session');

  if (adminSession) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
}

export default function AppRoutes() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Rotas públicas */}
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="/compra" element={<Product />} />
        <Route path="/fechar-pedido" element={<Checkout />} />
        <Route path="/produtos" element={<PagProduct />} />
        <Route
          path="/adm/cadastro-category"
          element={<AdminCategoryRegistration />}
        />
        <Route
          path="/adm/cadastro-product"
          element={<AdminProductRegistration />}
        />
        <Route
          path="/adm"
          element={<Admin />}
        />

        {/* Rotas privadas para administradores */}
        <Route path="/adm/cadastro-product" element={<PrivateRouteAdmin />}>
        </Route>

        {/* Rotas privadas para usuários autenticados */}
        <Route path="/compras" element={<PrivateRoute />}>
          <Route path="/compras" element={<UserPurchases />} />
        </Route>
      </Routes>
    </Router>
  );
}
