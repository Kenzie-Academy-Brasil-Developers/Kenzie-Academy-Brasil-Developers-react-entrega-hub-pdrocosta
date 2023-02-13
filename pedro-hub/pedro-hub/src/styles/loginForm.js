import styled from "styled-components";

const StyledLoginForm = styled.section`
  background-color: var(--color-grey-3);
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 50%;
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
  }
  fieldset {
    border: none;
   input{
    padding: 2%;
   }
  }
  .div_Cadastro {
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 20%;
    display: flex;
    margin-bottom: 10%;
    width: 70%;

    p {
      width: 100%;
      color: var(--color-grey-2);
      margin: 1%;
    }
  }
  .btn_submit {
    width: 100%;
    background-color: var(--color-primary);
    padding: 2%;
    height: 10%;
    border-radius: 6px;
    color: var(--color-grey-0);
    font-weight: 800;
  }
  .btn_cadastrar {
    width: 90%;
    background-color: var(--color-grey-1);
    padding: 2%;
    border-radius: 6px;
    color: var(--color-grey-0);
    font-weight: 800;
    font-size: 1rem;
    margin-bottom: 5%;
    width: 100%;
  }
`;
export default StyledLoginForm;
