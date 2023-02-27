import React from "react";
import TechProvider from "./techContext";
import UserProvider from "./userContext";

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <TechProvider>{children}</TechProvider>
    </UserProvider>
  );
};

export default Providers;
