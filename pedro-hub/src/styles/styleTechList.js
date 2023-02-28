import styled from "styled-components";

const StyledTechList = styled.ul`
  height: 500px;
  margin: 100px;
  padding: 2%;
  height: auto;
  max-height: 60vh;
  width: 90%;
  border-radius: 5px;
  display: flex;
  background-color: var(--color-grey-3);
  flex-direction: column;
  align-items: center;
  gap: 5%;
  overflow-y: auto;
  overflow-x: hidden;
`;
export default StyledTechList;
