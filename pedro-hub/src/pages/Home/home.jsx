import { useEffect, useState } from "react";
import Header from "../../components/Header/header";
import StyledHome from "../../styles/styleHome";


const Dashboard = ({ getUser, user, userLogout }) => {

  useEffect(() => {
    getUser(localStorage.getItem("@USERID:"));
  }, []);

  return (
    <>
      {user ? (
        <>
          <Header trueButton={true} text="Logout" userLogout={userLogout} />

          <StyledHome>
            <div className="div_userInfos">
              <p className="p_user">Hello, {user.name}.</p>
              <p className="p_course"> {user.course_module}</p>
            </div>
            <div className="div_mainteance">
              <h3>I`m sorry, we`re currently in maintenance. `</h3>
              <p>Our application is in development. We`ll soon have news. `</p>
            </div>
          </StyledHome>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};
export default Dashboard;
