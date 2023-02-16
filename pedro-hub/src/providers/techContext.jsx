import { createContext, useEffect, useState } from "react";

import api from "../services/api";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const [stateModal, setStateModal] = useState(false);

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
      //toast("Confirmed");
      console.log("confirmed");
    } catch (error) {
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
    } catch (error) {
      alert(error);
    }
  };

  return (
    <TechContext.Provider
      value={{ createTech, openModal, setStateModal, stateModal, deleteTech }}
      r
    >
      {children}
    </TechContext.Provider>
  );
};
export default TechProvider;
