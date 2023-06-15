import { Subscribe } from "@/styles/components/Subscribe";
import Label from "@/atom/Forms/FormLabel";
import Input from "@/atom/Forms/FormInput";
import Button from "@/atom/Button";
import { Container } from "@/styles/atom/container";
import { SubscribeFormProps } from "@/types";

const SubscribeForm = ({ labelProps, inputProps, buttonProps }: SubscribeFormProps) => {

    const { htmlfor, value } = labelProps;
    const { inputtype, name, id, placeholder } = inputProps;
    const { onClick, btntype, label } = buttonProps;

    return (
        <Subscribe>
            <Container width="100%">
            <Label htmlfor={htmlfor} value={value} />
            <Input name={name} id={id} inputtype={inputtype} placeholder={placeholder} />
            </Container>
            <Button onClick={onClick} btntype={btntype} label={label} />
        </Subscribe>
    )
}

export default SubscribeForm;