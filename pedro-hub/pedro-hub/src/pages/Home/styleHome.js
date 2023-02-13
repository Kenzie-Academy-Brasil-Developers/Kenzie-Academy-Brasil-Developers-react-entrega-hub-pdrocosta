import styled from "styled-components";

const StyledHome = styled.main`
  background-color: var(--color-grey-3);
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-items: center;
  align-content: center;
  border: none;
  border-radius: 3px;
  max-width: none;

.div_userInfos{
    height: 10%;
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    justify-content: space-between;
    border-bottom: 3px solid var(--color-grey-2);
    margin-bottom: 5%;
    border-top: 2px solid var(--color-grey-2);
}
.p_user
  {
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
    margin:5%;
   
  }
  .p_course{
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
    margin:5%;
  }
  h3{

  }
  .div_mainteance{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 80%;
    align-content: center;
    h3{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        height: 5%;
        color: var(--color-grey-1);
    }
    p{
        color: var(--color-grey-1);
    }
  }
`;
export default StyledHome;
