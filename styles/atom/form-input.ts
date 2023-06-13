import { styled } from "styled-components";
import { colors } from "../base/variables";
import { typography } from "../base/typography";

export const FormInput = styled.input`
    display: block;
    border-radius: 0.5rem;
    border: 0.0625rem solid ${colors["charcoal-grey"]};
    padding: 1rem 1.5rem;
    width: 100%;
    ${typography.desc};
    color: ${colors["dark-navy"]};

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