import styled from "styled-components";

const StyledModal = styled.section`
position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  width: 100px;
  height: 500px;
  justify-content: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  
  background-color: 0 0 10px rgba(0, 0, 0, 0.5);
  & > section {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
`

export default StyledModal