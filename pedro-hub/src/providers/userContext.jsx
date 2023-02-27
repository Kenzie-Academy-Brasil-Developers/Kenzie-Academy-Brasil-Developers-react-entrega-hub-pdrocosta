import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
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
  const registerUser = async (formInputs) => {
    try {
      const response = await api.post("/users", formInputs);
      navigate("/");
    } catch (error) {
      alert(error);
    }
  };
  return (
    <UserContext.Provider
      value={{ loginUser, userData, setUserData, registerUser }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
