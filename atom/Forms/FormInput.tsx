import { InputProps } from "@/types";
import { FormInput } from "@/styles/atom/form-input";

const Input = ({ inputtype, name, id, placeholder }: InputProps) => {
  return (
    <FormInput name={name} id={id} type={inputtype} placeholder={placeholder} />
  );
};

export default Input;
