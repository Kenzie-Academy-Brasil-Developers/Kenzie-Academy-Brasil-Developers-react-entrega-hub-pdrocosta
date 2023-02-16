import { useContext } from "react";
import { HomeContext } from "../../providers/homeContext";
import StyledTechList from "../../styles/styleTechList";
import CardTech from "../Card/cardTech";

const TechList = () => {
  const { userInfos } = useContext(HomeContext);
  console.log(userInfos);
  return (
    <StyledTechList>
      {userInfos.techs.map((tech) => {
        return (
          <CardTech key={tech.id} title={tech.title} id={tech.id} status={tech.status} />
        );
      })}
    </StyledTechList>
  );
};

export default TechList;
