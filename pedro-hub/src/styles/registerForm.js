import styled from "styled-components";

const StyledRegisterForm = styled.section`
  background-color: var(--color-grey-3);
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-items: center;
  align-content: center;
  border: none;
  border-radius: 3px;
  max-width: 500px;

  p {
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 15%;
    padding: 0px;
    padding-bottom: 10px;
    margin: 0px;
    width: auto;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: flex-start;
  }
  label {
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--color-grey-0);
    font-weight: 900;
    font-size: 1.5rem;
    margin-bottom: 3%;
    margin-top: 5%;
  }
  p {
    width: 100%;
    color: var(--color-grey-0);
    margin: 1%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 2%;
  }
  fieldset {
    border: none;
    input {
      padding: 2%;
      margin-bottom: 5%;
    }
  }

  #btn_register {
    width: 100%;
    background-color: var(--color-primary-Negative);
    padding: 1%;

    border-radius: 6px;
    color: var(--color-grey-0);
    font-weight: 800;
    margin-bottom: 12%;
    margin: 10%;
    height: 200px;

    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
  }
  select {
    width: 100%;
    height: 10%;
    border-radius: 4px;

    color: var(--color-grey-1);
    padding: 2%;
    background-color: var(--color-grey-2);
  }
  a {
    height: 5%;
    margin: 9%;
  }
  @media (max-width: 900px) {
    width: 90%;
    form {
      height: 100vh;
    }
    #btn_register {
      height: 100px;
    }
  }
`;
export default StyledRegisterForm;
