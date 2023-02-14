import FormInputs from "../../components/Form/registerForm";
import Header from "../../components/Header/header";
import StyledRegisterPage from "../../styles/styleRegister";

const Register = ({ registerUser }) => {
  return (
    <>
      <StyledRegisterPage>
        <Header trueButton={false} />
        <FormInputs registerUser={registerUser} />
      </StyledRegisterPage>
    </>
  );
};
export default Register;
