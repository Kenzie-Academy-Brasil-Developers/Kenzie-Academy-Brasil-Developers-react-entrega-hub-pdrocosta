import styled from "styled-components";

const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  background-color: var(--color-grey-4);
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 900px) {
    justify-content: flex-start;
    
  }
`;

export default StyledMain;
