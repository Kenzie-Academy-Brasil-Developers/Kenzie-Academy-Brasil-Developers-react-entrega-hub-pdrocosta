import React from "react";
import { Routes, Route, json } from "react-router-dom";

import Dashboard from "../components/Input/input";
import Login from "../pages/LoginInput/login";
import Register from "../pages/RegisterInput/register";
import api from "../services/api";
const AppRoutes = () => {
  const registerUser = async (formInput) => {
    delete formInput.confirmPassword;
    const formHandled = JSON.stringify(formInput);

    console.log(formInput, formHandled);
    try {
      const response = await api.post("/user", formHandled);
      console.log(response.data);
    } catch (error) {
      console.log(error, response);
    }
  };

  const loginUser = async (formInput) => {
    const formHandled = JSON.stringify(formInput);

    console.log( formHandled);
    try {
      const response = await api.post("/sessions", formHandled);
      console.log(response.data);
      alert(response.data.message);
    } catch (error) {
      alert(error.response.data.message);
    
    }
  };
  return (
    <Routes>
      <Route path="/" element={<Login loginUser={loginUser} />} />
      <Route
        path="/register"
        element={<Register registerUser={registerUser} />}
      />
      <Route path="/Home" element={<Dashboard />} />
      <Route path="*" element={<h1>Pagina nao encontrada </h1>} />
    </Routes>
  );
};

export default AppRoutes;
