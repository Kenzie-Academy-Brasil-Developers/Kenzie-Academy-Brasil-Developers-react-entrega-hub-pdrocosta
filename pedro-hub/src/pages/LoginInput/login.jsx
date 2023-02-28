import LoginFormInputs from "../../components/Form/loginForm";
import Header from "../../components/Header/header";

import StyledMain from "../../styles/loginStyled";

const Login = () => {
  return (
    <StyledMain>
      <Header trueButton={false} />
      <LoginFormInputs />
    </StyledMain>
  );
};
export default Login;
