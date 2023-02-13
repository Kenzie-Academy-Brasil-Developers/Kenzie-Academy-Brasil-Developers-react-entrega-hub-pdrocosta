import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Dashboard from "../pages/Home/home";
import Login from "../pages/LoginInput/login";
import Register from "../pages/RegisterInput/register";
import api from "../services/api";
import { Navigate } from "react-router-dom";

const AppRoutes = () => {
  const [userData, setUserData] = useState(null);
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const registerUser = async (formInput) => {
    try {
      const response = await api.post("/users", formInput);
      console.log(response.data);
      navigate("/")
    } catch (error) {
      console.log(error, response);
    }
  };

  const loginUser = async (formInput1) => {
    console.log(formInput1);
    try {
      const response = await api.post("/sessions", formInput1);
      console.log(response.data);
      localStorage.setItem(`@Token:`, response.data.token);
      localStorage.setItem(`@USERID:`, response.data.user.id);

      setUserData(response.data.user.id);
      navigate("/Home")
    } catch (error) {}
  };

  async function getUser() {
    try {
      const response = await api.get(`/users/${userData}`);
      console.log(response.data);
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  async function userLogout() {
    localStorage.removeItem(`@USERID:`);
    localStorage.removeItem(`@Token:`);
    setUserData([])
    navigate("/")
  } 
  return (
    <Routes>
      <Route
        path="/"
        element={<Login loginUser={loginUser} getUser={getUser} />}
      />
      <Route
        path="/register"
        element={<Register registerUser={registerUser} />}
      />
      <Route
        path="/Home"
        element={
          <Dashboard getUser={getUser} userLogout={userLogout} userData={userData} user={user} />
        }
      />
      <Route path="*" element={<h1>Pagina nao encontrada </h1>} />
    </Routes>
  );
};

export default AppRoutes;
