import styled from "styled-components";

const StyledHeader = 
  styled.header`
    display: flex;
    height: 15%;
    justify-content: center;
    align-items: center;
    flex-direction: row;
   
    
    h2 {
      display: flex;
      justify-content: center;
      margin-left: 5%;
      align-items: center;
      color: var(--color-primary);
    }
    button {
      background-color: var(--color-grey-2);
      width: 10%;
      height: 20%;
      border-radius: 6px;
      color: var(--color-grey-1);
      font-weight: 500;
      margin-right: 5%;
    }
  `;
/* const StyledHeader = ({ trueButton }) => {
    return (
      <Header
        style={{
          backgroundColor: trueButton ? "green" : "red"
        }}
      >
        {/* Your header content here */
     
export default StyledHeader;

/* ${
      ? `
   
    
    h2{
        width:20%;
    }
    
      `
      : `
      display: flex;
    height: 15%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h2{
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--color-primary);
    }
      `}*/
