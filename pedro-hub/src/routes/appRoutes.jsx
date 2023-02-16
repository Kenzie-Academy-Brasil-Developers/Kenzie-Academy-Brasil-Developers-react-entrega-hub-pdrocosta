import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Home/home";
import Login from "../pages/LoginInput/login";
import Register from "../pages/RegisterInput/register";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/Home" element={<Dashboard />} />
      <Route path="*" element={<h1>Pagina nao encontrada </h1>} />
    </Routes>
  );
};

export default AppRoutes;
