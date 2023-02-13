import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import Header from "../Header/header";
import Input from "../Input/input";
import { loginFormSchema } from "./loginFormSchema";

const LoginFormInputs = ({ loginUser }) => {
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
    console.log(loginformInput);
    reset();
  };
  return (
    <Header>
      <styledLoginForm>
        <form onSubmit={handleSubmit(loginInputs)}>
          <label htmlFor="form">Login</label>
          <div>
            <Input
              type="text"
              placeholder="Type your email"
              label="Email"
              error={errors.email}
              register={register("email")}
            />
          </div>
          <div>
            <Input
              type="password"
              placeholder="Type your password"
              label="password"
              error={errors.password}
              register={register("password")}
            />
          </div>
          <button type="submit" className="btn_submit">
            Submit
          </button>
        </form>
        <div className="div_Cadastro">
          <p>Aiunda nao possui uma conta?</p>
          <Link to="/register">
            <button className="btn_cadastrar">Cadastre-se</button>
          </Link>
        </div>
      </styledLoginForm>
    </Header>
  );
};

export default LoginFormInputs;
