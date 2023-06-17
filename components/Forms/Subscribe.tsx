import { Subscribe } from "@/styles/components/Subscribe";
import Label from "@/atom/Forms/FormLabel";
import Input from "@/atom/Forms/FormInput";
import Button from "@/atom/Button";
import { SubscribeFormProps } from "@/types";
import { styled } from "styled-components";
import { typography } from "@/styles/base/typography";
import { colors } from "@/styles/base/variables";

const FContainer = styled.div`
    max-width: 23.5rem;
    width: 100%;
`

const ErrorMsg = styled.div`
    ${typography.label};
    color: ${colors.tomato};
`

const SubscribeForm = ({ labelProps, inputProps, buttonProps }: SubscribeFormProps) => {

    const { htmlfor, value } = labelProps;
    const { inputtype, name, id, placeholder } = inputProps;
    const { onClick, btntype, label } = buttonProps;


    return (
        <Subscribe>
            <FContainer>
            <Label htmlfor={htmlfor} value={value} />
            <Input 
                name={name} 
                id={id} 
                inputtype={inputtype} 
                placeholder={placeholder}
                />
            </FContainer>
            <Button onClick={onClick} btntype={btntype} label={label} />
        </Subscribe>
    )
}

export default SubscribeForm;