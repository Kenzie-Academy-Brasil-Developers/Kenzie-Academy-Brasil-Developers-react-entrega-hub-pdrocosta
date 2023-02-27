import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const [stateModal, setStateModal] = useState(false);
  const [userInfos, setUserInfos] = useState(null);
  const navigate = useNavigate();
  const [ userData, setUserData ] = useState([]);

  const openModal = () => {
    console.log("apertado");
    console.log(stateModal);
    setStateModal(true);
  };

  const createTech = async (techformInput) => {
    try {
      const response = await api.post("/users/techs/", techformInput, {
        headers: { Authorization: `Bearer ${localStorage.getItem(`@Token:`)}` },
      });
      console.log("Tech created:", response.data);
      setUserInfos([...userInfos, response.data]);
    } catch (error) {
      console.error("Error creating tech:", error);
      alert(error);
    }
  };

  const deleteTech = async (techID) => {
    try {
      const response = await api.delete(`/users/techs/${techID}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem(`@Token:`)}` },
      });
      //toast("Confirmed");
      console.log("confirmed");
      setUserInfos(userInfos.filter((infos) => infos.id != techID));
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

  return (
    <TechContext.Provider
      value={{
        createTech,
        openModal,
        setStateModal,
        stateModal,
        deleteTech,
        userLogout,
        getUser1,
        userData,
        setUserData,
        userInfos,
        setUserInfos,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
export default TechProvider;
