import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { LoginContext } from "./loginContext";

export const HomeContext = createContext({});

export const HomeProvider = ({ children }) => {
  const [userInfos, setUserInfos] = useState(null);
  const navigate = useNavigate();
  const { userData, setUserData } = useContext(LoginContext);

  async function getUser() {
    try {
      const response = await api.get(
        `/users/${localStorage.getItem(`@USERID:`)}`
      );
      setUserInfos(response.data);
      console.log(userInfos);
    } catch (error) {
 
      navigate("/");
    }
  }
  async function userLogout() {
    localStorage.removeItem(`@USERID:`);
    localStorage.removeItem(`@Token:`);
    setUserData([]);
    setUserInfos([]);
    navigate("/");
  }
  useEffect(() => {
    async function autoLogin() {
      try {
        const response = await api.get(
          `/profile/${localStorage.getItem(`@Token:`)}`
        );
        setUserInfos(response.data.user);
        setUserData(response.data.user.id);
        console.log(userInfos, userData);
      } catch (error) {
        alert("Faca login");

        localStorage.clear();
        navigate("/");
      }
    }
  });

  return (
    <HomeContext.Provider
      value={{
        userLogout,
        getUser,
        userData,
        setUserData,
        userInfos,
        setUserInfos,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};
export default HomeProvider;
