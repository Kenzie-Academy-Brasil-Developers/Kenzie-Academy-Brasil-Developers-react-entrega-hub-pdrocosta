import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
export const RegisterContext = createContext({});

export const RegisterProvider = ({ children }) => {
  const navigate = useNavigate();
  const registerUser = async (formInputs) => {
    try {
      const response = await api.post("/users", formInputs)
      navigate("/");
    } catch (error) {
      alert(error);
    }
  };
 

  return (
    <RegisterContext.Provider value={{ registerUser}}>
      {children}
    </RegisterContext.Provider>
  );
};
export default RegisterProvider;
