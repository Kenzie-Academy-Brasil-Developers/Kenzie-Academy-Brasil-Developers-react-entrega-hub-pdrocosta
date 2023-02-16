import { yupResolver } from "@hookform/resolvers/yup";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { LoginContext } from "../../providers/loginContext";
import StyledLoginForm from "../../styles/loginForm";
import Input from "../Input/input";
import { loginFormSchema } from "./loginFormSchema";


const LoginFormInputs = ({}) => {
  const { loginUser } = useContext(LoginContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(loginFormSchema),
  });

  const loginInputs = (loginformInput) => {
    loginUser(loginformInput);
    reset();
  };
  return (
    <>
      <StyledLoginForm>
        <form onSubmit={handleSubmit(loginInputs)}>
          <label htmlFor="form">Login</label>

          <Input
            type="text"
            placeholder="Type your email"
            label="Email"
            error={errors.email}
            register={register("email")}
          />

          <Input
            type="password"
            placeholder="Type your password."
            label="Password"
            error={errors.password}
            register={register("password")}
          />

          <button type="submit" className="btn_submit">
            Submit
          </button>
        </form>
        <div className="div_Cadastro">
          <p>Still doesn't have an account?</p>
          <Link to="/register">
            <button className="btn_cadastrar">Register</button>
          </Link>
        </div>
      </StyledLoginForm>
    </>
  );
};

export default LoginFormInputs;
