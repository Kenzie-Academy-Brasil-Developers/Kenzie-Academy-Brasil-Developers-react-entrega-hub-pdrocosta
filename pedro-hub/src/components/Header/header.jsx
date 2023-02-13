import React, { useState } from "react";
import { useNavigate } from "react-router";
import StyledHeader from "../../styles/styleHeader";

const Header = ({ trueButton, text, userLogout }) => {
  return (
    <>
      <StyledHeader trueButton={trueButton}>
        <h2>Pedro Hub</h2>
        {trueButton ? <button onClick={userLogout}>{text}</button> : <></>}
      </StyledHeader >
    </>
  );
};

export default Header;
/* //     display: flex;
justify-content: center;
align-items: center;
color: var;
color: var(--color-primary); 
color: var(--color-primary); */
