import { yupResolver } from "@hookform/resolvers/yup";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import Input from "../Input/input";
import { registerFormSchema } from "./registerFormSchema";
import StyledRegisterForm from "../../styles/registerForm";
import { useNavigate } from "react-router";
import { UserContext } from "../../providers/userContext";

const FormInputs = ({}) => {
  const { registerUser } = useContext(UserContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerFormSchema),
  });
  const inputs = (formInput) => {
    registerUser(formInput);
    navigate("/");
  };
  return (
    <StyledRegisterForm>
      <form onSubmit={handleSubmit(inputs)}>
        <label htmlFor="form">Register</label>
        <Input
          label="Name"
          placeholder="Type your name"
          type="text"
          register={register("name")}
          error={errors.name}
        />
        <Input
          label="Email"
          placeholder="Type your email"
          type="email"
          register={register("email")}
          error={errors.email}
        />
        <Input
          label="Password"
          placeholder="Type your password"
          type="password"
          error={errors.password}
          register={register("password")}
        />

        <Input
          label="Confirmed Password"
          placeholder="Confirm your password"
          type="password"
          error={errors.confirmPassword}
          register={register("confirmPassword")}
        />

        <Input
          label="Bio"
          placeholder="Type your bio"
          error={errors.bio}
          type="text"
          register={register("bio")}
        />
        <Input
          label="contact"
          error={errors.name}
          placeholder="Type your contact"
          type="text"
          register={register("contact")}
        />
        <p>Select a module</p>
        <select name="course_module" id="" {...register("course_module")}>
          <option value="First Module">First Module</option>
          <option value="Second module">Second module</option>
          <option value="Third module">Third module</option>
        </select>

        <button id="btn_register">Register</button>
      </form>
    </StyledRegisterForm>
  );
};
export default FormInputs;
