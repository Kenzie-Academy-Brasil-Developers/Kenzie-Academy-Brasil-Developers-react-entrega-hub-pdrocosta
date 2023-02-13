import LoginFormInputs from "../../components/Form/loginForm";

const Login = ({ loginUser }) => {
  return (
    <main>
      <h1>Pedro Hub</h1>
      <LoginFormInputs loginUser={loginUser} />
    </main>
  );
};
export default Login;
