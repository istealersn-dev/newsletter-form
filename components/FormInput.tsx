import { FormInput } from "@/styles/atom/form-input";

interface InputProps {
  type?: "email";
  name: string;
  id: string;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({ type, name, id, placeholder }) => {
  return (
    <FormInput name={name} id={id} type={type} placeholder={placeholder} />
  );
};

export default Input;
