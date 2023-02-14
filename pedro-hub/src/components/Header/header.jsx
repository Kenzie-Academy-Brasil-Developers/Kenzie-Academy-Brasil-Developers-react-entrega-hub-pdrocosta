import React, { useState } from "react";
import { useNavigate } from "react-router";
import StyledHeader from "../../styles/styleHeader";

const Header = ({ trueButton, text, userLogout }) => {

  const navigate =  useNavigate()
  return (
    <>
      <StyledHeader trueButton={trueButton}>
        <h2 onClick={()=> navigate("/")}>Pedro Hub</h2>
        {trueButton ? <button onClick={userLogout}>{text}</button> : <></>}
      </StyledHeader >
    </>
  );
};

export default Header;
