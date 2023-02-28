import { useContext } from "react";
import { TechContext } from "../../providers/techContext";
import StyledCardTech from "../../styles/styleCardTech";

const CardTech = ({ title, id, status }) => {
  const { deleteTech } = useContext(TechContext);
  return (
    <StyledCardTech>
      <p id="p_title">{title}</p>
      <p id="p_status">{status}</p>
      <button onClick={() => deleteTech(id)}>Remove Tech</button>
    </StyledCardTech>
  );
};

export default CardTech;
