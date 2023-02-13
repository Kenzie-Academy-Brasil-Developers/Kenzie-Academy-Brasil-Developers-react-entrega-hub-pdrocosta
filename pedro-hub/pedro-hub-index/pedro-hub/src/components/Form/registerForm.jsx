import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import Input from "../Input/input";
import { registerFormSchema } from "./registerFormSchema";

const FormInputs = ({ registerUser }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(registerFormSchema),
  });

  const inputs = (formInput) => {
    registerUser(formInput);
    console.log(formInput);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(inputs)}>
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
      <select name="course_module" id="" {...register("course_module")}>
        <option value="Primeiro modulo">Primeiro Modulo</option>
        <option value="Segundo modulo">Segundo modulo</option>
        <option value="Terceiro modulo">Terceiro modulo</option>
      </select>
      <button>Cadastrar</button>
    </form>
  );
};
export default FormInputs;
