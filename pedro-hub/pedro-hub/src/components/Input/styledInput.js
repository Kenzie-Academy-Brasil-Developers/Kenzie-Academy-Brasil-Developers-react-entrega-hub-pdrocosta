import styled from "styled-components";

const StyledInput = styled.fieldset`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 30%;
  input {
    height: 30%;
  }
  p{
    font-size: 1rem;
    font-style: bold;
    font-weight: 600;
    padding-bottom: 16px;
    color: var(--color-grey-1);
  }
  input{
    border-radius: 6px;
    background-color: var(--color-grey-2);
  }
  
`;

export default StyledInput;
