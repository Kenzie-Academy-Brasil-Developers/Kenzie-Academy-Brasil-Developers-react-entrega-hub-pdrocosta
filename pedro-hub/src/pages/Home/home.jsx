import { useContext, useEffect, useState } from "react";
import Header from "../../components/Header/header";
import TechList from "../../components/TechList/techList";
import { HomeContext } from "../../providers/homeContext";
import StyledHome from "../../styles/styleHome";
import TechModal from "../../components/Modal/techModal";
import { TechContext } from "../../providers/techContext";


const Dashboard = ({}) => {
  const { getUser, userLogout, userInfos } = useContext(HomeContext);
  const { showModal3, openModal } = useContext(TechContext);


  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      {userInfos ? (
        <>
          <Header trueButton={true} text="Logout" userLogout={userLogout} />

          <StyledHome>
            <div className="div_userInfos">
              <p className="p_user">Hello, {userInfos.name}.</p>
              <p className="p_course"> {userInfos.course_module}</p>
            </div>
            <div className="div_headerList">
              <h2>Tecnologias</h2>
              <button onClick={()=>openModal()} className="btn_add_tech">
                +
              </button>
            </div>
         
            <TechList/>
            <TechModal/>
          </StyledHome>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};
export default Dashboard;
