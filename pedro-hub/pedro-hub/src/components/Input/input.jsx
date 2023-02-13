import StyledInput from "./styledInput";

const Input = ({ label, placeholder, type, register, error }) => {
  return (
    <StyledInput>
       <p>{label}</p>
      <input
        type={type}
   
        placeholder={placeholder}
        {...register}
      />
      {error && <p>{error.message}</p>}
    </StyledInput>
  );
};
export default Input;
