import { Subscribe } from "@/styles/components/Subscribe";
import Input from "@/atom/Forms/FormInput";
import Button from "@/atom/Button";
import { SubscribeFormProps } from "@/types";
import { styled } from "styled-components";
import { useState } from "react";
import Label from "@/atom/Forms/FormLabel";

const FContainer = styled.div`
    max-width: 23.5rem;
    width: 100%;
`

const SubscribeForm = ({ labelProps, inputProps, buttonProps }: SubscribeFormProps) => {

    const { htmlfor, lvalue, display, text } = labelProps;
    const { inputtype, name, id, placeholder, autocomplete } = inputProps;
    const { btntype, label } = buttonProps;

    const [inputValue, setInputValue] = useState('') // Controls the input element
    const [disValue, setdisValue] = useState('') // Controls the display of error message
    const emailRegx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; // Email validation

    
    let errLabel = inputValue === '' ? display : disValue;

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const inputValue = e.target.value
        setInputValue(inputValue);
        setdisValue(emailRegx.test(inputValue) ? 'none' : 'block');
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log(inputValue,'\n',errLabel)
        if (inputValue === '') {
            errLabel = "block"

            console.log(inputValue,'\n',errLabel)
        }

        console.log(`This seem to work - ${inputValue}`)
        setInputValue('')
    }

    return (
        <Subscribe onSubmit={handleSubmit}>
            <FContainer>
                <Label 
                    htmlfor={htmlfor} 
                    lvalue={lvalue} 
                    display={errLabel}
                    text={text} />
                <Input 
                    name={name} 
                    id={id} 
                    inputtype={inputtype}
                    placeholder={placeholder}
                    autocomplete={autocomplete}
                    onBlur={handleBlur}
                    errdisplay={errLabel}
                />
            </FContainer>
            <Button btntype={btntype} label={label} />
        </Subscribe>
    )
}

export default SubscribeForm;