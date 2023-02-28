import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  height: 15%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: var(--color-grey-4);

  h2 {
    display: flex;
    justify-content: center;
    cursor: pointer;
    align-items: center;
    color: var(--color-primary);
  }
  h2:hover {
    color: var(--color-grey-1);
  }

  button {
    background-color: var(--color-grey-3);
    width: 10%;
    height: 20%;
    margin-left: 60%;
    border-radius: 6px;
    color: var(--color-grey-1);
    font-weight: 500;
    margin-right: 5%;
    padding: 1%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 900px) {
    align-content: center;
    border: none;
    button {
      margin: 3%;
      width: 40%;
    }
    h2 {
      justify-content: flex-start;
      margin: 5%;
    }
  }
`;

export default StyledHeader;
