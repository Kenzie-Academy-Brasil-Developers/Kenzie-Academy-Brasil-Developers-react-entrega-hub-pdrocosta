import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const [stateModal, setStateModal] = useState(false);
  const [userInfos, setUserInfos] = useState(null);
  const navigate = useNavigate();
  const [userData, setUserData] = useState([]);

  const openModal = () => {
    console.log("apertado");
    console.log(stateModal);
    setStateModal(true);
  };

  const createTech = async (techformInput) => {
    try {
      await api.post("/users/techs/", techformInput, {
        headers: { Authorization: `Bearer ${localStorage.getItem(`@Token:`)}` },
      });
      const response = await api.get(
        `/users/${localStorage.getItem(`@USERID:`)}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem(`@Token:`)}`,
          },
        }
      );
    
      setUserInfos(response.data);
      setStateModal(false);
    } catch (error) {
      console.error("Error creating tech:", error);
      alert(error);
    }
  };

  const deleteTech = async (techID) => {
    try {
      await api.delete(`/users/techs/${techID}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem(`@Token:`)}` },
      });
      const response = await api.get(
        `/users/${localStorage.getItem(`@USERID:`)}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem(`@Token:`)}`,
          },
        }
      );
 
      setUserInfos(response.data);
    } catch (error) {
      alert(error);
    }
  };
  async function getUser1() {
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
  useEffect(() => {}, [userInfos]);

  return (
    <TechContext.Provider
      value={{
        openModal,
        createTech,
        deleteTech,
        userLogout,
        getUser1,
        userData,
        setUserData,
        userInfos,
        setUserInfos,
        stateModal,
        setStateModal,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
export default TechProvider;
