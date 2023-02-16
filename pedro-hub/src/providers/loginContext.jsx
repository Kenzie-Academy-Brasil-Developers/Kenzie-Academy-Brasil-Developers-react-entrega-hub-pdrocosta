import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export const LoginContext = createContext({});

export const LoginProvider = ({ children }) => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const loginUser = async (formInput1) => {
    try {
      const response = await api.post("/sessions", formInput1);
      localStorage.setItem(`@Token:`, response.data.token);
      localStorage.setItem(`@USERID:`, response.data.user.id);
      setUserData(response.data.user.token);

      navigate("/Home");
    } catch (error) {
      alert(error);
    }
  };
  return (
    <LoginContext.Provider value={{ loginUser, userData, setUserData }}>
      {children}
    </LoginContext.Provider>
  );
};
export default LoginProvider;
