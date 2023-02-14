import LoginFormInputs from "../../components/Form/loginForm";
import Header from "../../components/Header/header";
import StyledMain from "../../styles/loginStyled";


const Login = ({ loginUser, getUser}) => {
  return (
    <StyledMain>
      <Header trueButton={false}/>
      <LoginFormInputs loginUser={loginUser} getUser={getUser}/>
    </StyledMain>
  );
};
export default Login;
