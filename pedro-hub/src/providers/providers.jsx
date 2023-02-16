import React from "react";
import HomeProvider from "./homeContext";
import LoginProvider from "./loginContext";
import RegisterProvider from "./registerContext";
import TechProvider from "./techContext";

const Providers = ({ children }) => {
  return (
    <RegisterProvider>
      <LoginProvider>
        <HomeProvider>
          <TechProvider>{children}</TechProvider>
        </HomeProvider>
      </LoginProvider>
    </RegisterProvider>
  );
};

export default Providers;
