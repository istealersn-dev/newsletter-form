import { styled } from "styled-components";
import { colors } from "../base/variables";
import { typography } from "../base/typography";

export interface errInputProps {
    errdisplay: string
}

export const FormInput = styled.input<errInputProps>`
    display: block;
    border-radius: 0.5rem;
    border: 0.0625rem solid ${colors["charcoal-grey"]};
    padding: 1rem 1.5rem;
    width: 100%;
    max-width: 23.5rem;
    ${typography.desc};
    color: ${props => props.errdisplay === 'block' ? colors.tomato : colors["dark-navy"]};
    background-color: ${props => props.errdisplay === 'block' ? 'rgba(255, 97, 85, 0.15)' : 'white'};
    border-color: ${props => props.errdisplay === 'block' ? colors.tomato : colors["dark-navy"]};

    &:hover {
        cursor: pointer;
        border: 0.0625rem solid ${colors["dark-navy"]};
    }

    &:focus {
        border: 0.0625rem solid ${colors["dark-navy"]};
    }

    &::placeholder {
        color: ${colors["dark-navy"]}
        opacity: 0.5;
    }
`