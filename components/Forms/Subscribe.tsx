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

const SubscribeForm = ({ labelProps, inputProps, buttonProps, setIsSubmitted }: SubscribeFormProps) => {

    const { htmlfor, lvalue, display, text } = labelProps;
    const { inputtype, name, id, placeholder, autocomplete } = inputProps;
    const { btntype, label } = buttonProps;

    const [inputValue, setInputValue] = useState('') // Controls the input element
    const [disValue, setdisValue] = useState('') // Controls the display of error message
    const emailRegx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; // Email validation

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const inputValue = e.target.value
        if (emailRegx.test(inputValue)) {
            setInputValue(inputValue);
            setdisValue('none')
        } else {
            setdisValue('block');
            setInputValue('');
        }
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if (emailRegx.test(inputValue)) {
            setIsSubmitted(true)
            setInputValue('')
        } else {
            setdisValue('block')
        }
    }

    let errLabel = inputValue === '' && disValue === 'block' ? disValue : display;

    return ( 
        <Subscribe onSubmit={handleSubmit}>
            <FContainer>
                <Label 
                    htmlfor={htmlfor} 
                    lvalue={lvalue} 
                    display={errLabel === 'none' ? 'none' : 'block'}
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