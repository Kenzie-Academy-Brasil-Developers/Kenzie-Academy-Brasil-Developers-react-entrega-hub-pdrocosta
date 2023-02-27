import styled from "styled-components";

const StyledCardTech = styled.li`
  border-radius: 5px;
  width: 90%;
  display: flex;
  height: 15%;
  flex-direction: row;
  justify-content: space-between;
  background-color: var(--color-grey-4);
  color: var(--color-grey-0);
  padding: 2%;
  margin-left: 10%;
  margin-right: 10%;
  align-items: center;
  #p_title {
    height: auto;
    width: 20%;
    font-size: 1.5rem;
    font-weight: 600;
  }
  #p_status{
    color: var(--color-grey1);
    
  }
  button{
    width: 20%;
    background-color: var(--color-grey-2);
    border: none;
    columns: var(--color-grey-1);
  }
`;

export default StyledCardTech;
