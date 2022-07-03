import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Carrinho from "../pages/cart";
import Home from "../pages/home";

export default function Rotas() {
  return (
    <Routes>
      <Route path="/pagina-inicial" element={<Home />} />
      <Route path="/cart" element={<Carrinho />} />
      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  );
}
