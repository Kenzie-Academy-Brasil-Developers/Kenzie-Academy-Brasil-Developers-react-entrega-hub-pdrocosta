import styled from "styled-components";

const StyledHome = styled.main`
  background-color: var(--color-grey-4);
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  justify-items: center;
  align-content: center;
  border: none;
  border-radius: 3px;
  max-width: none;
  .div_headerList {
    height: 5%;
    display: flex;
    align-items: center;
    h2 {
      color: var(--color-grey-1);
      margin-left: 10%;
      margin-top: 5%;
    }
  }
  .btn_add_tech {
    margin-top: 5%;
    margin-right: 5%;
    width: 5%;
    height: 80%;
    background-color: var(--color-grey-3);
    color: var(--color-grey-1);
    font-size: 1.1rem;
    align-self: center;
    display: flex;
    border: none;
    border-radius: 6px;
    justify-content: center;
    align-items: center;
    padding: 1%;
  }

  .div_userInfos {
    height: 10%;
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    justify-content: space-between;
    border-bottom: 3px solid var(--color-grey-2);
    margin-bottom: 0px;
    border-top: 2px solid var(--color-grey-2);
  }
  .p_user {
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 15%;
    padding: 0px;
    padding-bottom: 10px;
    margin: 0px;
    width: auto;
    color: var(--color-grey-0);
    margin: 10%;
  }
  .p_course {
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 15%;
    padding: 0px;
    padding-bottom: 10px;
    margin: 0px;
    width: auto;
    color: var(--color-grey-1);
    margin: 5%;
  }
  h3 {
  }
  .div_mainteance {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 80%;
    align-content: center;
    h3 {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      height: 5%;
      color: var(--color-grey-1);
    }
    p {
      color: var(--color-grey-1);
      display: flex;
      justify-content: center;
    }
  }
  @media (max-width: 900px) {
    border: none;
    justify-content: flex-start;
    .div_mainteance {
      display: none;
    }

    .p_user {
      margin: 5%;
    }
  }
`;
export default StyledHome;
