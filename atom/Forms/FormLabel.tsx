import { LabelProps } from "@/types";
import { ErroMsg, FormLabel, LabelContainer } from '@/styles/atom/form-label'

const Label = ({htmlfor, lvalue, display, text}: LabelProps) => {
    return (
        <LabelContainer>
            <FormLabel htmlFor={htmlfor}>{lvalue}</FormLabel>
            <ErroMsg display={display}>{text}</ErroMsg>
        </LabelContainer>
    )
}

export default Label;