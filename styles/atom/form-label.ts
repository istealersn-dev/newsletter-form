import { styled } from "styled-components";
import { typography } from "../base/typography";
import { colors } from "../base/variables";

export const FormLabel = styled.label`
    display: block;
    color: ${colors["dark-navy"]};
`

export const LabelContainer = styled.div`
    display: flex;
    justify-content: space-between; 
    margin-bottom: 0.5rem;
    ${typography.label}
`

export interface ErrorMsgProps {
    display?: string
}

export const ErroMsg = styled.span<ErrorMsgProps>`
    display: ${({ display }) => display};
    color: ${colors.tomato};
`