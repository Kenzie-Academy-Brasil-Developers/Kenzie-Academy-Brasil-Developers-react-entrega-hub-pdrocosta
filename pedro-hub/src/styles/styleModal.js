import styled from "styled-components";

const StyledModal = styled.section`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10%;
  width: 500px;
  height: 500px;
  border: none;
  section {
    background-color: var(--color-grey-2);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: center;
    align-items: center;
    width: 100%;
    padding: 0px;
    height: 100%;
    border-radius: 10px;
  }
  div {
    position: relative;
    height: 15%;
    width: 100%;
    background-color: var(--color-grey-1);
    color: var(--color-grey-0);
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    p {
      height: 10%;
      padding: 3%;
      font-weight: 800;
    }
  }
  .btn_closemodal {
    position: absolute;
    height: 10px;
    width: 10px;
    background-color: transparent;
    border: none;
    right: 5%;
    top: 24%;
    color: var(--color-grey-0);
  }
  form {
    height: 90%;
    display: flex;
    flex-direction: column;
    padding: 5%;
    width: 100%;
    position: relative;
    fieldset {
      border: none;
      width: 90%;
      padding-left: 5%;
      p {
        height: 15%;
      }
      input {
        padding: 2%;
        background-color: var(--color-grey-1);
        color: var(--color-grey-0);
        border: 1px white var(--color-grey-0);
        margin-top: 2%;
      }
    }
  }
  .p_choose {
    padding-top: 5%;
    padding-left: 5%;
    color: var(--color-grey-0);
    height: 15%;
  }
  select {
    width: 90%;
    padding: 2%;
    background-color: var(--color-grey-1);
    border: 1px solid var(--color-grey-0);
    height: 15%;
    border-radius: 8px;
    color: var(--color-grey-0);
    margin-left: 5%;
  }
  .btn_submit {
    width: 90%;
    background-color: var(--color-primary);
    padding: 2%;
    border-radius: 6px;
    color: var(--color-grey-0);
    font-weight: 800;
    font-size: 1rem;
    margin-bottom: 5%;
    margin-left: 5%;
    margin-top: 5%;
    height: 15%;
    border: none;
    z-index: 99;
  }
  @media (max-width: 900px) {
    width: 80%;
  }
`;

export default StyledModal;
