import { InputProps } from "@/types";
import { FormInput} from "@/styles/atom/form-input";

const Input = ({ inputtype, name, id, placeholder, autocomplete, onBlur, errdisplay="none" }: InputProps) => {

  return (
    <FormInput 
        name={name} 
        id={id} 
        type={inputtype} 
        placeholder={placeholder}
        autoComplete={autocomplete}
        onBlur={onBlur}
        errdisplay={errdisplay}
      />
  );
};

export default Input;






